import type { FC } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: VoidFunction;
  type?: 'button' | 'submit' | 'reset';
  variantAction?: 'primary' | 'secondary';
}

export const Button: FC<ButtonProps> = ({
  children,
  className = '',
  onClick,
  type = 'button',
  variantAction = 'primary',
}) => {
  const variantClass = styles[`button--${variantAction}`];
  return (
    <button
      className={`${styles.button} ${className}  ${variantClass}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
