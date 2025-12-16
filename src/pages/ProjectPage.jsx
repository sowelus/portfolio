import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { mockProjects } from "../mocks/projects.js";
import ProjectDetail from "../components/ProjectsDetail.jsx";

/*
  Página dedicada de projeto. Usa useParams para obter :id e mostra ProjectDetail.
*/
export default function ProjectPage({ lang, i18n }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = mockProjects.find((p) => String(p.id) === String(id));

  if (!project) {
    return (
      <main className="container" style={{ paddingTop: 120 }}>
        <h2>Projeto não encontrado</h2>
        <button className="btn" onClick={() => navigate("/")}>
          Voltar
        </button>
      </main>
    );
  }

  const handleClose = () => navigate("/");

  return (
    <ProjectDetail
      project={project}
      onClose={handleClose}
      lang={lang}
      i18n={i18n}
    />
  );
}
