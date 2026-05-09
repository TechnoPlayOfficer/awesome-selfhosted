# Backlog maestro — 126 User Stories (numeradas)

## BLOQUE 1: ONBOARDING & SEGURIDAD (1-18)
1. Como usuario, quiero registrarme por email para crear mi cuenta sin conocer claves cripto.
2. Como usuario, quiero vincular mi cuenta a una wallet (keyless/magic-link) para recibir SBTs.
3. Como admin, quiero crear tenants (POK, Casa de Bolsa) con quotas y configuración.
4. Como usuario, quiero comenzar un tour guiado la primera vez que entro al dashboard.
5. Como administrador, quiero poder asignar roles (admin, operator, verifier) a usuarios.
6. Como sistema, quiero enviar un email de verificación al registrarme.
7. Como operador, quiero ver el estado KYC de un usuario y solicitar su verificación.
8. Como usuario, quiero recuperar mi cuenta por correo si pierdo acceso.
9. Como sistema, quiero limitar el tamaño de los archivos y notificar al usuario si excede.
10. Como sistema, quiero bloquear endpoints sensibles tras repetidos intentos (rate limit).
11. Como desarrollador, quiero que las claves (RPC, API keys) no estén en el repo.
12. Como operador, quiero ver logs de autenticación para auditoría.
13. Como usuario, quiero ver mis sesiones activas y cerrar las que no reconozco.
14. Como admin, quiero configurar políticas de retención de documentos.
15. Como sistema, quiero encriptar documentos en repositorios en reposo.
16. Como auditor, quiero exportar actividad de usuario para compliance.
17. Como plataforma, quiero soporte SSO (SAML/OIDC) para universidades.
18. Como operador, quiero configurar relayers/paymasters para gasless UX.

## BLOQUE 2: TENANT CONSOLE - MÓDULO POK/CERTIFICACIÓN (19-45)
19. Como admin de POK, quiero arrastrar 1,000 PDFs y ver la cola de ingesta.
20. Como admin, quiero ver el progreso de cada upload y errores individualmente.
21. Como sistema, quiero dividir uploads masivos en batches y procesarlos en paralelo.
22. Como admin, quiero ver el resumen por lote (total, exitosos, fallidos).
23. Como sistema, quiero asignar tenantId y metadata al subir.
24. Como admin, quiero reintentar uploads fallidos desde UI.
25. Como admin, quiero cancelar un batch en curso.
26. Como admin, quiero descargar un reporte CSV del batch.
27. Como sistema, quiero generar CID real en Filecoin por cada documento.
28. Como admin, quiero ver el CID y enlace público para cada documento.
29. Como admin, quiero solicitar firma masiva a Docuseal desde el panel.
30. Como admin, quiero ver el estado de firma por documento (pending/complete/failed).
31. Como admin, quiero marcar un documento como invalidado si la universidad lo revoca.
32. Como sistema, quiero emitir webhook a Odoo cuando un documento sea sellado.
33. Como admin, quiero auditar cambios de estado con timestamp y autor.
34. Como admin, quiero asignar un título valor (si aplica) y fraccionarlo.
35. Como admin, quiero bloquear la emisión si la comprobación FVM falla.
36. Como sistema, quiero crear asiento contable en Formance/Odoo al mint.
37. Como admin, quiero configurar reglas de compliance por tenant.
38. Como admin, quiero etiquetar documentos (grado, certificado, contrato).
39. Como admin, quiero crear plantillas de metadata para distintos tipos de documentos.
40. Como admin, quiero importar metadata desde CSV antes del upload.
41. Como admin, quiero asociar cada documento a un folio legal/judicial si existe.
42. Como sistema, quiero validar duplicados (misma huella) en la ingesta.
43. Como operator, quiero programar ingestiones periódicas (cron).
44. Como admin, quiero ver coste estimado en storage y gas por batch.
45. Como tenant, quiero un dashboard de consumo (API quota, storage).

## BLOQUE 3: EL GEMELO DIGITAL & VAULT (46-72)
46. Como holder, quiero ver mi título como tarjeta en el vault.
47. Como holder, quiero descargar el PDF sellado con un click.
48. Como holder, quiero generar un QR de verificación para mi título.
49. Como holder, quiero enviar el QR a un empleador para verificación.
50. Como holder, quiero transferir metadatos (no transferir SBTs) a servicios de empleo.
51. Como sistema, quiero mostrar historia de auditoría del documento.
52. Como holder, quiero marcar un documento privado o público.
53. Como holder, quiero solicitar revocación al emisor en caso de fraude.
54. Como holder, quiero recibir notificaciones push/email cuando mi documento sea verificado por terceros.
55. Como holder, quiero ver la cadena de custodia del documento (upload → ship → mint).
56. Como holder, quiero delegar visibilidad temporal a terceros (employer).
57. Como holder, quiero vincular varios emails/wallets a mi cuenta personal.
58. Como system, quiero almacenar signedPDF con acceso seguro (signed URL).
59. Como holder, quiero ver el tx hash on-chain asociado a mi documento.
60. Como holder, quiero ver el compliance badge y su significado legal.
61. Como holder, quiero reportar disputa y ver estado del reclamo.
62. Como holder, quiero iniciar solicitud de apostilla computacional (si aplica).
63. Como holder, quiero exportar prueba completa (CID, tx, firma) en ZIP.
64. Como system, quiero rotación de claves para signed URLs.
65. Como holder, quiero historial de uso público/privado por mis documentos.
66. Como holder, quiero notificaciones cuando la expiración legal cambie.
67. Como system, quiero HSM/Key Management para guardar claves de firma (backend).
68. Como holder, quiero opciones de sharing con expiración para recruiters.
69. Como system, quiero integrar con wallets EIP‑4337 para keyless UX.
70. Como holder, quiero que una autoridad judicial pueda solicitar historial (transparencia).
71. Como holder, quiero ver el "gemelo contable" que vincula al ERP.
72. Como system, quiero versionado de documentos si se actualizan.

