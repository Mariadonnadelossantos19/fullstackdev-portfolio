export function ContactField({ label, children }) {
  return (
    <div className="contact-item">
      <div className="contact-item-label">{label}</div>
      {children}
    </div>
  )
}