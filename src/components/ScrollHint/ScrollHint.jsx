import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { motion } from 'motion/react'
import './ScrollHint.css'

const ScrollHint = ({ nextId }) => (
  <a
    href={`#${nextId}`}
    className='scroll-hint'
    aria-label='Scroll to next section'
  >
    <motion.span
      className='scroll-hint__icon'
      animate={{ y: [0, 7, 0] }}
      transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
    >
      <KeyboardArrowDownIcon fontSize='medium' />
    </motion.span>
  </a>
)

export default ScrollHint
