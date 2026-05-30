import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'
import './Cursor.css'

const Cursor = () => {
  const [hovering, setHovering] = useState(false)
  const [clicking, setClicking] = useState(false)

  const mx = useMotionValue(-200)
  const my = useMotionValue(-200)

  const springCfg = { stiffness: 160, damping: 20, mass: 0.4 }
  const rx = useSpring(mx, springCfg)
  const ry = useSpring(my, springCfg)

  useEffect(() => {
    const onMove = (e) => {
      mx.set(e.clientX)
      my.set(e.clientY)
    }
    const onOver = (e) => {
      setHovering(!!e.target.closest('a, button, [role="button"], input, label, select, textarea'))
    }
    const onDown = () => setClicking(true)
    const onUp = () => setClicking(false)

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
    }
  }, [mx, my])

  // Don't render on touch-only devices
  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
    return null
  }

  return (
    <>
      {/* Spring-lagged ring */}
      <motion.div
        className='c-ring'
        style={{ translateX: rx, translateY: ry }}
        animate={{
          scale: clicking ? 0.65 : (hovering ? 1.8 : 1),  // eslint-disable-line no-nested-ternary
          borderColor: hovering ? 'rgba(99,102,241,1)' : 'rgba(99,102,241,0.55)',
          backgroundColor: hovering ? 'rgba(99,102,241,0.08)' : 'transparent',
        }}
        transition={{ scale: { duration: 0.18 }, borderColor: { duration: 0.15 } }}
      />
      {/* Instant dot */}
      <motion.div
        className='c-dot'
        style={{ translateX: mx, translateY: my }}
        animate={{ scale: clicking ? 0.4 : (hovering ? 0 : 1) }}  // eslint-disable-line no-nested-ternary
        transition={{ duration: 0.12 }}
      />
    </>
  )
}

export default Cursor
