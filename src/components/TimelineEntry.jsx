export function TimelineEntry({ year, dotClassName = '', showLine = true, role, company, companyAccent = false, period, description }) {
  return (
    <div className="tl-item">
      <div className="tl-left">
        <div className="tl-year">{year}</div>
        <div className={`tl-dot ${dotClassName}`.trim()} />
        {showLine ? <div className="tl-line" /> : null}
      </div>
      <div className="tl-body">
        <div className="tl-role">{role}</div>
        <div className={`tl-company${companyAccent ? ' qa' : ''}`.trim()}>{company}</div>
        <div className="tl-period">{period}</div>
        <div className="tl-desc">{description}</div>
      </div>
    </div>
  )
}
