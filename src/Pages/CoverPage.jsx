import { PortfolioPage } from '../components/PortfolioPage'
import { TerminalHeader } from '../components/TerminalHeader'

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
