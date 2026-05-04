export function BlogHighlightCard({ title, highlight, href, linkLabel = 'Read more →' }) {
  const content = (
    <>
      <h3 className="blog-highlight-title">{title}</h3>
      <p className="blog-highlight-text">{highlight}</p>
      {href != null && href !== '' && (
        <span className="blog-highlight-link">{linkLabel}</span>
      )}
    </>
  )

  if (href != null && href !== '') {
    return (
      <a href={href} className="blog-highlight-card" target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    )
  }

  return <div className="blog-highlight-card blog-highlight-card-static">{content}</div>
}
