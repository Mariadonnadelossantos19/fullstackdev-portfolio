import { PortfolioPage } from '../components/PortfolioPage'
import { SectionHeading } from '../components/SectionHeading'
import { StatCard } from '../components/StatCard'
import profileImage from '../assets/img/profile2.png'

export function AboutPage({ pageIndex, active }) {
  return (
    <PortfolioPage pageIndex={pageIndex} active={active}>
      <SectionHeading
        comment="/* about.md — personal introduction */"
        label="// 01 — readme"
        title={
          <>
            About <span>Me</span>
          </>
        }
      />
      <div className="stats-row">
        <StatCard value="3+" label="YEARS EXP" />
        <StatCard value="15+" label="PROJECTS SHIPPED" />
        <StatCard value="500+" label="TEST CASES WRITTEN" />
      </div>
      <div className="about-layout">
        <div className="about-text">
          <span className="hl">/**</span>
          <br />
          &nbsp;* Hi, I&apos;m <span className="hl">Maria Donna</span> — a{' '}
          <span className="hl2">Full Stack Developer</span> and
          <br />
          &nbsp;* <span className="hl3">QA Engineer</span> who lives at the intersection of
          <br />
          &nbsp;* building and breaking software.
          <br />
          &nbsp;*
          <br />
          &nbsp;* I architect scalable web applications from
          <br />
          &nbsp;* <span className="hl">database schemas</span> to <span className="hl2">pixel-perfect UIs</span>,
          <br />
          &nbsp;* while maintaining a rigorous testing mindset
          <br />
          &nbsp;* that catches bugs before users ever see them.
          <br />
          &nbsp;*
          <br />
          &nbsp;* I believe great software is written with empathy:
          <br />
          &nbsp;* empathy for the <span className="hl3">user</span>, the <span className="hl">team</span>, and the next
          <br />
          &nbsp;* developer who inherits your code.
          <br />
          &nbsp;* <span className="hl">*/</span>
        </div>

        <figure className="about-photo-card">
          <img src={profileImage} alt="Maria Donna portrait" className="about-photo" loading="lazy" />
        </figure>
      </div>
    </PortfolioPage>
  )
}
