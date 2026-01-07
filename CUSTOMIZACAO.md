# 🎨 Guia de Customização Avançada

Aprenda como personalizar ainda mais seu portfólio!

## 🎯 Customizações Comuns

### 1. Mudar Cores Primárias

Arquivo: `tailwind.config.js`

```js
colors: {
  primary: '#b026ff',    // Roxo Neon (MUDE AQUI)
  secondary: '#00f3ff',  // Azul Cyan (OU AQUI)
}
```

**Paletas de cores prontas:**

**Opção 1: Blue & Purple**
```js
primary: '#3b82f6',      // Azul
secondary: '#8b5cf6',    // Roxo
```

**Opção 2: Green & Teal**
```js
primary: '#10b981',      // Verde
secondary: '#06b6d4',    // Teal
```

**Opção 3: Pink & Orange**
```js
primary: '#ec4899',      // Rosa
secondary: '#f97316',    // Laranja
```

**Opção 4: Gradiente Quente**
```js
primary: '#f97316',      // Laranja
secondary: '#ef4444',    // Vermelho
```

### 2. Adicionar Mais Skills

Arquivo: `app/components/Skills.tsx`

```tsx
const skillsData = [
  {
    category: 'Meu Novo Skill',
    icon: 'fa-code',     // Qualquer ícone FontAwesome
    skills: [
      'Nova skill 1',
      'Nova skill 2',
      'Nova skill 3',
    ],
  },
  // Adicione mais grupos...
]
```

**Ícones disponíveis:**
- `fa-robot` - Robot
- `fa-code` - Código
- `fa-server` - Servidor
- `fa-database` - Database
- `fa-cloud` - Cloud
- `fa-cogs` - Engrenagens
- `fa-brain` - Cérebro
- `fa-zap` - Lightning

### 3. Adicionar Novo Projeto

Arquivo: `app/components/Projects.tsx`

```tsx
const projectsData = [
  {
    title: 'Meu Novo Projeto',
    description: 'Descrição do projeto...',
    techs: ['Tech1', 'Tech2', 'Tech3'],
  },
  // Mais projetos...
]
```

### 4. Adicionar Nova Experiência

Arquivo: `app/components/Experience.tsx`

```tsx
const experienceData = [
  {
    role: 'Meu Cargo',
    company: 'Minha Empresa',
    date: 'Jan 2025 - Presente',
    description: 'Descrição da experiência...',
  },
  // Mais experiências...
]
```

---

## 🎬 Customizar Animações

### Mudar Velocidade de Animação

Arquivo: `app/components/Skills.tsx` (exemplo)

```tsx
transition={{ duration: 0.3 }}  // Mais rápido (0.3s)
transition={{ duration: 1.2 }}  // Mais lento (1.2s)
```

### Mudar Efeito de Entrada

```tsx
// Fade in (atual)
initial={{ opacity: 0 }}

// Slide in da esquerda
initial={{ opacity: 0, x: -100 }}

// Slide in da direita
initial={{ opacity: 0, x: 100 }}

// Slide in de cima
initial={{ opacity: 0, y: -50 }}

// Zoom in
initial={{ opacity: 0, scale: 0.8 }}

// Rotate in
initial={{ opacity: 0, rotate: -45 }}

// Combinado
initial={{ opacity: 0, y: 20, rotate: 5 }}
```

### Customizar Hover Effects

```tsx
whileHover={{
  scale: 1.15,              // Aumentar 15%
  rotate: 10,               // Rotacionar 10 graus
  boxShadow: '0 0 30px #b026ff',  // Brilho
  backgroundColor: 'rgba(176, 38, 255, 0.2)',
}}
```

---

## 🌈 Adicionar Novos Componentes

### Exemplo: Adicionar Seção de Blog

1. Crie `app/components/Blog.tsx`:

```tsx
'use client'

import { motion } from 'framer-motion'

export default function Blog() {
  const posts = [
    {
      title: 'Como iniciar com n8n',
      date: 'Jan 2025',
      excerpt: 'Guia completo...',
    },
  ]

  return (
    <section id="blog" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16">
          Últimas <span className="text-primary">Postagens</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="glass-card p-8 rounded-2xl"
            >
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{post.date}</p>
              <p className="text-gray-300">{post.excerpt}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
```

2. Importe em `app/page.tsx`:

```tsx
import Blog from './components/Blog'

export default function Home() {
  return (
    <main>
      {/* ... outros componentes ... */}
      <Blog />
      {/* ... */}
    </main>
  )
}
```

3. Adicione no menu `app/components/Header.tsx`:

```tsx
{ href: '#blog', label: 'Blog' }
```

---

## 🎨 Ajustar Layout

### Mudar Largura Máxima

Em qualquer componente:

