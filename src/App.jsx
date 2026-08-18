import { useEffect } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.08 }
    )
    const els = document.querySelectorAll('.fade-in')
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

function useLiquidGlass() {
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return

    const selector = '.glass, .glass-strong, .btn-glass, .tag-glass, .liquid-toggle'
    const getGlassElements = (target) => {
      const elements = []
      let current = target instanceof Element ? target : target?.parentElement

      while (current) {
        if (current.matches?.(selector)) elements.push(current)
        current = current.parentElement
      }

      return elements
    }

    let frame
    const updateLight = (event) => {
      const glasses = getGlassElements(event.target)
      if (!glasses.length) return

      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        glasses.forEach((glass) => {
          const rect = glass.getBoundingClientRect()
          glass.style.setProperty('--glass-x', `${event.clientX - rect.left}px`)
          glass.style.setProperty('--glass-y', `${event.clientY - rect.top}px`)
          glass.style.setProperty('--glass-xp', `${((event.clientX - rect.left) / rect.width) * 100}%`)
          glass.style.setProperty('--glass-yp', `${((event.clientY - rect.top) / rect.height) * 100}%`)
        })
      })
    }

    const resetLight = (event) => {
      getGlassElements(event.target).forEach((glass) => {
        if (event.relatedTarget instanceof Node && glass.contains(event.relatedTarget)) return

        glass.style.removeProperty('--glass-x')
        glass.style.removeProperty('--glass-y')
        glass.style.removeProperty('--glass-xp')
        glass.style.removeProperty('--glass-yp')
      })
    }

    document.addEventListener('pointermove', updateLight, { passive: true })
    document.addEventListener('pointerout', resetLight, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      document.removeEventListener('pointermove', updateLight)
      document.removeEventListener('pointerout', resetLight)
    }
  }, [])
}

function Portfolio() {
  useScrollReveal()
  useLiquidGlass()
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  )
}
