export function PortfolioStatusBar({ lineNumber }) {
  return (
    <div className="status-bar">
      <div className="status-left">
        <span>
          <span className="status-dot" /> portfolio v1.0.0
        </span>
        <span>UTF-8</span>
        <span>TypeScript JSX</span>
      </div>
      <div className="status-right">
        <span>
          Ln <span id="ln-num">{lineNumber}</span>
        </span>
        <span>Col 1</span>
        <span>🇵🇭 Manila, PH</span>
      </div>
    </div>
  )
}
