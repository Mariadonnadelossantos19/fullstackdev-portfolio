import { PortfolioPage } from '../components/PortfolioPage'
import { SectionHeading } from '../components/SectionHeading'
import { TestimonialCard } from '../components/TestimonialCard'
import kiethPhoto from '../assets/picture of  testimony/kieth.jpg'

const TESTIMONIALS = [
  {
    photo: kiethPhoto,
    name: 'Keith Paolo Buenaventura',
    role: 'Supervising Science Research Specialist',
    quote:
      'Shows strong initiative—completes tasks even without being told.',
  },
  {
    photo: 'https://ui-avatars.com/api/?name=Operations+Lead&background=0d0f1a&color=00d4ff&size=128',
    name: 'Operations lead',
    role: 'Internal team · process improvement',
    quote:
      'The platform improved our workflow visibility and cut down manual tracking errors day to day.',
  },
  {
    photo: 'https://ui-avatars.com/api/?name=QA+Partner&background=0d0f1a&color=a855f7&size=128',
    name: 'QA partner',
    role: 'Collaboration · release quality',
    quote:
      'Issues were documented clearly, fixed quickly, and re-tested before every release.',
  },
]

export function TestimonialPage({ pageIndex, active }) {
  return (
    <PortfolioPage pageIndex={pageIndex} active={active}>
      <SectionHeading
        comment="// testimonial.md — client feedback"
        label="// 08 — testimonials"
        title={
          <>
             <span>Testimonials</span>
          </>
        }
      />
      <div className="testimonials-grid">
        {TESTIMONIALS.map((t) => (
          <TestimonialCard key={t.name} {...t} />
        ))}
      </div>
    </PortfolioPage>
  )
}
