import os
import re

app_dir = r"c:\Users\DELL\Desktop\accet-app\accet-nextjs\src\app"

def html_style_to_jsx(match):
    style_str = match.group(2)
    
    # Manejar background-image
    if "background-image:" in style_str:
        if "url(" in style_str:
            url = style_str.split("url(")[1].split(")")[0].strip("'\"")
            return f'style={{{{ backgroundImage: "url(\'{url}\')" }}}}'
            
    parts = [p.strip() for p in style_str.split(';') if p.strip()]
    react_styles = []
    for p in parts:
        if ':' not in p: continue
        k, v = p.split(':', 1)
        k = k.strip()
        v = v.strip().replace('"', "'")
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
            # Matches style="..." or style='...'
            content = re.sub(r'style=([\'"])(.*?)\1', html_style_to_jsx, content)
            
            if content != orig:
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(content)
                count += 1

print(f"Estilos rezagados HTML corregidos en {count} archivos.")
