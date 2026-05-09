# 🏗️ ACCET Oracle: Deep Technical Architecture Blueprint

**Version:** 1.1 (Institutional Grade)  
**Status:** Audit-v0.2 Compliant  
**Focus:** VDA Pipeline, ERC-3643 Potential, and Zero-Drift Integrity

---

## 1. Executive Concept
ACCET Oracle is a **Decentralized Legal Layer** designed to provide cryptographic finality to real-world documents. It bridges the gap between static files (PDFs) and active blockchain assets (SBTs/ERC-3643).

### The Trinity of Certainty
1.  **Memory (Filecoin):** Long-term, immutable persistence via CID content-addressing.
2.  **Truth (Oracle):** Real-time interrogation of data state vs. legal status.
3.  **Law (Base L2):** On-chain binding via Soulbound Tokens and Compliance Registries.

---

## 2. Technical Stack & Orchestration

| Layer | Component | Technology | Role |
| :--- | :--- | :--- | :--- |
| **Frontend** | Tenant Admin | Next.js / Framer | VDA Pipeline visualization |
| **Backend** | Oracle Engine | Node.js / Express | Logic & Chain orchestration |
| **Persistence** | Metadata | Supabase / Prisma | Relational state & Auth |
| **Storage** | Asset Vault | Lighthouse (Filecoin) | Immutable content storage |
| **Blockchain** | Settlement | Base L2 / Hardhat | Compliance & Minting |

---

## 3. Data Architecture (Prisma Schema)
The system uses a strictly normalized schema to ensure multi-tenant security and asset traceability.

```prisma
model Document {
  id          String   @id @default(uuid())
  cid         String   @unique  // Filecoin Hash
  title       String
  size        Int?
  status      DocStatus @default(UPLOADED) // UPLOADED, SEALED, TOKEN_MINTED
  txHash      String?  // On-chain Proof
  tenant      Tenant   @relation(fields: [tenantId], references: [id])
  tenantId    String
  createdAt   DateTime @default(now())
}
```

---

## 4. The VDA Pipeline (State Machine)
Every document traverses a strictly defined legal forge:

1.  **INGESTION:** Symmetric hash generation and local buffering.
2.  **IMMUTABILIZATION:** Pushing to **Lighthouse**. Generation of immutable **CID**.
3.  **VALIDATION:** Oracle heartbeat check. Ensures data matches the hash and is retrievable.
4.  **SEALING:** Digital signature injection via Certicámara/Docuseal.
5.  **BINDING:** Minting of **EIP-5192 Soulbound Token** on Base, linking the CID to a wallet.

---

## 5. Security Protocols
*   **Zero-Drift Monitor:** The Oracle periodically queries the Filecoin network. If a CID is no longer pinned or its content changes (impossible via CID, but detects retrieval failure), the system flags the asset as "Non-Compliant."
*   **Identity Registry:** Built on the conceptual framework of **ERC-3643**, separating the *Identity* of the holder from the *Compliance* of the asset.
*   **Secret Management:** Institutional keys are stored in Supabase Vault / HSM, never in the application code.

---

## 6. API Infrastructure
*   `POST /api/v1/documents/upload`: The gateway for legal ingestion.
*   `GET  /api/v1/verify/:cid`: Public, gasless verification portal for third-party auditors.
*   `POST /api/v1/onchain/mint`: The bridge from the physical "Sealed" state to the digital "Law" state.
