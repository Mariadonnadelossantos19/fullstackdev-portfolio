import { PortfolioPage } from '../components/PortfolioPage'
import { SectionHeading } from '../components/SectionHeading'
import { TimelineEntry } from '../components/TimelineEntry'

export function TimelinePage({ pageIndex, active }) {
  return (
    <PortfolioPage pageIndex={pageIndex} active={active}>
      <SectionHeading
        comment="// timeline.yml — work experience"
        label="// 05 — experience"
        title={
          <>
            Career <span>Timeline</span>
          </>
        }
      />
      <div className="timeline">
        <TimelineEntry
          year="2024"
          showLine
          role="Senior Full Stack Developer"
          company="TechCorp Solutions"
          period="Jan 2024 — Present · Full-time"
          description="Led development of microservices architecture serving 50k+ users. Reduced API response time by 40% through Redis caching and database optimization."
        />
        <TimelineEntry
          year="2022"
          dotClassName="qa"
          showLine
          role="QA Engineer & Full Stack Dev"
          company="Digital Innovate PH"
          companyAccent
          period="Jun 2022 — Dec 2023 · Full-time"
          description="Built and maintained automated test suites while contributing to frontend and backend features. Wrote 500+ test cases with 95% coverage."
        />
        <TimelineEntry
          year="2021"
          showLine={false}
          role="Junior Web Developer"
          company="StartupHub Manila"
          period="Mar 2021 — May 2022 · Full-time"
          description="Developed responsive web applications with React and Node.js. Collaborated with designers to implement pixel-perfect UI components."
        />
      </div>
    </PortfolioPage>
  )
}
