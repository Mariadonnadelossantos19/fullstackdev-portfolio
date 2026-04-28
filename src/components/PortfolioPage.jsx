export function PortfolioPage({ pageIndex, active, className = '', children }) {
  const classes = ['page', className, active ? 'active' : ''].filter(Boolean).join(' ')

  return (
    <section
      id={`page-${pageIndex}`}
      role="tabpanel"
      aria-labelledby={`tab-${pageIndex}`}
      className={classes}
      hidden={!active}
    >
      <div className="page-content">{children}</div>
    </section>
  )
}
