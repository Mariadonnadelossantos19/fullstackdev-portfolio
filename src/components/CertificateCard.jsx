export function CertificateCard({ title, issuer, imageSrc, href, imageAlt }) {
  const alt = imageAlt ?? `${title} certificate`
  const hasImage = imageSrc != null && imageSrc !== ''

  return (
    <article className="certificate-card">
      {hasImage ? (
        <div className="certificate-thumb">
          {href != null && href !== '' ? (
            <a href={href} target="_blank" rel="noopener noreferrer" className="certificate-thumb-link">
              <img src={imageSrc} alt={alt} className="certificate-img" loading="lazy" />
            </a>
          ) : (
            <img src={imageSrc} alt={alt} className="certificate-img" loading="lazy" />
          )}
        </div>
      ) : (
        href != null &&
        href !== '' && (
          <div className="certificate-thumb certificate-thumb-placeholder">
            <a href={href} target="_blank" rel="noopener noreferrer" className="certificate-placeholder-link">
              Open credential
            </a>
          </div>
        )
      )}
      <div className="certificate-body">
        <h3 className="certificate-title">{title}</h3>
        {issuer != null && issuer !== '' && <p className="certificate-issuer">{issuer}</p>}
        {href != null && href !== '' && (
          <a href={href} className="certificate-link" target="_blank" rel="noopener noreferrer">
            View / verify link
          </a>
        )}
      </div>
    </article>
  )
}
