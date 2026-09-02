const items = [
  {
    period: '2025 — 2026',
    title: 'Full Stack Developer',
    subtitle: 'Twains — Freelance Mission',
    description: 'Multi-tenant WhatsApp automation platform. Worked on authentication with Clerk, organization isolation, security hardening, frontend architecture (Zustand, React Query), and MongoDB workflow persistence.',
    tags: ['React', 'Python', 'MongoDB Atlas', 'Clerk', 'Zustand'],
  },
  {
    period: '2023 — Present',
    title: 'AI.Coeff',
    subtitle: 'Founder & Developer',
    description: 'Built an AI automation suite for SMEs: quote generation, invoice automation, lead generation, and email prospecting. End-to-end ownership, architecture, deployment on VPS, client relationships.',
    tags: ['Entrepreneurial', 'Python', 'Flask', 'OpenRouter', 'VPS'],
  },
  {
    period: '2023 — Present',
    title: 'Private Programming Tutor',
    subtitle: 'Java, Python, C#, Algorithms — Israel',
    description: 'Teaching programming and algorithms to university and high-school students. Subjects include Java, Python, C#, data structures, and algorithm design.',
    tags: ['Java', 'Python', 'C#', 'Algorithms'],
  },
  {
    period: '2022',
    title: 'Software Tools Developer',
    subtitle: 'GNF Group — Remote',
    description: 'Developed internal tools to organize and manage customer information for an energy renovation company serving French clients.',
    tags: ['PHP', 'MySQL', 'HTML', 'CSS'],
  },
  {
    period: '2023 — 2026',
    title: 'B.Sc. Computer Science',
    subtitle: 'Ariel University — Israel',
    description: 'Relevant coursework: Algorithms, Operating Systems, AI, Cybersecurity, Data Structures, Networks, Databases, Software Engineering.',
    tags: ['Algorithms', 'OS', 'AI', 'Security', 'Networks'],
    achievements: [
      { label: 'OS', score: 100 },
      { label: 'Software Eng.', score: 97 },
      { label: 'Logic', score: 95 },
      { label: 'Data Structures', score: 94 },
      { label: 'Databases', score: 92 },
    ],
  },
  {
    period: '2019 — 2022',
    title: 'Military Service',
    subtitle: 'Golani Brigade — Combat Soldier',
    description: "Three years of service in one of Israel's elite infantry brigades. Developed leadership, discipline, and the ability to perform under pressure.",
    tags: ['Leadership', 'Teamwork'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 max-w-6xl mx-auto">
      <div className="fade-in mb-14">
        <p className="text-xs font-mono tracking-widest uppercase mb-4" style={{ color: 'var(--accent)' }}>Experience & Education</p>
        <h2 className="text-3xl sm:text-4xl font-semibold" style={{ color: 'var(--color-primary)' }}>Background</h2>
      </div>

      <div className="ml-3 md:ml-0 border-l border-subtle">
        {items.map((item, i) => (
          <div key={i} className={`fade-in fade-in-delay-${Math.min(i + 1, 4)} relative pl-8 pb-12 last:pb-0`}>
            <div
              className="absolute left-0 top-1 -translate-x-[5px] w-2.5 h-2.5 rounded-full border"
              style={{ borderColor: 'var(--border-medium)', background: 'var(--timeline-dot)' }}
            />

            <p className="text-xs font-mono mb-2 tracking-wider" style={{ color: 'var(--color-dim)' }}>{item.period}</p>
            <h3 className="text-lg font-semibold mb-0.5" style={{ color: 'var(--color-primary)' }}>{item.title}</h3>
            <p className="text-sm mb-3" style={{ color: 'var(--accent)' }}>{item.subtitle}</p>
            <p className="text-sm leading-relaxed mb-4 max-w-xl" style={{ color: 'var(--color-secondary)' }}>{item.description}</p>

            {item.achievements && (
              <div className="flex flex-wrap gap-2 mb-4">
                {item.achievements.map((a) => (
                  <span key={a.label} className="text-xs btn-glass rounded-xl px-2.5 py-1">
                    <span style={{ color: 'var(--color-muted)' }}>{a.label}</span>
                    <span className="font-mono font-medium ml-1.5" style={{ color: 'var(--accent)' }}>{a.score}</span>
                  </span>
                ))}
              </div>
            )}

            <div className="flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <span key={tag} className="text-xs font-mono px-3 py-1 tag-glass">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
