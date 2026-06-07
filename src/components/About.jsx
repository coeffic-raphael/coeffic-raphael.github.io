export default function About() {
  return (
    <section id="about" className="py-28 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="fade-in">
          <p className="text-xs font-mono tracking-widest uppercase mb-4" style={{ color: 'var(--accent)' }}>About</p>
          <h2 className="text-3xl sm:text-4xl font-semibold leading-tight" style={{ color: 'var(--color-primary)' }}>
            Building software that solves real problems
          </h2>
        </div>

        <div className="fade-in fade-in-delay-2 space-y-5 text-base leading-relaxed" style={{ color: 'var(--color-secondary)' }}>
          <p>
            I'm finishing my B.Sc. in Computer Science at Ariel University in a few months — and I've spent
            that time building things that go beyond coursework: production platforms, AI automation tools,
            a malware detection system, mobile apps, and systems-level C++ projects.
          </p>
          <p>
            My core strength is full-stack and AI development. I'm comfortable taking a product from
            idea to deployment — designing the architecture, writing the backend, wiring the frontend,
            and shipping it. I've done it with real clients and real constraints.
          </p>
          <p style={{ color: 'var(--color-muted)' }}>
            Looking for a full-time position at a tech company where I can contribute from day one.
          </p>
        </div>
      </div>
    </section>
  )
}
