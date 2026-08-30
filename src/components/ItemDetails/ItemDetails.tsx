import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import type { ClothingItem } from '@/types/clothingTypes';
import { Button } from '@/UI/Button';
import { useAppDispatch } from '@/store/hooks';
import { fetchDeleteClothingItem } from '@/store/wardrobeSlice';

import styles from '@/components/ItemDetails/ItemDetails.module.scss';

export interface ItemDetailsProps {
  item: ClothingItem;
}

export const ItemDetails: FC<ItemDetailsProps> = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const removeItem = async () => {
    const isConfirmed = window.confirm(
      'Вы уверены, что хотите удалить эту вещь?',
    );

    if (isConfirmed) {
      try {
        await dispatch(fetchDeleteClothingItem(item.id));
        toast.success(`Вещь ${item.name} успешно удалена`);
        navigate('/wardrobe');
      } catch (error) {
        toast.error('Не удалось удалить вещь. Ошибка сервера');
      }
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
