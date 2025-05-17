import { Box, Grid } from '@mui/material'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume } = about
  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = resume
    link.download = 'Luutrungkien_Resume.pdf'
    link.dispatchEvent(new MouseEvent('click'))
  }
  return (
    <div className='about center'>
      <Box
        className='about__intro'
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        {name && (
          <h1>
            Hi, I am <span className='about__name'>{name}.</span>
          </h1>
        )}
      </Box>

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
          <Box className='about__desc'>
            {description
              .split('\n')
              .filter((item) => item)
              .map((item) => (
                <p
                  style={{
                    marginBottom: '1.5rem',
                    textAlign: 'justify',
                  }}
                >
                  {item.split('**').map((part, index) =>
                    index % 2 === 0 ? (
                      part
                    ) : (
                      <strong
                        key={part}
                        style={{
                          background:
                            'linear-gradient(90deg, var(--clr-primary-light), var(--clr-primary))',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          fontWeight: 'bold',
                        }}
                      >
                        {part}
                      </strong>
                    )
                  )}
                </p>
              ))}
          </Box>
        </Grid>
      </Grid>

      <Box
        className='about__contact center'
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        {resume && (
          <button href={resume} type='button' onClick={downloadResume}>
            <span type='button' className='btn btn--outline'>
              Download Resume
            </span>
          </button>
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
      </Box>
    </div>
  )
}

export default About
