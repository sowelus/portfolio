import { useTranslation } from '../../../i18n';
import Button from '../../atoms/Button';
import './HeroSection.style.scss';

const HeroSection = ({ language }) => {
  const t = useTranslation(language);

  return (
    <section className="hero">
      <div className="container hero__flex-container">
        <div className="hero__image-wrapper">
          <img
            src="src/assets/avatar.jpg"
            alt="Suelen Camargo"
            className="hero__img"
          />
        </div>

        <div className="hero__text">
          <span className="hero__greeting">
            {t.hero.greeting}
          </span>
          <h1 className="hero__title">{t.hero.title}</h1>
          <p className="hero__role">
            Front-End Developer <span className="hero__role-accent">{t.common.and}</span> UI Designer
          </p>
          <Button href="#contact" variant="primary">
            {t.hero.cta}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;