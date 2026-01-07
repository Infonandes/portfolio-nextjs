'use client'

import Image from 'next/image'
import { FaChevronDown } from 'react-icons/fa'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 px-4"
    >
      <div className="max-w-4xl mx-auto text-center animate-fadeIn">
        {/* Profile Image */}
        <div className="mb-8 flex justify-center animate-fadeInUp stagger-1">
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-2 border-primary shadow-2xl hover-scale">
            <Image
              src="/profileImg.webp"
              alt="Almir Pereira"
              width={384}
              height={384}
              className="object-cover rounded-full"
              priority
              quality={85}
              sizes="(max-width: 768px) 192px, 384px"
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp stagger-2">
          <span className="bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
            Almir Pereira
          </span>
        </h1>

        {/* Subtitle */}
        <h2 className="text-xl md:text-2xl text-secondary mb-6 font-light animate-fadeInUp stagger-3">
          Automation Specialist | Full-Stack Developer | AI Architect
        </h2>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-gray-300 text-lg leading-relaxed mb-8 animate-fadeInUp stagger-4">
          Especialista em unir engenharia de software tradicional com automação moderna.
          Transformo lógica manual em sistemas inteligentes e escaláveis com n8n,
          Python e Agentes de IA.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center animate-fadeInUp stagger-5">
          <a
            href="#contact"
            className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all hover-scale"
          >
            Entrar em Contato
          </a>
          <a
            href="#projects"
            className="px-8 py-3 border-2 border-secondary text-secondary rounded-lg font-semibold hover:bg-secondary/10 transition-all hover-scale"
          >
            Ver Projetos
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center">
          <div className="text-secondary text-3xl animate-bounce">
            <FaChevronDown />
          </div>
        </div>
      </div>
    </section>
  )
}
