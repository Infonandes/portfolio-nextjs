# Almir Fernandes Portfolio

Portfólio profissional moderno desenvolvido com Next.js, React, Framer Motion e Tailwind CSS.

## 🚀 Features

- **Design Moderno**: Dark theme com glassmorphism e animações suaves
- **Animações ao Scroll**: Efeitos visuais com Framer Motion
- **Responsivo**: Totalmente adaptável para mobile e desktop
- **Performance**: Otimizado com Next.js 14
- **Perfil Visual**: Foto de perfil integrada com efeito hover

## 📋 Seções

1. **Hero**: Introdução com foto de perfil, título e CTA
2. **Tech Stack**: Grid de habilidades por categoria
3. **Projetos**: Showcase dos principais projetos
4. **Experiência**: Timeline profissional com animações
5. **Contato**: Links para redes sociais

## 🛠️ Tecnologias

- **Next.js 14**: Framework React moderno
- **React 18**: Library UI
- **Framer Motion**: Animações fluidas
- **Tailwind CSS**: Styling
- **TypeScript**: Type safety
- **FontAwesome**: Ícones

## 📦 Instalação

```bash
npm install
```

## 🚀 Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🏗️ Build

```bash
npm run build
npm start
```

## 📁 Estrutura

```
app/
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Contact.tsx
│   └── GalaxyBackground.tsx
├── globals.css
├── layout.tsx
└── page.tsx
public/
└── profileImg.png
```

## 🎨 Personalização

### Cores
As cores primárias podem ser alteradas em `tailwind.config.js`:

```js
primary: '#b026ff'    // Roxo Neon
secondary: '#00f3ff'  // Azul Cyan
```

### Conteúdo
Edite os dados em cada componente para personalizar:
- Habilidades em `Skills.tsx`
- Projetos em `Projects.tsx`
- Experiência em `Experience.tsx`

## 📝 Licença

© 2026 Brain Global Tecnologia. All rights reserved.
