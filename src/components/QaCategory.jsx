export function QaCategory({ title, children }) {
  return (
    <div className="qa-category">
      <div className="qa-cat-title">{title}</div>
      {children}
    </div>
  )
}
