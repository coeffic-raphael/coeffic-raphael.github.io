import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 max-w-6xl mx-auto">
      <div className="fade-in mb-14">
        <p className="text-xs font-mono tracking-widest uppercase mb-4" style={{ color: 'var(--accent)' }}>Skills</p>
        <h2 className="text-3xl sm:text-4xl font-semibold" style={{ color: 'var(--color-primary)' }}>What I work with</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillGroups.map((group, i) => (
          <div
            key={group.label}
            className={`fade-in fade-in-delay-${Math.min(i + 1, 4)} glass glass-hover rounded-3xl p-6`}
          >
            <p className="text-xs font-mono tracking-widest uppercase mb-4" style={{ color: 'var(--accent)' }}>
              {group.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="text-sm px-3 py-1 tag-glass">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
