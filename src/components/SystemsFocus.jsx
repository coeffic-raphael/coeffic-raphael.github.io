const highlights = [
  'C / C++ from scratch',
  'TCP/UDP servers & sockets',
  'Pthreads & synchronization',
  'Memory debugging — Valgrind',
  'Pipeline & Leader-Follower patterns',
  'RUDP — reliable UDP protocol',
  'MST / Graph algorithms',
  'OS concepts — processes, IPC, scheduling',
]

export default function SystemsFocus() {
  return (
    <section id="systems" className="py-16 px-6 max-w-6xl mx-auto">
      <div className="fade-in glass rounded-2xl p-7 md:p-10 flex flex-col md:flex-row gap-8 items-start">
        <div className="md:w-1/2">
          <p className="text-xs font-mono text-[#59c3d6] tracking-widest uppercase mb-3">Systems & Low-Level</p>
          <h3 className="text-2xl font-semibold text-[#e8edf5] leading-snug mb-4">
            Comfortable below the abstraction layer
          </h3>
          <p className="text-sm text-[#8899aa] leading-relaxed mb-5">
            Beyond web and AI — a significant part of my academic work is in C/C++ systems programming:
            sockets, threads, memory, and OS primitives. Not just theory, actual code running on Linux.
          </p>
          <a
            href="https://github.com/coeffic-raphael/OS_Final"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-[#59c3d6] border border-[#59c3d6]/25 px-3 py-1.5 rounded-lg hover:bg-[#59c3d6]/05 transition-colors font-mono"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            OS Final Project
          </a>
        </div>

        <div className="md:w-1/2 flex flex-wrap gap-2">
          {highlights.map((h) => (
            <span
              key={h}
              className="text-xs text-[#8899aa] bg-white/[0.04] border border-white/[0.06] rounded-lg px-3 py-1.5"
            >
              {h}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
