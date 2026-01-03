import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PROJECTS_DATA } from '../../data/projects';
import { useTranslation } from '../../i18n';
import Button from '../../components/atoms/Button';
import './ProjectDetail.style.scss';

const ProjectDetail = ({ language }) => {
  const { id, subId } = useParams();
  const navigate = useNavigate();
  const t = useTranslation(language);
  const [project, setProject] = useState(null);
  const [subProject, setSubProject] = useState(null);
  const [isCompanyView, setIsCompanyView] = useState(false);

  useEffect(() => {
    const foundProject = PROJECTS_DATA.find(p => p.id === parseInt(id));
    
    if (foundProject) {
      setProject(foundProject);
      setIsCompanyView(foundProject.isCompanyProject && foundProject.subProjects);
      
      if (subId && foundProject.subProjects) {
        const foundSubProject = foundProject.subProjects.find(sp => sp.id === subId);
        setSubProject(foundSubProject);
      } else {
        setSubProject(null);
      }
    }
  }, [id, subId]);

  const handleGoBack = () => {
    navigate('/');
  };

  const handleGoToMainProject = () => {
    navigate(`/project/${id}`);
  };

  const handleGoToSubProject = (subProjectId) => {
    navigate(`/project/${id}/${subProjectId}`);
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

  if (subProject) {
    return (
      <div className="project-detail">
        <div className="container">

          <div className="project-detail__breadcrumb">
            <button onClick={handleGoBack} className="breadcrumb-link">Portfolio</button>
            <span className="breadcrumb-separator">→</span>
            <button onClick={handleGoToMainProject} className="breadcrumb-link">{project.title}</button>
            <span className="breadcrumb-separator">→</span>
            <span className="breadcrumb-current">{subProject.title}</span>
          </div>


          <div className="project-detail__header">
            <Button 
              onClick={handleGoToMainProject} 
              variant="secondary"
              className="project-detail__back-btn"
            >
              ← Voltar para {project.title}
            </Button>
          </div>

          <div className="project-detail__hero">
            <div className="project-detail__image-wrapper">
              <img 
                src={subProject.image} 
                alt={subProject.title}
                className="project-detail__image"
              />
            </div>
            <div className="project-detail__hero-content">
              <div className="project-detail__company-badge">
                {project.title} • {project.companyPeriod}
              </div>
              <div className="project-detail__tags">{subProject.tags}</div>
              <h1 className="project-detail__title">{subProject.title}</h1>
              <p className="project-detail__description">{subProject.description}</p>
              
              <div className="project-detail__links">
                {subProject.liveUrl && (
                  <Button href={subProject.liveUrl} variant="primary">
                   {t.common.viewWebsite}
                  </Button>
                )}
                {subProject.githubUrl && (
                  <Button href={subProject.githubUrl} variant="secondary">
                    Ver Código
                  </Button>
                )}
              </div>
            </div>
          </div>

          {renderProjectDetails(subProject)}

          <div className="project-detail__footer">
            <Button onClick={handleGoToMainProject} variant="primary">
              ← Voltar para {project.title}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <div className="container">

        <div className="project-detail__header">
          <Button 
            onClick={handleGoBack} 
            variant="secondary"
            className="project-detail__back-btn"
          >
            ← Voltar
          </Button>
        </div>


        <div className="project-detail__hero">
          <div className="project-detail__image-wrapper">
            <img 
              src={project.image} 
              alt={project.title}
              className="project-detail__image"
            />
          </div>
          <div className="project-detail__hero-content">
            {project.companyPeriod && (
              <div className="project-detail__company-period">{project.companyPeriod}</div>
            )}
            <div className="project-detail__tags">{project.tags}</div>
            <h1 className="project-detail__title">{project.title}</h1>
            <p className="project-detail__description">{project.description}</p>
            {project.role && (
              <p className="project-detail__role"><strong>Função:</strong> {project.role}</p>
            )}
            

            <div className="project-detail__links">
              {project.liveUrl && (
                <Button href={project.liveUrl} variant="primary">
                  {t.common.viewWebsite}
                </Button>
              )}
              {project.githubUrl && (
                <Button href={project.githubUrl} variant="secondary">
                  {t.common.viewCode}
                </Button>
              )}
            </div>
          </div>
        </div>


        {isCompanyView && project.subProjects && (
          <div className="project-detail__section">
            <h2 className="project-detail__section-title">Projetos Desenvolvidos</h2>
            <div className="project-detail__subprojects-grid">
              {project.subProjects.map((subProj) => (
                <div 
                  key={subProj.id} 
                  className="project-detail__subproject-card"
                  onClick={() => handleGoToSubProject(subProj.id)}
                >
                  <div className="subproject-card__image-wrapper">
                    <img 
                      src={subProj.image} 
                      alt={subProj.title}
                      className="subproject-card__image"
                    />
                  </div>
                  <div className="subproject-card__content">
                    <div className="subproject-card__tags">{subProj.tags}</div>
                    <h3 className="subproject-card__title">{subProj.title}</h3>
                    <p className="subproject-card__description">{subProj.description}</p>
                    <div className="subproject-card__cta">Ver Detalhes →</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}


        {renderProjectDetails(project)}


        <div className="project-detail__footer">
          <Button onClick={handleGoBack} variant="primary">
            ← Voltar ao Portfolio
          </Button>
        </div>
      </div>
    </div>
  );


  function renderProjectDetails(projectData) {
    return (
      <>

        {projectData.keyTechnologies && (
          <div className="project-detail__section">
            <h2 className="project-detail__section-title">Tecnologias Utilizadas</h2>
            <div className="project-detail__technologies">
              {projectData.keyTechnologies.map((tech, index) => (
                <span key={index} className="project-detail__tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}


        {projectData.problemSolved && (
          <div className="project-detail__section">
            <h2 className="project-detail__section-title">Problema Resolvido</h2>
            <div className="project-detail__problem">
              <p className="project-detail__problem-main">{projectData.problemSolved.main}</p>
              {projectData.problemSolved.secondary && (
                <p className="project-detail__problem-secondary">{projectData.problemSolved.secondary}</p>
              )}
            </div>
          </div>
        )}


        {projectData.goals && (
          <div className="project-detail__section">
            <h2 className="project-detail__section-title">Objetivos</h2>
            <ul className="project-detail__goals">
              {projectData.goals.map((goal, index) => (
                <li key={index} className="project-detail__goal">{goal}</li>
              ))}
            </ul>
          </div>
        )}


        {projectData.metrics && (
          <div className="project-detail__section">
            <h2 className="project-detail__section-title">Métricas</h2>
            <div className="project-detail__metrics">
              {Object.entries(projectData.metrics).map(([key, value]) => (
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


        {projectData.styleGuide && (
          <div className="project-detail__section">
            <h2 className="project-detail__section-title">Guia de Estilo</h2>
            <p className="project-detail__style-guide">{projectData.styleGuide}</p>
          </div>
        )}


        {projectData.userInterfaceFocus && (
          <div className="project-detail__section">
            <h2 className="project-detail__section-title">Foco na Interface</h2>
            <p className="project-detail__ui-focus">{projectData.userInterfaceFocus}</p>
          </div>
        )}

        {projectData.challenges && (
          <div className="project-detail__section">
            <h2 className="project-detail__section-title">Desafios</h2>
            <ul className="project-detail__challenges">
              {projectData.challenges.map((challenge, index) => (
                <li key={index} className="project-detail__challenge">{challenge}</li>
              ))}
            </ul>
          </div>
        )}

        {projectData.learnings && (
          <div className="project-detail__section">
            <h2 className="project-detail__section-title">Aprendizados</h2>
            <ul className="project-detail__learnings">
              {projectData.learnings.map((learning, index) => (
                <li key={index} className="project-detail__learning">{learning}</li>
              ))}
            </ul>
          </div>
        )}
      </>
    );
  }
};

export default ProjectDetail;