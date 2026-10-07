import { useEffect } from 'react'
import Lenis from 'lenis'

const easeOutCubic = (t) => 1 - (1 - t) ** 3

/**
 * Lenis smooth scroll, plus eased in-page anchor navigation.
 * Lenis honours each section's scroll-margin-top, so no extra offset here.
 * Under prefers-reduced-motion the wheel stays native and anchors jump.
 */
const useLenis = () => {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    const lenis = new Lenis({
      lerp: 0.12,
      smoothWheel: !prefersReduced,
    })

    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]')
      if (!anchor) return
      const hash = anchor.getAttribute('href')
      if (!hash || hash === '#') return
      const target = hash === '#top' ? 0 : document.querySelector(hash)
      if (target === null) return

      e.preventDefault()
      lenis.scrollTo(target, {
        duration: prefersReduced ? 0 : 1.1,
        immediate: prefersReduced,
        easing: easeOutCubic,
      })
      window.history.replaceState(null, '', hash)
      // Move keyboard focus with the scroll so the next Tab continues there
      if (target !== 0) {
        target.setAttribute('tabindex', '-1')
        target.focus({ preventScroll: true })
      }
    }
    document.addEventListener('click', handleAnchorClick)

    let rafId
    const raf = (time) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      document.removeEventListener('click', handleAnchorClick)
      lenis.destroy()
    }
  }, [])
}

export default useLenis
