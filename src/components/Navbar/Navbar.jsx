import { useContext, useEffect, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
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

const ISLAND_SPRING = { type: 'spring', stiffness: 380, damping: 32 }

// Who peeks over the island in each section
const mascot = (path) => `${import.meta.env.BASE_URL}${path}`
const PEEKS = {
  'side-quests': mascot('nav/charm-cogi.webp'),
  projects: mascot('nav/charm-whale.webp'),
  experiences: mascot('nav/charm-mo.webp'),
  skills: mascot('nav/charm-cogi-search.webp'),
  contact: mascot('nav/charm-cogi-party.webp'),
}

// Soft light that follows the pointer across the island
const trackSpotlight = (e) => {
  const box = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - box.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - box.top}px`)
}

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [pastHero, setPastHero] = useState(false)
  const active = useActiveSection(SECTION_IDS)
  const { scrollY, scrollYProgress } = useScroll()
  const fillY = useTransform(scrollYProgress, [0, 1], ['100%', '0%'])

  useMotionValueEvent(scrollY, 'change', (y) => {
    const next = y > 12
    if (next !== scrolled) setScrolled(next)
    // Past the hero, the bar folds into a floating island
    const hero = document.getElementById('top')
    const past = y > (hero ? hero.offsetHeight - 120 : 600)
    if (past !== pastHero) setPastHero(past)
  })

  // The open mobile sheet needs the full bar
  const island = pastHero && !open
  const peek = island ? PEEKS[active] : undefined

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
    <header
      className={`nav ${(scrolled || open) && !island ? 'nav--raised' : ''} ${
        island ? 'nav--island' : ''
      }`}
      data-section={island ? active : undefined}
    >
      <motion.div
        layout
        className='container nav__inner'
        initial={false}
        onPointerMove={island ? trackSpotlight : undefined}
        animate={
          island
            ? {
                borderRadius: 40,
                // Slapped on like a sticker: squash, overshoot, settle
                scaleX: [1, 1.07, 0.97, 1.01, 1],
                scaleY: [1, 0.86, 1.06, 0.99, 1],
                rotate: [0, -2.5, 1.2, 0],
              }
            : { borderRadius: 0, scaleX: 1, scaleY: 1, rotate: 0 }
        }
        transition={{
          ...ISLAND_SPRING,
          scaleX: { duration: 0.6, ease: 'easeOut', delay: 0.18 },
          scaleY: { duration: 0.6, ease: 'easeOut', delay: 0.18 },
          rotate: { duration: 0.6, ease: 'easeOut', delay: 0.18 },
        }}
      >
        {/* Keychain charm: a mascot hangs under the island, one per section */}
        <span className='nav__charm' aria-hidden='true'>
          <AnimatePresence mode='popLayout'>
            {peek && (
              <motion.span
                key={peek}
                className='nav__charm-swing'
                initial={{ y: -14, scale: 0.3, opacity: 0 }}
                animate={{ y: 0, scale: 1, opacity: 1 }}
                exit={{ y: -10, scale: 0.3, opacity: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 380,
                  damping: 14,
                  delay: 0.2,
                }}
              >
                <span className='nav__charm-ring' />
                <img src={peek} alt='' className='nav__charm-img' />
              </motion.span>
            )}
          </AnimatePresence>
        </span>

        <motion.a
          layout='position'
          transition={ISLAND_SPRING}
          href='#top'
          className='nav__logo'
          aria-label={`${about.name}, back to top`}
          onClick={close}
        >
          <motion.span
            className='nav__logo-spin'
            initial={false}
            animate={{ rotate: island ? 360 : 0 }}
            transition={{ type: 'spring', stiffness: 160, damping: 16 }}
          >
            <span className='nav__logo-mark'>
              {/* Reading progress: pink water rises in the mark as you scroll */}
              <motion.span
                className='nav__logo-fill'
                aria-hidden='true'
                style={{ y: fillY }}
              />
              <span className='nav__logo-k'>k</span>
            </span>
          </motion.span>
          <AnimatePresence initial={false}>
            {!island && (
              <motion.span
                key='word'
                className='nav__logo-word'
                initial={{ opacity: 0, width: 0, filter: 'blur(4px)' }}
                animate={{ opacity: 1, width: 'auto', filter: 'blur(0px)' }}
                exit={{ opacity: 0, width: 0, filter: 'blur(4px)' }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              >
                kiên<span className='nav__logo-dot'>.</span>
              </motion.span>
            )}
          </AnimatePresence>
        </motion.a>

        <motion.nav
          layout='position'
          transition={ISLAND_SPRING}
          className='nav__links'
          aria-label='Main'
        >
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
        </motion.nav>

        <motion.div
          layout='position'
          transition={ISLAND_SPRING}
          className='nav__actions'
        >
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
        </motion.div>
      </motion.div>

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
