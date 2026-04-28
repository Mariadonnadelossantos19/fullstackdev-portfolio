export function ProjectCard({ previewClass, icon, title, description, tags }) {
  return (
    <article className="proj-card">
      <div className={`proj-preview ${previewClass}`}>
        <div className="proj-icon">{icon}</div>
      </div>
      <div className="proj-body">
        <div className="proj-title">{title}</div>
        <div className="proj-desc">{description}</div>
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