```tsx
<div className="max-w-6xl mx-auto">  {/* 1152px */}
  {/* Conteúdo */}
</div>

{/* Opções: max-w-4xl, max-w-5xl, max-w-7xl, max-w-full */}
```

### Mudar Espaçamento

```tsx
<section className="py-20 px-4">  {/* 80px top/bottom, 16px left/right */}
  {/* Mude para py-32 px-8, etc */}
</section>
```

### Criar Grid Customizado

```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* 2 colunas em tablet, 3 em desktop */}
</div>

<div className="grid md:grid-cols-4 gap-6">
  {/* 4 colunas em tablet */}
</div>
```

---

## 📱 Responsividade

### Tailwind Breakpoints

```tsx
className="
  text-sm           {/* Mobile */}
  md:text-base      {/* 768px+ */}
  lg:text-lg        {/* 1024px+ */}
  xl:text-xl        {/* 1280px+ */}
"
```

### Exemplo Prático

```tsx
<h1 className="
  text-3xl md:text-4xl lg:text-5xl
  px-4 md:px-8 lg:px-0
">
  Título Responsivo
</h1>
```

---

## 🔤 Mudar Fontes

Arquivo: `app/layout.tsx`

```tsx
// Adicione no <head>:
<link
  href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
  rel="stylesheet"
/>
```

Arquivo: `app/globals.css`

```css
h1, h2, h3 {
  font-family: 'Poppins', sans-serif;  /* Mude a fonte */
  text-transform: uppercase;
  letter-spacing: 2px;
}
```

---

## 🎯 Adicionar Ícones Customizados

FontAwesome oferece muitos ícones:

```tsx
{/* Alguns exemplos: */}
<i className="fas fa-star"></i>           {/* Estrela */}
<i className="fas fa-heart"></i>          {/* Coração */}
<i className="fas fa-rocket"></i>         {/* Foguete */}
<i className="fas fa-fire"></i>           {/* Fogo */}
<i className="fas fa-medal"></i>          {/* Medalha */}
<i className="fas fa-crown"></i>          {/* Coroa */}
<i className="fas fa-lightning"></i>      {/* Raio */}
```

Lista completa: https://fontawesome.com/icons

---

## 🔗 Adicionar Links Externos

### Adicionar Botão Social

Arquivo: `app/components/Contact.tsx`

```tsx
const contactLinks = [
  // ... links existentes ...
  {
    icon: 'fab fa-twitter',
    url: 'https://twitter.com/seu_usuario',
    label: 'Twitter',
  },
]
```

### Adicionar Link no Menu

Arquivo: `app/components/Header.tsx`

```tsx
const menuItems = [
  // ... itens existentes ...
  { href: '#minha-secao', label: 'Meu Link' },
]
```

---

## 📊 Adicionar Google Analytics

Arquivo: `app/layout.tsx`

```tsx
<head>
  {/* ... código existente ... */}
  
  {/* Google Analytics */}
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  ></script>
  <script dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    `,
  }} />
</head>
```

Substitua `G-XXXXXXXXXX` pelo seu ID do Google Analytics.

---

## 🚨 Adicionar Notificações (Toast)

Instale biblioteca:
```bash
npm install react-hot-toast
```

Exemplo de uso:
```tsx
import toast from 'react-hot-toast'

// No seu componente:
toast.success('Mensagem enviada!')
toast.error('Erro ao enviar')
```

---

## 💾 Salvar Personalizações

**Sempre faça commit no Git:**

```bash
git add .
git commit -m "Custom: Adicionar novas cores"
git push
```

Isso garante que suas mudanças sejam salvas!

---

## 🆘 Debugging

### Inspecionar Elemento

1. Abra DevTools: `F12`
2. Clique em "Inspect"
3. Veja o código HTML/CSS

### Ver Console

1. Abra DevTools: `F12`
2. Vá para "Console"
3. Procure por erros (vermelho)

### Teste Responsividade

1. DevTools: `F12`
2. Clique em "Toggle device toolbar"
3. Escolha diferentes tamanhos

---

## 📚 Recursos para Aprender

### Tailwind CSS
- Documentação: https://tailwindcss.com/docs
- Playground: https://play.tailwindcss.com

### Framer Motion
- Documentação: https://www.framer.com/motion/
- Exemplos: https://www.framer.com/motion/examples/

### Next.js
- Documentação: https://nextjs.org/docs
- Tutoriais: https://nextjs.org/learn

---

## ✨ Dicas Finais

1. **Teste localmente** antes de fazer deploy
2. **Use DevTools** para inspecionar elementos
3. **Mantenha no Git** para não perder mudanças
4. **Leia a documentação** das bibliotecas
5. **Customize gradualmente** uma coisa por vez

---

**Divirta-se customizando seu portfólio! 🎉**
