import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import { useEffect, useState } from 'react'
import './ScrollToTop.css'

const ScrollToTop = () => {
  const [scrollPct, setScrollPct] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const total = document.documentElement.scrollHeight - window.innerHeight
      const pct = total > 0 ? Math.round((scrolled / total) * 100) : 0
      setScrollPct(pct)
      setVisible(scrolled > 400)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!visible) return null

  return (
    <a
      href='#top'
      className='scroll-top'
      aria-label='Scroll to top'
      style={{ '--progress': `${scrollPct}%` }}
    >
      <ArrowUpwardIcon fontSize='small' />
    </a>
  )
}

export default ScrollToTop
