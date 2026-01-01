import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PROJECTS_DATA } from '../../data/projects';
import { useTranslation } from '../../i18n';
import Button from '../../components/atoms/Button';
import './ProjectDetail.style.scss';

const ProjectDetail = ({ language }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const t = useTranslation(language);
  const [project, setProject] = useState(null);

  useEffect(() => {
    const foundProject = PROJECTS_DATA.find(p => p.id === parseInt(id));
    setProject(foundProject);
  }, [id]);

  const handleGoBack = () => {
    navigate('/');
  };

  if (!project) {
    return (
      <div className="project-detail">
        <div className="container">
          <div className="project-detail__not-found">
            <h1>Projeto não encontrado</h1>
            <Button onClick={handleGoBack} variant="primary">
              Voltar ao início
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <div className="container">
        {/* Header com botão de voltar */}
        <div className="project-detail__header">
          <Button 
            onClick={handleGoBack} 
            variant="secondary"
            className="project-detail__back-btn"
          >
            ← Voltar
          </Button>
        </div>

        {/* Hero do projeto */}
        <div className="project-detail__hero">
          <div className="project-detail__image-wrapper">
            <img 
              src={project.image} 
              alt={project.title}
              className="project-detail__image"
            />
          </div>
          <div className="project-detail__hero-content">
            <div className="project-detail__tags">{project.tags}</div>
            <h1 className="project-detail__title">{project.title}</h1>
            <p className="project-detail__description">{project.description}</p>
            
            {/* Links do projeto */}
            <div className="project-detail__links">
              {project.liveUrl && (
                <Button href={project.liveUrl} variant="primary">
                  Ver Projeto
                </Button>
              )}
              {project.githubUrl && (
                <Button href={project.githubUrl} variant="secondary">
                  Ver Código
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Detalhes técnicos */}
        {project.keyTechnologies && (
          <div className="project-detail__section">
            <h2 className="project-detail__section-title">Tecnologias Utilizadas</h2>
            <div className="project-detail__technologies">
              {project.keyTechnologies.map((tech, index) => (
                <span key={index} className="project-detail__tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Problema resolvido */}
        {project.problemSolved && (
          <div className="project-detail__section">
            <h2 className="project-detail__section-title">Problema Resolvido</h2>
            <div className="project-detail__problem">
              <p className="project-detail__problem-main">{project.problemSolved.main}</p>
              {project.problemSolved.secondary && (
                <p className="project-detail__problem-secondary">{project.problemSolved.secondary}</p>
              )}
            </div>
          </div>
        )}

        {/* Objetivos */}
        {project.goals && (
          <div className="project-detail__section">
            <h2 className="project-detail__section-title">Objetivos</h2>
            <ul className="project-detail__goals">
              {project.goals.map((goal, index) => (
                <li key={index} className="project-detail__goal">{goal}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Métricas */}
        {project.metrics && (
          <div className="project-detail__section">
            <h2 className="project-detail__section-title">Métricas</h2>
            <div className="project-detail__metrics">
              {Object.entries(project.metrics).map(([key, value]) => (
                <div key={key} className="project-detail__metric">
                  <span className="project-detail__metric-label">
                    {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:
                  </span>
                  <span className="project-detail__metric-value">{value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Guia de estilo */}
        {project.styleGuide && (
          <div className="project-detail__section">
            <h2 className="project-detail__section-title">Guia de Estilo</h2>
            <p className="project-detail__style-guide">{project.styleGuide}</p>
          </div>
        )}

        {/* Foco na interface */}
        {project.userInterfaceFocus && (
          <div className="project-detail__section">
            <h2 className="project-detail__section-title">Foco na Interface</h2>
            <p className="project-detail__ui-focus">{project.userInterfaceFocus}</p>
          </div>
        )}

        {/* Botão de voltar no final */}
        <div className="project-detail__footer">
          <Button onClick={handleGoBack} variant="primary">
            ← Voltar ao Portfolio
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;