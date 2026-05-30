import StarIcon from '@mui/icons-material/Star'
import useTilt from '../../hooks/useTilt'

const ProjectCard = ({ project, index }) => {
  const { tiltRef, onMouseMove, onMouseLeave } = useTilt(7)
  const num = String(index + 1).padStart(2, '0')

  return (
    <article
      ref={tiltRef}
      className='work-card'
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      data-index={num}
    >
      <span className='work-card__shine' data-shine aria-hidden='true' />

      <div className='work-card__top'>
        {project.featured ? (
          <span className='work-card__badge'>
            <StarIcon sx={{ fontSize: '0.6rem' }} />
            Featured
          </span>
        ) : (
          <span className='work-card__num'>{num}</span>
        )}
      </div>

      <h3 className='work-card__name'>{project.name}</h3>
      <p className='work-card__desc'>{project.description}</p>

      {project.stack?.length > 0 && (
        <ul className='work-card__stack' aria-label='Tech stack'>
          {project.stack.slice(0, 4).map((tech) => (
            <li key={tech} className='work-card__tech'>{tech}</li>
          ))}
        </ul>
      )}
    </article>
  )
}

export default ProjectCard
