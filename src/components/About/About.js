import { Box, Grid, Button } from '@mui/material'
import PropTypes from 'prop-types'
import { about } from '../../portfolio'
import './About.css'

const downloadResume = (resume) => {
  const link = document.createElement('a')
  link.href = resume
  link.download = 'Luutrungkien_Resume.pdf'
  link.dispatchEvent(new MouseEvent('click'))
}

const About = () => {
  const { name, role, description, resume } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        {role && <h2 className='about__role'>A {role}.</h2>}
      </Box>

      <Grid
        container
        columnSpacing={4}
        justifyContent='center'
        alignItems='center'
      >
        <Grid item xs={12} md={12}>
          {description
            .split('\n')
            .filter(Boolean)
            .map((paragraph, index) => (
              <p key={index} className='about__paragraph'>
                {paragraph}
              </p>
            ))}
        </Grid>
      </Grid>

      <div className='about__contact center'>
        {resume && (
          <Button
            variant='outlined'
            onClick={() => downloadResume(resume)}
            className='about__resume-button'
          >
            Download Resume
          </Button>
        )}

        {/* {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )} */}
      </div>
    </div>
  )
}

About.propTypes = {
  name: PropTypes.string,
  role: PropTypes.string,
  description: PropTypes.string,
  resume: PropTypes.string,
}

export default About
