import { useContext, useEffect, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'motion/react'
import { List, Moon, Sun, X } from '@phosphor-icons/react'
import { ThemeContext } from '../../contexts/theme'
import { about } from '../../portfolio'
import './Navbar.css'

const LINKS = [
  { id: 'side-quests', label: 'Side quests' },
  { id: 'projects', label: 'Day job' },
  { id: 'experiences', label: 'Journey' },
  { id: 'skills', label: 'Toolbox' },
]

const useActiveSection = (ids) => {
  const [active, setActive] = useState('')
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      // A section is "current" while it crosses the band just under the nav
      { rootMargin: '-35% 0px -60% 0px' }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [ids])
  return active
}

const SECTION_IDS = [...LINKS.map((l) => l.id), 'contact', 'top']

const ThemeToggle = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const isDark = themeName === 'dark'
  const label = isDark ? 'Lights on' : 'Night snack mode'
  return (
    <button
      type='button'
      className='theme-toggle'
      onClick={toggleTheme}
      aria-label={label}
      title={label}
    >
      {/* Both icons stay mounted and crossfade in place, so there is no empty frame */}
      <span
        className={`theme-toggle__icon ${isDark ? '' : 'is-on'}`}
        aria-hidden='true'
      >
        <Moon size={20} weight='bold' />
      </span>
      <span
        className={`theme-toggle__icon ${isDark ? 'is-on' : ''}`}
        aria-hidden='true'
      >
        <Sun size={20} weight='bold' />
      </span>
    </button>
  )
}

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(SECTION_IDS)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => {
    const next = y > 12
    if (next !== scrolled) setScrolled(next)
  })

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth > 900 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`nav ${scrolled || open ? 'nav--raised' : ''}`}>
      <div className='container nav__inner'>
        <a
          href='#top'
          className='nav__logo'
          aria-label={`${about.name}, back to top`}
          onClick={close}
        >
          <span className='nav__logo-mark'>k</span>
          <span className='nav__logo-word'>
            kiên<span className='nav__logo-dot'>.</span>
          </span>
        </a>

        <nav className='nav__links' aria-label='Main'>
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav__link ${active === link.id ? 'is-active' : ''}`}
              aria-current={active === link.id ? 'true' : undefined}
            >
              {active === link.id && (
                <motion.span
                  layoutId='nav-pill'
                  className='nav__link-pill'
                  transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                />
              )}
              <span className='nav__link-text'>{link.label}</span>
            </a>
          ))}
        </nav>

        <div className='nav__actions'>
          <ThemeToggle />
          <a href='#contact' className='btn btn-primary nav__cta'>
            Say hi
          </a>
          <button
            type='button'
            className='nav__burger'
            aria-expanded={open}
            aria-controls='mobile-menu'
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X size={22} weight='bold' />
            ) : (
              <List size={22} weight='bold' />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id='mobile-menu'
            className='nav__sheet'
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav className='container nav__sheet-inner' aria-label='Mobile'>
              {LINKS.map((link, i) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`nav__sheet-link ${
                    active === link.id ? 'is-active' : ''
                  }`}
                  onClick={close}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i + 0.05 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href='#contact'
                className='btn btn-primary nav__sheet-cta'
                onClick={close}
              >
                Say hi
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
