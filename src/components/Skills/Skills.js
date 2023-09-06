import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'

const calculateColorBasedOnLevel = (level) => {
  switch (level) {
    case 1:
      return '#FF6B6B'; // Light Red
    case 2:
      return '#FFD166'; // Light Orange
    case 3:
      return '#FFCEA3'; // Light Peach
    case 4:
      return '#B2FFD6'; // Light Green
    case 5:
      return '#06D6A0'; // Teal (Expertise)
    default:
      return '#000000';  // Default color (black) for invalid levels
  }
};

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <ul className='skills__list'>
        {skills.sort(
          (a, b) => b.level - a.level
        ).map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain' style={{
            backgroundColor: calculateColorBasedOnLevel(skill.level),
            color: '#000'
          }}>
            {skill.name}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
