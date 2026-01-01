import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    document.documentElement.lang = newLanguage === 'pt' ? 'pt-BR' : 'en-US';
  };

  return (
    <Router>
      <Header language={language} onLanguageChange={handleLanguageChange} />
      
      <main>
        <Routes>
          <Route 
            path="/" 
            element={<Home language={language} />} 
          />
          <Route 
            path="/project/:id" 
            element={<ProjectDetail language={language} />} 
          />
        </Routes>
      </main>
      
      <Footer language={language} />
    </Router>
  );
}

export default App;