# ACCET Oracle — Official PRD & Implementation Plan
**Version:** 1.0 | **Date:** 2026-05-08 | **Status:** Pre-Seed / Grant-Ready

## Executive Summary
ACCET is a **Legal Oracle Platform** that converts institutional documents (academic credentials, real-world assets) into **Legally Binding Digital Copies** with cryptographic immutability (Filecoin), state-level certification (Certicámara), and on-chain compliance (ERC-3643 / SBT on Base/Avalanche). The MVP pilots with **POK.tech** — 1,200 universities — as the first institutional tenant.

---

## Vision
Transform POK.tech's university network into the world's first **Computational Academic Notary**, injecting state trust (Certicámara) and perpetual memory (Filecoin) into every diploma issued — creating the global standard for legally-binding tokenized assets.

---

## Problem Statement
| Pain | Current State | ACCET Solution |
|---|---|---|
| Diploma fraud | PDFs forged easily | Filecoin CID immutability |
| Cross-border recognition | Manual apostille months | MLETR-compliant SBT |
| Gas friction | Users pay per verification | One-time mint, gasless reads |
| Legal vacuum | Tokens ≠ legal title | Certicámara seal + ERC-3643 |
| Data drift | Blockchain ≠ ERP | Odoo/Formance atomic settlement |

---

## Ultimate Architecture (4 Pillars)

```
┌──────────────────────────────────────────────────────────────────┐
│                      ACCET LEGAL ORACLE                          │
│                                                                  │
│  [1] PERMANENT MEMORY     [2] LEGAL ORACLE BRAIN                 │
│      Filecoin/Lighthouse       FVM interrogation engine          │
│      CID generation            Integrity validation              │
│      Data drift = ZERO         Event/trigger model               │
│                                                                  │
│  [3] STATE SEAL               [4] HIGH-SPEED RAIL                │
│      Certicámara API Bridge        Avalanche / Base (EVM)        │
│      Electronic signature          Sub-second finality           │
│      Hash injection                SBT (academic) / ERC-3643     │
│      Apostilla Computacional       (financial RWA)               │
└──────────────────────────────────────────────────────────────────┘
```

### Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js (ixartz boilerplate) + Space Grotesk + Glassmorphism |
| E-Signature | Docuseal (primary), Documenso (fallback), OpenSign |
| Backend Oracle | Node.js/Express microservices |
| Blockchain Storage | Filecoin via Lighthouse SDK |
| Execution Chain | Avalanche C-Chain + Base L2 |
| Compliance Token | ERC-3643 (RWA) / SBT EIP-5192 (Academic) |
| Account Abstraction | EIP-4337 Paymaster (keyless UX) |
| ERP/Ledger | Odoo + Formance (atomic reconciliation) |
| Identity/Auth | Keycloak SSO + on-chain KYC |
| Automation | n8n workflows |
| Design System | #020624 bg, #5AC4EE accent, Space Grotesk |

---

## User Archetypes & Key User Stories

### Archetype 1: POK Admin (Tenant)
- US-001: As POK Admin, I upload 1,000 diploma PDFs and each auto-generates an immutable CID in Filecoin
- US-002: As POK Admin, I trigger batch certification with a single "Certify Batch" button
- US-003: As POK Admin, I see per-diploma status: Grey=Uploaded → Yellow=Oracle Validated → Cyan=State Sealed
- US-004: As POK Admin, I integrate via REST API so my existing workflow is uninterrupted

### Archetype 2: Graduate (Holder)
- US-005: As Graduate, I access my diploma using only my email — no seed phrase
- US-006: As Graduate, I see the Certicámara state seal on my credential dashboard
- US-007: As Graduate, I download a PDF with embedded QR linking to on-chain proof
- US-008: As Graduate, my diploma remains valid even if POK or ACCET disappear (Filecoin sovereignty)

### Archetype 3: Verifier (Recruiter/Judge/Bank)
- US-009: As Verifier, I scan a QR and instantly see proof-of-existence + state seal — no account needed
- US-010: As Verifier, I pay zero gas to verify any credential
- US-011: As Verifier, I receive a compliance report confirming the credential meets UCC Art. 12 / MLETR

### Archetype 4: Casa de Bolsa (Financial Tenant — Phase 2)
- US-012: As Broker Operator, I upload 500 debt title PDFs and receive 500 individual ERC-3643 tokens
- US-013: As Broker Operator, the ERP balance updates atomically as each title is certified
- US-014: As Compliance Officer, I set KYC rules so tokens only transfer to accredited investors

