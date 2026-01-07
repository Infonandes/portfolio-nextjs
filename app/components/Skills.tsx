'use client'

import { FaRobot, FaCode, FaServer, FaCheck } from 'react-icons/fa'

const skillsData = [
  {
    category: 'Automação & IA',
    Icon: FaRobot,
    skills: [
      'n8n (Advanced Workflow)',
      'OpenAI API (GPT-4o)',
      'AI Agents (SDR/Support)',
      'RAG & Vector DBs',
      'Typebot & Evolution API',
    ],
  },
  {
    category: 'Desenvolvimento',
    Icon: FaCode,
    skills: [
      'Python (Pandas/Requests)',
      'Node.js (TypeScript)',
      'React & Next.js',
      'Angular 9+',
      'HTML5 / CSS3 / JavaScript',
    ],
  },
  {
    category: 'Infraestrutura',
    Icon: FaServer,
    skills: [
      'SQL & PostgreSQL',
      'Docker',
      'ElasticSearch',
      'Supabase & PGVector',
      'Git & Linux',
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fadeInDown">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Tech</span> Stack
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-secondary mx-auto rounded"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillsData.map((skillGroup, i) => (
            <div
              key={i}
              className={`glass-card p-8 rounded-2xl hover-lift animate-fadeInUp stagger-${i + 1}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <skillGroup.Icon className="text-2xl text-secondary" />
                <h3 className="text-xl font-bold text-white">{skillGroup.category}</h3>
              </div>
              <ul className="space-y-3">
                {skillGroup.skills.map((skill, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <span className="text-primary">
                      <FaCheck className="text-sm" />
                    </span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
