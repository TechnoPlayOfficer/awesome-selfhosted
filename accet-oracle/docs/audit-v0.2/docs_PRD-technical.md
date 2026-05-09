# ACCET Oracle — PRD Técnico (Grant-ready)

## 1. Resumen ejecutivo
ACCET Oracle es la capa de verificabilidad legal para activos tokenizados y documentos institucionales. Objetivo: permitir upload -> persistencia (Filecoin) -> firma estatal -> mint/compliance on-chain (Base / ERC-3643) -> verificación pública gasless y reconciliación contable.

## 2. Alcance técnico
- Backend Oráculo (Node.js/Express): ingestion, upload a Lighthouse/Filecoin, orchestration de firma (Docuseal), gestión de estado, orquestación on‑chain (ethers.js).
- Contratos: ERC‑3643 compliant registry + SBTs/no-transfer ERC-5192 para títulos.
- Frontend: Next.js (landing, upload + firma, dashboard de holder, verificador público).
- Integraciones: Docuseal, Certicámara (oequivalente), Odoo/Formance, n8n para automatizaciones.
- Infra: Docker Compose (Postgres, Oráculo, Frontend, Docuseal, n8n), CI/CD y secreto en Vault.

## 3. Arquitectura (resumen)
- Frontend ↔ API Gateway (backend-oracle)
- Backend-oracle:
  - Upload service (multer) -> local / temp
  - Persistence service -> Postgres
  - Storage adapter -> Lighthouse SDK (Filecoin)
  - Oracle engine -> FVM/Filecoin checks & FVM/chain queries
  - On-chain adapter -> ethers.js -> ERC-3643 contract + SBT mint
  - Signature adapter -> Docuseal API and callback handlers
  - ERP adapter -> Odoo webhook sync / Formance ledger entries
- Contract layer -> contracts/ (Hardhat) -> deployed to Base testnet/mainnet
- Automation -> n8n flows, webhooks and alerting

## 4. API pública (endpoints clave)
- POST /api/v1/documents/upload {file, tenantId, metadata} -> {cid, documentId}
- GET  /api/v1/documents/:id/status -> {status, cid, txHash?, signedPdfUrl?}
- POST /api/v1/documents/:id/request-signature -> triggers Docuseal -> returns jobId
- POST /api/v1/onchain/mint (protected) {documentId, holderAddress} -> mints SBT/ERC-3643
- GET  /api/v1/verify/:cid -> {valid, sealed, txHash, compliance}
- GET  /api/v1/userDocuments?address=... -> list documents associated to wallet/user

## 5. Data model (altamente resumido)
- documents(id, tenant_id, filename, filepath, cid, status, signed_url, tx_hash, metadata, created_at, updated_at)
- tenants(id, name, config)
- users(id, email, wallet_address, kyc_status)
- transactions(id, document_id, tx_hash, network, type, created_at)

## 6. Workflows críticos
- Upload -> Lighthouse upload -> store CID -> persist -> request signature -> Docuseal callback -> mark signed -> mint SBT -> record tx.
- Verifier flow: scan QR -> /api/v1/verify/:cid -> backend checks DB, optionally queries chain -> returns read-only verification (no gas).
- Revocation: admin trigger or judicial event -> oracle validates -> sets document revoked -> issues on-chain update + ERP reconciliation.

## 7. Seguridad
- Secrets in Vault/CI secrets, never in repo.
- Auth: OAuth/email + wallet binding. Admin actions require RBAC.
- Input validation, mime checks, file-size limits, virus-scan (opcional).
- Rate-limit public verify endpoints.

## 8. Observabilidad & QA
- Health checks /health, metrics /metrics (Prometheus), logs structured (JSON), Sentry for exceptions.
- Unit tests (Jest), integration tests, E2E (Playwright).
- CI: lint → tests → build → staging deploy.

## 9. Acceptance Criteria (MVP Grant)
- Upload produce a real CID in Filecoin (Lighthouse).
- Signed PDF accessible and linked to document entry.
- Contract ERC‑3643 deployed to Base testnet and backend can mint/check compliance.
- Dashboard shows document state, signed pdf and tx hash.

## 10. Roadmap & milestones (alto nivel)
- M1 (2 wks): DB + Filecoin real upload + persist.
- M2 (3 wks): Docuseal integration + webhook.
- M3 (4 wks): ERC‑3643 contract, deploy testnet, mint full flow.
- M4 (2 wks): Dashboard polish + auth + QA + e2e.
- M5 (2 wks): Grant demo, docs y scripts reproducibles.

---