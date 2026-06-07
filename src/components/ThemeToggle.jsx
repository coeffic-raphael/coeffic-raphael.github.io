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
      aria-label="Toggle theme"
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        width: '96px',
        height: '36px',
        borderRadius: '999px',
        cursor: 'pointer',
        border: 'none',
        padding: 0,
        flexShrink: 0,
        background: isDark
          ? 'rgba(255,255,255,0.06)'
          : 'rgba(180,185,200,0.35)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: isDark
          ? 'inset 0 1px 0 rgba(255,255,255,0.10), inset 0 -1px 0 rgba(0,0,0,0.15), 0 4px 16px rgba(0,0,0,0.25)'
          : 'inset 0 1.5px 0 rgba(255,255,255,0.80), inset 0 -1px 0 rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.08)',
        transition: 'background 0.35s ease, box-shadow 0.35s ease',
        outline: 'none',
      }}
    >
      {/* Label text */}
      <span style={{
        position: 'absolute',
        left: isDark ? '12px' : 'auto',
        right: isDark ? 'auto' : '12px',
        fontSize: '11px',
        fontWeight: '500',
        letterSpacing: '0.02em',
        color: isDark ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.40)',
        userSelect: 'none',
        transition: 'opacity 0.2s ease',
        pointerEvents: 'none',
      }}>
        {isDark ? 'Dark' : 'Light'}
      </span>

      {/* Glass bubble knob */}
      <div style={{
        position: 'absolute',
        /* light = left side, dark = right side */
        left: isDark ? 'calc(100% - 42px)' : '2px',
        width: '40px',
        height: '40px',
        borderRadius: '999px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'left 0.38s cubic-bezier(0.34, 1.4, 0.64, 1)',
        background: isDark
          ? 'rgba(50,55,75,0.85)'
          : 'rgba(255,255,255,0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: isDark
          ? '1px solid rgba(255,255,255,0.14)'
          : '1px solid rgba(255,255,255,0.95)',
        boxShadow: isDark
          ? 'inset 0 1.5px 0 rgba(255,255,255,0.20), inset 0 -1px 0 rgba(0,0,0,0.20), 0 4px 12px rgba(0,0,0,0.40)'
          : 'inset 0 2px 0 rgba(255,255,255,1), inset 0 -1px 0 rgba(0,0,0,0.05), 0 4px 14px rgba(0,0,0,0.14)',
        color: isDark ? 'rgba(255,255,255,0.75)' : 'rgba(80,90,110,0.85)',
        // Specular sheen on the bubble
        overflow: 'hidden',
      }}>
        {/* Specular highlight */}
        <div style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          background: 'linear-gradient(170deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.10) 40%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <span style={{ position: 'relative', zIndex: 1 }}>
          {isDark ? <MoonIcon /> : <SunIcon />}
        </span>
      </div>
    </button>
  )
}
