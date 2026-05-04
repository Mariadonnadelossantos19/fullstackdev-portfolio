export function TestimonialCard({ photo, name, role, quote }) {
  return (
    <article className="testimonial-card">
      <div className="testimonial-avatar-wrap">
        <img
          src={photo}
          alt={`${name} — testimonial`}
          className="testimonial-avatar"
          loading="lazy"
          width={72}
          height={72}
        />
      </div>
      <div className="testimonial-body">
        <blockquote className="testimonial-quote">&ldquo;{quote}&rdquo;</blockquote>
        <footer className="testimonial-meta">
          <span className="testimonial-name">{name}</span>
          {role != null && role !== '' && <span className="testimonial-role">{role}</span>}
        </footer>
      </div>
    </article>
  )
}
