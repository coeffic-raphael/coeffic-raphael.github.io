export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-6 pt-16 max-w-6xl mx-auto relative">
      <div className="max-w-3xl relative">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--accent)' }} />
          <p className="text-xs font-mono tracking-widest uppercase" style={{ color: 'var(--accent)' }}>
            Open to full-time positions
          </p>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold leading-[1.08] tracking-tight mb-6" style={{ color: 'var(--color-primary)' }}>
          Raphael<br />
          <span style={{ color: 'var(--color-muted)' }}>Coeffic</span>
        </h1>

        <p className="text-xl sm:text-2xl font-light leading-relaxed mb-4 max-w-2xl" style={{ color: 'var(--color-secondary)' }}>
          I build things that work.
        </p>

        <p className="text-base leading-relaxed mb-12 max-w-xl" style={{ color: 'var(--color-muted)' }}>
          Full-stack development, AI automation, and backend engineering —
          building products that ship and systems that hold up.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-2xl transition-all hover:scale-[1.02]"
            style={{
              background: `linear-gradient(135deg, var(--accent), var(--accent-dark))`,
              color: '#fff',
              boxShadow: `0 0 24px var(--accent-glow), inset 0 1px 0 rgba(255,255,255,0.3)`,
            }}
          >
            View Projects
          </a>
          <a
            href="/Raphael_Coeffic_CV.pdf"
            download
            className="btn-glass inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 text-sm"
            style={{ color: 'var(--color-primary)' }}
          >
            Download CV
          </a>
          <a
            href="https://github.com/coeffic-raphael"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glass inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 text-sm"
            style={{ color: 'var(--color-secondary)' }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/raphael-coeffic-77060b318"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glass inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 text-sm"
            style={{ color: 'var(--color-secondary)' }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center" style={{ color: 'var(--color-dim)' }}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="animate-bounce">
          <path d="M10 4v12M4 10l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  )
}
