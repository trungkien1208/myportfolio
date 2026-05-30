import React, { useEffect, useRef, useState, lazy, Suspense } from 'react'
import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from 'motion/react'
import { about, contact } from '../../portfolio'
import './About.css'

const Hero3D = lazy(() => import('../Hero3D/Hero3D'))

const ROLES = [
  'Senior Software Engineer',
  'React / React Native Expert',
  'Frontend Team Lead',
  'Healthcare Tech Builder',
]

const STATS = [
  { value: 8, suffix: '+', label: 'Years Experience' },
  { value: 6, suffix: '', label: 'Products Shipped' },
  { value: 3, suffix: '', label: 'Countries' },
]

const EASE = [0.22, 1, 0.36, 1]

const useCountUp = (target, duration = 1200, shouldStart = false) => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!shouldStart) return undefined
    let frame = 0
    const totalFrames = Math.round((duration / 1000) * 60)
    const timer = setInterval(() => {
      frame += 1
      setCount(Math.min(Math.round(target * (frame / totalFrames)), target))
      if (frame >= totalFrames) clearInterval(timer)
    }, 1000 / 60)
    return () => { clearInterval(timer) }
  }, [target, duration, shouldStart])
  return count
}

const TypewriterRoles = ({ roles }) => {
  const [idx, setIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[idx]
    let t
    if (!deleting && displayed.length < current.length) {
      t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 55)
    } else if (!deleting && displayed.length === current.length) {
      t = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 28)
    } else if (deleting) {
      setDeleting(false)
      setIdx((i) => (i + 1) % roles.length)
    }
    return () => clearTimeout(t)
  }, [displayed, deleting, idx, roles])

  return (
    <span className='about__typewriter'>
      {displayed}
      <span className='about__cursor' aria-hidden='true' />
    </span>
  )
}

const SplitText = ({ text, className, baseDelay = 0.3 }) => {
  const chars = text.split('').map((ch, i) => ({ ch, key: `c${i}` }))
  return (
    <span className={className} aria-label={text} style={{ display: 'inline-block', overflow: 'visible' }}>
      {chars.map(({ ch, key }, i) => (
        <motion.span
          key={key}
          style={{ display: 'inline-block' }}
          initial={{ opacity: 0, y: 60, rotateX: -80 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.55, delay: baseDelay + i * 0.032, ease: EASE }}
        >
          {ch === ' ' ? '\u00a0\u00a0' : ch}
        </motion.span>
      ))}
    </span>
  )
}

const StatItem = ({ value, suffix, label, started }) => {
  const count = useCountUp(value, 1200, started)
  return (
    <div className='about__stat'>
      <span className='about__stat-value'>{count}{suffix}</span>
      <span className='about__stat-label'>{label}</span>
    </div>
  )
}

