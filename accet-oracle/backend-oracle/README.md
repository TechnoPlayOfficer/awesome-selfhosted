# Backend Oracle — ACCET

## Purpose
Node.js/Express microservice — the brain of the Legal Oracle.

## Endpoints (OpenAPI spec at /docs)
| Method | Path | Description |
|---|---|---|
| GET | /health | Health check |
| POST | /api/v1/documents | Upload + CID generation |
| GET | /api/v1/documents/:cid/status | Document status |
| POST | /api/v1/documents/:cid/validate | Trigger Oracle FVM check |
| POST | /api/v1/documents/:cid/seal | Trigger Certicámara seal |
| POST | /api/v1/tokens/mint | Mint SBT/ERC-3643 |
| POST | /api/v1/tenants | Create tenant |
| GET | /api/v1/verify/:cid | Public verification (no auth) |

## Services
- `filecoin.js` — Lighthouse SDK: PDF → CID
- `oracle.js` — FVM interrogation (ethers.js)
- `certicamara.js` — State seal API bridge
- `erp-sync.js` — Odoo/Formance webhooks

## Start
```bash
cd backend-oracle && npm install && npm run dev
```
