import LocationOnIcon from '@mui/icons-material/LocationOn'
import WorkIcon from '@mui/icons-material/Work'
import useTilt from '../../hooks/useTilt'

const ACCENT_COLORS = ['#6366f1', '#10b981', '#f59e0b', '#ec4899', '#06b6d4']

const ExperienceContainer = ({ experience, index = 0 }) => {
  const { name, location, time, role, description, current } = experience
  const accentColor = ACCENT_COLORS[index % ACCENT_COLORS.length]
  const { tiltRef, onMouseMove, onMouseLeave } = useTilt(9)
  const bullets = description.split('\n').filter((l) => l.trim())

  return (
    <article
      ref={tiltRef}
      className='exp-card'
      style={{ '--accent': accentColor }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {/* Holographic shine */}
      <div className='exp-card__shine' data-shine aria-hidden='true' />

      <div className='exp-card__header'>
        <div className='exp-card__company-row'>
          <span className='exp-card__company-icon' aria-hidden='true'>
            <WorkIcon fontSize='small' />
          </span>
          <h3 className='exp-card__company'>{name}</h3>
          {current && <span className='exp-card__current-badge'>Current</span>}
        </div>
        <p className='exp-card__role'>{role}</p>
        <div className='exp-card__meta'>
          <span className='exp-card__time'>{time}</span>
          <span className='exp-card__sep' aria-hidden='true'>·</span>
          <span className='exp-card__location'>
            <LocationOnIcon sx={{ fontSize: '0.85rem', verticalAlign: 'middle', background: 'transparent' }} />
            {' '}{location}
          </span>
        </div>
      </div>

      <ul className='exp-card__bullets'>
        {bullets.map((line) => (
          <li key={line} className='exp-card__bullet'>{line}</li>
        ))}
      </ul>
    </article>
  )
}

export default ExperienceContainer
