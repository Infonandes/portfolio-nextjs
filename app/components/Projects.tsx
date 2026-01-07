'use client'

const projectsData = [
  {
    title: 'AI SDR & Sales Agent',
    description:
      'Agente de vendas totalmente autônomo capaz de processar notas de voz e imagens via WhatsApp. Realiza follow-up ativo e qualificação de leads.',
    techs: ['n8n', 'OpenAI API', 'WhatsApp API'],
  },
  {
    title: 'Restaurant Booking Engine',
    description:
      'Sistema de reservas integrando dashboard web para staff com bot de WhatsApp para clientes. Atualização em tempo real para evitar overbooking.',
    techs: ['Bot Automation', 'Real-time DB', 'WhatsApp'],
  },
  {
    title: 'Healthcare Scheduling Bot',
    description:
      'Bot autônomo para clínicas médicas. Gerencia agenda, envia lembretes automáticos para reduzir no-show e gerencia reagendamentos.',
    techs: ['Python', 'Schedule API', 'Automation'],
  },
  {
    title: 'Social Media Pipeline',
    description:
      'Sistema de engenharia para agendar e postar mídia automaticamente em múltiplas plataformas, centralizando métricas de engajamento.',
    techs: ['Integration', 'Analytics', 'Automation'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fadeInDown">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Key <span className="text-primary">Projects</span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-secondary mx-auto rounded"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, i) => (
            <div
              key={i}
              className={`glass-card p-8 rounded-2xl group overflow-hidden relative hover-lift animate-fadeInUp stagger-${(i % 3) + 1}`}
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

              <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2">
                {project.techs.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm border border-secondary/30 hover:border-secondary/100 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
