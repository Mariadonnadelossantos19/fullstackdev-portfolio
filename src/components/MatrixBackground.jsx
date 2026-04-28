import { MATRIX_COLS } from '../constants/portfolioMeta'

export function MatrixBackground() {
  return (
    <div className="matrix-bg" aria-hidden>
      {MATRIX_COLS.map((col) => (
        <div
          key={col.left}
          className="matrix-col"
          style={{
            left: `${col.left}px`,
            animationDuration: col.duration,
            animationDelay: col.delay,
          }}
        >
          {col.text}
        </div>
      ))}
    </div>
  )
}
