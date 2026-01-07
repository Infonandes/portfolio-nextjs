import type { Metadata } from 'next'
import { Inter, Orbitron } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-orbitron',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'Almir Pereira | Automation Specialist',
  description: 'Full-Stack Developer, Automation Specialist & AI Architect',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`scroll-smooth ${inter.variable} ${orbitron.variable}`}>
      <head>
        {/* Preload da imagem LCP - agora em WebP */}
        <link rel="preload" as="image" href="/profileImg.webp" fetchPriority="high" />

        {/* Critical CSS inline para acima da dobra */}
        <style dangerouslySetInnerHTML={{
          __html: `
            #hero { min-height: 100vh; display: flex; align-items: center; justify-content: center; }
            #hero h1 { font-size: clamp(2.5rem, 8vw, 4.5rem); font-weight: bold; margin-bottom: 1.5rem; }
            #hero h2 { font-size: clamp(1.125rem, 3vw, 1.5rem); color: #60a5fa; margin-bottom: 1.5rem; }
            .hero-img { width: 12rem; height: 12rem; border-radius: 50%; border: 2px solid #3b82f6; }
            @media (max-width: 768px) {
              #hero { padding-top: 5rem; }
            }
          `
        }} />
      </head>
      <body className="bg-bg-dark text-gray-200 overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
