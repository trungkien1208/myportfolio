import { useScroll, motion } from 'motion/react'
import './ScrollProgress.css'

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className='scroll-progress'
      style={{ scaleY: scrollYProgress }}
    />
  )
}

export default ScrollProgress
