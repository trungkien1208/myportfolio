import { motion } from 'motion/react'
import { projects } from '../../portfolio'
import ProjectCard from './ProjectCard'
import ScrollHint from '../ScrollHint/ScrollHint'
import './Projects.css'

const ACCENT_COLORS = ['#6366f1', '#10b981', '#f59e0b', '#ec4899', '#06b6d4', '#f43f5e']

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='projects' className='section projects'>
      <div className='section__inner'>
        <span className='section__deco' aria-hidden='true'>02</span>
        <span className='section__label'>Work</span>

        <motion.h2
          className='section__title'
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Selected Work
        </motion.h2>
        <div className='section__underline' />

        <div className='work__grid' style={{ perspective: 1400 }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              className='work__grid-item'
              style={{ '--accent': ACCENT_COLORS[i % ACCENT_COLORS.length] }}
              custom={i}
              variants={cardVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: false, margin: '-40px' }}
            >
              <ProjectCard project={project} index={i} />
            </motion.div>
          ))}
        </div>
      </div>

      <ScrollHint nextId='skills' />
    </section>
  )
}

export default Projects
