import type { FC } from 'react';
import type { ClothingItem } from '@/types/clothingTypes';
import styles from './WardrobeCard.module.scss';

export interface WardrobeCardProps {
  wardrobe: ClothingItem;
}

export const WardrobeCard: FC<WardrobeCardProps> = ({ wardrobe }) => {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={wardrobe.imageUrl} alt={wardrobe.name} />
      <span className={styles.name}>{wardrobe.name}</span>
      <span className={styles.category}>{wardrobe.category}</span>
      <span className={styles.date}>{wardrobe.addedAt}</span>
    </div>
  );
};
