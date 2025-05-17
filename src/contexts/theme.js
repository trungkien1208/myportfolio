import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const savedTheme = localStorage.getItem('themeName')
  const [themeName, setThemeName] = useState(savedTheme || 'light')

  useEffect(() => {
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    if (savedTheme) {
      setThemeName(savedTheme)
    } else {
      setThemeName(darkMediaQuery.matches ? 'dark' : 'light')
    }
    darkMediaQuery.addEventListener('change', (e) => {
      setThemeName(e.matches ? 'dark' : 'light')
      localStorage.setItem('themeName', e.matches ? 'dark' : 'light')
    })
  }, [savedTheme])

  const toggleTheme = () => {
    const name = themeName === 'dark' ? 'light' : 'dark'
    localStorage.setItem('themeName', name)
    setThemeName(name)
  }

  return (
    <ThemeContext.Provider value={[{ themeName, toggleTheme }]}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ThemeProvider, ThemeContext }