## BLOQUE 4: VERIFICACIÓN & FE PÚBLICA (73-90)
73. Como reclutador, quiero escanear QR y verificar en 3s sin pagar gas.
74. Como banco, quiero que el oráculo entregue la prueba de existencia (PoSt) si es necesario.
75. Como juez, quiero acceder a evidencia original y su huella en Filecoin.
76. Como verificador, quiero firma digital, CID y tx hash en una sola vista.
77. Como verificador, quiero opciones de descargar evidencia en formato admisible en juicio.
78. Como regulator, quiero un endpoint para auditorías masivas.
79. Como system, quiero rate limit y captchas si verify es público.
80. Como verificador, quiero ver si el documento fue revocado y por qué.
81. Como auditor, quiero dump de actividad por rango de fechas.
82. Como verificador, quiero recibir metadatos legales (emisor, fecha de emisión, autoridad).
83. Como system, quiero que la verificación sea reproducible (determinística).
84. Como verificador, quiero integración con Chainlink (si procede) para oráculos redundantes.
85. Como system, quiero firma timestampada por Certicámara (o ente) y enlazarla al tx.
86. Como verificador, quiero poder validar la identidad del firmante (DN) cuando aplique.
87. Como system, quiero logs forenses por cada verificación (IP, user-agent).
88. Como verificador, quiero verificar compliance ERC‑3643 (isVerified) mediante UI.
89. Como regulator, quiero que los datos agregados respeten privacidad (anonimizados).
90. Como system, quiero una API pública documentada (OpenAPI/Swagger).

## BLOQUE 5: MARKETPLACE & FRACCIONAMIENTO (91-108)
91. Como casa de bolsa, quiero conectar un activo maestro para tokenizar y fraccionar.
92. Como issuer, quiero definir número de fracciones y reglas (lockup, compliance).
93. Como inversor, quiero ver el gemelo legal de la fracción antes de comprar.
94. Como trader, quiero que cada order verifique existencia y compliance del activo.
95. Como marketplace, quiero liquidación atómica en la red soportada (Base).
96. Como system, quiero activar whitelist KYC para fracciones (ERC���3643).
97. Como operador, quiero suspender operativa de venta si hay disputa legal.
98. Como marketplace, quiero que los metadatos legales sean parte del token metadata.
99. Como inversor, quiero ver historiales de transferencias (on-chain) y su impacto legal.
100. Como casa de bolsa, quiero reconciliation widget entre ledger y on-chain.
101. Como comprador, quiero que la verificación sea gasless y instantánea.
102. Como marketplace, quiero auditoría de órdenes para el regulador.
103. Como system, quiero exigir un fideicomiso/patrimonio autónomo al tokenizar.
104. Como trader, quiero cancelar órdenes si el Oráculo marca inconsistencia.
105. Como system, quiero permitir bloqueo legal (freeze) por orden judicial.
106. Como marketplace, quiero emitir recibos contables automáticos al comprar fracciones.
107. Como investor, quiero una UI para solicitar KYC y ser añadido a whitelist.
108. Como operator, quiero métricas de liquidez y TVL por activo.

## BLOQUE 6: BLINDAJE JURÍDICO & FIDEICOMISO (109-118)
109. Como socio, quiero que el patrimonio autónomo administre activos en disputa.
110. Como counsel, quiero una herramienta de rollback controlado por reglas legales.
111. Como system, quiero registrar sentencias y atos legales que afecten documentos.
112. Como partner, quiero que un custodio legal sea parte de la emisión (multisig).
113. Como legal, quiero firma electrónica avanzada (eIDAS/MLR compatibles).
114. Como admin, quiero bloqueo automático por fraude académico detectado.
115. Como legal, quiero almacenar evidencia de revocación en Filecoin con sello.
116. Como partner, quiero flujos de arbitraje integrados con docuseal y registro.
117. Como system, quiero conservar chain of custody para auditoría legal.
118. Como legal, quiero exportar paquete probatorio listo para tribunal.

## BLOQUE 7: RECONCILIACIÓN & ERP (119-126)
119. Como auditor, quiero que Odoo refleje la emisión on‑chain (cero deriva).
120. Como CFO, quiero que cada mint genere asiento contable y control interno.
121. Como system, quiero reconciliar balances entre Formance ledger y la red.
122. Como accountant, quiero reportes fiscales con trails por transacción.
123. Como system, quiero alertas en caso de discrepancia contable.
124. Como operator, quiero dashboard de auditoría para contadores externos.
125. Como system, quiero exportar entradas contables automáticamente a Odoo.
126. Como auditor, quiero controles de integridad periódicos (cron) y reportes de cumplimiento.

---