import { Fragment } from 'react'
import { motion } from 'motion/react'
import { ArrowDown, FileArrowDown, HandWaving } from '@phosphor-icons/react'
import { about, sideQuests } from '../../portfolio'
import './Hero.css'

const [cogingon, tabi] = sideQuests

const pop = (delay) => ({
  initial: { opacity: 0, scale: 0.6, y: 30 },
  animate: { opacity: 1, scale: 1, y: 0 },
  transition: { type: 'spring', stiffness: 260, damping: 20, delay },
})

const rise = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
})

// Stickers can be picked up and tossed; they spring home on release.
// Mouse only: on touch screens dragging would hijack page scroll.
const canDrag = window.matchMedia('(pointer: fine)').matches
const drag = !canDrag
  ? {}
  : {
      drag: true,
      dragSnapToOrigin: true,
      dragElastic: 0.5,
      whileDrag: { scale: 1.06, cursor: 'grabbing', zIndex: 10 },
      whileHover: { scale: 1.03 },
    }

const Headline = () => (
  <h1 className='hero__title'>
    {about.headline.map((line) => (
      <span key={line} className='hero__line'>
        {line.split(' ').map((word, i, words) => {
          const clean = word.replace(/[^\p{L}]/gu, '')
          const spacer = i < words.length - 1 ? ' ' : ''
          // Space stays outside the span so the underline stops at the word
          return clean === about.highlight ? (
            <Fragment key={word}>
              <span className='hero__marker'>{word}</span>
              {spacer}
            </Fragment>
          ) : (
            `${word}${spacer}`
          )
        })}
      </span>
    ))}
  </h1>
)

const Hero = () => (
  <section id='top' className='hero'>
    <div className='container hero__grid'>
      <div className='hero__copy'>
        <motion.p className='hero__hello' {...rise(0.05)}>
          <span className='hero__wave' aria-hidden='true'>
            <HandWaving size={20} weight='fill' />
          </span>
          {about.greeting}
        </motion.p>

        <motion.div {...rise(0.15)}>
          <Headline />
        </motion.div>

        <motion.p className='hero__sub' {...rise(0.25)}>
          {about.subtext}
        </motion.p>

        <motion.div className='hero__ctas' {...rise(0.35)}>
          <a href='#side-quests' className='btn btn-primary'>
            See my work
            <ArrowDown size={18} weight='bold' />
          </a>
          <a
            href={about.resume}
            className='btn'
            download={about.resumeFileName}
          >
            <FileArrowDown size={18} weight='bold' />
            Résumé
          </a>
        </motion.div>
      </div>

      <div className='hero__art'>
        <motion.figure className='sticker sticker--browser' {...pop(0.35)}>
          <motion.div className='sticker__body' {...drag}>
            <div className='browser'>
              <div className='browser__bar' aria-hidden='true'>
                <i />
                <i />
                <i />
              </div>
              <img
                src={tabi.shots[0].src}
                alt={tabi.shots[0].alt}
                width='1200'
                height='613'
                draggable='false'
              />
            </div>
          </motion.div>
        </motion.figure>

        <motion.figure className='sticker sticker--phone' {...pop(0.5)}>
          <motion.div className='sticker__body' {...drag}>
            <img
              src={cogingon.shots[0].src}
              alt={cogingon.shots[0].alt}
              width='660'
              height='1434'
              draggable='false'
            />
          </motion.div>
        </motion.figure>

        <motion.div className='sticker sticker--avatar' {...pop(0.65)}>
          <motion.div className='sticker__body' {...drag}>
            {about.avatarImage ? (
              <img
                src={about.avatarImage}
                alt={about.name}
                width='652'
                height='792'
                draggable='false'
              />
            ) : (
              <span className='monogram' aria-hidden='true'>
                {about.monogram}
              </span>
            )}
          </motion.div>
        </motion.div>

        {/* Ink postmark: same postal theme as the portrait stamp, carries the years */}
        <motion.div
          className='sticker sticker--postmark'
          {...pop(0.8)}
          aria-hidden='true'
        >
          <motion.div className='sticker__body' {...drag}>
            <svg className='postmark' viewBox='0 0 220 140'>
              <defs>
                <path
                  id='postmark-arc'
                  d='M 150 122 a 52 52 0 1 1 0 -104 a 52 52 0 1 1 0 104'
                />
              </defs>
              <path
                className='postmark__waves'
                d='M 4 46 q 10 -8 20 0 t 20 0 t 20 0 t 20 0 M 4 70 q 10 -8 20 0 t 20 0 t 20 0 t 20 0 M 4 94 q 10 -8 20 0 t 20 0 t 20 0 t 20 0'
              />
              <circle className='postmark__paper' cx='150' cy='70' r='66' />
              <circle cx='150' cy='70' r='64' />
              <circle cx='150' cy='70' r='42' />
              <text className='postmark__ring'>
                <textPath href='#postmark-arc' startOffset='50%'>
                  SHIPPING SINCE {about.careerStart} ★ SAIGON ★
                </textPath>
              </text>
              <text className='postmark__num' x='150' y='76'>
                {about.yearsShipping}+
              </text>
              <text className='postmark__unit' x='150' y='94'>
                YEARS
              </text>
            </svg>
          </motion.div>
        </motion.div>

        <motion.div className='sticker sticker--cogi' {...pop(0.95)}>
          <motion.div className='sticker__body' {...drag}>
            <span className='cogi-bubble'>He made me!</span>
            <img
              src={cogingon.mascot.heroSrc}
              alt={cogingon.mascot.alt}
              width='360'
              height='401'
              draggable='false'
            />
          </motion.div>
        </motion.div>

        <motion.p className='hero__hint' {...rise(1.2)} aria-hidden='true'>
          psst, the stickers are draggable
        </motion.p>
      </div>
    </div>
  </section>
)

export default Hero
