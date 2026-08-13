import type { ClothingItem } from '@/types/clothingTypes';
import { type FC } from 'react';
import styles from './ItemDetails.module.scss';
import { Button } from '@/UI/Button';
import { useAppDispatch } from '@/store/hooks';
import { deleteItem } from '@/store/wardrobeSlice';
import { useNavigate } from 'react-router-dom';

export interface ItemDetailsProps {
  item: ClothingItem;
}

export const ItemDetails: FC<ItemDetailsProps> = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const removeItem = () => {
    const isConfirmed = window.confirm(
      'Вы уверены, что хотите удалить эту вещь?',
    );

    if (isConfirmed) {
      dispatch(deleteItem(item.id));

      navigate('/wardrobe');
    }
  };
  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={item.imageUrl} alt={item.name} />
      <h2 className={styles.title}>{item.name}</h2>
      <span className={styles.category}>{item.category}</span>
      <span className={styles.date}>{item.addedAt}</span>
      <Button
        className={styles.btn}
        variantAction="secondary"
        onClick={removeItem}
      >
        Удалить
      </Button>
    </div>
  );
};
