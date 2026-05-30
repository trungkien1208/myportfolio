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
import Skills from './components/Skills/Skills'
import { ThemeContext } from './contexts/theme'
import useLenis from './hooks/useLenis'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)
  useLenis()

  return (
    <div id='top' className={`${themeName} app`}>
      <Cursor />
      <ScrollProgress />
      <Header />
      <About />
      <main>
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App
