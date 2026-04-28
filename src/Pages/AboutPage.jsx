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
        <StatCard value="2+" label="YEARS EXP" />
        <StatCard value="15+" label="PROJECTS SHIPPED" />
        <StatCard value="500+" label="TEST CASES WRITTEN" />
      </div>
      <div className="about-layout">
        <div className="about-text">
          <span className="hl">/**</span>
          <br />
          &nbsp;* Hi, I&apos;m <span className="hl">Maria Donna Fidelino</span>, a{' '}
          <span className="hl2">Full Stack Developer</span> with
          <br />
          &nbsp;* <span className="hl">2 years of experience</span> in
          <br />
          &nbsp;* building and testing web and hybrid applications.
          <br />
          &nbsp;*
          <br />
          &nbsp;* I specialize in <span className="hl2">Laravel</span>, <span className="hl2">MERN stack</span>,
          <br />
          &nbsp;* <span className="hl2">CodeIgniter</span>, and both <span className="hl3">SQL</span> and{' '}
          <span className="hl3">NoSQL</span> databases.
          <br />
          &nbsp;*
          <br />
          &nbsp;* I independently handle projects from planning
          <br />
          &nbsp;* to deployment, delivering complete, functional, and
          <br />
          &nbsp;* reliable systems that meet organizational requirements.
          <br />
          &nbsp;* This includes system analysis, QA, and project coordination
          <br />
          &nbsp;* as part of full-stack ownership in lean teams.
          <br />
          &nbsp;*
          <br />
          &nbsp;* I focus on building practical and efficient solutions
          <br />
          &nbsp;* that improve workflows and support real-world use.
          <br />
          &nbsp;*
          <br />
          &nbsp;* I ensure
          <br />
          &nbsp;* systems are not only functional but also well-tested
          <br />
          &nbsp;* and production-ready.
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
