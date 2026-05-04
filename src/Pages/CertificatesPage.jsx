import { PortfolioPage } from '../components/PortfolioPage'
import { CertificateCard } from '../components/CertificateCard'
import { SectionHeading } from '../components/SectionHeading'
import lodixrPng from '../assets/documents/lodixr.png'
import lodixrPdf from '../assets/documents/lodixr.pdf'

const CERTIFICATES = [
  {
    title: 'Certificate from lodixr.pdf',
    issuer: 'Uploaded credential document',
    imageSrc: lodixrPng,
    href: lodixrPdf,
    imageAlt: 'Lodixr certificate preview',
  },
  {
    title: 'Software testing & QA',
    issuer: 'Course · manual testing & test documentation',
    imageSrc:
      'https://placehold.co/640x440/0d0f1a/00d4ff/png?text=Certificate+preview&font=jetbrains-mono',
    href: 'https://example.com/verify/qa',
    imageAlt: 'QA certificate preview',
  },
  {
    title: 'Technical workshop',
    issuer: 'Workshop · modern web engineering',
    imageSrc:
      'https://placehold.co/640x440/0d0f1a/a855f7/png?text=Certificate+preview&font=jetbrains-mono',
    href: 'https://example.com/verify/workshop',
    imageAlt: 'Workshop certificate preview',
  },
]

export function CertificatesPage({ pageIndex, active }) {
  return (
    <PortfolioPage pageIndex={pageIndex} active={active}>
      <SectionHeading
        comment="// certificates.md — credentials"
        label="// 10 — certificates"
        title={
          <>
            Certificates <span>& credentials</span>
          </>
        }
      />
      <div className="certificates-grid">
        {CERTIFICATES.map((c) => (
          <CertificateCard key={c.title} {...c} />
        ))}
      </div>
    </PortfolioPage>
  )
}
