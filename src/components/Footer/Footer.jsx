import { ArrowUp } from '@phosphor-icons/react'
import { about } from '../../portfolio'
import './Footer.css'

const Footer = () => (
  <footer className='footer'>
    <div className='container footer__inner'>
      <p className='footer__made'>
        Built in Saigon with React, pastel and too much bạc xỉu.
      </p>
      <p className='footer__copy'>
        © {new Date().getFullYear()} {about.name}
      </p>
      <a href='#top' className='footer__top'>
        Back to top
        <ArrowUp size={16} weight='bold' />
      </a>
    </div>
  </footer>
)

export default Footer
