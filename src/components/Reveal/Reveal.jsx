import PropTypes from 'prop-types'
import { motion } from 'motion/react'

// Fade-and-rise on first entry. MotionConfig in App makes it static under
// prefers-reduced-motion.
const Reveal = ({
  as = 'div',
  delay = 0,
  y = 28,
  className = undefined,
  children = null,
  ...rest
}) => {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

Reveal.propTypes = {
  as: PropTypes.string,
  delay: PropTypes.number,
  y: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.node,
}

export default Reveal
