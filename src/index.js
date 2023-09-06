import { createRoot } from 'react-dom'
import App from './App'
import { ThemeProvider } from './contexts/theme'
import './index.css'

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
)