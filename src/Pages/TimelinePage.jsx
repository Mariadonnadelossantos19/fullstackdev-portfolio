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
          year="2025"
          showLine
          role="Full Stack Developer"
          company="Department of Science and Technology-MIMAROPA"
          period="August 2025 — Present · Full-time"
          description="Lead end-to-end development and maintenance of systems for DOST-MIMAROPA using HTML, React, CSS, Bootstrap, Tailwind CSS, Node.js, Express, Python, Django, JavaScript, Laravel, PHP, and CodeIgniter with MySQL and MongoDB. As the primary developer, I also handle QA validation and delivery workflows using Git, GitHub Actions, Postman, Insomnia, and Figma to ship reliable, user-focused releases."
        />
        <TimelineEntry
          year="2025"
          dotClassName="qa"
          showLine
          role="QA Analyst"
          company="Department of Science and Technology-Marinduque"
          companyAccent
          period="January 2025 — May 2025 · Internship"
          description="Developed and maintained automated test suites while supporting frontend and backend feature delivery. Authored 500+ test cases and helped sustain high test coverage to strengthen release quality and reduce production defects."
        />
        
      </div>
    </PortfolioPage>
  )
}
