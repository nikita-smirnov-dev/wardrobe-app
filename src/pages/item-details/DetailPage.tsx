import type { FC } from 'react';
import { ItemDetails } from '@/components/ItemDetails';
import styles from './DetailPage.module.scss';
import { data } from '@/components/WardrobeList/WardrobeList';
import { useParams } from 'react-router-dom';

export const DetailPage: FC = () => {
  const { id } = useParams<{ id: string }>();

  const currentItem = data.find((item) => item.id === id);

  if (!currentItem) {
    return <div className="container">Вещь не найдена!</div>;
  }
  return (
    <section className="section-offset">
      <div className={`${styles.inner} container`}>
        <h1 className={styles.title}>О Товаре</h1>
        <ItemDetails item={currentItem} />
      </div>
    </section>
  );
};
