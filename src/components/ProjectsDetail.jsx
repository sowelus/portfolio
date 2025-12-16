import React from "react";

export default function ProjectDetail({ project, onClose, lang, i18n }) {
  const texts = i18n[lang];

  return (
    <section id="project-detail" style={{ display: "block", paddingTop: 100 }}>
      <div className="container">
        <button className="back-button" onClick={onClose}>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414-4.95 4.95z" />
          </svg>
          {texts["detail.back"]}
        </button>

        <div id="detail-content-wrapper">
          <h1 className="detail-title">{project.fullTitle}</h1>
          <p className="detail-role">{project.role}</p>

          <div className="detail-info-grid">
            <div className="info-block">
              <h3>{texts["detail.role_label"]}</h3>
              <p>{project.role}</p>
            </div>
            <div className="info-block">
              <h3>{texts["detail.tech_label"]}</h3>
              <ul>
                {project.technologies.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="detail-content">
            <h2>{texts["detail.project_label"]}</h2>
            <p>{project.description[lang]}</p>

            <h2>{texts["detail.problem_label"]}</h2>
            <p>{project.problem[lang]}</p>

            <h2>{texts["detail.impact_label"]}</h2>
            <p style={{ color: "var(--brand-blue)", fontWeight: 700 }}>
              {project.impact[lang]}
            </p>
          </div>

          {project.gallery && project.gallery.length > 0 && (
            <div className="detail-gallery">
              <h2>{texts["detail.gallery_label"]}</h2>
              <div className="gallery-grid">
                {project.gallery.map((img, i) => (
                  <div className="gallery-item" key={i}>
                    <img
                      src={img}
                      alt={`${project.title} ${i}`}
                      className="gallery-img"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
