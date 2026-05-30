import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { contact, about } from '../../portfolio'
import './Footer.css'

const Footer = () => (
  <footer className='footer'>
    <div className='footer__inner'>
      <p className='footer__name'>{about.name}</p>
      <p className='footer__copy'>© {new Date().getFullYear()} · Built with React</p>
      <div className='footer__links'>
        {contact.github && (
          <a href={contact.github} aria-label='GitHub' className='footer__link' target='_blank' rel='noreferrer'>
            <GitHubIcon fontSize='small' />
          </a>
        )}
        {contact.linkedin && (
          <a href={contact.linkedin} aria-label='LinkedIn' className='footer__link' target='_blank' rel='noreferrer'>
            <LinkedInIcon fontSize='small' />
          </a>
        )}
      </div>
    </div>
  </footer>
)

export default Footer
