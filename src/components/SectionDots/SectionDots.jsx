import { useEffect, useState } from 'react'
import { motion, LayoutGroup } from 'motion/react'
import './SectionDots.css'

const SECTIONS = [
  { id: 'top',         label: 'Home' },
  { id: 'experiences', label: 'Experience' },
  { id: 'projects',    label: 'Projects' },
  { id: 'skills',      label: 'Skills' },
  { id: 'contact',     label: 'Contact' },
]

const SectionDots = () => {
  const [active, setActive] = useState('top')

  useEffect(() => {
    const observers = SECTIONS.map(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { threshold: 0.4, rootMargin: '-10% 0px -10% 0px' }
      )
      observer.observe(el)
      return observer
    }).filter(Boolean)

    return () => observers.forEach((obs) => obs.disconnect())
  }, [])

  return (
    <nav className='section-dots' aria-label='Page sections'>
      <LayoutGroup>
        {SECTIONS.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`section-dots__item ${active === id ? 'section-dots__item--active' : ''}`}
            aria-label={`Go to ${label}`}
          >
            {active === id && (
              <motion.span
                className='section-dots__active-bg'
                layoutId='nav-pill'
                transition={{ type: 'spring', stiffness: 400, damping: 32 }}
              />
            )}
            <span className='section-dots__label'>{label}</span>
          </a>
        ))}
      </LayoutGroup>
    </nav>
  )
}

export default SectionDots
