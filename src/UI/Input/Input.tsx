import type { FC } from 'react';

import styles from './Input.module.scss';

interface InputProps {
  children?: React.ReactNode;
  className?: string;
  placeholder?: string;
  type?: string;
  error?: undefined;
  accept?: string;
}

export const Input: FC<InputProps> = ({ children, className, ...props }) => {
  return (
    <div className={`${styles.wrapper} ${props.error ? 'error' : ''}`}>
      {children}
      <input className={`${styles.input} ${className}`} {...props} />
    </div>
  );
};
