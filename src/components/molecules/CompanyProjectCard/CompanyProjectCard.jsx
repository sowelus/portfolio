import { useNavigate } from 'react-router-dom';
import './CompanyProjectCard.style.scss';

const CompanyProjectCard = ({ project }) => {
  const navigate = useNavigate();

  const handleMainProjectClick = () => {
    navigate(`/project/${project.id}`);
  };

  return (
    <article className="company-project-card">
      {/* Card Principal da Empresa - Versão Simplificada */}
      <div 
        className="company-project-card__main"
        onClick={handleMainProjectClick}
        role="button"
        tabIndex={0}
        aria-label={`Ver experiência completa na ${project.title}`}
      >
        <div className="company-project-card__main-image-wrapper">
          <img 
            src={project.image} 
            alt={project.title} 
            className="company-project-card__main-image"
            loading="lazy"
          />
          <div className="company-project-card__main-overlay">
            <div className="company-project-card__company-info">
              <span className="company-project-card__company-badge">
                {project.companyPeriod}
              </span>
              <span className="company-project-card__role">
                {project.role}
              </span>
            </div>
          </div>
        </div>
        
        <div className="company-project-card__main-content">
          <div className="company-project-card__tags">{project.tags}</div>
          <h3 className="company-project-card__title">{project.title}</h3>
          <p className="company-project-card__description">
            {project.description}
          </p>
          
          {/* Métricas resumidas */}
          <div className="company-project-card__metrics">
            <span className="metric">
              <strong>{project.metrics.projectsDelivered}</strong>
            </span>
            <span className="metric">
              <strong>{project.metrics.impactReach}</strong>
            </span>
          </div>

          {/* Indicador de subprojetos - apenas visual */}
          {project.subProjects && project.subProjects.length > 0 && (
            <div className="company-project-card__subprojects-indicator">
              <span className="subprojects-count">
                {project.subProjects.length} projetos desenvolvidos
              </span>
              <span className="view-details-cta">
                Clique para ver detalhes →
              </span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default CompanyProjectCard;