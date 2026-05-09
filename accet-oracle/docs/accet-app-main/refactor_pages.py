import os
import re

def refactor_page(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Patrón para extraer el contenido central (usualmente dentro de <main> o lo que no es header/footer)
    # Buscamos el bloque <main>...</main>
    main_match = re.search(r'<main[^>]*>(.*?)</main>', content, re.DOTALL | re.IGNORECASE)
    
    if main_match:
        inner_content = main_match.group(1).strip()
        
        # Reconstruir el archivo mínimo
        new_content = f"""import Link from "next/link";

export default function Page() {{
  return (
    <div className="p-6">
      {inner_content}
    </div>
  );
}}
"""
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Refactorizado: {file_path}")
    else:
        print(f"No se encontró <main> en: {file_path}")

root_dir = r"c:\Users\DELL\Desktop\accet-app\accet-nextjs\src\app\(dashboard)"

for root, dirs, files in os.walk(root_dir):
    for file in files:
        if file == "page.tsx":
            refactor_page(os.path.join(root, file))
