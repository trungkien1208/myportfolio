import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import { useContext, useState } from 'react'
import { ThemeContext } from '../../contexts/theme'
import { contact, projects, skills, experiences } from '../../portfolio'
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
        className='btn'
        aria-label='toggle theme'
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 1,
          border: "1px solid",
          borderColor: themeName === 'light' ? '#000' : '#fff',
          padding: "5px 5px",
          transition: "all 0.5s ease",
        
        }}
      >
        <div className="first__name" style={{
          padding: "0 8px",
          backgroundColor: themeName === 'light' ? '#000' : 'transparent',
          color: themeName === 'light' ? '#fff' : 'inherit',
        }}>
          Trung
        </div>
        <div className="last__name" style={{
          padding: "0 8px",
          backgroundColor: themeName === 'dark' ? '#fff' : 'transparent',
          color: themeName === 'dark' ? '#000' : 'inherit',
        }}>Kiên</div>
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
