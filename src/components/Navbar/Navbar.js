import CloseIcon from '@mui/icons-material/Close'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import MenuIcon from '@mui/icons-material/Menu'
import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../contexts/theme'
import { contact, experiences, projects, skills } from '../../portfolio'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Experience', href: '#experiences', show: experiences.length > 0 },
  { label: 'Projects', href: '#projects', show: projects.length > 0 },
  { label: 'Skills', href: '#skills', show: skills.length > 0 },
  { label: 'Contact', href: '#contact', show: !!contact.email },
]

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setShowNavList(false)

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className='nav__inner center'>
        <a href='#top' className='nav__logo' onClick={closeMenu}>
          LTK
        </a>

        <ul className='nav__list'>
          {NAV_LINKS.filter((l) => l.show).map(({ label, href }) => (
            <li key={label} className='nav__list-item'>
              <a href={href} className='nav__link link link--nav'>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className='nav__actions center'>
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
    </nav>
  )
}

export default Navbar
