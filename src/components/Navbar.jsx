import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'

const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 px-3 pt-3 pointer-events-none"
    >
      <nav className={`glass nav-liquid max-w-5xl mx-auto px-4 sm:px-5 h-14 flex items-center justify-between pointer-events-auto ${scrolled ? 'nav-liquid-scrolled' : ''}`}>
        <a href="#hero" className="font-semibold tracking-tight" style={{ color: 'var(--color-primary)' }}>
          RC<span style={{ color: 'var(--accent)' }}>.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm transition-colors"
                style={{ color: 'var(--color-secondary)' }}
                onMouseEnter={e => e.target.style.color = 'var(--color-primary)'}
                onMouseLeave={e => e.target.style.color = 'var(--color-secondary)'}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="/Raphael_Coeffic_CV.pdf"
            download
            className="btn-glass rounded-2xl px-4 py-1.5 text-sm"
            style={{ color: 'var(--color-primary)' }}
          >
            Download CV
          </a>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: 'var(--color-secondary)' }}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden glass nav-mobile-liquid max-w-5xl mx-auto mt-2 px-6 py-5 pointer-events-auto">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm"
                  style={{ color: 'var(--color-secondary)' }}
                >
                  {link}
                </a>
              </li>
            ))}
            <li>
              <a href="/Raphael_Coeffic_CV.pdf" download className="text-sm" style={{ color: 'var(--accent)' }}>
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
