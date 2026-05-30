import { useContext, lazy, Suspense } from 'react'
import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Cursor from './components/Cursor/Cursor'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Projects from './components/Projects/Projects'
import ScrollProgress from './components/ScrollProgress/ScrollProgress'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import SectionDots from './components/SectionDots/SectionDots'
import Skills from './components/Skills/Skills'
import { ThemeContext } from './contexts/theme'

const Hero3D = lazy(() => import('./components/Hero3D/Hero3D'))

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div className={`${themeName} app`}>
      {/* Persistent universe behind every section (dark mode only) */}
      {themeName === 'dark' && (
        <div className='universe-bg' aria-hidden='true'>
          <Suspense fallback={null}>
            <Hero3D />
          </Suspense>
        </div>
      )}
      <Cursor />
      <ScrollProgress />
      <SectionDots />
      <Header />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
