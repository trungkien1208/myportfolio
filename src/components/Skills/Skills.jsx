import { motion } from 'motion/react'
import { skills } from '../../portfolio'
import ScrollHint from '../ScrollHint/ScrollHint'
import './Skills.css'

const LEVEL_CONFIG = {
  5: { label: 'Expert',       color: '#6366f1' },
  4: { label: 'Advanced',     color: '#10b981' },
  3: { label: 'Intermediate', color: '#f59e0b' },
  2: { label: 'Elementary',   color: '#06b6d4' },
  1: { label: 'Beginner',     color: '#94a3b8' },
}

/* Consolidate the many raw categories into a few scannable groups */
const GROUPS = [
  { title: 'Languages & Core',    accent: '#6366f1', cats: ['Frontend Core'] },
  { title: 'Frameworks & State',  accent: '#10b981', cats: ['Frameworks', 'State Management', 'UI Libraries'] },
  { title: 'Data, Forms & i18n',  accent: '#f59e0b', cats: ['Forms', 'Networking', 'i18n'] },
  { title: 'Testing, Tools & Ops', accent: '#ec4899', cats: ['Testing', 'Tools', 'DevOps', 'Build Tools'] },
  { title: 'Platform & Enterprise', accent: '#06b6d4', cats: ['Backend', 'Enterprise', 'Legacy'] },
]

const Skills = () => {
  if (!skills.length) return null

  const groups = GROUPS.map((g) => ({
    ...g,
    items: skills
      .filter((s) => g.cats.includes(s.category))
      .sort((a, b) => b.level - a.level),
  })).filter((g) => g.items.length)

  return (
    <section id='skills' className='section skills'>
      <div className='section__inner'>
        <span className='section__deco' aria-hidden='true'>03</span>
        <span className='section__label'>Expertise</span>

        <motion.h2
          className='section__title'
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Skills
        </motion.h2>
        <div className='section__underline' />

        <div className='skills__bento'>
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              className='skills__group'
              style={{ '--accent': g.accent }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className='skills__group-head'>
                <span className='skills__group-bar' aria-hidden='true' />
                <h3 className='skills__group-title'>{g.title}</h3>
                <span className='skills__group-count'>{g.items.length}</span>
              </div>
              <ul className='skills__chips'>
                {g.items.map((skill) => {
                  const cfg = LEVEL_CONFIG[skill.level] || LEVEL_CONFIG[1]
                  return (
                    <li key={skill.name} className='skills__chip' title={cfg.label}>
                      <span className='skills__chip-dot' style={{ background: cfg.color }} />
                      {skill.name}
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className='skills__legend'>
          {Object.entries(LEVEL_CONFIG).reverse().map(([level, { label, color }]) => (
            <span key={level} className='skills__legend-item'>
              <span className='skills__legend-dot' style={{ background: color }} />
              {label}
            </span>
          ))}
        </div>
      </div>

      <ScrollHint nextId='contact' />
    </section>
  )
}

export default Skills
