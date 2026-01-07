# 🎬 Animações ao Scroll - Detalhes Técnicos

## Animações Implementadas

### 1. **Hero Section**
- ✨ Fade in + slide up do conteúdo
- 🎯 Zoom in da foto de perfil
- 🔄 Bounce infinito do botão "Scroll Down"

### 2. **Tech Stack**
- 📊 Cards levantam ao entrar em view
- 🎪 Cada skill aparece em sequência
- 🌈 Hover effect com mudança de cor

### 3. **Projects**
- 🚀 Cards deslizam na entrada
- 🎨 Fundo gradiente aparece no hover
- 🏷️ Tags aparecem com scale animation

### 4. **Timeline (Experiência)**
- 📍 Linha de tempo anima da esquerda para direita
- ⭕ Pontos da timeline fazem scale no scroll
- 💼 Itens alternam entre esquerda e direita (desktop)

### 5. **Contact**
- 📱 Botões sociais fazem rotate + scale no hover
- 🔗 Links têm shadow glow effect

## Como Funcionam as Animações

### Usando Framer Motion

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}      // Estado inicial
  whileInView={{ opacity: 1, y: 0 }}   // Quando entra na view
  transition={{ duration: 0.6 }}        // Duração
  viewport={{ once: true }}             // Anima apenas uma vez
>
  Conteúdo
</motion.div>
```

### Container com Stagger (efeito de sequência)

```tsx
const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.2,  // Delay entre items
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}
```

## Personalizar Animações

### Velocidade

Altere `duration` em `transition`:
```tsx
transition={{ duration: 0.3 }}  // Mais rápido
transition={{ duration: 1.2 }}  // Mais lento
```

### Efeito de Entrada

Modifique os valores `initial`:
```tsx
// Fade in (atual)
initial={{ opacity: 0 }}

// Slide in da esquerda
initial={{ opacity: 0, x: -100 }}

// Zoom in
initial={{ opacity: 0, scale: 0.8 }}

// Rotate in
initial={{ opacity: 0, rotate: -10 }}
```

### Efeito Hover

```tsx
whileHover={{ 
  scale: 1.1,
  rotate: 5,
  boxShadow: "0 0 20px #b026ff"
}}
```

## Tipos de Animação Usados

1. **Opacity**: Fade in/out (suavidade)
2. **Y Position**: Slide up (entrada suave)
3. **Scale**: Zoom in/out (destaque)
4. **X Position**: Slide lateral (timeline)
5. **Rotate**: Rotação (botões sociais)
6. **BoxShadow**: Glow effect (destaque)

## Performance

- ✅ GPU accelerated (usa transform/opacity)
- ✅ `viewport={{ once: true }}` para evitar re-animations
- ✅ Não bloqueia interações do usuário
- ✅ Suporta prefers-reduced-motion (acessibilidade)

## Arquivo Chave

Todas as animações estão em `app/components/` usando:
- **Framer Motion** para as animações
- **Tailwind CSS** para estilos
- **CSS Canvas** para o fundo de galáxia

---

Sinta-se livre para experimentar e customizar as animações!
