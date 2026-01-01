import './SocialLink.style.scss';

const SocialLink = ({ href, icon, children }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="social-link"
    >
      {icon && <span className="social-link__icon">{icon}</span>}
      {children}
    </a>
  );
};

export default SocialLink;