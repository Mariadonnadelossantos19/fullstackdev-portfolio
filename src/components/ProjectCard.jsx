export function ProjectCard({ previewClass, icon, title, description, tags, url }) {
  return (
    <article className="proj-card">
      <div className={`proj-preview ${previewClass}`}>
        <div className="proj-icon">{icon}</div>
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
