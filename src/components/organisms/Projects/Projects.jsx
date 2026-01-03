import { useTranslation } from '/src/i18n';
import { PROJECTS_DATA } from '/src/data/projects';
import ProjectCard from '/src/components/molecules/ProjectCard';
import './Projects.style.scss';

const Projects = ({ language }) => {
  const t = useTranslation(language);
  const featuredProjects = PROJECTS_DATA.filter(project => project.featured);
  
  const companyProjects = featuredProjects.filter(project => 
    project.isCompanyProject && project.subProjects && project.subProjects.length > 0
  );
  
  const regularProjects = featuredProjects.filter(project => 
    !project.isCompanyProject || !project.subProjects || project.subProjects.length === 0
  );

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="projects__title">
          {t.projects.title}
        </h2>
        
        <div className="projects__content">

          {companyProjects.length > 0 && (
            <div className="projects__subsection">
              <h3 className="projects__subsection-title">
                {t.about.experience}
              </h3>
              <div className="projects-grid">
                {companyProjects.map(project => (
                  <ProjectCard key={project.id} project={project} isCompanyProject={true} language={language}/>
                ))}
              </div>
            </div>
          )}
          
          {regularProjects.length > 0 && (
            <div className="projects__subsection">
              <h3 className="projects__subsection-title">
                {t.projects.otherProjects}
              </h3>
              <div className="projects-grid">
                {regularProjects.map(project => (
                  <ProjectCard key={project.id} project={project} language={language}/>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;