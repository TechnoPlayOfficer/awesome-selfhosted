import os
import re

mockup_dir = r"c:\Users\DELL\Desktop\accet-app\mockup"
files = sorted([f for f in os.listdir(mockup_dir) if f.endswith('.html') and f.split('_')[0].isdigit()])

# 1. Build Index.html
index_html = """<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>ACCET · Prototipo Interactivo</title>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
<style>
:root {
  --sky:#5EC8F2; --teal:#377D8C; --light:#F2F2F2; --dark:#0D0D0D;
}
body { background: var(--dark); color: #fff; font-family: 'DM Sans', sans-serif; margin: 0; padding: 0; }
header { background: #000; padding: 40px 20px; border-bottom: 4px solid var(--sky); text-align: center; }
.container { max-width: 900px; margin: 40px auto; padding: 0 20px; }
h1 { font-family: 'Syne', sans-serif; font-size: 42px; color: var(--sky); margin-bottom: 10px; margin-top: 0; }
p { color: rgba(255,255,255,0.6); margin-bottom: 30px; font-size: 16px; text-align: center; }
.list { display: flex; flex-direction: column; gap: 10px; }
.item { background: rgba(255,255,255,0.05); padding: 15px 20px; border-radius: 8px; text-decoration: none; color: #fff; display: flex; align-items: center; border-left: 3px solid var(--sky); transition: 0.2s; }
.item:hover { background: rgba(94,200,242,0.1); border-color: var(--teal); transform: translateX(5px); }
.num { font-family: 'JetBrains Mono', monospace; color: var(--sky); font-size: 14px; font-weight: bold; width: 40px; }
.name { font-size: 15px; }
</style>
</head>
<body>
<header>
  <h1>ACCET Journey Index</h1>
  <p>Haga clic en cualquier paso para iniciar la navegación interactiva.</p>
</header>
<div class="container">
  <div class="list">
"""

for idx, f in enumerate(files):
    num = f.split('_')[0]
    name = f.replace(num + '_', '').replace('.html', '').replace('_', ' ').title()
    index_html += f'    <a href="{f}" class="item"><span class="num">{num}</span><span class="name">{name}</span></a>\n'

index_html += """  </div>
</div>
</body>
</html>"""

indexed_file_path = os.path.join(mockup_dir, "index.html")
with open(indexed_file_path, "w", encoding="utf-8") as idx_out:
    idx_out.write(index_html)

# 2. Inject Nav Bar
nav_template = """
<!-- ACCET GLOBAL NAV -->
<div id="accet-global-nav" style="position:fixed; bottom:0; left:0; right:0; background:rgba(13,13,13,0.95); backdrop-filter:blur(10px); color:#fff; font-family:'DM Sans',sans-serif; z-index:999999; display:flex; justify-content:space-between; align-items:center; padding:12px 24px; border-top:2px solid #5EC8F2; font-size:14px; box-shadow: 0 -4px 20px rgba(0,0,0,0.5);">
  <div style="display:flex; gap:15px; align-items:center;">
    <a href="index.html" style="color:#5EC8F2; text-decoration:none; font-weight:bold; display:flex; align-items:center; gap:5px; transition:0.2s;">🏠 Índice</a>
    <div style="width:1px; height:20px; background:rgba(255,255,255,0.2);"></div>
    <a href="{prev_file}" style="color:#fff; text-decoration:none; opacity:0.8; transition:0.2s;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.8'">{prev_label}</a>
  </div>
  <div style="font-family:'Syne',sans-serif; font-weight:700; letter-spacing:1px; color:rgba(255,255,255,0.5);">
    PASO <span style="color:#5EC8F2;">{current}</span> DE {total}
  </div>
  <div>
    <a href="{next_file}" style="background:#5EC8F2; color:#0D0D0D; text-decoration:none; padding:8px 18px; border-radius:4px; font-weight:bold; transition:0.2s;" onmouseover="this.style.transform='scale(1.05)'; this.style.boxShadow='0 0 10px rgba(94,200,242,0.4)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none'">{next_label}</a>
  </div>
</div>
</body>
"""

total = len(files)
for i, f in enumerate(files):
    prev_file = files[i-1] if i > 0 else "index.html"
    next_file = files[i+1] if i < total-1 else "index.html"
    
    prev_label = "⬅ Anterior" if i > 0 else " Inicio"
    next_label = "Siguiente ➡" if i < total-1 else " Finalizar"
    current_num = f.split('_')[0]
    
    nav_html = nav_template.format(
        prev_file=prev_file,
        prev_label=prev_label,
        current=current_num,
        total=total,
        next_file=next_file,
        next_label=next_label
    )
    
    path = os.path.join(mockup_dir, f)
    with open(path, "r", encoding="utf-8", errors="ignore") as file_in:
        content = file_in.read()
        
    if "accet-global-nav" not in content:
        # Some mockups might not have </body> strictly at the end, but Tailwind does. We replace </body> with the nav + </body>.
        if "</body>" in content:
            content = content.replace("</body>", nav_html)
        else:
            # Fallback if no </body> tag
            content += nav_html
            
        with open(path, "w", encoding="utf-8") as file_out:
            file_out.write(content)

print(f"Index.html generado e Inyección completada en {total} archivos mockups.")
