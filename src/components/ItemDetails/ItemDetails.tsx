import type { ClothingItem } from '@/types/clothingTypes';
import { type FC } from 'react';
import styles from './ItemDetails.module.scss';
import { Button } from '@/UI/Button';
import { useAppDispatch } from '@/store/hooks';
import { deleteItem } from '@/store/wardrobeSlice';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

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
      setTimeout(() => {
        const isError = Math.random() < 0.1;

        if (isError) {
          toast.error('Не удалось удалить вещь. Ошибка сервера');
        } else {
          dispatch(deleteItem(item.id));
          toast.success(`Вещь ${item.name} успешно удалена`);
          navigate('/wardrobe');
        }
      }, 1500);
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
