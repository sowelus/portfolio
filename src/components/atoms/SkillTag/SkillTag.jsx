import './SkillTag.style.scss';

const SkillTag = ({ children, className = '' }) => {
  return (
    <span className={`skill-tag ${className}`}>
      {children}
    </span>
  );
};

export default SkillTag;