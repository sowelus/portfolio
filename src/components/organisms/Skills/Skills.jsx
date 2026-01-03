import { SKILLS_DATA } from '../../../data/skills';
import Tag from '/src/components/atoms/Tag';
import './Skills.style.scss';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="skills__title">Skills</h2>
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