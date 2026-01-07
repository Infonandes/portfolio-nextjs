# 🚀 Como Começar com seu Novo Portfólio Next.js

## Pré-requisitos

- **Node.js 18+** (baixe em: https://nodejs.org/)
- **npm** (vem com Node.js)

## 📦 Instalação e Execução

### 1. Abra o Terminal/Prompt de Comando

### 2. Navegue até a pasta do projeto
```bash
cd "c:\Users\Almir\Desktop\portifolio\portfolio-nextjs"
```

### 3. Instale as dependências
```bash
npm install
```

### 4. Inicie o servidor de desenvolvimento
```bash
npm run dev
```

### 5. Acesse no navegador
- Abra: http://localhost:3000

Pronto! Seu portfólio estará rodando localmente! 🎉

## ✨ Principais Melhorias

✅ **Foto de Perfil Integrada** - Exibida no hero com efeito hover
✅ **Animações ao Scroll** - Seções animam conforme você desce
✅ **Design Moderno** - Glassmorphism com tema dark
✅ **Sem Link do Portfólio Antigo** - Removido completamente
✅ **Completamente Responsivo** - Funciona perfeitamente em mobile
✅ **Performance Otimizada** - Construído com Next.js 14

## 🎯 Estrutura do Projeto

```
portfolio-nextjs/
├── app/
│   ├── components/       # Componentes React
│   ├── globals.css       # Estilos globais
│   ├── layout.tsx        # Layout principal
│   └── page.tsx          # Página inicial
├── public/
│   └── profileImg.png    # Sua foto de perfil
├── package.json          # Dependências
├── tailwind.config.js    # Configuração Tailwind
└── tsconfig.json         # Configuração TypeScript
```

## 📝 Personalizações Fáceis

### Alterar Conteúdo

1. **Skills**: Edite `app/components/Skills.tsx`
2. **Projetos**: Edite `app/components/Projects.tsx`
3. **Experiência**: Edite `app/components/Experience.tsx`
4. **Links de Contato**: Edite `app/components/Contact.tsx`

### Alterar Cores

Edite `tailwind.config.js`:
```js
colors: {
  primary: '#b026ff',    // Roxo Neon
  secondary: '#00f3ff',  // Azul Cyan
}
```

## 🚀 Deploy (Opcional)

Para publicar seu site na internet (grátis):

### Opção 1: Vercel (Recomendado)
1. Crie uma conta em https://vercel.com
2. Conecte seu repositório GitHub
3. Deploy com 1 clique!

### Opção 2: Netlify
1. Crie uma conta em https://netlify.com
2. Faça upload da pasta `portfolio-nextjs`
3. Pronto!

## 📚 Recursos Úteis

- **Next.js Docs**: https://nextjs.org/docs
- **Framer Motion**: https://www.framer.com/motion/
- **Tailwind CSS**: https://tailwindcss.com/docs
- **React Docs**: https://react.dev

---

**Dúvidas?** Teste as mudanças localmente primeiro com `npm run dev` 😊
