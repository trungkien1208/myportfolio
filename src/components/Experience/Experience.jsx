import { motion } from 'motion/react'
import { experiences } from '../../portfolio'
import ExperienceContainer from './ExperienceContainer'
import ScrollHint from '../ScrollHint/ScrollHint'
import './Experience.css'

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.93 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
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

        {/* 3-column horizontal layout — fits in 100vh */}
        <div className='experience__cards' style={{ perspective: 1200 }}>
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.name}
              custom={i}
              variants={cardVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: false, margin: '-40px' }}
            >
              <ExperienceContainer experience={exp} index={i} />
            </motion.div>
          ))}
        </div>
      </div>

      <ScrollHint nextId='projects' />
    </section>
  )
}

export default Experience
