@echo off
cd /d "%~dp0"
if not exist node_modules call npm install
start "VTU MathClear" cmd /c "npm run dev -- --host"
timeout /t 3 /nobreak >nul
start http://localhost:5173