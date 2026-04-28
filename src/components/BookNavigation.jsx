import { PAGE_NAMES } from '../constants/portfolioMeta'

export function BookNavigation({ current, totalPages, onNavigate }) {
  const pageNumber = String(current + 1).padStart(2, '0')
  const totalNumber = String(totalPages).padStart(2, '0')
  const pageName = PAGE_NAMES[current] ?? ''

  return (
    <div className="nav-arrows">
      <button
        type="button"
        className="nav-btn"
        onClick={() => onNavigate(-1)}
        disabled={current === 0}
      >
        ← prev.page
      </button>
      <span className="page-indicator" aria-live="polite">
        <span className="page-indicator-index">
          {pageNumber} / {totalNumber}
        </span>
        <span className="page-indicator-sep"> — </span>
        <span className="page-indicator-name">{pageName}</span>
      </span>
      <button
        type="button"
        className="nav-btn"
        onClick={() => onNavigate(1)}
        disabled={current === totalPages - 1}
      >
        next.page →
      </button>
    </div>
  )
}
