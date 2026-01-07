@echo off
REM Script de Setup Automático para o Portfólio Next.js
REM Para Windows

echo.
echo ====================================
echo   Setup Portfólio Next.js
echo ====================================
echo.

REM Verificar se está na pasta certa
if not exist "package.json" (
    echo ERRO: Execute este script dentro da pasta portfolio-nextjs
    echo Exemplo: cd "c:\Users\Almir\Desktop\portifolio\portfolio-nextjs"
    pause
    exit /b 1
)

REM Verificar Node.js
node --version >nul 2>&1
if errorlevel 1 (
    echo ERRO: Node.js não está instalado!
    echo Baixe em: https://nodejs.org/
    pause
    exit /b 1
)

echo ✓ Node.js encontrado: 
node --version

echo.
echo Instalando dependências... (pode levar alguns minutos)
echo.

call npm install

if errorlevel 1 (
    echo ERRO: Falha ao instalar dependências
    pause
    exit /b 1
)

echo.
echo ====================================
echo   ✓ Setup Concluído com Sucesso!
echo ====================================
echo.
echo Para iniciar o servidor de desenvolvimento, execute:
echo   npm run dev
echo.
echo Depois abra seu navegador em:
echo   http://localhost:3000
echo.
pause
