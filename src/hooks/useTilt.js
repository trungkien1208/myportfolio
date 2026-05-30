import { useRef, useCallback } from 'react'

/**
 * 3D holographic card tilt with shine effect.
 * Usage:
 *   const { tiltRef, onMouseMove, onMouseLeave } = useTilt()
 *   <div ref={tiltRef} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
 */
const useTilt = (intensity = 13) => {
  const tiltRef = useRef(null)

  const onMouseMove = useCallback(
    (e) => {
      const el = tiltRef.current
      if (!el) return

      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const nx = (x / rect.width) * 2 - 1   // -1 to 1
      const ny = (y / rect.height) * 2 - 1   // -1 to 1

      const rotX = ny * -intensity
      const rotY = nx * intensity

      el.style.transform = `perspective(1100px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.035, 1.035, 1.035)`
      el.style.transition = 'transform 0ms'

      // Move shine to cursor position
      const shine = el.querySelector('[data-shine]')
      if (shine) {
        shine.style.opacity = '1'
        shine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.05) 40%, transparent 70%)`
      }
    },
    [intensity]
  )

  const onMouseLeave = useCallback(() => {
    const el = tiltRef.current
    if (!el) return

    el.style.transform =
      'perspective(1100px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)'
    el.style.transition = 'transform 650ms cubic-bezier(0.23, 1, 0.32, 1)'

    const shine = el.querySelector('[data-shine]')
    if (shine) shine.style.opacity = '0'
  }, [])

  return { tiltRef, onMouseMove, onMouseLeave }
}

export default useTilt
