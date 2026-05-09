import os
import re

app_dir = r"c:\Users\DELL\Desktop\accet-app\accet-nextjs\src\app"

def fix_style(match):
    style_str = match.group(1)
    
    # Manejar el caso donde ya lo habíamos fixado a medias (backgroundImage: "url(...)")
    if "backgroundImage:" in style_str:
        return match.group(0) # No tocar

    parts = [p.strip() for p in style_str.split(';') if p.strip()]
    react_styles = []
    for p in parts:
        if ':' not in p: continue
        k, v = p.split(':', 1)
        k = k.strip()
        v = v.strip().replace('"', "'") # evitar conflictos de quotes
        
        # kebab-case a camelCase
        k = re.sub(r'-([a-z])', lambda m: m.group(1).upper(), k)
        react_styles.append(f'{k}: "{v}"')
        
    return f"style={{{{ {', '.join(react_styles)} }}}}"

count = 0
for root, dirs, files in os.walk(app_dir):
    for file in files:
        if file.endswith('.tsx'):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
                
            orig = content
            # Matches style={{ '...' }} or style={{ "..." }}
            content = re.sub(r'style=\{\{\s*[\'"](.*?)(?<!\\)[\'"]\s*\}\}', fix_style, content)
            
            if content != orig:
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(content)
                count += 1

print(f"Estilos JSX corregidos en {count} archivos.")
