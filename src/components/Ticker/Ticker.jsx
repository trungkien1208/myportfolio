import PropTypes from 'prop-types'
import { Sparkle } from '@phosphor-icons/react'
import { facts } from '../../portfolio'
import './Ticker.css'

const Row = ({ hidden = false }) => (
  <ul className='ticker__row' aria-hidden={hidden || undefined}>
    {facts.map((fact) => (
      <li key={fact} className='ticker__item'>
        <Sparkle size={18} weight='fill' className='ticker__star' />
        {fact}
      </li>
    ))}
  </ul>
)

Row.propTypes = { hidden: PropTypes.bool }

// Two identical rows slide left as one strip; the second hides from screen readers
const Ticker = () => (
  <div className='ticker' role='region' aria-label='Quick facts'>
    <div className='ticker__track'>
      <Row />
      <Row hidden />
    </div>
  </div>
)

export default Ticker
