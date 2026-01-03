import { useNavigate } from 'react-router-dom';
import './ProjectCard.style.scss';
import { useTranslation } from '/src/i18n';


const ProjectCard = ({ project, isCompanyProject = false, language}) => {
  const navigate = useNavigate();
  const t = useTranslation(language);


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
      className={`project-card ${isCompanyProject ? 'project-card--company' : ''}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={project.title}
    >
      <div className="project-card__image-wrapper">
        <img 
          src={project.image} 
          alt={project.title} 
          className="project-card__image"
          loading="lazy"
        />
        <div className="project-card__overlay">

          {isCompanyProject && project.companyPeriod && (
            <div className="project-card__company-info">
              <span className="project-card__company-badge">
                {project.companyPeriod}
              </span>
              {project.role && (
                <span className="project-card__role">
                  {project.role}
                </span>
              )}
            </div>
          )}
      <span className="project-card__cta">{t.common.viewDetails}</span>
        </div>
      </div>
      <div className="project-card__content">
        <div className="project-card__tags">{project.tags}</div>
        <h3 className="project-card__title">{project.title}</h3>
        
        {isCompanyProject && (
          <div className="project-card__company-details">
            {project.subProjects && project.subProjects.length > 0 && (
              <span className="project-card__subprojects-count">
                {project.subProjects.length} {t.projects.projectsDeveloped}
              </span>
            )}
            {project.metrics && (
              <div className="project-card__metrics">
                <span className="metric">{project.metrics.impactReach}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;