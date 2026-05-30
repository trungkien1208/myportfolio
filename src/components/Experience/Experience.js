import { motion } from 'motion/react'
import { experiences } from '../../portfolio'
import ExperienceContainer from './ExperienceContainer'
import './Experience.css'

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: (i) => ({
    opacity: 0,
    x: i % 2 === 0 ? -60 : 60,
    rotateY: i % 2 === 0 ? -15 : 15,
    scale: 0.92,
  }),
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const Experience = () => {
  if (!experiences.length) return null

  return (
    <section id='experiences' className='section experience'>
      <div className='section__inner'>
        <span className='section__deco' aria-hidden='true'>01</span>
        <span className='section__label'>Career</span>

        <motion.h2
          className='section__title'
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Experience
        </motion.h2>
        <div className='section__underline' />

        <motion.div
          className='experience__timeline'
          variants={sectionVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: false, margin: '-60px' }}
          style={{ perspective: 1200 }}
        >
          <div className='experience__line' aria-hidden='true' />
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.name}
              custom={i}
              variants={itemVariants}
              className={`experience__item experience__item--${i % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className='experience__dot' aria-hidden='true' />
              <ExperienceContainer experience={exp} index={i} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
