import React from "react";

export default function Header({ lang, setLang, i18n }) {
  return (
    <header>
      <div className="container nav-wrapper">
        <div className="logo-container">
          <a
            href="#"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img src="/src/assets/logo.svg" alt="Logo" />
          </a>
        </div>

        <ul className="nav-links">
          <li>
            <a href="#about" className="nav-item">
              {i18n[lang]["nav.about"]}
            </a>
          </li>
          <li>
            <a href="#skills" className="nav-item">
              {i18n[lang]["nav.skills"]}
            </a>
          </li>
          <li>
            <a href="#projects" className="nav-item">
              {i18n[lang]["nav.projects"]}
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-item">
              {i18n[lang]["nav.contact"]}
            </a>
          </li>
        </ul>

        <div className="lang-switch">
          <button
            className={`lang-btn ${lang === "pt-BR" ? "active" : ""}`}
            onClick={() => setLang("pt-BR")}
          >
            PT
          </button>
          <span style={{ color: "var(--neutral-600)" }}>|</span>
          <button
            className={`lang-btn ${lang === "en-US" ? "active" : ""}`}
            onClick={() => setLang("en-US")}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
}
