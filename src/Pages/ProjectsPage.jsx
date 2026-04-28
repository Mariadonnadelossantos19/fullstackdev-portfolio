import { PortfolioPage } from '../components/PortfolioPage'
import { ProjectCard } from '../components/ProjectCard'
import { SectionHeading } from '../components/SectionHeading'

const PROJECTS = [
  {
    previewClass: 'p1',
    icon: '⚡',
    title: 'DevFlow SaaS Platform',
    description:
      'End-to-end project management tool with real-time collaboration and CI/CD pipeline integration.',
    tags: ['Next.js', 'PostgreSQL', 'Docker'],
  },
  {
    previewClass: 'p2',
    icon: '🛒',
    title: 'E-Commerce Engine',
    description:
      'Scalable e-commerce backend with payment integration, inventory management, and analytics dashboard.',
    tags: ['Node.js', 'MongoDB', 'Redis'],
  },
  {
    previewClass: 'p3',
    icon: '🧪',
    title: 'QA Automation Suite',
    description:
      'Automated testing framework with Selenium + Cypress covering 200+ test cases and API validation.',
    tags: ['Cypress', 'Selenium', 'Pytest'],
  },
  {
    previewClass: 'p4',
    icon: '📡',
    title: 'API Gateway Service',
    description:
      'Microservices API gateway with auth, rate limiting, load balancing, and Swagger documentation.',
    tags: ['Express', 'GraphQL', 'JWT'],
  },
]

export function ProjectsPage({ pageIndex, active }) {
  return (
    <PortfolioPage pageIndex={pageIndex} active={active}>
      <SectionHeading
        comment="// projects.tsx — featured work"
        label="// 03 — selected projects"
        title={
          <>
            Recent <span>Projects</span>
          </>
        }
      />
      <div className="projects-grid">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </PortfolioPage>
  )
}
