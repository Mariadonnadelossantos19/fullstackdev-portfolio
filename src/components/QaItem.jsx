export function QaItem({ title, subtitle }) {
  return (
    <div className="qa-item">
      <span className="qa-check">✓</span>
      <div className="qa-item-text">
        {title}
        {subtitle != null && <div className="qa-item-sub">{subtitle}</div>}
      </div>
    </div>
  )
}
