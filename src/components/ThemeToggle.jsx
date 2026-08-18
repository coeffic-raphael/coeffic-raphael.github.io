import { useTheme } from '../contexts/ThemeContext'

function SunIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="4"/>
      <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
    </svg>
  )
}

export default function ThemeToggle() {
  const { isDark, toggle } = useTheme()

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      aria-pressed={!isDark}
      className={`liquid-toggle ${isDark ? 'is-dark' : 'is-light'}`}
    >
      <span className="liquid-toggle-label">
        {isDark ? 'Dark' : 'Light'}
      </span>
      <span className="liquid-toggle-knob">
        <span className="liquid-toggle-icon">
          {isDark ? <MoonIcon /> : <SunIcon />}
        </span>
      </span>
    </button>
  )
}
