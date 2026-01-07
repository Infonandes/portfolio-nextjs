'use client'

import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppFloat() {
  const phoneNumber = '5531985676251'
  const message = 'Olá! Gostaria de conversar sobre automação e desenvolvimento.'

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <button
      onClick={handleClick}
      className="whatsapp-float"
      aria-label="Contato via WhatsApp"
      title="Fale comigo no WhatsApp"
    >
      <FaWhatsapp className="text-white text-3xl" />
    </button>
  )
}
