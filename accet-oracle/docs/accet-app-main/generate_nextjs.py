import os
import re

mockup_dir = r"c:\Users\DELL\Desktop\accet-app\mockup"
next_src_app = r"c:\Users\DELL\Desktop\accet-app\accet-nextjs\src\app"

files = sorted([f for f in os.listdir(mockup_dir) if f.endswith('.html') and f.split('_')[0].isdigit()])

# Helper to html -> jsx conversion
def html_to_jsx(html_str):
    # Convert class= to className=
    jsx = re.sub(r'\bclass=', 'className=', html_str)
    # Convert for= to htmlFor=
    jsx = re.sub(r'\bfor=', 'htmlFor=', jsx)
    # Self close tags <img ...>, <input ...>, <br>, <hr>
    jsx = re.sub(r'<(img|input|br|hr)([^>]*?)(?<!/)>', r'<\1\2 />', jsx)
    # Fix style strings (style="...")
    def style_replacer(match):
        style_str = match.group(1)
        # very basic translation for things like style="background-image: url('...')"
        return f'style={{{{ {style_str!r} }}}}'
    jsx = re.sub(r'style="([^"]*)"', style_replacer, jsx)
    return jsx

# Map sequential filenames to logical Next.js Routes
routes_map = {
    '01': 'narrative/intro',
    '02': 'page', # root
    '03': 'narrative/owner',
    '04': 'owner/onboarding',
    '05': 'owner/kyc/doc',
    '06': 'owner/kyc/liveness',
    '07': 'owner/kyc/process',
    '08': 'owner/kyc/success',
    '09': 'owner/simulator',
    '10': 'owner/portfolio',
    '11': 'narrative/investor',
    '12': 'investor/marketplace',
    '13': 'investor/marketplace/filtered',
    '14': 'investor/property/skyline',
    '15': 'investor/property/chic',
    '16': 'investor/subscription',
    '17': 'investor/subscription/success',
    '18': 'investor/dashboard',
    '19': 'investor/dashboard/portafolio1',
    '20': 'investor/dashboard/portafolio2',
    '21': 'investor/wallet',
    '22': 'investor/wallet/history',
    '23': 'investor/settings/withdrawals/destination',
    '24': 'investor/settings/withdrawals/auto',
    '25': 'investor/settings/withdrawals/success',
    '26': 'investor/settings/security',
    '27': 'narrative/admin',
    '28': 'admin/dashboard',
    '29': 'admin/asset/minting',
    '30': 'admin/asset/minting/live',
    '31': 'admin/asset/minting/success1',
    '32': 'admin/asset/minting/success2',
    '33': 'admin/dashboard/control',
    '34': 'admin/dashboard/risk/ltv',
    '35': 'admin/dashboard/risk/resolved',
    '36': 'admin/risk/history',
    '37': 'narrative/conclusion',
}

def extract_body_content(html):
    # Try to extract elements inside <body> wrapping tags
    body_match = re.search(r'<body[^>]*>(.*)</body>', html, re.DOTALL | re.IGNORECASE)
    if body_match:
        content = body_match.group(1)
        # Remove scripts
        content = re.sub(r'<script\b[^>]*>(.*?)</script>', '', content, flags=re.DOTALL | re.IGNORECASE)
        # Remove the global nav that we injected earlier! We don't want it hardcoded in next.js
        content = re.sub(r'<!-- ACCET GLOBAL NAV -->.*', '', content, flags=re.DOTALL | re.IGNORECASE)
        # Fix missing closing tags for some inputs (basic sanitation)
        return html_to_jsx(content)
    return ""

def write_page(route_path, component_name, jsx_content):
    if route_path == 'page':
        dest_dir = next_src_app
        file_path = os.path.join(dest_dir, 'page.tsx')
    else:
        dest_dir = os.path.join(next_src_app, os.path.normpath(route_path))
        os.makedirs(dest_dir, exist_ok=True)
        file_path = os.path.join(dest_dir, 'page.tsx')
    
    # We create a simple functional component for each
    tsx = f'''import Link from "next/link";
export default function {component_name}() {{
  return (
    <>
      {{/* Contenido Auto-Transpilado */}}
      <div className="flex flex-col min-h-screen">
        {{/* Global Nav Inter-Journeys Injection Point */}}
        <div style={{{{ flex: 1 }}}}>
          {jsx_content}
        </div>
      </div>
    </>
  );
}}
'''
    with open(file_path, "w", encoding="utf-8") as out:
        out.write(tsx)

print("Iniciando transpilación...")
for f in files:
    key = f.split('_')[0]
    if key in routes_map:
        route = routes_map[key]
        comp_name = "Page" + key
        
        filepath = os.path.join(mockup_dir, f)
        with open(filepath, "r", encoding="utf-8", errors="ignore") as file_in:
            html = file_in.read()
            
        jsx = extract_body_content(html)
        write_page(route, comp_name, jsx)
        print(f"Transpilado {key} -> {route}/page.tsx")

print("Transpilación y Mapeo Completado!")
