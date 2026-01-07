'use client'

import dynamic from 'next/dynamic'
import Header from './components/Header'
import Hero from './components/Hero'
import WhatsAppFloat from './components/WhatsAppFloat'

const Skills = dynamic(() => import('./components/Skills'), {
  loading: () => <div className="min-h-screen" />,
})

const Projects = dynamic(() => import('./components/Projects'), {
  loading: () => <div className="min-h-screen" />,
})

const Experience = dynamic(() => import('./components/Experience'), {
  loading: () => <div className="min-h-screen" />,
})

const Contact = dynamic(() => import('./components/Contact'), {
  loading: () => <div className="min-h-screen" />,
})

const GalaxyBackground = dynamic(() => import('./components/GalaxyBackground'), {
  ssr: false,
  loading: () => null,
})

export default function Home() {
  return (
    <main className="bg-bg-dark text-white relative overflow-hidden">
      <GalaxyBackground />
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <WhatsAppFloat />
    </main>
  )
}
