import './ProjectCard.style.scss';

const ProjectCard = ({ project }) => {
  return (
    <article className="project-card">
      <div className="project-card__image-wrapper">
        <img 
          src={project.image} 
          alt={project.title} 
          className="project-card__image"
          loading="lazy"
        />
      </div>
      <div className="project-card__content">
        <div className="project-card__tags">{project.tags}</div>
        <h3 className="project-card__title">{project.title}</h3>
      </div>
    </article>
  );
};

export default ProjectCard;