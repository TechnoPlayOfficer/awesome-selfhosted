import os
import shutil

src_base = r"C:\Users\DELL\Desktop\accet-app\stitch_prd_accet_rwa_platform"
dest_base = r"C:\Users\DELL\Desktop\accet-app\mockup"

os.makedirs(dest_base, exist_ok=True)

mapping = {
    "landing_page_accet_rwa": "02",
    "registro_y_onboarding_accet": "04",
    "verificaci_n_kyc_subir_documento_accet": "05",
    "verificaci_n_kyc_prueba_de_vida_accet": "06",
    "verificaci_n_kyc_en_procesamiento_accet": "07",
    "verificaci_n_kyc_exitosa_accet": "08",
    "portal_del_propietario_simulador": "09",
    "owner_asset_portfolio_accet": "10",
    "marketplace_rwa_accet_1": "12",
    "marketplace_rwa_accet_2": "13",
    "marketplace_new_listing_skyline_tower_a": "14",
    "ficha_de_activo_torre_chic": "15",
    "inversi_n_suscripci_n_skyline_tower_a": "16",
    "inversi_n_exitosa_skyline_tower_a": "17",
    "investor_dashboard_accet": "18",
    "investor_dashboard_updated_portafolio_1": "19",
    "investor_dashboard_updated_portafolio_2": "20",
    "wallet_finance_center_accet": "21",
    "historial_de_transacciones_de_wallet_accet": "22",
    "configuraci_n_de_retiros_destino_usdc_accet": "23",
    "configuraci_n_de_retiros_autom_ticos_accet": "24",
    "configuraci_n_de_retiros_guardada_accet": "25",
    "user_settings_security_accet": "26",
    "admin_dashboard_operations_compliance": "28",
    "admin_asset_management_minting_accet": "29",
    "admin_live_asset_minting_accet": "30",
    "admin_minting_success_accet_1": "31",
    "admin_minting_success_accet_2": "32",
    "admin_dashboard_advanced_control_center": "33",
    "admin_dashboard_ltv_risk_alert_simulation": "34",
    "admin_dashboard_risk_mitigation_resolved": "35",
    "mitigation_transaction_history_accet": "36"
}

for root, dirs, files in os.walk(src_base):
    if "code.html" in files:
        folder_name = os.path.basename(root)
        if folder_name in mapping:
            num = mapping[folder_name]
            dest_name = f"{num}_{folder_name}.html"
            shutil.copy(os.path.join(root, "code.html"), os.path.join(dest_base, dest_name))

template = """<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title}</title>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
:root{{
  --sky:#5EC8F2; --ice:#5ED7F2; --teal:#377D8C;
  --light:#F2F2F2; --dark:#0D0D0D;
  --sky10:rgba(94,200,242,.10); --sky20:rgba(94,200,242,.20);
  --teal10:rgba(55,125,140,.10);
  --dark05:rgba(13,13,13,.05); --dark08:rgba(13,13,13,.08);
  --green:#15693A; --ltgrn:#D4EDDA;
  --red:#8B2020; --ltred:#FDECEA;
  --amber:#7A5C00; --ltamb:#FFF3CC;
  --rule:rgba(13,13,13,.08);
}}
*,*::before,*::after{{box-sizing:border-box;margin:0;padding:0}}
body{{
  font-family:'DM Sans',sans-serif;background:var(--light);color:var(--dark);
  background-image:linear-gradient(rgba(94,200,242,.05) 1px,transparent 1px),
                   linear-gradient(90deg,rgba(94,200,242,.05) 1px,transparent 1px);
  background-size:40px 40px;
}}
.pg{{max-width:1140px;margin:0 auto;padding:28px 20px 80px}}
.cover{{background:var(--dark);padding:48px 52px 44px;position:relative;overflow:hidden; border-bottom: 4px solid var(--sky)}}
.cov-eye{{font-family:'JetBrains Mono',monospace;font-size:12px;letter-spacing:3px;text-transform:uppercase;color:var(--sky);opacity:.65;margin-bottom:18px}}
.cov-h{{font-family:'Syne',sans-serif;font-size:clamp(44px,6vw,76px);font-weight:800;color:#fff;line-height:.95;letter-spacing:-2px}}
.cov-desc{{font-size:16px;color:rgba(255,255,255,.7);font-weight:300;max-width:800px;line-height:1.7;margin:24px 0 28px}}
.sec{{background:#fff;padding:40px 52px; margin-top: 4px; border-top: 3px solid var(--sky)}}
.sec-h{{font-family:'Syne',sans-serif;font-size:28px;font-weight:700;color:var(--dark);margin-bottom:20px;line-height:1.2}}
.body{{font-size:16px;color:#3A3A3A;line-height:1.72;font-weight:300; margin-bottom: 16px}}
</style>
</head>
<body>
<div class="pg">
  <div class="cover">
    <div class="cov-eye">{eyebrow}</div>
    <div class="cov-h">{headline}</div>
    <p class="cov-desc">{description}</p>
  </div>
  <div class="sec">
    <div class="sec-h">{section_title}</div>
    <p class="body">{content}</p>
    <p class="body">{content2}</p>
  </div>
</div>
</body>
</html>"""

