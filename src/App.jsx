import { useState } from 'react';
import Header from './components/organisms/Header';
import HeroSection from './components/organisms/HeroSection';
import AboutSection from './components/organisms/AboutSection';
import SkillsSection from './components/organisms/SkillsSection';
import ProjectsSection from './components/organisms/ProjectsSection';
import ContactSection from './components/organisms/ContactSection';
import Footer from './components/organisms/Footer';

function App() {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    document.documentElement.lang = newLanguage === 'pt' ? 'pt-BR' : 'en-US';
  };

  return (
    <>
      <Header language={language} onLanguageChange={handleLanguageChange} />
      
      <main> 
        <HeroSection language={language} />
        <AboutSection language={language} />
        <SkillsSection />
        <ProjectsSection language={language} />
        <ContactSection language={language} />
      </main>
      
      <Footer language={language} />
    </>
  );
}

export default App;