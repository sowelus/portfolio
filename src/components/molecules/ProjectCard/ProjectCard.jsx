import { useNavigate } from 'react-router-dom';
import './ProjectCard.style.scss';

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/project/${project.id}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <article 
      className="project-card"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Ver detalhes do projeto ${project.title}`}
    >
      <div className="project-card__image-wrapper">
        <img 
          src={project.image} 
          alt={project.title} 
          className="project-card__image"
          loading="lazy"
        />
        <div className="project-card__overlay">
          <span className="project-card__cta">Ver Detalhes</span>
        </div>
      </div>
      <div className="project-card__content">
        <div className="project-card__tags">{project.tags}</div>
        <h3 className="project-card__title">{project.title}</h3>
      </div>
    </article>
  );
};

export default ProjectCard;