import { PortfolioPage } from '../components/PortfolioPage'
import { QaCategory } from '../components/QaCategory'
import { QaItem } from '../components/QaItem'
import { SectionHeading } from '../components/SectionHeading'

export function QaPage({ pageIndex, active }) {
  return (
    <PortfolioPage pageIndex={pageIndex} active={active}>
      <SectionHeading
        comment="// qa.test.ts — quality assurance skills"
        label="// 04 — qa expertise"
        title={
          <>
            QA <span>Skills</span>
          </>
        }
      />
      <div className="qa-list">
        <QaCategory title='describe("Test Engineering")'>
          <QaItem
            title="Test Case Design & Documentation"
            subtitle="Functional, regression, smoke, sanity & edge case scenarios"
          />
          <QaItem
            title="Test Automation — Cypress / Selenium"
            subtitle="End-to-end automated test suites with CI integration"
          />
          <QaItem
            title="API Testing — Postman / Pytest"
            subtitle="REST & GraphQL endpoint validation, contract testing"
          />
        </QaCategory>
        <QaCategory title='describe("QA Process")'>
          <QaItem
            title="Bug Tracking — Jira / Linear"
            subtitle="Detailed bug reporting with severity classification and reproduction steps"
          />
          <QaItem
            title="Mobile & Cross-browser Testing"
            subtitle="iOS, Android, Chrome, Firefox, Safari compatibility"
          />
          <QaItem
            title="Performance & Load Testing"
            subtitle="Artillery, k6, and Lighthouse audits for production readiness"
          />
        </QaCategory>
      </div>
    </PortfolioPage>
  )
}
