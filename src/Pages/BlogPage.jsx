import { PortfolioPage } from '../components/PortfolioPage'
import { BlogHighlightCard } from '../components/BlogHighlightCard'
import { SectionHeading } from '../components/SectionHeading'

const HIGHLIGHTS = [
  {
    title: 'End-to-end delivery',
    highlight: 'From requirements and system analysis to deployment — one accountable path for lean teams.',
    href: 'https://example.com/blog/full-stack-delivery',
  },
  {
    title: 'QA before every release',
    highlight: 'Test cases, clear bug reports, and validation loops so production stays predictable.',
    href: 'https://example.com/blog/qa-mindset',
  },
  {
    title: 'Stack that fits the job',
    highlight: 'Laravel, MERN, or CodeIgniter — chosen for timeline, maintainability, and org constraints.',
    href: 'https://example.com/blog/choosing-a-stack',
  },
]

export function BlogPage({ pageIndex, active }) {
  return (
    <PortfolioPage pageIndex={pageIndex} active={active}>
      <SectionHeading
        comment="// blog.md — highlights"
        label="// 09 — blog highlights"
        title={
          <>
            Blog <span>Highlights</span>
          </>
        }
      />
      <div className="blog-highlights-grid">
        {HIGHLIGHTS.map((h) => (
          <BlogHighlightCard key={h.title} {...h} />
        ))}
      </div>
    </PortfolioPage>
  )
}