const About = () => {
  const { name, resume, social, tagline } = about
  const statsRef = useRef(null)
  const [statsStarted, setStatsStarted] = useState(false)

  /* Scroll parallax — hero dissolves into next section */
  const { scrollY } = useScroll()
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0])
  const heroY = useTransform(scrollY, [0, 600], [0, -120])
  const heroScale = useTransform(scrollY, [0, 600], [1, 0.94])
  const canvas3DY = useTransform(scrollY, [0, 600], [0, 60])

  /* Blob mouse parallax */
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const blobSpring = { stiffness: 35, damping: 22 }
  const blobX = useSpring(rawX, blobSpring)
  const blobY = useSpring(rawY, blobSpring)
  const b1x = useTransform(blobX, [-1, 1], ['-35px', '35px'])
  const b1y = useTransform(blobY, [-1, 1], ['-22px', '22px'])
  const b2x = useTransform(blobX, [-1, 1], ['28px', '-28px'])
  const b2y = useTransform(blobY, [-1, 1], ['18px', '-18px'])
  const b3x = useTransform(blobX, [-1, 1], ['-18px', '18px'])
  const b3y = useTransform(blobY, [-1, 1], ['24px', '-24px'])

  useEffect(() => {
    const handleMove = (e) => {
      rawX.set((e.clientX / window.innerWidth) * 2 - 1)
      rawY.set((e.clientY / window.innerHeight) * 2 - 1)
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [rawX, rawY])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsStarted(true) },
      { threshold: 0.5 }
    )
    const el = statsRef.current
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = resume
    link.download = 'LuuTrungKien_Resume.pdf'
    link.dispatchEvent(new MouseEvent('click'))
  }

  return (
    <section id='top' className='about'>
      {/* Aurora blobs */}
      <motion.div className='about__blob about__blob--1' style={{ x: b1x, y: b1y }} aria-hidden='true' />
      <motion.div className='about__blob about__blob--2' style={{ x: b2x, y: b2y }} aria-hidden='true' />
      <motion.div className='about__blob about__blob--3' style={{ x: b3x, y: b3y }} aria-hidden='true' />
      <div className='about__grid' aria-hidden='true' />

      {/* Two-column layout */}
      <div className='about__columns'>

        {/* LEFT — text content with scroll parallax */}
        <motion.div
          className='about__left'
          style={{ opacity: heroOpacity, y: heroY, scale: heroScale }}
        >
          <motion.div
            className='about__badge'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
          >
            <span className='about__badge-dot' aria-hidden='true' />
            Open to new opportunities
          </motion.div>

          <motion.div
            className='about__avatar'
            aria-hidden='true'
            initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
          >
            <span className='about__avatar-text'>LTK</span>
            <span className='about__avatar-ring' />
          </motion.div>

          <motion.p
            className='about__greeting'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease: EASE }}
          >
            Hi, I&apos;m
          </motion.p>

          <SplitText text={name} className='about__name' baseDelay={0.3} />

          <motion.div
            className='about__role-wrapper'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.85, ease: EASE }}
          >
            <TypewriterRoles roles={ROLES} />
          </motion.div>

          {tagline && (
            <motion.p
              className='about__tagline'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.95, ease: EASE }}
            >
              {tagline}
            </motion.p>
          )}

          <motion.div
            className='about__ctas'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.05, ease: EASE }}
          >
            <a href='#experiences' className='btn btn--primary about__cta-primary'>
              View My Work
            </a>
            {resume && (
              <button type='button' onClick={downloadResume} className='btn btn--glass'>
                Download Resume
              </button>
            )}
          </motion.div>

          <motion.div
            className='about__socials'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.15, ease: EASE }}
          >
            {social?.github && (
              <a href={social.github} aria-label='GitHub' className='about__social-link' target='_blank' rel='noreferrer'>
                <GitHubIcon fontSize='small' />
              </a>
            )}
            {social?.linkedin && (
              <a href={social.linkedin} aria-label='LinkedIn' className='about__social-link' target='_blank' rel='noreferrer'>
                <LinkedInIcon fontSize='small' />
              </a>
            )}
            {contact?.email && (
              <a href={`mailto:${contact.email}`} aria-label='Email' className='about__social-link'>
                <EmailIcon fontSize='small' />
              </a>
            )}
          </motion.div>

          <motion.div
            className='about__stats'
            ref={statsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.25, ease: EASE }}
          >
            {STATS.map(({ value, suffix, label }, i) => (
              <React.Fragment key={label}>
                <StatItem value={value} suffix={suffix} label={label} started={statsStarted} />
                {i < STATS.length - 1 && <span className='about__stat-divider' aria-hidden='true' />}
              </React.Fragment>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT — Three.js 3D canvas, slower scroll */}
        <motion.div
          className='about__right'
          style={{ y: canvas3DY }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          <Suspense fallback={<div className='about__3d-loading' />}>
            <Hero3D />
          </Suspense>
        </motion.div>

      </div>

      {/* Scroll down indicator */}
      <motion.a
        href='#experiences'
        className='about__scroll'
        aria-label='Scroll to experience'
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        style={{ opacity: heroOpacity }}
      >
        <KeyboardArrowDownIcon fontSize='large' />
      </motion.a>
    </section>
  )
}

export default About
