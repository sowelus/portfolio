import { useTranslation } from '../../../i18n';
import './Header.style.scss';

const Header = ({ language, onLanguageChange }) => {
  const t = useTranslation(language);

  const handleLanguageChange = (newLang) => {
    onLanguageChange(newLang);
  };

  return (
    <header className="header">
      <div className="container header__nav-wrapper">
        <div className="header__logo-container">
          <img
            src="src/assets/logo.svg"
            alt="Logo Sow - Designer & Developer"
          />
        </div>

        <ul className="header__nav-links">
          <li>
            <a href="#about" className="header__nav-item">
              {t.navigation.about}
            </a>
          </li>
          <li>
            <a href="#skills" className="header__nav-item">
              {t.navigation.skills}
            </a>
          </li>
          <li>
            <a href="#projects" className="header__nav-item">
              {t.navigation.projects}
            </a>
          </li>
          <li>
            <a href="#contact" className="header__nav-item">
              {t.navigation.contact}
            </a>
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