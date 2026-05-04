import { useCallback, useEffect, useState } from 'react'
import { BookNavigation } from './components/BookNavigation'
import { BackgroundMotionVideo } from './components/BackgroundMotionVideo'
import { IdeTabs } from './components/IdeTabs'
import { MatrixBackground } from './components/MatrixBackground'
import { PortfolioStatusBar } from './components/PortfolioStatusBar'
import { PAGE_COUNT } from './constants/portfolioMeta'
import {
  AboutPage,
  BlogPage,
  CertificatesPage,
  ContactPage,
  CoverPage,
  ProjectsPage,
  QaPage,
  ServicesPage,
  StackPage,
  TestimonialPage,
  TimelinePage,
} from './Pages'
import './App.css'

function App() {
  const [current, setCurrent] = useState(0)
  const [navDirection, setNavDirection] = useState('forward')
  const [theme, setTheme] = useState(() => {
    const stored = window.localStorage.getItem('portfolio-theme')
    return stored === 'light' ? 'light' : 'dark'
  })

  const goToPage = useCallback(
    (n) => {
      const clamped = Math.max(0, Math.min(PAGE_COUNT - 1, n))
      if (clamped === current) return
      setNavDirection(clamped > current ? 'forward' : 'backward')
      setCurrent(clamped)
    },
    [current]
  )

  const navigate = useCallback(
    (dir) => {
      goToPage(current + dir)
    },
    [current, goToPage]
  )

  const lnNum = current * 42 + 1

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }, [])

  return (
    <>
      <BackgroundMotionVideo />
      <div className="portfolio">
        <IdeTabs current={current} onSelect={goToPage} />

        <div className={`book-container nav-${navDirection}`}>
          <MatrixBackground />

          <CoverPage pageIndex={0} active={current === 0} />
          <AboutPage pageIndex={1} active={current === 1} />
          <StackPage pageIndex={2} active={current === 2} />
          <ProjectsPage pageIndex={3} active={current === 3} />
          <QaPage pageIndex={4} active={current === 4} />
          <ServicesPage pageIndex={5} active={current === 5} />
          <TimelinePage pageIndex={6} active={current === 6} />
          <TestimonialPage pageIndex={7} active={current === 7} />
          <BlogPage pageIndex={8} active={current === 8} />
          <CertificatesPage pageIndex={9} active={current === 9} />
          <ContactPage pageIndex={10} active={current === 10} />

          <BookNavigation current={current} totalPages={PAGE_COUNT} onNavigate={navigate} />

          <PortfolioStatusBar lineNumber={lnNum} theme={theme} onToggleTheme={toggleTheme} />
        </div>
      </div>
    </>
  )
}

export default App