narratives = [
    {
        "filename": "01_narrative_intro",
        "title": "Introducción · ACCET",
        "eyebrow": "Capítulo 1 · El Problema y la Solución",
        "headline": "ACCET<br>Real Estate<br>Tokenization",
        "description": "El puente entre el ladrillo ilíquido colombiano y el inversionista de capital digital. La primera plataforma de tokenización basada en modelo cooperativo en Colombia.",
        "section_title": "Desbloqueando la liquidez del ladrillo",
        "content": "La demanda de vivienda nueva ha caído y los propietarios tienen su capital atrapado en propiedades ilíquidas. Al mismo tiempo, el acceso a la inversión en bienes raíces es restrictivo (con mínimos de miles de dólares)",
        "content2": "Nuestra solución permite a los propietarios obtener hasta un 60% del LTV a tasas super competitivas (18% E.A.) y a los inversionistas colocar capital desde solo $100 USD, ganando rendimientos del 17% E.A. garantizados por bienes físicos (RWA) off-chain representados por ERC-3643 on-chain."
    },
    {
        "filename": "03_narrative_owner_journey",
        "title": "El Viaje del Propietario · ACCET",
        "eyebrow": "Capítulo 2 · Extracción de Capital",
        "headline": "Tokenizando<br>su inmueble",
        "description": "Una experiencia rápida, digital y respaldada por KYC estricto que transforma escrituras en liquidez bajo la Ley Colombiana.",
        "section_title": "De la puerta a la billetera en pocos clics",
        "content": "El portal del propietario guía a los dueños de inmuebles mediante un proceso automatizado con Jumio/Onfido. Una vez validada su identidad (Sarlaft/OFAC), el sistema realiza avalúos profesionales para garantizar que cumple con el 60% de LTV requerido.",
        "content2": "El siguiente flujo mostrará cómo un propietario se registra, pasa por KYC, y simula su desembolso antes de lanzar su inmueble al marketplace global."
    },
    {
        "filename": "11_narrative_investor_journey",
        "title": "El Viaje del Inversor · ACCET",
        "eyebrow": "Capítulo 3 · Capital Inteligente",
        "headline": "Invirtiendo en<br>Ladrillo Colombiano",
        "description": "Rentabilidad fija (17% E.A.) soportada por hipotecas verificables en Hedera, fraccionamiento sin fricción financiera.",
        "section_title": "Marketplace RWA y Billetera Digital",
        "content": "El Inversor descubre activos calificados y tokenizados que han cruzado todo el rigor de nuestro escrutinio legal. Con un clic puede adquirir fracciones desde $100 USDC y armar un portafolio de retorno alto diversificado.",
        "content2": "Un dashboard integrado en tiempo real le permite visualizar el crecimiento general y automatizar sus retiros mediante USDC, PSE, y Wires internacionales, minimizando la carga administrativa y maximizando su ROI."
    },
    {
        "filename": "27_narrative_admin_journey",
        "title": "El Viaje del Administrador · ACCET",
        "eyebrow": "Capítulo 4 · Control Absoluto",
        "headline": "Operaciones Internas<br>y Compliance",
        "description": "El sistema nervioso de la operación. De la auditoría al control de LTV mediante Formance y la red Hedera.",
        "section_title": "Gestión, Mitigación y Firma",
        "content": "Para el CEO, CFO, y Compliance, este panel centralizado garantiza control granular. Desde aquí se revisan las alertas sobre aumentos de riesgo por LTV y se autoriza la creación legal on-chain y minteo de la moneda.",
        "content2": "En este espacio se gestionan retiros masivos (batch) de distribuciones que se sincronizan perfectamente en los doble-ledgers, reportando automáticamente a la DIAN y asegurando 0 errores (Travel Rule GAFI listo)."
    },
    {
        "filename": "37_narrative_conclusion",
        "title": "Conclusión · ACCET",
        "eyebrow": "Epílogo · El Futuro RWA",
        "headline": "Un Sistema<br>Isomórfico",
        "description": "Gracias al enrutamiento dual-ledger, un control riguroso de onboarding y reportes SFC regulatorios automáticos.",
        "section_title": "EBITDA Positivo y Escalabilidad",
        "content": "Hemos visto cómo las piezas forman un modelo de negocio de rápida escala y altísimo Moat. La sincronía del equipo nos permite proyectar un EBITDA positivo desde H2-2026, convirtiendo el esfuerzo de desarrollo en pura utilidad.",
        "content2": "La meta a tres años proyecta MOIC sobre 8.5x para el inversor temprano, demostrando que al resolver el problema local profundo del ladrillo colombiano —se genera una empresa global masiva."
    }
]

for nar in narratives:
    html_content = template.format(**nar)
    with open(os.path.join(dest_base, f"{nar['filename']}.html"), "w", encoding="utf-8") as f:
        f.write(html_content)

print(f"Secuencia HTML compilada: 32 mockups y 5 páginas narrativas listos en C:\\Users\\DELL\\Desktop\\accet-app\\mockup")
