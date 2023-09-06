import { Chip } from '@mui/material';
import './Experience.css';

const ExperienceContainer = ({ experience }) => (
  <div className='experience' style={{
    position: 'relative',
  }}>
    {
      experience.current && (
        <div className='experience__line' style={{
          position: 'absolute',
          top: '8px',
          right: '8px',
          
        }}>
          <Chip
            label="Current"
            color="primary"
            variant='outlined'
            size="small"
            
           />
        </div>
        
      )
    }
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',

    }}>
      <h4 className='experience__title'>{experience.name}</h4>
      <p className='experience__date' style={{
        color: '#c1c1c1'
      }}>{experience.time}</p>

    </div>
    <p className='experience__description' style={{
      color: '#c1c1c1'
    }}>
      <span >Role: </span>
      {experience.role}
    </p>
    <p className='experience__description'>{experience.description}</p>
  </div>
)

export default ExperienceContainer
