import { useCallback, useState } from 'react'
import { BookNavigation } from './components/BookNavigation'
import { BackgroundMotionVideo } from './components/BackgroundMotionVideo'
import { IdeTabs } from './components/IdeTabs'
import { MatrixBackground } from './components/MatrixBackground'
import { PortfolioStatusBar } from './components/PortfolioStatusBar'
import { PAGE_COUNT } from './constants/portfolioMeta'
import {
  AboutPage,
  ContactPage,
  CoverPage,
  ProjectsPage,
  QaPage,
  StackPage,
  TimelinePage,
} from './pages'
import './App.css'

function App() {
  const [current, setCurrent] = useState(0)

  const goToPage = useCallback((n) => {
    setCurrent(Math.max(0, Math.min(PAGE_COUNT - 1, n)))
  }, [])

  const navigate = useCallback(
    (dir) => {
      goToPage(current + dir)
    },
    [current, goToPage]
  )

  const lnNum = current * 42 + 1

  return (
    <>
      <BackgroundMotionVideo />
      <div className="portfolio">
        <IdeTabs current={current} onSelect={goToPage} />

        <div className="book-container">
          <MatrixBackground />

          <CoverPage pageIndex={0} active={current === 0} goToPage={goToPage} />
          <AboutPage pageIndex={1} active={current === 1} />
          <StackPage pageIndex={2} active={current === 2} />
          <ProjectsPage pageIndex={3} active={current === 3} />
          <QaPage pageIndex={4} active={current === 4} />
          <TimelinePage pageIndex={5} active={current === 5} />
          <ContactPage pageIndex={6} active={current === 6} />

          <BookNavigation current={current} totalPages={PAGE_COUNT} onNavigate={navigate} />

          <PortfolioStatusBar lineNumber={lnNum} />
        </div>
      </div>
    </>
  )
}

export default App
