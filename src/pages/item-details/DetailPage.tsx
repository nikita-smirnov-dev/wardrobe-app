import { useEffect, type FC } from 'react';
import { useParams } from 'react-router-dom';

import { ItemDetails } from '@/components/ItemDetails';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchWardrobeItems } from '@/store/wardrobeSlice';
import { Loader } from '@/UI/Loader';
import { BackButton } from '@/UI/BackButton';

import styles from '@/pages/item-details/DetailPage.module.scss';

export const DetailPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { list, isLoading } = useAppSelector((state) => state.wardrobe);
  const dispatch = useAppDispatch();

  const currentItem = list.find((item) => item.id === id);

  useEffect(() => {
    if (currentItem) {
      document.title = `${currentItem.name} | Детали`;
    } else {
      document.title = 'Загрузка... | Гардероб';
    }
  }, [currentItem]);

  useEffect(() => {
    if (list.length === 0) {
      dispatch(fetchWardrobeItems());
    }
  }, [dispatch, list.length]);

  return (
    <section className="section-offset">
      <div className={`${styles.inner} container`}>
        <BackButton />
        <h1 className={styles.title}>Полная информация</h1>
        {isLoading ? (
          <Loader />
        ) : currentItem ? (
          <ItemDetails item={currentItem} />
        ) : (
          <div className={styles.info}>Вещь не найдена!</div>
        )}
      </div>
    </section>
  );
};
