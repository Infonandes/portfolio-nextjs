'use client'

import { useState } from 'react'
import { FaBars, FaTimes, FaLinkedinIn, FaGithub, FaWhatsapp, FaYoutube, FaInstagram } from 'react-icons/fa'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { href: '#hero', label: 'Início' },
    { href: '#skills', label: 'Tech Stack' },
    { href: '#projects', label: 'Projetos' },
    { href: '#experience', label: 'Experiência' },
    { href: '#contact', label: 'Contato' },
  ]

  const socialLinks = [
    { Icon: FaLinkedinIn, url: 'https://www.linkedin.com/in/almirfernandespereira/', label: 'LinkedIn' },
    { Icon: FaGithub, url: 'https://github.com/infonandes', label: 'GitHub' },
    { Icon: FaYoutube, url: 'https://www.youtube.com/@INFONANDES', label: 'YouTube' },
    { Icon: FaInstagram, url: 'https://www.instagram.com/infonandes', label: 'Instagram' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold font-sans animate-fadeIn">
          <span className="text-primary bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent">
            Almir Pereira
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {menuItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className={`hover:text-secondary transition-colors text-sm font-medium animate-fadeInDown stagger-${i + 1}`}
            >
              {item.label}
            </a>
          ))}

          {/* Social Icons */}
          <div className="flex gap-3 ml-4 border-l border-white/20 pl-4">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary transition-colors hover-scale"
                title={link.label}
              >
                <link.Icon className="text-lg" />
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary hover-scale text-xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-white/10 md:hidden animate-fadeInDown">
            <div className="flex flex-col p-4 gap-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="hover:text-secondary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              {/* Mobile Social Icons */}
              <div className="flex gap-4 pt-4 border-t border-white/20 justify-center">
                {socialLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-secondary transition-colors"
                    title={link.label}
                  >
                    <link.Icon className="text-xl" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
