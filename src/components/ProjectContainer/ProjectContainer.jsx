import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import StarIcon from '@mui/icons-material/Star'
import { motion } from 'motion/react'
import useTilt from '../../hooks/useTilt'
import './ProjectContainer.css'

const ACCENT_COLORS = ['#6366f1', '#10b981', '#f59e0b', '#ec4899', '#06b6d4', '#f43f5e']

const ProjectContainer = ({ project, index = 0 }) => {
  const { name, description, stack, sourceCode, livePreview, achievements, featured } = project
  const accentColor = featured ? '#6366f1' : ACCENT_COLORS[index % ACCENT_COLORS.length]
  const { tiltRef, onMouseMove, onMouseLeave } = useTilt(featured ? 10 : 13)

  return (
    <motion.article
      ref={tiltRef}
      className={`proj-card${featured ? ' proj-card--featured' : ''}`}
      style={{ '--accent': accentColor }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Holographic shine layer */}
      <div className='proj-card__shine' data-shine aria-hidden='true' />

      <div className='proj-card__accent-bar' aria-hidden='true' />

      <div className='proj-card__body'>
        {featured && (
          <span className='proj-card__featured-badge'>
            <StarIcon sx={{ fontSize: '0.65rem', background: 'transparent' }} />
            Featured Project
          </span>
        )}
        <h3 className='proj-card__name'>{name}</h3>
        <p className='proj-card__desc'>{description}</p>

        {achievements?.length > 0 && (
          <ul className='proj-card__achievements'>
            {achievements.slice(0, featured ? 4 : 3).map((a) => (
              <li key={a} className='proj-card__achievement'>{a}</li>
            ))}
          </ul>
        )}
      </div>

      <div className='proj-card__footer'>
        {stack?.length > 0 && (
          <ul className='proj-card__stack' aria-label='Tech stack'>
            {stack.map((tech) => (
              <li key={tech} className='proj-card__stack-item'>{tech}</li>
            ))}
          </ul>
        )}
        {(sourceCode || livePreview) && (
          <div className='proj-card__links'>
            {sourceCode && (
              <a href={sourceCode} aria-label={`${name} source code`} className='proj-card__link' target='_blank' rel='noreferrer'>
                <GitHubIcon fontSize='small' />
              </a>
            )}
            {livePreview && (
              <a href={livePreview} aria-label={`${name} live preview`} className='proj-card__link' target='_blank' rel='noreferrer'>
                <LaunchIcon fontSize='small' />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  )
}

export default ProjectContainer