### Archetype 5: Auditor
- US-015: As Auditor, Odoo/Formance reflects every blockchain event in real-time — zero data drift
- US-016: As Auditor, I trigger institutional revocation if fraud is detected (Oracle event model)

---

## Phase Roadmap

### Phase 1 — MVP Academic Oracle (POK Pilot)
> Target: Pre-Seed Demo + Base Grant Application

### Phase 2 — SaaS Multi-Tenant + Marketplace
> Casas de Bolsa, brokers, RWA tokenization

### Phase 3 — Global Liquidity Layer
> P2P marketplace, cross-border atomic settlement

---
## Scrum Implementation Plan — Hyper-Detailed Sprints

### Project Setup
- **Team:** 1 Tech Lead, 2 Backend Devs, 1 Frontend Dev, 1 Smart Contract Dev, 1 QA
- **Sprint Duration:** 2 weeks
- **Tools:** GitHub Projects, Notion, Figma, Discord

---

## EPIC 1: Foundation & Infrastructure (Sprints 1–2)

### Sprint 1 — DevOps & Repo Architecture (Weeks 1-2)

**Sprint Goal:** Monorepo scaffolded, CI/CD live, all vendor repos integrated, dev environment runnable in one command.

**Tasks:**
| ID | Task | Owner | Points | Acceptance Criteria |
|---|---|---|---|---|
| T-001 | Initialize accet-oracle monorepo structure | Tech Lead | 3 | All dirs created, .gitignore, root README |
| T-002 | Configure pnpm workspaces | Tech Lead | 2 | `pnpm install` works from root |
| T-003 | Set up GitHub Actions CI pipeline | Tech Lead | 5 | PRs trigger lint + test on push |
| T-004 | Configure Docker Compose dev stack | Backend Dev 1 | 8 | `docker-compose up` starts all services |
| T-005 | Integrate Docuseal vendor (self-hosted) | Backend Dev 2 | 5 | Docuseal running on :3010 |
| T-006 | Integrate Documenso vendor (fallback) | Backend Dev 2 | 3 | Documenso running on :3011 |
| T-007 | Scaffold Next.js frontend (ixartz boilerplate) | Frontend Dev | 5 | Dev server on :3000, ACCET branding applied |
| T-008 | Set up Odoo + Formance ledger stack | Backend Dev 1 | 8 | Odoo accessible, Formance API responding |
| T-009 | Configure environment variables & secrets vault | Tech Lead | 3 | .env.example documented |

**Definition of Done:** All services start with `docker-compose up`, CI green, env documented.

---

### Sprint 2 — Core Backend Scaffold (Weeks 3-4)

**Sprint Goal:** Oracle backend API skeleton live with health checks and mock endpoints.

**Tasks:**
| ID | Task | Owner | Points | Acceptance Criteria |
|---|---|---|---|---|
| T-010 | Scaffold Express.js Oracle backend | Backend Dev 1 | 5 | `GET /health` returns 200 |
| T-011 | Define OpenAPI 3.0 spec for all endpoints | Tech Lead | 5 | Swagger UI accessible at /docs |
| T-012 | Implement document upload endpoint (mock) | Backend Dev 2 | 5 | `POST /api/v1/documents` returns CID mock |
| T-013 | Implement document status endpoint | Backend Dev 2 | 3 | `GET /api/v1/documents/:cid/status` returns status enum |
| T-014 | Set up PostgreSQL schema (documents, tenants, tokens) | Backend Dev 1 | 8 | Migrations run via Prisma |
| T-015 | Implement tenant onboarding API | Backend Dev 1 | 5 | `POST /api/v1/tenants` creates tenant record |
| T-016 | JWT auth middleware | Backend Dev 2 | 5 | Protected endpoints return 401 without token |
| T-017 | Set up n8n automation server | Backend Dev 1 | 3 | n8n UI accessible, webhook trigger tested |
| T-018 | Unit tests for all scaffold endpoints | QA | 5 | 80%+ coverage on Oracle backend |

---

## EPIC 2: Filecoin Integration — Permanent Memory Layer (Sprint 3)

### Sprint 3 — Filecoin CID Engine (Weeks 5-6)

**Sprint Goal:** Upload a real PDF → get a real Filecoin CID via Lighthouse SDK.

