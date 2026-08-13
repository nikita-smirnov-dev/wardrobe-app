import type { ClothingItem } from '@/types/clothingTypes';
import { type FC } from 'react';
import styles from './ItemDetails.module.scss';
import { Button } from '@/UI/Button';

export interface ItemDetailsProps {
  item: ClothingItem;
}

export const ItemDetails: FC<ItemDetailsProps> = ({ item }) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={item.imageUrl} alt={item.name} />
      <h2 className={styles.title}>{item.name}</h2>
      <span className={styles.category}>{item.category}</span>
      <span className={styles.date}>{item.addedAt}</span>
      <Button className={styles.btn} variantAction="secondary">
        Удалить
      </Button>
    </div>
  );
};
