#!/bin/bash

# Script de Setup Automático para o Portfólio Next.js
# Para macOS e Linux

echo ""
echo "===================================="
echo "   Setup Portfólio Next.js"
echo "===================================="
echo ""

# Verificar se está na pasta certa
if [ ! -f "package.json" ]; then
    echo "ERRO: Execute este script dentro da pasta portfolio-nextjs"
    echo "Exemplo: cd ~/Desktop/portifolio/portfolio-nextjs"
    exit 1
fi

# Verificar Node.js
if ! command -v node &> /dev/null; then
    echo "ERRO: Node.js não está instalado!"
    echo "Baixe em: https://nodejs.org/"
    exit 1
fi

echo "✓ Node.js encontrado:"
node --version

echo ""
echo "Instalando dependências... (pode levar alguns minutos)"
echo ""

npm install

if [ $? -ne 0 ]; then
    echo "ERRO: Falha ao instalar dependências"
    exit 1
fi

echo ""
echo "===================================="
echo "   ✓ Setup Concluído com Sucesso!"
echo "===================================="
echo ""
echo "Para iniciar o servidor de desenvolvimento, execute:"
echo "   npm run dev"
echo ""
echo "Depois abra seu navegador em:"
echo "   http://localhost:3000"
echo ""
