import { toolbox } from '../../portfolio'
import Reveal from '../Reveal/Reveal'
import TechChips from '../TechChips/TechChips'
import './Toolbox.css'

const Toolbox = () => (
  <section id='skills' className='section'>
    <div className='container'>
      <Reveal className='section-head'>
        <h2 className='section-title'>What’s in the toolbox</h2>
        <p className='section-sub'>
          Sorted by how often I reach for them, not by how good they look on a
          résumé. Starred ones are my core: I’d bet a production release on
          them.
        </p>
      </Reveal>

      <div className='bento'>
        {toolbox.map((group, i) => (
          <Reveal
            key={group.title}
            delay={i * 0.06}
            className={`tool card tone-${group.tone} ${
              group.size === 'wide' ? 'tool--wide' : ''
            }`}
          >
            <h3 className='tool__title'>{group.title}</h3>
            <p className='tool__note'>{group.note}</p>
            <TechChips
              className='tool__chips'
              items={group.items}
              core={group.core}
              label={group.title}
            />
          </Reveal>
        ))}
      </div>
    </div>
  </section>
)

export default Toolbox
