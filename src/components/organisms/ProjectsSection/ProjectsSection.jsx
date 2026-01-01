import { useTranslation } from '../../../i18n';
import { PROJECTS_DATA } from '../../../data/projects';
import ProjectCard from '../../molecules/ProjectCard';
import './ProjectsSection.style.scss';

const ProjectsSection = ({ language }) => {
  const t = useTranslation(language);
  const featuredProjects = PROJECTS_DATA.filter(project => project.featured);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="projects-section__title">
          {t.projects.title}
        </h2>
        <div className="projects-section__grid">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;