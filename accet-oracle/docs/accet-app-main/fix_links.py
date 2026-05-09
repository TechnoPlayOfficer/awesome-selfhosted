import os
import re

def fix_links(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Reemplazar <a ... href="..."> por <Link ... href="...">
    # Solo si el href empieza con / o # (rutas locales)
    new_content = re.sub(r'<a\s+([^>]*?)href="(/[a-zA-Z0-9/_.-]*?)"([^>]*?)>', r'<Link \1href="\2"\3>', content)
    new_content = re.sub(r'</a>', r'</Link>', new_content)
    
    # Asegurar que el import de Link existe si se hicieron cambios
    if '<Link' in new_content and 'import Link from "next/link"' not in new_content:
        new_content = 'import Link from "next/link";\n' + new_content

    if content != new_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Links corregidos: {file_path}")

root_dir = r"c:\Users\DELL\Desktop\accet-app\accet-nextjs\src\app"

for root, dirs, files in os.walk(root_dir):
    for file in files:
        if file.endswith(".tsx"):
            fix_links(os.path.join(root, file))
