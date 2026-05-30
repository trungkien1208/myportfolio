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
  Location: LocationOnIcon,
  Name: PersonIcon,
}

const Contact = () => {
  if (!contact.email) return null

  return (
    <section id='contact' className='section contact'>
      <div className='contact__layout'>

        {/* ── Left: CTA ── */}
        <motion.div
          className='contact__left'
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className='section__label'>Get in touch</span>

          <div className='contact__headline'>
            <span className='contact__headline-deco' aria-hidden='true'>04</span>
            <h2 className='contact__big-title'>
              Let&apos;s<br />
              <span className='contact__big-accent'>Talk.</span>
            </h2>
          </div>

          <p className='contact__intro'>
            Open to new opportunities — freelance, full-time, or collaboration.
            My inbox is always open.
          </p>

          <div className='contact__status'>
            <span className='contact__status-dot' aria-hidden='true' />
            Available for new roles
          </div>

          <div className='contact__actions'>
            <a href={`mailto:${contact.email}`} className='btn btn--primary contact__email-btn'>
              <EmailIcon fontSize='small' />
              Send Email
            </a>

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
        </motion.div>

        {/* ── Right: Info card ── */}
        <motion.div
          className='contact__right'
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: '-80px' }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className='contact__card'>
            <div className='contact__card-stripe' aria-hidden='true' />

            <div className='contact__card-body'>
              <h3 className='contact__card-heading'>Contact Info</h3>

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
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Contact
