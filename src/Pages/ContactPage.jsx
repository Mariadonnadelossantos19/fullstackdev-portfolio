import { ContactField } from '../components/ContactField'
import { PortfolioPage } from '../components/PortfolioPage'
import { SectionHeading } from '../components/SectionHeading'

export function ContactPage({ pageIndex, active }) {
  return (
    <PortfolioPage pageIndex={pageIndex} active={active} className="contact-page">
      <SectionHeading
        comment="// contact.md — let's work together"
        label="// 06 — get in touch"
        title={
          <>
            Let&apos;s <span>Connect</span>
          </>
        }
      />
      <div className="contact-intro">
        <span style={{ color: 'var(--green)' }}>$</span> echo &quot;Open to full-time, freelance &
        remote opportunities.&quot;
        <br />
        <span style={{ color: 'var(--green)' }}>→</span>{' '}
        <span style={{ color: 'var(--text)' }}>
          Open to full-time, freelance & remote opportunities.
        </span>
      </div>
      <div className="readme-badge badge-green">available</div>
      <div className="readme-badge badge-blue">remote-friendly</div>
      <div className="readme-badge badge-amber">open-to-relocation</div>
      <div className="contact-grid" style={{ marginTop: 20 }}>
        <ContactField label="EMAIL">
          <a className="contact-item-val" href="mariadonna031@gmail.com">
            maria@fidelino.dev
          </a>
        </ContactField>
        <ContactField label="PHONE">
          <div className="contact-item-val">09664863891</div>
        </ContactField>
        <ContactField label="LINKEDIN">
          <div className="contact-item-val">https://www.linkedin.com/in/fidelinomadonna</div>
        </ContactField>
        <ContactField label="GITHUB">
          <a
            className="contact-item-val"
            href="https://github.com/Mariadonnadelossantos19"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/mdfidelino
          </a>
        </ContactField>
        <ContactField label="FACEBOOK">
          <div className="contact-item-val">https://www.facebook.com/thomas.kuc.737/</div>
        </ContactField>
      </div>
      <button type="button" className="hire-btn">
        <span>$ hire --candidate=&quot;Maria Donna Fidelino&quot; --status=urgent</span>
      </button>
    </PortfolioPage>
  )
}
