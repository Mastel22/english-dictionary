import React, { ButtonHTMLAttributes } from 'react';

interface IButton {
  classNames?: string;
  config?: ButtonHTMLAttributes<HTMLButtonElement>;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<IButton> = ({ classNames, children, config, onClick }) => {
  return (
    <div>
      <button {...config} className={`btn-primary ${classNames}`} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;