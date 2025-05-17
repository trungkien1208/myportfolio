import { GitHub, Instagram, LinkedIn, Mail } from '@mui/icons-material'
import { Divider, Grid, Typography } from '@mui/material'
import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact Me</h2>
      <Grid
        container
        columnSpacing={4}
        rowSpacing={1}
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid
          item
          xs={12}
          lg={8}
          container
          rowSpacing={2}
          justifyContent='center'
          alignItems='center'
          textAlign={{ xs: 'center', md: 'left' }}
          sx={{
            maxWidth: '700px',
          }}
        >
          {Object.keys(contact.contact).map((key) => (
            <Grid key={key} item xs={12} md={6}>
              <Typography component='span' variant='body2' fontWeight={600}>
                {key}:{' '}
              </Typography>

              <Typography component='span' variant='body2'>
                {contact.contact[key]}
              </Typography>
            </Grid>
          ))}
        </Grid>
        <Divider
          orientation='vertical'
          flexItem
          sx={{
            display: { xs: 'none', md: 'block' },
          }}
        />
        <Grid item xs={12} lg={3.5}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '20px',
            }}
          >
            <a
              href={`mailto:${contact.email}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Mail color='primary' fontSize='large' />
            </a>

            {contact.github && (
              <a
                href={contact.github}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='github'
                className='link link--icon'
              >
                <GitHub color='primary' fontSize='large' />
              </a>
            )}

            {contact.linkedin && (
              <a
                href={contact.linkedin}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedIn color='primary' fontSize='large' />
              </a>
            )}

            {contact.instagram && (
              <a
                href={contact.instagram}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='instagram'
                className='link link--icon'
              >
                <Instagram color='primary' fontSize='large' />
              </a>
            )}
          </div>
        </Grid>
      </Grid>
    </section>
  )
}

export default Contact
