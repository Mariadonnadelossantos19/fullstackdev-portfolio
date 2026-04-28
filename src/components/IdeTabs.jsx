import { PAGE_NAMES } from '../constants/portfolioMeta'

export function IdeTabs({ current, onSelect }) {
  return (
    <div className="ide-tabs" role="tablist" aria-label="Portfolio sections">
      {PAGE_NAMES.map((name, i) => (
        <button
          key={name}
          type="button"
          role="tab"
          aria-selected={current === i}
          id={`tab-${i}`}
          aria-controls={`page-${i}`}
          className={`tab${current === i ? ' active' : ''}`}
          onClick={() => onSelect(i)}
        >
          <span className="tab-dot" aria-hidden />
          {name}
        </button>
      ))}
    </div>
  )
}
