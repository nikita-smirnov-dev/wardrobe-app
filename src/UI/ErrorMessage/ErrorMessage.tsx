import { type FC } from 'react';
import styles from './ErrorMessage.module.scss';
import { Button } from '../Button';

interface ErrorMessageProps {
  message: string;
  onClick?: VoidFunction;
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ message, onClick }) => {
  return (
    <div className={styles.errorBlock}>
      <h3>Что-то пошло не так</h3>
      <p>{message}</p>
      <Button onClick={onClick}>Повторить попытку</Button>
    </div>
  );
};
