import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  href,
  target,
  onClick,
  className = '',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center font-semibold rounded-lg transition-all duration-300 focus:ring-4 focus:ring-opacity-50';
  
  const variants = {
    primary: 'bg-blue-700 hover:bg-blue-800 text-white focus:ring-blue-300',
    secondary: 'bg-gray-700 hover:bg-gray-800 text-white focus:ring-gray-300',
    outline: 'bg-transparent border-2 border-current hover:bg-current hover:text-white',
    success: 'bg-green-700 hover:bg-green-800 text-white focus:ring-green-300'
  };
  
  const sizes = {
    sm: 'py-2 px-3 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-3 px-6 text-lg'
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} rel={target === '_blank' ? 'noreferrer' : undefined} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
