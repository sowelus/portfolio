import { SKILLS_DATA } from '../../../data/skills';
import SkillTag from '../../atoms/SkillTag';
import './SkillsSection.style.scss';

const SkillsSection = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="skills-section__title">Skills</h2>
        <div className="skills-section__grid">
          {SKILLS_DATA.map((skill, index) => (
            <SkillTag key={index}>{skill}</SkillTag>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;