export function SectionHeading({ comment, label, title, showDivider = true }) {
  return (
    <>
      {comment != null && (
        <>
          <div className="comment">{comment}</div>
          <br />
        </>
      )}
      {label != null && <div className="section-label">{label}</div>}
      {title != null && <div className="section-title">{title}</div>}
      {showDivider && <div className="divider" />}
    </>
  )
}
