export default function Footer() {
  return (
    <footer className="border-t py-8 px-6 border-subtle">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm" style={{ color: 'var(--color-dim)' }}>
        <span className="font-mono">Raphael Coeffic — {new Date().getFullYear()}</span>
        <span>Built with React + Vite + Tailwind</span>
      </div>
    </footer>
  )
}
