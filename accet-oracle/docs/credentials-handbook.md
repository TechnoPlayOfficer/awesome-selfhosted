# 📖 ACCET Oracle: Credentials & Deployment Handbook

This guide provides a step-by-step walkthrough to acquire all necessary credentials and deploy the ACCET Legal Oracle to a production-ready state on the Base L2 network.

---

## 1. Acquiring Credentials (Step-by-Step)

### A. Storage Layer: Lighthouse (Filecoin)
1.  Visit [Lighthouse.storage](https://files.lighthouse.storage/).
2.  Login via GitHub or Email.
3.  Go to **API Keys** in the dashboard.
4.  Generate a new key and copy it to `LIGHTHOUSE_API_KEY` in `backend-oracle/.env`.

### B. Database & Auth: Supabase
1.  Go to your [Supabase Dashboard](https://supabase.com/dashboard).
2.  Select your project.
3.  Navigate to **Project Settings > API**.
4.  Copy the **Project URL**, **anon public**, and **service_role** keys to `backend-oracle/.env`.
5.  Navigate to **Settings > Database** to get the **Connection String** for `DATABASE_URL` and `DIRECT_URL`.

### C. Blockchain Layer: Base Sepolia (Testnet)
1.  **RPC Provider:** Go to [Alchemy](https://www.alchemy.com/) or [Quicknode](https://www.quicknode.com/) and create a free account.
2.  Create a new App on **Base Sepolia**.
3.  Copy the **HTTPS URL** to `BASE_RPC_URL` in both `.env` files.
4.  **Faucet (Gas):** Visit [Base Faucet](https://www.base.org/faucet) to get testnet ETH.

### D. Wallet Setup
1.  Create a dedicated development wallet (e.g., via MetaMask).
2.  **NEVER use your main personal wallet.**
3.  Export the **Private Key** and copy it to `PRIVATE_KEY` in `backend-oracle/.env` and `contracts/.env`.

---

## 2. Deploying Smart Contracts to Base Sepolia

Once you have your `PRIVATE_KEY` and `BASE_RPC_URL` in `contracts/.env`, follow these steps:

1.  **Navigate to the contracts folder:**
    ```bash
    cd accet-oracle/contracts
    ```
2.  **Compile the contracts:**
    ```bash
    npx hardhat compile
    ```
3.  **Deploy to Base Sepolia:**
    ```bash
    npx hardhat run scripts/deploy.js --network baseTestnet
    ```
4.  **Copy the Addresses:**
    After deployment, copy the contract addresses to `ORACLE_CONTRACT` and `COMPLIANCE_CONTRACT` in your backend `.env`.

---

## 3. Production & Integration (GoTrader)

### Financial Ledger & ERP
1.  **Formance Ledger:** Set `LEDGER_API_URL` to your ledger instance.
2.  **Odoo 19:** Set `ODOO_API_URL` and credentials to sync tokenized assets with institutional accounting.

### Operational Monitoring
*   **Oracle Heartbeat:** Automated hourly audit of Filecoin CIDs.
*   **Reconciliation:** Real-time parity check between Ledger and Odoo.
