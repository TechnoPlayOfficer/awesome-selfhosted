Remove-Item -Recurse -Force "accet-nextjs\.git" -ErrorAction SilentlyContinue
git init
git remote remove origin 2>$null
git remote add origin https://github.com/accetproject-star/accet-app.git
git branch -M main
git add .
git commit -m "feat: complete Next.js SPA migration and HTML mockups"
git push -u origin main