**Tasks:**
| ID | Task | Owner | Points | Acceptance Criteria |
|---|---|---|---|---|
| T-019 | Integrate Lighthouse SDK (Filecoin) | Backend Dev 1 | 8 | SDK authenticates with API key |
| T-020 | Implement PDF chunking & CID generation service | Backend Dev 1 | 13 | PDF → CID returned in < 10s |
| T-021 | Store CID + metadata in PostgreSQL | Backend Dev 2 | 5 | Document record created with CID, timestamp, tenant_id |
| T-022 | Implement CID integrity verification | Backend Dev 1 | 8 | `verifyIntegrity(cid)` returns boolean |
| T-023 | Batch upload endpoint (up to 1,000 files) | Backend Dev 2 | 13 | Queue-based, reports per-file status |
| T-024 | Real-time progress WebSocket for batch | Frontend Dev | 8 | Frontend receives per-file status updates |
| T-025 | Write integration tests (Filecoin testnet) | QA | 8 | End-to-end: PDF → CID → verified |

**User Stories Covered:** US-001, US-002, US-003

---

## EPIC 3: Legal Oracle Brain — FVM Validation (Sprint 4)

### Sprint 4 — Oracle Logic & FVM Integration (Weeks 7-8)

**Sprint Goal:** Oracle can interrogate Filecoin FVM, validate CID integrity deterministically, and return pass/fail.

**Tasks:**
| ID | Task | Owner | Points | Acceptance Criteria |
|---|---|---|---|---|
| T-026 | Deploy Oracle smart contract on Filecoin testnet | SC Dev | 13 | Contract address verified on FVM explorer |
| T-027 | Implement deterministic CID interrogation algorithm | SC Dev | 13 | Oracle returns VALID/INVALID/DRIFT_DETECTED |
| T-028 | Event/trigger model: Oracle activates on transfer only | SC Dev | 8 | No gas on read-only queries |
| T-029 | Backend: call FVM Oracle from Node.js service | Backend Dev 1 | 8 | Ethers.js FVM call returns Oracle verdict |
| T-030 | Legal revocation trigger (institutional fraud path) | SC Dev | 8 | `revokeDocument(cid)` sets status=REVOKED on-chain |
| T-031 | Implement status enum: PENDING→VALIDATED→SEALED→REVOKED | Backend Dev 2 | 5 | Status transitions enforced |
| T-032 | Oracle verdict written back to PostgreSQL | Backend Dev 1 | 5 | DB record updated post-FVM call |
| T-033 | Test Oracle with tampered CID (drift detection) | QA | 8 | Returns DRIFT_DETECTED when file altered |

**User Stories Covered:** US-003, US-010, US-016

---

## EPIC 4: Certicámara API Bridge — State Seal (Sprint 5)

### Sprint 5 — Legal Seal Integration (Weeks 9-10)

**Sprint Goal:** Hash of transaction receives certified electronic signature from Certicámara API.

**Tasks:**
| ID | Task | Owner | Points | Acceptance Criteria |
|---|---|---|---|---|
| T-034 | Certicámara API authentication & sandbox setup | Backend Dev 1 | 8 | Sandbox token obtained, API responding |
| T-035 | Implement Hash-of-Network computation | Backend Dev 1 | 5 | SHA-256 of CID array computed |
| T-036 | POST hash to Certicámara for e-signature | Backend Dev 2 | 13 | Returns certified signature + timestamp |
| T-037 | Inject signature into token metadata | SC Dev | 8 | Token metadata includes certSignature field |
| T-038 | Store Certicámara response in PostgreSQL | Backend Dev 2 | 3 | certicamara_sig, certified_at columns populated |
| T-039 | Fallback: Docuseal signature if Certicámara unavailable | Backend Dev 2 | 8 | Fallback path tested and documented |
| T-040 | Update document status to SEALED on success | Backend Dev 1 | 3 | Status enum SEALED triggered correctly |
| T-041 | Integration test: full pipeline PDF→CID→Oracle→Seal | QA | 13 | End-to-end pipeline passes on staging |

**User Stories Covered:** US-006, US-007, US-011

---

## EPIC 5: Blockchain Token Emission (Sprint 6)

### Sprint 6 — SBT Minting on Base/Avalanche (Weeks 11-12)

**Sprint Goal:** Student receives Soulbound Token on Base/Avalanche with embedded legal metadata.

