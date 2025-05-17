import CloseIcon from '@mui/icons-material/Close'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import MenuIcon from '@mui/icons-material/Menu'
import { yellow } from '@mui/material/colors'
import { useContext, useState } from 'react'
import { ThemeContext } from '../../contexts/theme'
import { contact, experiences, projects, skills } from '../../portfolio'
import './Navbar.css'

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)

  const toggleNavList = () => setShowNavList(!showNavList)

  return (
    <nav className='center nav'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >
        {experiences.length ? (
          <li className='nav__list-item'>
            <a
              href='#experiences'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Experience
            </a>
          </li>
        ) : null}

        {projects.length ? (
          <li className='nav__list-item'>
            <a
              href='#projects'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Projects
            </a>
          </li>
        ) : null}

        {skills.length ? (
          <li className='nav__list-item'>
            <a
              href='#skills'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Skills
            </a>
          </li>
        ) : null}

        {contact.email ? (
          <li className='nav__list-item'>
            <a
              href='#contact'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Contact
            </a>
          </li>
        ) : null}
      </ul>

      <button
        type='button'
        onClick={toggleTheme}
        className={`theme-toggle ${themeName}`}
        aria-label='Toggle theme'
      >
        <div
          className={`toggle-icon light ${
            themeName === 'light' ? 'active' : ''
          }`}
        >
          <LightModeIcon
            sx={{
              color: themeName === 'light' ? '#fff' : '#fff',
            }}
          />
        </div>
        <div
          className={`toggle-icon dark ${themeName === 'dark' ? 'active' : ''}`}
        >
          <DarkModeIcon
            sx={{
              color: themeName === 'dark' ? '#fff' : '#000',
            }}
          />
        </div>
        <div className={`toggle-slider ${themeName}`} />
      </button>

      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  )
}

export default Navbar
