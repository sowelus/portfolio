import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import { i18nData } from "./constants/i18n.js";

export default function App() {
  const [lang, setLang] = useState("pt-BR");

  return (
    <>
      <Header lang={lang} setLang={setLang} i18n={i18nData} />
      <Routes>
        <Route path="/" element={<Home lang={lang} i18n={i18nData} />} />
        <Route
          path="/project/:id"
          element={<ProjectPage lang={lang} i18n={i18nData} />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
