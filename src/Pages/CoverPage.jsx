import { PortfolioPage } from '../components/PortfolioPage'
import { TerminalHeader } from '../components/TerminalHeader'
import profileImage from '../assets/img/profile2.png'

export function CoverPage({ pageIndex, active, goToPage }) {
  return (
    <PortfolioPage pageIndex={pageIndex} active={active} className="cover-page">
      <TerminalHeader />
      <div className="comment">// maria-donna-fidelino/portfolio — main branch</div>
      <br />
      <div className="intro-shell">
        <span className="path">~/portfolio</span> <span className="branch">(main)</span> ${' '}
        <span style={{ color: 'var(--text)' }}>cat intro.txt</span>
      </div>
      <div className="big-name">
        Maria Donna
        <br />
        Fidelino
      </div>
      <div className="title-line">// Full Stack Developer & QA Engineer</div>
      <div className="cover-layout">
        <div className="cover-copy">
          <div className="tagline-block">
            <span className="hl-muted">const</span> <span className="hl-cyan">developer</span> = {'{'}
            <br />
            &nbsp;&nbsp;<span className="hl-amber">passion</span>:{' '}
            <span className="hl-green">&quot;building seamless digital products&quot;</span>,
            <br />
            &nbsp;&nbsp;<span className="hl-amber">approach</span>:{' '}
            <span className="hl-green">&quot;code with precision, test with obsession&quot;</span>,
            <br />
            &nbsp;&nbsp;<span className="hl-amber">status</span>:{' '}
            <span className="hl-green">&quot;open to opportunities&quot;</span>{' '}
            <span className="blink" aria-hidden>
              ▌
            </span>
            <br />
            {'}'};
          </div>
          <div className="cover-tech-panel" aria-label="Frameworks and programming languages">
            <div className="cover-tech-title">// frameworks & languages</div>
            <div className="cover-tech-grid">
              <span className="cover-tech-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                  alt="JavaScript"
                  className="cover-tech-icon"
                  loading="lazy"
                />
                JavaScript
              </span>
              <span className="cover-tech-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                  alt="TypeScript"
                  className="cover-tech-icon"
                  loading="lazy"
                />
                TypeScript
              </span>
              <span className="cover-tech-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
                  alt="React"
                  className="cover-tech-icon"
                  loading="lazy"
                />
                React
              </span>
              <span className="cover-tech-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                  alt="Next.js"
                  className="cover-tech-icon"
                  loading="lazy"
                />
                Next.js
              </span>
              <span className="cover-tech-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
                  alt="Node.js"
                  className="cover-tech-icon"
                  loading="lazy"
                />
                Node.js
              </span>
              <span className="cover-tech-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
                  alt="PostgreSQL"
                  className="cover-tech-icon"
                  loading="lazy"
                />
                PostgreSQL
              </span>
            </div>
          </div>
        </div>
        <figure className="cover-photo-card">
          <img src={profileImage} alt="Maria Donna professional portrait" className="cover-photo" loading="lazy" />
          <figcaption className="cover-photo-meta">profile.preview.tsx</figcaption>
        </figure>
      </div>
      <div className="available-tag">
        <div className="avail-pulse" />
        available for hire — 2026
      </div>
      <div style={{ marginTop: 24 }}>
        <button type="button" className="cta-btn" onClick={() => goToPage(1)}>
          $ open portfolio.book --interactive{' '}
          <span className="blink" aria-hidden>
            ▌
          </span>
        </button>
      </div>
    </PortfolioPage>
  )
}
