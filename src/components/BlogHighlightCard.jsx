export function BlogHighlightCard({ title, highlight, href, videoSrc, linkLabel = 'Read more →' }) {
  const textBlock = (
    <>
      <h3 className="blog-highlight-title">{title}</h3>
      <p className="blog-highlight-text">{highlight}</p>
      {href != null && href !== '' && (
        <span className="blog-highlight-link">{linkLabel}</span>
      )}
    </>
  )

  const videoBlock =
    videoSrc != null && videoSrc !== '' ? (
      <div className="blog-highlight-video-wrap">
        <video
          className="blog-highlight-video"
          src={videoSrc}
          controls
          playsInline
          preload="metadata"
        />
      </div>
    ) : null

  if (videoSrc != null && videoSrc !== '') {
    return (
      <article className="blog-highlight-card blog-highlight-card-with-media">
        {videoBlock}
        {href != null && href !== '' ? (
          <a href={href} className="blog-highlight-card-body" target="_blank" rel="noopener noreferrer">
            {textBlock}
          </a>
        ) : (
          <div className="blog-highlight-card-body">{textBlock}</div>
        )}
      </article>
    )
  }

  if (href != null && href !== '') {
    return (
      <a href={href} className="blog-highlight-card" target="_blank" rel="noopener noreferrer">
        {textBlock}
      </a>
    )
  }

  return <div className="blog-highlight-card blog-highlight-card-static">{textBlock}</div>
}
