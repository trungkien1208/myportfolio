import { motion } from 'motion/react'
import { skills, ALL_TECH } from '../../portfolio'
import './Skills.css'

const LEVEL_CONFIG = {
  5: { label: 'Expert',       color: '#6366f1' },
  4: { label: 'Advanced',     color: '#10b981' },
  3: { label: 'Intermediate', color: '#f59e0b' },
  2: { label: 'Elementary',   color: '#06b6d4' },
  1: { label: 'Beginner',     color: '#94a3b8' },
}

const CATEGORY_COLORS = [
  '#6366f1', '#10b981', '#f59e0b', '#ec4899',
  '#06b6d4', '#f43f5e', '#8b5cf6', '#14b8a6',
]

const MARQUEE_ITEMS = [...ALL_TECH, ...ALL_TECH]

const Skills = () => {
  if (!skills.length) return null

  const byCategory = skills.reduce((acc, skill) => {
    const cat = skill.category || 'Other'
    if (!acc[cat]) acc[cat] = []
    acc[cat].push(skill)
    return acc
  }, {})

  const categories = Object.entries(byCategory).sort(([, a], [, b]) => {
    const maxA = Math.max(...a.map((s) => s.level))
    const maxB = Math.max(...b.map((s) => s.level))
    return maxB - maxA
  })

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

        <div className='skills__marquee' aria-hidden='true'>
          <div className='skills__marquee-track'>
            {MARQUEE_ITEMS.map((tech, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <span key={`${tech}-${i}`} className='skills__marquee-item'>
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className='skills__legend'>
          {Object.entries(LEVEL_CONFIG).reverse().map(([level, { label, color }]) => (
            <span key={level} className='skills__legend-item'>
              <span className='skills__legend-dot' style={{ background: color }} />
              {label}
            </span>
          ))}
        </div>

        <div className='skills__grid'>
          {categories.map(([category, catSkills], i) => (
            <motion.div
              key={category}
              className='skills__card'
              style={{ '--cat-color': CATEGORY_COLORS[i % CATEGORY_COLORS.length] }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className='skills__card-header'>
                <span className='skills__card-accent' aria-hidden='true' />
                <h3 className='skills__card-title'>{category}</h3>
              </div>
              <ul className='skills__list'>
                {catSkills
                  .sort((a, b) => b.level - a.level)
                  .map((skill) => {
                    const cfg = LEVEL_CONFIG[skill.level] || LEVEL_CONFIG[1]
                    return (
                      <li key={skill.name} className='skills__pill' title={cfg.label}>
                        <span className='skills__pill-dot' style={{ background: cfg.color }} />
                        {skill.name}
                      </li>
                    )
                  })}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
