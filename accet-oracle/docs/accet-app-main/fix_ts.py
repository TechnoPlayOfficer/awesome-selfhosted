import os
import re

app_dir = r"c:\Users\DELL\Desktop\accet-app\accet-nextjs\src\app"

bool_attrs = ['disabled', 'checked', 'required', 'readonly', 'hidden', 'selected', 'autofocus']

count = 0
for root, dirs, files in os.walk(app_dir):
    for file in files:
        if file.endswith('.tsx'):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
                
            orig = content
            for attr in bool_attrs:
                # match disabled="disabled", required="true", disabled="", etc.
                pattern = rf'\b{attr}=["\'](?:{attr}|true|false|)[\'"]'
                if attr.lower() == 'readonly':
                    content = re.sub(pattern, 'readOnly', content, flags=re.IGNORECASE)
                    # Also standalone `readonly` parameter
                    content = re.sub(r'\breadonly\b(?!=|:)', 'readOnly', content)
                elif attr.lower() == 'autofocus':
                    content = re.sub(pattern, 'autoFocus', content, flags=re.IGNORECASE)
                    content = re.sub(r'\bautofocus\b(?!=|:)', 'autoFocus', content)
                else:
                    content = re.sub(pattern, attr, content, flags=re.IGNORECASE)
            
            if content != orig:
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(content)
                count += 1

print(f"Bools JSX corregidos en {count} archivos.")
