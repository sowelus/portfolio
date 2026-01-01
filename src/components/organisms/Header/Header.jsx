import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from '../../../i18n';
import './Header.style.scss';

const Header = ({ language, onLanguageChange }) => {
  const t = useTranslation(language);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLanguageChange = (newLang) => {
    onLanguageChange(newLang);
  };

  const handleNavClick = (sectionId) => {
    if (location.pathname !== '/') {
      // Se não estiver na home, navegar para home primeiro
      navigate('/');
      // Aguardar um pouco para a página carregar e então fazer scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Se já estiver na home, apenas fazer scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header className="header">
      <div className="container header__nav-wrapper">
        <div 
          className="header__logo-container"
          onClick={handleLogoClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleLogoClick();
            }
          }}
        >
          <img
            src="src/assets/logo.svg"
            alt="Logo Sow - Designer & Developer"
          />
        </div>

        <ul className="header__nav-links">
          <li>
            <button 
              onClick={() => handleNavClick('about')} 
              className="header__nav-item"
            >
              {t.navigation.about}
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleNavClick('skills')} 
              className="header__nav-item"
            >
              {t.navigation.skills}
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleNavClick('projects')} 
              className="header__nav-item"
            >
              {t.navigation.projects}
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleNavClick('contact')} 
              className="header__nav-item"
            >
              {t.navigation.contact}
            </button>
          </li>
        </ul>

        <div className="header__lang-switch">
          <button 
            className={`header__lang-btn ${language === 'pt' ? 'header__lang-btn--active' : ''}`}
            onClick={() => handleLanguageChange('pt')}
          >
            PT
          </button>
          <span className="header__lang-separator">|</span>
          <button 
            className={`header__lang-btn ${language === 'en' ? 'header__lang-btn--active' : ''}`}
            onClick={() => handleLanguageChange('en')}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;