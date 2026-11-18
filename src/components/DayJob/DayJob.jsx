import PropTypes from 'prop-types'
import {
  ChartBar,
  Check,
  DeviceTablet,
  FirstAidKit,
  Heartbeat,
} from '@phosphor-icons/react'
import { projects } from '../../portfolio'
import Reveal from '../Reveal/Reveal'
import TechChips from '../TechChips/TechChips'
import './DayJob.css'

const ICONS = {
  kiosk: DeviceTablet,
  admin: ChartBar,
  platform: Heartbeat,
  heart: FirstAidKit,
}

// Grid spans: featured fills the row, the rest sit in thirds
const spanFor = (i) => (i === 0 ? 'job--full' : 'job--third')

const Job = ({ project, index }) => {
  const Icon = ICONS[project.icon] || ChartBar
  const featured = Boolean(project.featured)
  return (
    <Reveal
      as='article'
      delay={featured ? 0 : (index % 3) * 0.08}
      className={`job card ${spanFor(index)} tone-${project.tone} ${
        featured ? 'job--featured' : ''
      }`}
    >
      <div className='job__main'>
        <div className='job__top'>
          <span className='job__icon' aria-hidden='true'>
            <Icon size={featured ? 30 : 24} weight='duotone' />
          </span>
          <span className='job__client'>{project.client}</span>
        </div>
        <h3 className='job__name'>{project.name}</h3>
        <p className='job__desc'>{project.description}</p>
        <TechChips
          className='job__chips'
          items={project.stack}
          core={project.core}
          label='Stack'
          chipClassName={featured ? '' : 'chip-plain'}
        />
      </div>

      {featured && project.achievements && (
        <ul className='job__wins'>
          {project.achievements.map((win) => (
            <li key={win}>
              <span className='tick' aria-hidden='true'>
                <Check size={12} weight='bold' />
              </span>
              {win}
            </li>
          ))}
        </ul>
      )}
    </Reveal>
  )
}

const DayJob = () => (
  <section id='projects' className='section'>
    <div className='container'>
      <Reveal className='section-head'>
        <h2 className='section-title'>Day job</h2>
        <p className='section-sub'>
          Hospitals and clinics. Places where “works on my machine” is not an
          acceptable answer.
        </p>
      </Reveal>

      <div className='jobs'>
        {projects.map((project, i) => (
          <Job key={project.name} project={project} index={i} />
        ))}
      </div>
    </div>
  </section>
)

Job.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    client: PropTypes.string,
    icon: PropTypes.string,
    tone: PropTypes.string,
    featured: PropTypes.bool,
    description: PropTypes.string,
    stack: PropTypes.arrayOf(PropTypes.string),
    core: PropTypes.arrayOf(PropTypes.string),
    achievements: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  index: PropTypes.number.isRequired,
}

export default DayJob
