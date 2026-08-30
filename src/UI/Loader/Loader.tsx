import type { FC } from 'react';
import styles from '@/UI/Loader/Loader.module.scss';

export const Loader: FC = () => {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.spinner}></div>
    </div>
  );
};
