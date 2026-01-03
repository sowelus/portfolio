import { useTranslation } from '/src/i18n';
import { EXPERIENCE_DATA, EDUCATION_DATA } from '/src/data/experience';
import ExperienceItem from '/src/components/molecules/ExperienceItem';
import './About.style.scss';

const About = ({ language }) => {
  const t = useTranslation(language);

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="about__title">
          {t.about.title}
        </h2>

        <div className="about__grid">
          <div>
            <p className="about__summary">
              {t.about.summary}
            </p>
            <div className="about__card">
              <h3 className="about__card-title">
                {t.about.education}
              </h3>
              {EDUCATION_DATA.map(education => (
                <div key={education.id} className="exp-item">
                  <span className="exp-item__date">{education.year}</span>
                  <h4 className="exp-item__role">{education.course}</h4>
                  <p className="exp-item__company">{education.institution}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="about__card">
            <h3 className="about__card-title">
              {t.about.experience}
            </h3>
            {EXPERIENCE_DATA.map(experience => (
              <ExperienceItem 
                key={experience.id} 
                experience={experience} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;