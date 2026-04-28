export function ProjectCard({
  previewClass,
  icon,
  title,
  description,
  tags,
  url,
  previewImage,
  previewImageAlt = 'Project preview',
}) {
  return (
    <article className="proj-card">
      <div className={`proj-preview ${previewClass}${previewImage ? ' has-image' : ''}`}>
        {previewImage ? (
          <img src={previewImage} alt={previewImageAlt} className="proj-preview-image" loading="lazy" />
        ) : null}
        <div className={`proj-icon${previewImage ? ' has-image' : ''}`}>{icon}</div>
      </div>
      <div className="proj-body">
        <div className="proj-title">{title}</div>
        <div className="proj-desc">{description}</div>
        {url ? (
          <a className="proj-link" href={url} target="_blank" rel="noopener noreferrer">
            live.demo
          </a>
        ) : null}
        <div className="proj-tags">
          {tags.map((tag) => (
            <span key={tag} className="proj-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
