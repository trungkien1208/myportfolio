import PropTypes from 'prop-types'
import { motion } from 'motion/react'
import {
  AppStoreLogo,
  ArrowUpRight,
  Check,
  Globe,
  Star,
} from '@phosphor-icons/react'
import { sideQuests } from '../../portfolio'
import Reveal from '../Reveal/Reveal'
import TechChips from '../TechChips/TechChips'
import './SideQuests.css'

const LINK_ICONS = { appstore: AppStoreLogo, globe: Globe }

const PhoneFan = ({ quest }) => (
  <div className='phones'>
    {quest.shots.map((shot, i) => (
      <motion.img
        key={shot.src}
        className={`phones__shot phones__shot--${i}`}
        src={shot.src}
        alt={shot.alt}
        width='660'
        height='1434'
        loading='lazy'
        initial={{ opacity: 0, y: 60, rotate: 0 }}
        whileInView={{ opacity: 1, y: 0, rotate: [-8, 0, 8][i] }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          type: 'spring',
          stiffness: 140,
          damping: 18,
          delay: 0.1 + i * 0.12,
        }}
      />
    ))}
    <motion.div
      className='phones__cogi'
      initial={{ opacity: 0, scale: 0.4, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: 'spring', stiffness: 260, damping: 16, delay: 0.6 }}
    >
      <span className='phones__bubble'>{quest.mascot.says}</span>
      <img
        src={quest.mascot.src}
        alt={quest.mascot.alt}
        width='360'
        height='401'
        loading='lazy'
      />
    </motion.div>
  </div>
)

const BrowserStack = ({ quest }) => (
  <div className='screens'>
    <motion.div
      className='screens__main browser'
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className='browser__bar' aria-hidden='true'>
        <i />
        <i />
        <i />
        <span className='browser__url'>tabinochan.hientrangvisa.vn</span>
      </div>
      <img
        src={quest.shots[0].src}
        alt={quest.shots[0].alt}
        width='1200'
        height='613'
        loading='lazy'
      />
    </motion.div>
    <motion.img
      className='screens__crop'
      src={quest.crop.src}
      alt={quest.crop.alt}
      width='1200'
      height='357'
      loading='lazy'
      initial={{ opacity: 0, y: 30, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate: -3 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: 'spring', stiffness: 160, damping: 18, delay: 0.35 }}
    />
  </div>
)

const Quest = ({ quest, flip = false }) => {
  const LinkIcon = LINK_ICONS[quest.link.icon] || ArrowUpRight
  return (
    <Reveal
      as='article'
      className={`quest card tone-${quest.tone} ${flip ? 'quest--flip' : ''}`}
    >
      <div className='quest__copy'>
        <div className='quest__brand'>
          <img
            className='quest__logo'
            src={quest.logo}
            alt=''
            width='48'
            height='48'
            loading='lazy'
          />
          <span className='quest__name'>{quest.name}</span>
          <span className='quest__badge'>{quest.badge}</span>
        </div>

        <h3 className='quest__title'>{quest.title}</h3>
        <p className='quest__desc'>{quest.description}</p>

        <ul className='quest__list'>
          {quest.highlights.map((item) => (
            <li key={item}>
              <span className='tick' aria-hidden='true'>
                <Check size={12} weight='bold' />
              </span>
              {item}
            </li>
          ))}
        </ul>

        {quest.rating && (
          <p className='quest__rating'>
            <span className='quest__stars' aria-hidden='true'>
              {[0, 1, 2, 3, 4].map((n) => (
                <Star key={n} size={16} weight='fill' />
              ))}
            </span>
            {quest.rating}
          </p>
        )}

        <div className='quest__stack'>
          <span className='quest__stack-label'>Built with</span>
          <TechChips items={quest.stack} core={quest.core} label='Built with' />
        </div>

        <a
          className='btn btn-ink quest__cta'
          href={quest.link.href}
          target='_blank'
          rel='noreferrer'
        >
          <LinkIcon size={20} weight='fill' />
          {quest.link.label}
          <ArrowUpRight size={16} weight='bold' />
        </a>
      </div>

      <div className='quest__media'>
        {quest.mascot ? (
          <PhoneFan quest={quest} />
        ) : (
          <BrowserStack quest={quest} />
        )}
      </div>
    </Reveal>
  )
}

const SideQuests = () => (
  <section id='side-quests' className='section'>
    <div className='container'>
      <Reveal className='section-head'>
        <h2 className='section-title'>Side quests</h2>
        <p className='section-sub'>
          What I build after work, because apparently I don’t know how to relax.
          Both are live, with real users.
        </p>
      </Reveal>

      <div className='quests'>
        {sideQuests.map((quest, i) => (
          <Quest key={quest.id} quest={quest} flip={i % 2 === 1} />
        ))}
      </div>
    </div>
  </section>
)

const questShape = PropTypes.shape({
  name: PropTypes.string,
  shots: PropTypes.arrayOf(
    PropTypes.shape({ src: PropTypes.string, alt: PropTypes.string })
  ),
})

PhoneFan.propTypes = { quest: questShape.isRequired }
BrowserStack.propTypes = { quest: questShape.isRequired }
Quest.propTypes = { quest: questShape.isRequired, flip: PropTypes.bool }

export default SideQuests
