import { MapPin } from '@phosphor-icons/react'
import { experiences } from '../../portfolio'
import Reveal from '../Reveal/Reveal'
import './Journey.css'

const TONES = ['primary', 'mint', 'sky']

const Journey = () => (
  <section id='experiences' className='section'>
    <div className='container journey'>
      <Reveal className='journey__head'>
        <h2 className='section-title'>The journey so far</h2>
        <p className='section-sub'>
          Three companies, a lot of healthcare and one very long relationship
          with front-end. Newest first.
        </p>
      </Reveal>

      <ol className='timeline'>
        {experiences.map((job, i) => (
          <Reveal
            as='li'
            key={job.company}
            className={`stop tone-${TONES[i % TONES.length]} ${
              job.current ? 'stop--current' : ''
            }`}
          >
            <span className='stop__node' aria-hidden='true' />
            <div className='stop__card card'>
              {job.current && (
                <span className='stop__now'>
                  <span className='stop__live' aria-hidden='true' />
                  Here now
                </span>
              )}
              <div className='stop__meta'>
                <span className='stop__time'>{job.time}</span>
              </div>
              <h3 className='stop__role'>{job.role}</h3>
              <p className='stop__company'>
                <strong>{job.company}</strong>
                <span className='stop__place'>
                  <MapPin size={16} weight='bold' aria-hidden='true' />
                  {job.location}
                </span>
              </p>
              <p className='stop__quip'>{job.quip}</p>
              <ul className='stop__points'>
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
)

export default Journey
