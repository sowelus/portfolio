import './Button.style.scss';

const Button = ({ 
  children, 
  variant = 'primary', 
  href, 
  onClick,
  className = '',
  ...props 
}) => {
  const Component = href ? 'a' : 'button';
  const classes = `btn btn--${variant} ${className}`;
  
  return (
    <Component 
      className={classes}
      href={href}
      onClick={onClick}
      target={href ? '_blank' : undefined}
      rel={href ? 'noopener noreferrer' : undefined}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;