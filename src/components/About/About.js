import { Grid } from '@mui/material'
import { about } from '../../portfolio'
import './About.css'


const About = () => {
  const { name, role, description, resume} = about
  const downloadResume = () => { 
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'resume.pdf';
    link.dispatchEvent(new MouseEvent('click'));

  }
  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <Grid container columnSpacing={4}
        justifyContent="center"
        alignItems="center"
        sx={{
        m: "40px 0",
      }}>
        <Grid item xs={12} md={12}>
          {description.split('\n').map((item) => (
            <p style={{
              marginBottom: "20px",
            }}>
              {item}
            </p>
          ))}
        </Grid>
      
     
      </Grid>
      
     
      <div className='about__contact center'>
        {resume && (
          <button href={resume} type="button" onClick={downloadResume}>
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
      </div>
    </div>
  )
}

export default About
