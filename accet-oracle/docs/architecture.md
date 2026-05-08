# Architecture — ACCET Oracle

## The 4 Pillars

```
[POK/Tenant] → [Ingestion API] → [Filecoin/Lighthouse] → [CID]
                                        ↓
                              [FVM Oracle Contract]
                              (deterministic integrity check)
                                        ↓
                              [Certicámara API Bridge]
                              (certified e-signature on hash)
                                        ↓
                    [SBT mint on Base] / [ERC-3643 on Avalanche]
                    (EIP-4337 Paymaster = gasless for user)
                                        ↓
                         [Odoo/Formance Atomic Settlement]
                         (zero data drift between chain + ERP)
```

## Flow States
UPLOADED → ORACLE_VALIDATING → ORACLE_PASSED → CERTICAMARA_PENDING → SEALED → TOKEN_MINTED → LIVE

## Gas Model
- Minting: one-time cost (covered by Paymaster for academic)
- Verification: FREE (read-only)
- State change (revocation/transfer): on-demand only

## Legal Standards
- MLETR: cross-border electronic title recognition
- UCC Art. 12: possession = control of token
- ERC-3643: on-chain KYC/AML compliance
- EIP-5192: non-transferable Soulbound Token
