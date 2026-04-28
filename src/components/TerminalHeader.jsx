export function TerminalHeader({ title = 'portfolio — bash — 120×40' }) {
  return (
    <div className="terminal-header">
      <div className="dot dot-r" />
      <div className="dot dot-y" />
      <div className="dot dot-g" />
      <span className="term-title">{title}</span>
    </div>
  )
}
