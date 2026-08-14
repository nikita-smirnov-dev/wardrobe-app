import type { FC } from 'react';
import { ItemDetails } from '@/components/ItemDetails';
import styles from './DetailPage.module.scss';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '@/store/hooks';

export const DetailPage: FC = () => {
  const { id } = useParams<{ id: string }>();

  const currentItem = useAppSelector((state) =>
    state.wardrobe.list.find((item) => item.id === id),
  );

  return (
    <section className="section-offset">
      <div className={`${styles.inner} container`}>
        <h1 className={styles.title}>О Товаре</h1>
        {currentItem ? (
          <ItemDetails item={currentItem} />
        ) : (
          <div className={styles.info}>Вещь не найдена!</div>
        )}
      </div>
    </section>
  );
};
