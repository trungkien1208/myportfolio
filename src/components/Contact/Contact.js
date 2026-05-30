import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PersonIcon from '@mui/icons-material/Person'
import PhoneIcon from '@mui/icons-material/Phone'
import { motion } from 'motion/react'
import { contact } from '../../portfolio'
import './Contact.css'

const INFO_ICONS = {
  Email: EmailIcon,
  Phone: PhoneIcon,
  Address: LocationOnIcon,
  Name: PersonIcon,
}

const Contact = () => {
  if (!contact.email) return null

  return (
    <section id='contact' className='section contact'>
      <span className='section__deco' aria-hidden='true'>04</span>
      <span className='section__label'>Get in touch</span>
      <h2 className='section__title'>Contact</h2>
      <div className='section__underline' />

      <motion.div
        className='contact__card'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className='contact__card-header' aria-hidden='true' />

        <div className='contact__body'>
          <div className='contact__info'>
            <h3 className='contact__info-heading'>Contact Info</h3>
            <ul className='contact__info-list'>
              {Object.entries(contact.contact).map(([key, value]) => {
                const Icon = INFO_ICONS[key] || PersonIcon
                return (
                  <li key={key} className='contact__info-item'>
                    <span className='contact__info-icon' aria-hidden='true'>
                      <Icon fontSize='small' />
                    </span>
                    <span>
                      <span className='contact__info-label'>{key}</span>
                      <span className='contact__info-value'>{value}</span>
                    </span>
                  </li>
                )
              })}
            </ul>

            <div className='contact__socials'>
              {contact.github && (
                <a
                  href={contact.github}
                  aria-label='GitHub profile'
                  className='contact__social-btn'
                  target='_blank'
                  rel='noreferrer'
                >
                  <GitHubIcon fontSize='small' />
                  GitHub
                </a>
              )}
              {contact.linkedin && (
                <a
                  href={contact.linkedin}
                  aria-label='LinkedIn profile'
                  className='contact__social-btn'
                  target='_blank'
                  rel='noreferrer'
                >
                  <LinkedInIcon fontSize='small' />
                  LinkedIn
                </a>
              )}
            </div>
          </div>

          <div className='contact__cta'>
            <div className='contact__cta-icon' aria-hidden='true'>✉</div>
            <h3 className='contact__cta-heading'>Let&apos;s work together</h3>
            <p className='contact__cta-text'>
              I&apos;m currently open to new opportunities. Whether you have a project in mind,
              want to collaborate, or just want to say hello — my inbox is always open.
            </p>
            <a
              href={`mailto:${contact.email}`}
              className='btn btn--primary contact__cta-btn'
            >
              <EmailIcon fontSize='small' />
              Send Email
            </a>
            <p className='contact__cta-status'>
              <span className='contact__status-dot' aria-hidden='true' />
              Available for freelance &amp; full-time roles
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
