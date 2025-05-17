import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'

const calculateFontColorBasedOnBackground = (background) => {
  // Convert hex to RGB
  const hex = background.replace('#', '')
  const r = parseInt(hex.substr(0, 2), 16)
  const g = parseInt(hex.substr(2, 2), 16)
  const b = parseInt(hex.substr(4, 2), 16)

  // Calculate relative luminance using sRGB coefficients
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255

  // Return black for light backgrounds, white for dark backgrounds
  return luminance > 0.5 ? '#000000' : '#FFFFFF'
}

const calculateColorBasedOnLevel = (level) => {
  switch (level) {
    case 1:
      return '#FF6B6B' // Light Red
    case 2:
      return '#FFD166' // Light Orange
    case 3:
      return '#FFCEA3' // Light Peach
    case 4:
      return '#B2FFD6' // Light Green
    case 5:
      return '#06D6A0' // Teal (Expertise)
    default:
      return '#000000' // Default color (black) for invalid levels
  }
}

const getLevelTitle = (level) => {
  switch (level) {
    case 5:
      return 'Expert Level'
    case 4:
      return 'Advanced Level'
    case 3:
      return 'Intermediate Level'
    case 2:
      return 'Elementary Level'
    case 1:
      return 'Beginner Level'
    default:
      return 'Other Skills'
  }
}

const Skills = () => {
  if (!skills.length) return null

  // Group skills by level
  const skillsByLevel = skills.reduce((acc, { level, ...skill }) => {
    if (!acc[level]) {
      acc[level] = []
    }
    acc[level].push({ level, ...skill })
    return acc
  }, {})

  // Sort levels in descending order
  const sortedLevels = Object.keys(skillsByLevel).sort((a, b) => b - a)

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <div className='skills__container'>
        {sortedLevels.map((level) => (
          <div key={uniqid()} className='skills__level'>
            <h3 className='skills__level-title'>
              {getLevelTitle(parseInt(level, 10))}
            </h3>
            <ul className='skills__list'>
              {skillsByLevel[level]
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((skill) => (
                  <li
                    key={uniqid()}
                    className='skills__list-item'
                    style={{
                      backgroundColor: calculateColorBasedOnLevel(skill.level),
                      color: calculateFontColorBasedOnBackground(
                        calculateColorBasedOnLevel(skill.level)
                      ),
                    }}
                  >
                    {skill.name}
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
