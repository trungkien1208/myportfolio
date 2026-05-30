import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import ScrollHint from '../ScrollHint/ScrollHint'
import './Projects.css'

const FILTERS = ['All', 'Web', 'Mobile']

const WEB_STACKS = ['ReactJS', 'React', 'AngularJS', 'Vue', 'MUI', 'Kendo UI', 'Redux', 'ChartJS', 'SharePoint']
const MOBILE_STACKS = ['React Native', 'Expo', 'Flutter', 'SwiftUI']

const filterProject = (project, filter) => {
  if (filter === 'All') return true
  const stacks = project.stack || []
  if (filter === 'Mobile') return stacks.some((s) => MOBILE_STACKS.some((ms) => s.includes(ms.split(' ')[0])))
  return stacks.some((s) => WEB_STACKS.some((ws) => s.includes(ws.split(' ')[0])))
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  if (!projects.length) return null

  const filtered = projects.filter((p) => filterProject(p, activeFilter))

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
          Projects
        </motion.h2>
        <div className='section__underline' />

        <motion.div
          className='projects__filters'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.1 }}
          role='group'
          aria-label='Filter projects'
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              type='button'
              onClick={() => setActiveFilter(f)}
              className={`projects__filter-btn ${activeFilter === f ? 'projects__filter-btn--active' : ''}`}
              aria-pressed={activeFilter === f}
            >
              {f}
            </button>
          ))}
        </motion.div>

        <div className='projects__grid' style={{ perspective: 1200 }}>
          <AnimatePresence mode='popLayout'>
            {filtered.map((project, i) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, y: 40, rotateX: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ transformOrigin: 'top center' }}
              >
                <ProjectContainer project={project} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <ScrollHint nextId='skills' />
    </section>
  )
}

export default Projects
