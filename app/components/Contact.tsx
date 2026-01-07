'use client'

import { FaLinkedinIn, FaEnvelope, FaWhatsapp, FaGithub } from 'react-icons/fa'

const contactLinks = [
  {
    Icon: FaLinkedinIn,
    url: 'https://linkedin.com/in/almirfernandespereira',
    label: 'LinkedIn',
  },
  {
    Icon: FaEnvelope,
    url: 'mailto:almirfpereira@hotmail.com',
    label: 'Email',
  },
  {
    Icon: FaWhatsapp,
    url: 'https://wa.me/5531985676251',
    label: 'WhatsApp',
  },
  {
    Icon: FaGithub,
    url: 'https://github.com/almirfernandes',
    label: 'GitHub',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Title */}
        <div className="mb-16 animate-fadeInDown">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Vamos <span className="text-secondary">Conectar</span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-secondary mx-auto rounded"></div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto animate-fadeInUp">
          Pronto para transformar processos manuais em sistemas inteligentes. Vamos conversar
          sobre como posso ajudar seu negócio.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12 flex-wrap">
          {contactLinks.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-16 h-16 flex items-center justify-center rounded-full border-2 border-primary bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-primary/50 hover-scale animate-scaleIn stagger-${i + 1}`}
              title={link.label}
            >
              <link.Icon className="text-2xl" />
            </a>
          ))}
        </div>

        {/* Footer */}
        <p className="text-gray-500 text-sm animate-fadeIn stagger-5">
          © 2026 Brain Global Tecnologia. All rights reserved.
        </p>
      </div>
    </section>
  )
}
