import React from 'react';
import './Button.module.css';

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="get-started-button text-white">
      {label}
    </button>
  );
};

export default Button;
