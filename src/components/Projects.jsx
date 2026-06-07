import { projects } from '../data/projects'

function ProjectCard({ project, index }) {
  return (
    <article className={`fade-in fade-in-delay-${Math.min(index + 1, 4)} glass glass-hover rounded-3xl p-7 flex flex-col group`}>
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <span className="text-xs font-mono tracking-wider uppercase" style={{ color: 'var(--color-dim)' }}>
            {project.type}
          </span>
          <h3 className="text-lg font-semibold mt-1 transition-colors" style={{ color: 'var(--color-primary)' }}>
            {project.title}
          </h3>
          <p className="text-sm mt-0.5" style={{ color: 'var(--color-secondary)' }}>{project.subtitle}</p>
        </div>
        {project.highlight && (
          <span className="shrink-0 text-xs font-mono px-2 py-1 rounded-lg tag-accent">
            Featured
          </span>
        )}
      </div>

      <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: 'var(--color-secondary)' }}>
        {project.description}
      </p>

      <div className="pt-5 border-t space-y-4 border-subtle">
        <div>
          <p className="text-xs uppercase tracking-wider mb-2 font-mono" style={{ color: 'var(--color-dim)' }}>What it demonstrates</p>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>{project.what_it_shows}</p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span key={tech} className="text-xs font-mono px-3 py-1 tag-glass" style={{ color: 'var(--accent)' }}>
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-1">
          {project.private && (
            <span className="text-xs italic" style={{ color: 'var(--color-dim)' }}>
              Private — source code not publicly available due to confidentiality
            </span>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs flex items-center gap-1.5 transition-colors"
              style={{ color: 'var(--color-secondary)' }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              View on GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 max-w-6xl mx-auto">
      <div className="fade-in mb-14">
        <p className="text-xs font-mono tracking-widest uppercase mb-4" style={{ color: 'var(--accent)' }}>Projects</p>
        <h2 className="text-3xl sm:text-4xl font-semibold" style={{ color: 'var(--color-primary)' }}>Selected work</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
