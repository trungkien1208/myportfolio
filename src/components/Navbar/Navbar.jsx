import CloseIcon from '@mui/icons-material/Close'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import MenuIcon from '@mui/icons-material/Menu'
import { motion } from 'motion/react'
import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../contexts/theme'
import { about, contact, experiences, projects, skills } from '../../portfolio'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Experience', href: '#experiences', show: experiences.length > 0 },
  { label: 'Projects',   href: '#projects',    show: projects.length > 0 },
  { label: 'Skills',     href: '#skills',      show: skills.length > 0 },
  { label: 'Contact',    href: '#contact',     show: !!contact.email },
]

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)
  const [isHero, setIsHero] = useState(true)

  /* Track whether the hero section is in view */
  useEffect(() => {
    const hero = document.getElementById('top')
    if (!hero) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => setIsHero(entry.isIntersecting),
      { threshold: 0.35 }
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setShowNavList(false)

  return (
    <motion.nav
      className={`nav ${isHero ? 'nav--hero' : 'nav--compact'}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className='nav__inner center'>
        {/* Logo — larger on hero */}
        <a href='#top' className='nav__logo' onClick={closeMenu}>
          <motion.span
            animate={{ fontSize: isHero ? '1.6rem' : '1.25rem' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            LTK
          </motion.span>
          {isHero && (
            <motion.span
              className='nav__logo-sub'
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {about.role}
            </motion.span>
          )}
        </a>

        {/* Nav links — hidden on hero, visible on scroll */}
        <motion.ul
          className='nav__list'
          animate={{
            opacity: isHero ? 0 : 1,
            y: isHero ? -8 : 0,
            pointerEvents: isHero ? 'none' : 'auto',
          }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {NAV_LINKS.filter((l) => l.show).map(({ label, href }) => (
            <li key={label} className='nav__list-item'>
              <a href={href} className='nav__link link link--nav'>
                {label}
              </a>
            </li>
          ))}
        </motion.ul>

        <div className='nav__actions center'>
          {/* Hire me CTA — only on hero */}
          {isHero && (
            <motion.a
              href='#contact'
              className='nav__hire-btn'
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              Hire me
            </motion.a>
          )}

          <button
            type='button'
            onClick={toggleTheme}
            className={`theme-toggle ${themeName}`}
            aria-label='Toggle theme'
          >
            <div className={`toggle-icon ${themeName === 'light' ? 'active' : ''}`}>
              <LightModeIcon fontSize='small' />
            </div>
            <div className={`toggle-icon ${themeName === 'dark' ? 'active' : ''}`}>
              <DarkModeIcon fontSize='small' />
            </div>
            <div className={`toggle-slider ${themeName}`} />
          </button>

          <button
            type='button'
            onClick={() => setShowNavList(!showNavList)}
            className='btn btn--icon nav__hamburger'
            aria-label='Toggle navigation'
            aria-expanded={showNavList}
          >
            {showNavList ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`nav__mobile-overlay ${showNavList ? 'nav__mobile-overlay--open' : ''}`}
        onClick={closeMenu}
        aria-hidden='true'
      />
      <div className={`nav__mobile-drawer ${showNavList ? 'nav__mobile-drawer--open' : ''}`}>
        <ul className='nav__mobile-list'>
          {NAV_LINKS.filter((l) => l.show).map(({ label, href }) => (
            <li key={label} className='nav__mobile-item'>
              <a href={href} onClick={closeMenu} className='nav__mobile-link'>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  )
}

export default Navbar
