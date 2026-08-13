import type { FC } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  isLoading?: boolean;
  isDisabled?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: VoidFunction;
  type?: 'button' | 'submit' | 'reset';
  variantAction?: 'primary' | 'secondary';
}

export const Button: FC<ButtonProps> = ({
  isLoading,
  isDisabled = isLoading,
  children,
  className = '',
  onClick,
  type = 'button',
  variantAction = 'primary',
}) => {
  const variantClass = styles[`button--${variantAction}`];
  return (
    <button
      className={`${styles.button} ${className || ''}  ${variantClass}`}
      onClick={onClick}
      disabled={isDisabled}
      type={type}
    >
      {children}
    </button>
  );
};
