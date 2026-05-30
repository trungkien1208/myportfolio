import { useContext } from 'react'
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

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div className={`${themeName} app`}>
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
