import { useTranslation } from '/src/i18n';
import { SKILLS_DATA } from '/src/data/skills';
import Tag from '/src/components/atoms/Tag';
import './Skills.style.scss';

const Skills = ({ language }) => {
    const t = useTranslation(language);

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="skills__title">{t.skills.title}</h2>
        <div className="skills__grid">
          {SKILLS_DATA.map((skill, index) => (
            <Tag key={index}>{skill}</Tag>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;