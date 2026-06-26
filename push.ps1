Write-Host "=== ETTAAROUF - COMMIT ET PUSH ===" -ForegroundColor Cyan

# 1. Fermer GitHub Desktop
Write-Host "Arret de GitHub Desktop..." -ForegroundColor Yellow
Get-Process -Name "githubdesktop" -ErrorAction SilentlyContinue | Stop-Process -Force
Start-Sleep -Seconds 2

# 2. Supprimer le lock file
$lock = "C:\Users\billa\Desktop\ETTAAROUF TOURISME\ETTAAROUF - WEBSITE\.git\index.lock"
if (Test-Path $lock) {
    Remove-Item $lock -Force
    Write-Host "Lock supprime." -ForegroundColor Green
}

# 3. Aller dans le repo
Set-Location "C:\Users\billa\Desktop\ETTAAROUF TOURISME\ETTAAROUF - WEBSITE"

# 4. Commit
git add "components/layout/Header.tsx" "public/logo-ettaarouf.svg"
git commit -m "feat: logo SVG vectorise + navbar gradient + text-shadow lisible"

# 5. Push
git push origin main

Write-Host "=== TERMINE ===" -ForegroundColor Green
Read-Host "Appuyez sur Entree pour fermer"
