import { createRoot } from 'react-dom/client'
import '@fontsource-variable/bricolage-grotesque'
import '@fontsource/be-vietnam-pro/400.css'
import '@fontsource/be-vietnam-pro/400-italic.css'
import '@fontsource/be-vietnam-pro/500.css'
import '@fontsource/be-vietnam-pro/600.css'
import '@fontsource/be-vietnam-pro/700.css'
import '@fontsource/jetbrains-mono/400.css'
import '@fontsource/jetbrains-mono/600.css'
import './index.css'
import App from './App'
import { ThemeProvider } from './contexts/theme'

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
)

// A little hello for the curious
// eslint-disable-next-line no-console
console.log(
  '%cHey, you opened devtools. We should probably work together.\n%cluutrungkien120894@gmail.com',
  'font: 700 16px system-ui; color: #c42d6b',
  'font: 14px system-ui; color: #6e5464'
)