**Tasks:**
| ID | Task | Owner | Points | Acceptance Criteria |
|---|---|---|---|---|
| T-042 | Deploy SBT (EIP-5192) contract on Base testnet | SC Dev | 13 | Contract verified on BaseScan |
| T-043 | Deploy ERC-3643 compliance contract on Base | SC Dev | 13 | Identity registry + compliance module live |
| T-044 | Implement mint function with CID + certSig metadata | SC Dev | 8 | Token metadata contains all legal fields |
| T-045 | EIP-4337 Paymaster setup (gasless for graduates) | SC Dev | 13 | Graduate mints without paying gas |
| T-046 | Backend: trigger mint after SEALED status | Backend Dev 1 | 8 | n8n workflow: SEALED → mint → token_id stored |
| T-047 | Store token_id + tx_hash in PostgreSQL | Backend Dev 2 | 3 | Document record updated |
| T-048 | Implement KYC on-chain identity binding | SC Dev | 8 | Token only mintable to verified identity |
| T-049 | Multi-chain: replicate to Avalanche C-Chain | SC Dev | 8 | Same contract deployed on Avalanche testnet |
| T-050 | Test ERC-3643 transfer restrictions | QA | 8 | SBT cannot be transferred, only revoked |

**User Stories Covered:** US-005, US-008, US-012, US-013, US-014

---

## EPIC 6: Frontend Dashboard & UX (Sprint 7)

### Sprint 7 — Keyless Dashboard & Graduate Portal (Weeks 13-14)

**Sprint Goal:** Graduate logs in with email, sees legal credential with Certicámara seal, downloads certified PDF.

**Tasks:**
| ID | Task | Owner | Points | Acceptance Criteria |
|---|---|---|---|---|
| T-051 | Implement social login (magic link via email) | Frontend Dev | 8 | No seed phrase required |
| T-052 | Graduate credential dashboard (list view) | Frontend Dev | 8 | Shows token status, CID, seal status |
| T-053 | Oracle Live Status component (Idle→Binding→Sealed) | Frontend Dev | 5 | Pulsing cyan animation on active validation |
| T-054 | Drag & Drop uploader for Tenant Admin | Frontend Dev | 8 | 1,000-file batch with individual row status |
| T-055 | Verifier public QR page (no auth required) | Frontend Dev | 5 | Scan QR → proof page loads in < 2s |
| T-056 | Responsive design + Space Grotesk typography | Frontend Dev | 3 | Mobile-first, #020624/#5AC4EE branding |
| T-057 | Downloadable PDF with embedded QR | Frontend Dev | 8 | PDF contains on-chain proof URL |
| T-058 | Tenant Admin batch status dashboard | Frontend Dev | 8 | Collapsible rows, per-file light indicator |
| T-059 | Connect frontend to backend API | Frontend Dev | 5 | All endpoints wired, error states handled |

**User Stories Covered:** US-005, US-006, US-007, US-009, US-010

---

## EPIC 7: ERP Integration — Zero Data Drift (Sprint 8)

### Sprint 8 — Odoo/Formance Atomic Settlement (Weeks 15-16)

**Sprint Goal:** Every token event triggers real-time ledger update in Odoo/Formance — zero drift.

**Tasks:**
| ID | Task | Owner | Points | Acceptance Criteria |
|---|---|---|---|---|
| T-060 | Formance webhook: blockchain event → ledger entry | Backend Dev 1 | 13 | Token mint creates accounting entry |
| T-061 | Odoo module: asset status sync | Backend Dev 2 | 13 | Odoo shows VALIDATED/SEALED per document |
| T-062 | Atomic reconciliation engine | Backend Dev 1 | 13 | No transaction completes unless ERP confirms |
| T-063 | n8n orchestration: full pipeline automation | Backend Dev 2 | 8 | Upload → Oracle → Seal → Mint → ERP fully automated |
| T-064 | Audit trail: every state change logged | QA | 8 | Immutable event log in PostgreSQL |
| T-065 | Load test: 1,000 documents batch | QA | 8 | Pipeline completes < 60 min for 1,000 docs |
| T-066 | End-to-end staging demo | All | 13 | Full flow demoed to stakeholders |

**User Stories Covered:** US-015, US-016

---

## EPIC 8: Security, Hardening & Grant Readiness (Sprint 9)

### Sprint 9 — Pre-Launch Hardening (Weeks 17-18)

**Tasks:**
| ID | Task | Owner | Points | Acceptance Criteria |
|---|---|---|---|---|
| T-067 | Smart contract audit (internal + external) | SC Dev + QA | 21 | No critical vulnerabilities |
| T-068 | Penetration testing on API | QA | 13 | OWASP Top 10 addressed |
| T-069 | Rate limiting & DDoS protection | Backend Dev 1 | 5 | API gateway limits enforced |
| T-070 | GDPR/data privacy review | Tech Lead | 8 | PII handling documented |
| T-071 | Base Grant application package | Tech Lead | 5 | Deck, demo video, repo links submitted |
| T-072 | Public testnet demo deployed | All | 8 | Accessible URL for investor/grant review |

