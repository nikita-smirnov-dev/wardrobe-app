import { forwardRef } from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import type { FieldError } from 'react-hook-form';

import styles from '@/UI/Input/Input.module.scss';

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  children?: React.ReactNode;
  error?: FieldError | undefined;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ children, className, error, ...props }, ref) => {
    return (
      <div className={`${styles.wrapper} ${error ? styles.error : ''}`}>
        {children}

        <input
          ref={ref}
          className={`${styles.input} ${className || ''}`}
          {...props}
        />

        {error?.message && (
          <span className={styles.error}>{error.message}</span>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';
