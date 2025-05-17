import { LocationOn } from '@mui/icons-material'
import { Chip } from '@mui/material'
import './Experience.css'

const ExperienceContainer = ({ experience }) => (
  <div
    className='experience'
    style={{
      position: 'relative',
    }}
  >
    {experience.current && (
      <div
        className='experience__line'
        style={{
          position: 'absolute',
          top: '8px',
          right: '8px',
        }}
      >
        <Chip label='Current' color='primary' variant='outlined' size='small' />
      </div>
    )}
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '8px',
      }}
    >
      <h4 className='experience__title'>{experience.name}</h4>
      <p
        className='experience__date'
        style={{
          color: '#c1c1c1',
        }}
      >
        {experience.time}
      </p>
    </div>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginBottom: '8px',
      }}
    >
      <p
        className='experience__description'
        style={{
          color: '#c1c1c1',
          margin: 0,
        }}
      >
        <span>Role: </span>
        {experience.role}
      </p>
      {experience.location && (
        <>
          <span style={{ color: '#c1c1c1' }}>•</span>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              color: '#c1c1c1',
            }}
          >
            <LocationOn fontSize='small' />
            <p
              className='experience__description'
              style={{
                margin: 0,
              }}
            >
              {experience.location}
            </p>
          </div>
        </>
      )}
    </div>
    <ul
      style={{
        listStyle: 'disc',
        marginLeft: '1rem',
      }}
    >
      {experience.description
        .split('\n')
        .filter((item) => item)
        .map((item) => (
          <li key={item}>
            <p className='experience__description'>{item}</p>
          </li>
        ))}
    </ul>
  </div>
)

export default ExperienceContainer
