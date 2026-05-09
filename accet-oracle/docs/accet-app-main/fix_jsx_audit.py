#!/usr/bin/env python3
"""
126Q Debug Audit - Bulk JSX Fixer for ACCET Next.js Project
Fixes mismatched <a ...>text</Link> patterns introduced by fix_links.py
"""
import os
import re
import glob

SRC_DIR = r"c:\Users\DELL\Desktop\accet-app\accet-nextjs\src"

# Pattern: opening <a with href but closing </Link>
# Replace: <Link with href closing </Link>

PATTERNS = [
    # <a className="..." href="...">text</Link>  =>  <Link className="..." href="...">text</Link>
    (r'<a(\s[^>]*href=["\'][^"\']*["\'][^>]*)>(.*?)</Link>', r'<Link\1>\2</Link>'),
    # <a href="..."  =>  <Link href="..."  (when closing is </a>)
    # (already correct, no change needed)
]

def fix_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    
    # Fix mismatched <a ...>...</Link>
    content = re.sub(
        r'<a(\s[^>]*href=["\'][^"\']*["\'][^>]*)>(.*?)</Link>',
        r'<Link\1>\2</Link>',
        content,
        flags=re.DOTALL
    )
    
    # Also fix standalone </Link> that are orphaned (not preceded by a <Link)
    # Check if "import Link" is missing but Link tags exist
    if '<Link ' in content and 'import Link' not in content:
        # Add import at top
        content = 'import Link from "next/link";\n' + content

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

fixed = []
errors = []

tsx_files = glob.glob(os.path.join(SRC_DIR, '**', '*.tsx'), recursive=True)

for filepath in tsx_files:
    try:
        if fix_file(filepath):
            fixed.append(filepath)
    except Exception as e:
        errors.append((filepath, str(e)))

print(f"\n{'='*60}")
print(f"126Q JSX Audit - Phase 1: Auto-Fix")
print(f"{'='*60}")
print(f"Files scanned: {len(tsx_files)}")
print(f"Files fixed:   {len(fixed)}")
print(f"Errors:        {len(errors)}")
print()

if fixed:
    print("FIXED FILES:")
    for f in fixed:
        print(f"  ✓ {os.path.relpath(f, SRC_DIR)}")

if errors:
    print("\nERRORS:")
    for f, e in errors:
        print(f"  ✗ {f}: {e}")

print(f"\n{'='*60}")
print("Phase 1 Complete. Run: npm run build to validate.")
print(f"{'='*60}")
