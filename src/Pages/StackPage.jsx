import { PortfolioPage } from '../components/PortfolioPage'
import { SectionHeading } from '../components/SectionHeading'

export function StackPage({ pageIndex, active }) {
  return (
    <PortfolioPage pageIndex={pageIndex} active={active}>
      <SectionHeading
        comment="// stack.json — technology configuration"
        label="// 02 — tech stack"
        title={
          <>
            Tech <span>Stack</span>
          </>
        }
      />
      <div className="tech-grid">
        <div className="tech-group">
          <div className="tech-group-title">// frontend</div>
          <span className="tech-badge fe">React</span>
          <span className="tech-badge fe">Next.js</span>
          <span className="tech-badge fe">TypeScript</span>
          <span className="tech-badge fe">Vue.js</span>
          <span className="tech-badge fe">TailwindCSS</span>
          <span className="tech-badge fe">JavaScript</span>
        </div>
        <div className="tech-group">
          <div className="tech-group-title">// backend</div>
          <span className="tech-badge">Node.js</span>
          <span className="tech-badge">Express</span>
          <span className="tech-badge">Python</span>
          <span className="tech-badge">Django</span>
          <span className="tech-badge">REST API</span>
          <span className="tech-badge">GraphQL</span>
        </div>
        <div className="tech-group">
          <div className="tech-group-title">// database</div>
          <span className="tech-badge db">PostgreSQL</span>
          <span className="tech-badge db">MySQL</span>
          <span className="tech-badge db">MongoDB</span>
          <span className="tech-badge db">Redis</span>
          <span className="tech-badge db">Prisma</span>
        </div>
        <div className="tech-group">
          <div className="tech-group-title">// tools & devops</div>
          <span className="tech-badge tool">Git</span>
          <span className="tech-badge tool">Docker</span>
          <span className="tech-badge tool">GitHub Actions</span>
          <span className="tech-badge tool">Jira</span>
          <span className="tech-badge tool">Postman</span>
          <span className="tech-badge tool">Figma</span>
        </div>
      </div>
    </PortfolioPage>
  )
}
