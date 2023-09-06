import uniqid from 'uniqid'
import { experiences } from '../../portfolio'
import './Experience.css'
import ExperienceContainer from './ExperienceContainer'

const Experience = () => {
  if (!experiences.length) return null

  return (
    <section className='section skills' id='experiences'>
      <h2 className='section__title'>Experience</h2>
      <ul className='experiences_list'>
        {experiences.map((experience) => (
          <ExperienceContainer key={uniqid()} experience={experience} />
        ))}
      </ul>
    </section>
  )
}

export default Experience
