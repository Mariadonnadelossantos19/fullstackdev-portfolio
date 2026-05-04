import { PortfolioPage } from '../components/PortfolioPage'
import { QaCategory } from '../components/QaCategory'
import { QaItem } from '../components/QaItem'
import { SectionHeading } from '../components/SectionHeading'

export function ServicesPage({ pageIndex, active }) {
  return (
    <PortfolioPage pageIndex={pageIndex} active={active}>
      <SectionHeading
        comment="// services.md — what I offer"
        label="// 06 — services"
        title={
          <>
            My <span>Services</span>
          </>
        }
      />
      <div className="qa-list">
        <QaCategory title='service("Web & Hybrid Application Development")'>
          <QaItem
            title="Business websites, portfolio websites, and landing pages"
            subtitle="Clean, responsive, and conversion-focused web presence for organizations and professionals."
          />
          <QaItem
            title="Custom web applications"
            subtitle="Purpose-built systems based on your workflow, users, and operational requirements."
          />
          <QaItem
            title="Hybrid applications (web + mobile-ready systems)"
            subtitle="Solutions designed for browser use with mobile-ready architecture and experience."
          />
        </QaCategory>

        <QaCategory title='service("E-Commerce Solutions")'>
          <QaItem
            title="Online stores (custom-built)"
            subtitle="Tailored e-commerce implementation based on your products, audience, and process."
          />
          <QaItem
            title="Product management systems"
            subtitle="Organize catalog, stock details, and core product administration flows."
          />
          <QaItem
            title="Basic payment integration"
            subtitle="Add practical checkout and payment handling for small to medium online stores."
          />
        </QaCategory>

        <QaCategory title='service("System Development")'>
          <QaItem
            title="Inventory, ordering, and booking/reservation systems"
            subtitle="Operational systems to track resources, requests, schedules, and transactions."
          />
          <QaItem
            title="Government systems and websites"
            subtitle="Structured portals and services aligned with public-sector process requirements."
          />
          <QaItem
            title="Admin dashboards"
            subtitle="Centralized control panels for data monitoring, reports, and user management."
          />
        </QaCategory>

        <QaCategory title='service("QA & Software Testing")'>
          <QaItem
            title="Manual and functional testing"
            subtitle="Validate real user flows and system behavior before release."
          />
          <QaItem
            title="Bug identification and reporting"
            subtitle="Clear issue documentation with reproducible steps for faster fixes."
          />
          <QaItem
            title="Test case creation and pre-deployment validation"
            subtitle="Create structured test coverage and verify system readiness for deployment."
          />
        </QaCategory>

        <QaCategory title='service("Academic / Capstone Projects")'>
          <QaItem
            title="System development for students"
            subtitle="Build practical systems aligned with academic scope and objectives."
          />
          <QaItem
            title="Documentation support"
            subtitle="Assist with technical writeups and project documentation requirements."
          />
          <QaItem
            title="Basic deployment assistance"
            subtitle="Guide or perform initial hosting setup for project demonstrations."
          />
        </QaCategory>

        <QaCategory title='service("Technical Stack")'>
          <QaItem title="Laravel, MERN, and CodeIgniter" subtitle="Flexible stack selection based on project needs." />
          <QaItem
            title="SQL and NoSQL databases"
            subtitle="Experience with relational and non-relational database implementation."
          />
          <QaItem
            title="REST API integration"
            subtitle="Integrate external and internal services for connected, data-driven workflows."
          />
        </QaCategory>

        <QaCategory title='service("Deployment & Support")'>
          <QaItem
            title="System setup and deployment"
            subtitle="Configure and release applications to production-ready environments."
          />
          <QaItem
            title="Basic maintenance and updates"
            subtitle="Post-launch fixes, adjustments, and feature improvements."
          />
          <QaItem
            title="Performance and usability improvements"
            subtitle="Enhance speed, responsiveness, and user experience over time."
          />
        </QaCategory>
      </div>
    </PortfolioPage>
  )
}
