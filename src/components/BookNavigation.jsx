import { PAGE_LABELS } from '../constants/portfolioMeta'

export function BookNavigation({ current, totalPages, onNavigate }) {
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
        {PAGE_LABELS[current]}
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
