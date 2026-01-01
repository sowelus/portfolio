import './ExperienceItem.style.scss';

const ExperienceItem = ({ experience }) => {
  return (
    <div className="exp-item">
      <span className="exp-item__date">{experience.period}</span>
      <h4 className="exp-item__role">{experience.position}</h4>
      <p className="exp-item__company">{experience.company}</p>
      <p className="exp-item__description">{experience.description}</p>
    </div>
  );
};

export default ExperienceItem;