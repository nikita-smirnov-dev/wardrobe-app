import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../UI/Button';

import styles from '@/pages/not-found/NotFoundPage.module.scss';

export const NotFound: FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>404</h1>
      <h2 className={styles.subtitle}>Страница не найдена</h2>
      <p className={styles.text}>
        К сожалению, запрашиваемая страница не существует или была удалена.
      </p>
      <Button className={styles.btn} onClick={handleGoBack}>
        Назад
      </Button>
    </div>
  );
};
