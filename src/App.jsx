import { MotionConfig } from 'motion/react'
import Contact from './components/Contact/Contact'
import DayJob from './components/DayJob/DayJob'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Journey from './components/Journey/Journey'
import Navbar from './components/Navbar/Navbar'
import SideQuests from './components/SideQuests/SideQuests'
import Ticker from './components/Ticker/Ticker'
import Toolbox from './components/Toolbox/Toolbox'
import useLenis from './hooks/useLenis'

const App = () => {
  useLenis()

  return (
    // reducedMotion='user' turns every motion animation static for visitors who ask for it
    <MotionConfig reducedMotion='user'>
      <a className='skip-link' href='#side-quests'>
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <SideQuests />
        <DayJob />
        <Journey />
        <Toolbox />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}

export default App
