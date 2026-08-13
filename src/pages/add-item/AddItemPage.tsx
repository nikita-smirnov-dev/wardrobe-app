import { AddItemForm } from '@/components/AddItemForm';
import type { FC } from 'react';
import styles from './AddItemPage.module.scss';

export const AddItemPage: FC = () => {
  return (
    <section className="section-offset">
      <div className={`${styles.inner} container`}>
        <h1 className={styles.title}>Форма добавления в гардероб</h1>
        <AddItemForm />
      </div>
    </section>
  );
};
