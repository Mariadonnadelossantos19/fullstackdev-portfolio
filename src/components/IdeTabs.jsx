import { useState } from 'react'
import { PAGE_NAMES } from '../constants/portfolioMeta'

export function IdeTabs({ current, onSelect }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleSelect = (index) => {
    onSelect(index)
    setMenuOpen(false)
  }

  return (
    <>
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

      <div className="ide-tabs-mobile">
        <button
          type="button"
          className={`burger-btn${menuOpen ? ' open' : ''}`}
          aria-label="Toggle section menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-sections-menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="burger-lines" aria-hidden />
          {PAGE_NAMES[current]}
        </button>
        {menuOpen && (
          <div id="mobile-sections-menu" className="mobile-sections-menu" role="menu" aria-label="Portfolio sections">
            {PAGE_NAMES.map((name, i) => (
              <button
                key={name}
                type="button"
                className={`mobile-menu-item${current === i ? ' active' : ''}`}
                role="menuitemradio"
                aria-checked={current === i}
                onClick={() => handleSelect(i)}
              >
                <span className="tab-dot" aria-hidden />
                {name}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
