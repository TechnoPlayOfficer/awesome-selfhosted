# BPV Generator Ecosystem (GoTrader · FBS · ACCET)

A high-performance, auditable ecosystem for managing **BPV (Bonos de Valor)**. This system integrates a double-entry ledger, an automated orchestration engine, and a NIIF 15 compliant ERP to ensure zero financial drift and total transparency.

## 🏗️ Architecture Overview

The system is built on four pillars:

1.  **Formance Ledger (C:\ledger-main)**: The financial heart. Uses double-entry accounting and Numscripts to manage immutable balances.
2.  **n8n Orchestrator (The "Sync Engine")**: Acts as the bridge. When a payment is received, n8n updates the Ledger and Odoo simultaneously.
3.  **Odoo 19 (C:\odoo-19.0)**: The source of truth for accounting, taxes (DIAN/Colombia), and official financial reporting.
4.  **Next.js Dashboard (C:\dashboard)**: Modern interface for users (wallet view) and admins (AUM, reconciliation metrics).

---

## 🚀 Installation & Setup

### Prerequisites
- **Docker & Docker Compose** (for Ledger, n8n, and PostgreSQL)
- **Node.js 18+** (for the Dashboard)
- **Python 3.10+** (for Odoo)
- **Go 1.26** (if running Ledger outside of Docker)

### 1. Start Infrastructure (Ledger + n8n + DB)
Navigate to the ledger directory and launch the services:
```bash
cd ledger-main
docker-compose up -d
```
*   **Ledger API**: `http://localhost:3068`
*   **n8n Panel**: `http://localhost:5678` (User: `admin` / Pass: `admin`)
*   **PostgreSQL**: `localhost:5432`

### 2. Set Up the Dashboard
Install dependencies and start the development server:
```bash
cd dashboard
npm install
npm run dev
```
*   **Access**: `http://localhost:3000`

### 3. Odoo Configuration
Follow the instructions in `odoo-19.0/README.md` to initialize the database and install the **Accounting** module with **Colombia Localization**.

---

## 📖 Usage Guide

### Admin Portal (`/admin`)
- **Monitor AUM**: View the total value of BPVs issued across all projects.
- **Reconciliation**: Check the real-time sync status between the Ledger pool and Odoo Account 2905.
- **User Oversight**: Search for wallets and audit transaction histories.

### User Portal (`/user`)
- **Check Balance**: Real-time view of BPV assets.
- **Purchase Packs**: Integrated checkout flow (via n8n) to buy new BPV credits.
- **History**: Detailed log of purchases and redemptions.

---

## 🛠️ Financial Logic (Numscripts)

The system uses atomic scripts located in `ledger-main/numscripts/`:
- `bpv_issue.num`: Handles the creation of BPVs upon payment.
- `bpv_redeem.num`: Recognizes revenue and reduces liability when a user spends BPVs.
- `bpv_breakage.num`: Automatically moves expired BPVs to the "Breakage Income" account.

---

## 📂 Documentation (QMS & PRD)

All detailed requirements and compliance documents are located in the `/docs` folder:
- **`BPV_Visual_Architecture.html`**: Interactive diagram of the sync engine.
- **`implementation-plan.md`**: The 16-week roadmap.
- **`prd-backend.md`**: Technical ledger specifications.
- **`qms-audit-126.md`**: 126 questions for ISO 9001 and financial audit.

---

## 🛡️ Security & Compliance
- **Idempotency**: Every transaction uses a unique key to prevent double-spending.
- **Auditability**: Every movement in the ledger is linked to a metadata hash.
- **NIIF 15**: Revenue is only recognized upon "Performance Obligation" (Redemption or Expiry).

---
**CTO/PM**: Oscar Rangel | **Version**: 1.0.0 | **Date**: April 2026