---

## Sprint Velocity Summary

| Sprint | Weeks | Epic | Story Points | Key Deliverable |
|---|---|---|---|---|
| 1 | 1-2 | Foundation | 47 | Monorepo + all vendors running |
| 2 | 3-4 | Scaffold | 49 | Oracle API skeleton live |
| 3 | 5-6 | Filecoin | 63 | PDF → real CID on Filecoin |
| 4 | 7-8 | FVM Oracle | 68 | Deterministic integrity validation |
| 5 | 9-10 | Certicámara | 63 | State seal on document hash |
| 6 | 11-12 | Tokens | 82 | SBT minted gasless on Base |
| 7 | 13-14 | Frontend | 58 | Graduate portal live |
| 8 | 15-16 | ERP | 76 | Atomic ERP settlement |
| 9 | 17-18 | Security | 80 | Audit + Grant submission |
| **Total** | **18 weeks** | | **586 pts** | **Production MVP** |

---

## Repo Architecture

```
accet-oracle/
├── README.md
├── docker-compose.yml
├── .gitignore
├── docs/
│   ├── PRD.md                    ← This file
│   ├── architecture.md
│   ├── roadmap.md
│   └── user-stories.md
├── backend-oracle/               ← Node.js/Express Oracle API
│   ├── src/
│   │   ├── index.js
│   │   ├── routes/
│   │   ├── services/
│   │   │   ├── filecoin.js       ← Lighthouse SDK
│   │   │   ├── certicamara.js    ← State seal bridge
│   │   │   ├── oracle.js         ← FVM interrogation
│   │   │   └── erp-sync.js       ← Odoo/Formance
│   │   └── models/
├── frontend-dashboard/           ← Next.js (ixartz boilerplate)
│   ├── src/
│   │   ├── pages/
│   │   │   ├── index.js          ← Landing page
│   │   │   ├── dashboard.js      ← Graduate portal
│   │   │   ├── admin.js          ← Tenant admin
│   │   │   ├── verify/[cid].js   ← Public verifier
│   │   │   └── firma.js          ← Signature flow
│   │   └── components/
├── contracts/                    ← Smart contracts
│   ├── src/
│   │   ├── AccetSBT.sol          ← Soulbound Token
│   │   ├── AccetERC3643.sol      ← Financial compliance
│   │   └── LegalOracle.sol       ← FVM Oracle
│   └── tests/
└── vendor/                       ← Cloned OSS repos
    ├── docuseal/
    ├── documenso/
    ├── opensign/
    └── next-boilerplate/
```

---

## Integration Matrix (OSS from awesome-selfhosted)

| OSS Tool | Role in ACCET | Integration Point |
|---|---|---|
| **Docuseal** | Primary e-signature engine | API bridge → Certicámara fallback |
| **Documenso** | Fallback e-signature | Failover when Docuseal unavailable |
| **OpenSign** | Lightweight verification widget | Embed in verifier QR page |
| **n8n** | Pipeline orchestration | Upload→Oracle→Seal→Mint→ERP |
| **Odoo** | ERP/backoffice backend | Atomic settlement receiver |
| **Keycloak** | SSO + KYC identity | Federated auth for all archetypes |
| **Metabase** | Analytics dashboard | Token issuance stats for POK admin |
| **Nextcloud** | Bulk document staging | Pre-upload document management |

---

## Definition of Ready (DoR) & Done (DoD)

**DoR:** User story has acceptance criteria, wireframe approved, API contract defined.

**DoD:** Code reviewed, tests passing (>80% coverage), deployed to staging, product owner accepted.

---

## Risks & Mitigations

| Risk | Probability | Impact | Mitigation |
|---|---|---|---|
| Certicámara API delays | High | Critical | Docuseal fallback path in Sprint 5 |
| FVM gas costs unexpected | Medium | High | Event-only Oracle model (T-028) |
| Base grant not awarded | Medium | Medium | Multi-chain (Avalanche) parallel path |
| Batch 1,000 docs timeout | Medium | High | Queue-based async processing (T-023) |
| Key man risk (SC Dev) | Low | Critical | Contract code reviewed by 2nd dev |
