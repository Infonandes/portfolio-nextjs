'use client'

const experienceData = [
  {
    role: 'Founder & Lead Automation Engineer',
    company: 'Brain Global Tecnologia LTDA',
    date: 'Jan 2025 - Presente | Remoto / Curitiba',
    description:
      'Lidero uma firma de tecnologia especializada em IA e automação. Arquitetura de soluções usando Python, Node.js e orquestrações complexas em n8n para escalar operações de empresas.',
  },
  {
    role: 'Systems Developer',
    company: 'Grupo Pulsa',
    date: 'Jul 2025 - Dez 2025 | Belo Horizonte',
    description:
      'Desenvolvimento de módulos de alta performance na plataforma SYDLE ONE. Integração de ERPs via REST APIs e criação de dashboards estratégicos.',
  },
  {
    role: 'Web Developer',
    company: 'Avanço Informática',
    date: 'Jan 2024 - Dez 2024 | Belo Horizonte',
    description:
      'Evolução de ERP usando Angular e Node.js. Desenvolvimento de scripts Python para limpeza de dados massiva e melhoria de estabilidade do sistema.',
  },
  {
    role: 'Support Analyst (Level 2)',
    company: 'Avanço Informática',
    date: 'Mar 2022 - Jan 2024',
    description:
      'Suporte técnico profundo para ERP, análise de integridade de banco de dados SQL e ponte entre suporte e time de desenvolvimento.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fadeInDown">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experiência <span className="text-primary">Profissional</span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-secondary mx-auto rounded"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary md:left-1/2 md:transform md:-translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {experienceData.map((item, i) => (
              <div
                key={i}
                className={`relative md:w-1/2 animate-fadeInUp stagger-${(i % 3) + 1} ${
                  i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'
                }`}
              >
                {/* Content */}
                <div className="glass-card p-6 rounded-xl ml-12 md:ml-0 hover-lift">
                  <h3 className="text-lg font-bold text-primary mb-1">{item.role}</h3>
                  <p className="text-white font-semibold mb-1">{item.company}</p>
                  <p className="text-sm text-gray-400 mb-3">{item.date}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
