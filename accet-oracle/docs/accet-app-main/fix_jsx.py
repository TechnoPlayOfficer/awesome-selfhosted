import os
import re

app_dir = r"c:\Users\DELL\Desktop\accet-app\accet-nextjs\src\app"

replacements = {
    r'\bstroke-width=': 'strokeWidth=',
    r'\bstroke-linecap=': 'strokeLinecap=',
    r'\bstroke-linejoin=': 'strokeLinejoin=',
    r'\bstroke-miterlimit=': 'strokeMiterlimit=',
    r'\bfill-rule=': 'fillRule=',
    r'\bclip-rule=': 'clipRule=',
    r'\bviewbox=': 'viewBox=',
    r'\btabindex=': 'tabIndex=',
    r'\bautocomplete=': 'autoComplete=',
    r'\bmaxlength=': 'maxLength=',
    r'\bclip-path=': 'clipPath=',
    r'\bfill-opacity=': 'fillOpacity=',
    r'\bstroke-opacity=': 'strokeOpacity=',
    r'\bstop-color=': 'stopColor=',
    r'\bstop-opacity=': 'stopOpacity=',
    r'\bfont-family=': 'fontFamily=',
    r'\bfont-size=': 'fontSize=',
    r'\bfont-weight=': 'fontWeight=',
    r'\btext-anchor=': 'textAnchor=',
    r'\balignment-baseline=': 'alignmentBaseline=',
    r'\bxmlns:xlink=': 'xmlnsXlink=',
    r'\bxml:space=': 'xmlSpace=',
}

def fix_style(match):
    style_str = match.group(1)
    if "background-image" in style_str:
        if "url(" in style_str:
            url = style_str.split("url(")[1].split(")")[0].strip("'\"")
            return f'style={{{{ backgroundImage: "url(\'{url}\')" }}}}'
    return match.group(0)

count = 0
for root, dirs, files in os.walk(app_dir):
    for file in files:
        if file.endswith('.tsx'):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
                
            orig = content
            for pattern, repl in replacements.items():
                content = re.sub(pattern, repl, content, flags=re.IGNORECASE)
                
            content = re.sub(r'style=\{\{ "([^"]*)" \}\}', fix_style, content)
            
            # Convert HTML comments to JSX comments
            content = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', content, flags=re.DOTALL)
            
            if content != orig:
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(content)
                count += 1

print(f"Fixed {count} files.")
