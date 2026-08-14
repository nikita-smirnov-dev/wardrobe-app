import type { FC } from 'react';

import { AddItemForm } from '@/components/AddItemForm';
import { BackButton } from '@/UI/BackButton';

import styles from './AddItemPage.module.scss';

export const AddItemPage: FC = () => {
  return (
    <section className="section-offset">
      <div className={`${styles.inner} container`}>
        <BackButton />
        <h1 className={styles.title}>Форма добавления в гардероб</h1>
        <AddItemForm />
      </div>
    </section>
  );
};
