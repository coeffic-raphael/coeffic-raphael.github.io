export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 max-w-6xl mx-auto">
      <div className="glass-strong rounded-3xl p-8 md:p-14 text-center relative overflow-hidden">
        <div className="fade-in max-w-xl mx-auto relative">
          <p className="text-xs font-mono tracking-widest uppercase mb-4" style={{ color: 'var(--accent)' }}>Contact</p>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4" style={{ color: 'var(--color-primary)' }}>Let's talk</h2>
          <p className="leading-relaxed mb-10" style={{ color: 'var(--color-secondary)' }}>
            I'm open to full-time positions, freelance missions, and interesting projects.
            Reach out directly — I'll get back to you quickly.
          </p>

          <a
            href="mailto:racoeffic@gmail.com"
            className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-2xl mb-10 transition-all hover:scale-[1.02]"
            style={{
              background: `linear-gradient(135deg, var(--accent), var(--accent-dark))`,
              color: 'var(--accent-contrast)',
              boxShadow: `0 0 32px var(--accent-glow), inset 0 1px 0 rgba(255,255,255,0.3)`,
            }}
          >
            racoeffic@gmail.com
          </a>

          <div className="flex justify-center items-center gap-6 flex-wrap">
            {[
              {
                href: 'https://github.com/coeffic-raphael',
                label: 'GitHub',
                icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>,
              },
              {
                href: 'https://www.linkedin.com/in/raphael-coeffic-77060b318',
                label: 'LinkedIn',
                icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
              },
              {
                href: '/Raphael_Coeffic_CV.pdf',
                label: 'Download CV',
                download: true,
                icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17"/></svg>,
              },
            ].map((item, i, arr) => (
              <>
                <a
                  key={item.label}
                  href={item.href}
                  target={item.download ? undefined : '_blank'}
                  rel={item.download ? undefined : 'noopener noreferrer'}
                  download={item.download}
                  className="flex items-center gap-2 text-sm transition-colors"
                  style={{ color: 'var(--color-muted)' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--color-primary)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--color-muted)'}
                >
                  {item.icon}
                  {item.label}
                </a>
                {i < arr.length - 1 && (
                  <span key={`sep-${i}`} style={{ color: 'var(--border-subtle)' }}>|</span>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
