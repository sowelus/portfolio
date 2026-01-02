import { useTranslation } from '../../../i18n';
import { PROJECTS_DATA } from '../../../data/projects';
import ProjectCard from '../../molecules/ProjectCard';
import './ProjectsSection.style.scss';

const ProjectsSection = ({ language }) => {
  const t = useTranslation(language);
  const featuredProjects = PROJECTS_DATA.filter(project => project.featured);
  
  // Separar projetos de empresa dos projetos regulares
  const companyProjects = featuredProjects.filter(project => 
    project.isCompanyProject && project.subProjects && project.subProjects.length > 0
  );
  
  const regularProjects = featuredProjects.filter(project => 
    !project.isCompanyProject || !project.subProjects || project.subProjects.length === 0
  );

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="projects-section__title">
          {t.projects.title}
        </h2>
        
        <div className="projects-section__content">

          {companyProjects.length > 0 && (
            <div className="projects-section__subsection">
              <h3 className="projects-section__subsection-title">
                Experiência Profissional
              </h3>
              <div className="projects-grid">
                {companyProjects.map(project => (
                  <ProjectCard key={project.id} project={project} isCompanyProject={true} />
                ))}
              </div>
            </div>
          )}
          
          {regularProjects.length > 0 && (
            <div className="projects-section__subsection">
              <h3 className="projects-section__subsection-title">
                Outros Projetos
              </h3>
              <div className="projects-grid">
                {regularProjects.map(project => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;