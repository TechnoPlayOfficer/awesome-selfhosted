import os
import zipfile
import re

directory = "C:/Users/DELL/Downloads/Propuesta-de-Valor/prds"
files = [f for f in os.listdir(directory) if f.endswith('.docx')]

with open("c:/Users/DELL/Desktop/accet-app/parsed_prds.txt", "w", encoding="utf-8") as out:
    for f in files:
        path = os.path.join(directory, f)
        try:
            with zipfile.ZipFile(path) as docx:
                content = docx.read('word/document.xml').decode('utf-8')
                text = re.sub(r'<w:p [^>]*>', '\n', content)
                text = re.sub(r'<w:p>', '\n', text)
                text = re.sub(r'<[^>]+>', '', text)
                out.write(f"=== {f} ===\n{text}\n\n")
        except Exception as e:
            out.write(f"=== {f} ===\nError: {e}\n\n")

print("Docs parsed successfully!")
