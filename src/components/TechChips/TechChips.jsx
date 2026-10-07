import PropTypes from 'prop-types'
import { Star } from '@phosphor-icons/react'

// Core picks render first as filled, starred chips; the rest keep their order
const TechChips = ({
  items,
  core = [],
  label,
  className = '',
  chipClassName = '',
}) => {
  const rest = items.filter((name) => !core.includes(name))
  return (
    <ul className={`chips ${className}`} aria-label={label}>
      {core.map((name) => (
        <li key={name} className='chip chip--core'>
          <Star size={13} weight='fill' aria-hidden='true' />
          <span className='sr-only'>Core: </span>
          {name}
        </li>
      ))}
      {rest.map((name) => (
        <li key={name} className={`chip ${chipClassName}`}>
          {name}
        </li>
      ))}
    </ul>
  )
}

TechChips.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  core: PropTypes.arrayOf(PropTypes.string),
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  chipClassName: PropTypes.string,
}

export default TechChips
