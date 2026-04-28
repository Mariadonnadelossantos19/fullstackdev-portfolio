import { PortfolioPage } from '../components/PortfolioPage'
import { ProjectCard } from '../components/ProjectCard'
import { SectionHeading } from '../components/SectionHeading'

const PROJECTS = [
  {
    previewClass: 'p1',
    icon: '⚡',
    title: 'PMNS: Project Monitoring and Notification System',
    description:
      'Project Monitoring and Notification System for DOST-MIMAROPA, designed to streamline tracking, updates, and reporting workflows.',
    tags: ['MySQL', 'Node.js', 'React', 'Express'],
    url: 'https://pmns.dostmimaropa.com',
    previewImage: 'https://mini.s-shot.ru/1366x768/JPEG/1366/Z100/?https://pmns.dostmimaropa.com',
    previewImageAlt: 'PMNS system landing page preview',
  },
  {
    previewClass: 'p2',
    icon: '💻',
    title: 'ICT Equipment Inventory and Management System',
    description:  
      'Asset tracking platform for DOST-MIMAROPA that manages laptops, desktops, monitors, printers, and related equipment with centralized visibility.',
    tags: ['Laravel', 'MySQL', 'Inventory'],
    url: 'https://ictrack.dostmimaropa.com/',
    previewImage: 'https://mini.s-shot.ru/1366x768/JPEG/1366/Z100/?https://ictrack.dostmimaropa.com/',
    previewImageAlt: 'ICT Equipment Inventory and Management System landing page preview',
  },
  {
    previewClass: 'p3',
    icon: '📦',
    title: 'Centralized Inventory & Monitoring (CIMON)',
    description:
      'Supply management platform for TSD units with real-time stock visibility, controlled access roles, and input/output movement tracking.',
    tags: ['Laravel', 'Monitoring', 'Inventory'],
    url: 'https://cimon.dostmimaropa.com/',
    previewImage:
      'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fcimon.dostmimaropa.com%2F?w=1200',
    previewImageAlt: 'CIMON landing page preview',
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
