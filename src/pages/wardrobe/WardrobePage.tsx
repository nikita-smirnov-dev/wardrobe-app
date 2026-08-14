import type { FC } from 'react';

import { WardrobeList } from '@/components/WardrobeList';

import styles from './WardrobePage.module.scss';

export const WardrobePage: FC = () => {
  return (
    <section className="section-offset">
      <div className={`${styles.inner} container`}>
        <h1 className={styles.title}>Список вещей</h1>
        <WardrobeList />
      </div>
    </section>
  );
};
