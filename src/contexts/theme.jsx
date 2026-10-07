import { createContext, useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const ThemeContext = createContext()
const STORAGE_KEY = 'themeName'

const readSaved = () => {
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

const systemTheme = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

const ThemeProvider = ({ children }) => {
  // index.html sets the class before paint; start from the same answer
  const [themeName, setThemeName] = useState(() => readSaved() || systemTheme())

  // Follow the OS only while the visitor hasn't picked a theme themselves
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (e) => {
      if (!readSaved()) setThemeName(e.matches ? 'dark' : 'light')
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', themeName === 'dark')
    root.classList.toggle('light', themeName !== 'dark')
  }, [themeName])

  const toggleTheme = useCallback(() => {
    setThemeName((current) => {
      const next = current === 'dark' ? 'light' : 'dark'
      try {
        localStorage.setItem(STORAGE_KEY, next)
      } catch {
        // private mode: theme still flips for this visit
      }
      return next
    })
  }, [])

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
