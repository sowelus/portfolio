import React from "react";

export default function ProjectsGrid({ projects, onOpen }) {
  return (
    <div className="projects-grid" id="projects-list">
      {projects.map((project) => (
        <div
          key={project.id}
          className="project-card"
          onClick={() => onOpen(project.id)}
        >
          <div className="project-img-wrapper">
            <img
              src={project.image}
              alt={project.title}
              className="project-img"
              loading="lazy"
            />
          </div>
          <div className="project-info">
            <div className="project-tags">{project.tags}</div>
            <h3 className="project-title">{project.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
