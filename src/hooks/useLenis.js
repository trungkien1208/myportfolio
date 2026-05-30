import { useEffect } from 'react'
import Lenis from 'lenis'

/**
 * Lenis smooth scroll — gives butter-smooth inertia scrolling.
 * Framer-motion's useScroll and IntersectionObserver still work correctly.
 */
const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.07,          // Lower = more inertia
      wheelMultiplier: 0.9,
      smoothTouch: false,
      syncTouch: false,
    })

    // Sync framer-motion's scroll detection
    lenis.on('scroll', () => {
      // Dispatch a synthetic scroll event so framer-motion whileInView works
      window.dispatchEvent(new Event('scroll'))
    })

    let rafId
    const raf = (time) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])
}

export default useLenis
