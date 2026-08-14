import { useEffect, type FC } from 'react';
import { WardrobeCard } from '@/UI/WardrobeCard';
import styles from './WardrobeList.module.scss';
import { Button } from '@/UI/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchWardrobeItems } from '@/store/wardrobeSlice';
import { Loader } from '@/UI/Loader';
import { ErrorMessage } from '@/UI/ErrorMessage';

export const WardrobeList: FC = () => {
  const { list, isLoading, error } = useAppSelector((state) => state.wardrobe);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchWardrobeItems());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div>
        <Loader />;
      </div>
    );
  }

  if (error) {
    return (
      <ErrorMessage
        message={error}
        onClick={() => dispatch(fetchWardrobeItems())}
      />
    );
  }

  return (
    <>
      {!list.length && (
        <h2 className={styles.title}>В списке отсутствуют вещи!</h2>
      )}
      <ul className={`${styles.list} list-reset`}>
        {list.map((item) => (
          <li className={styles.item} key={item.id}>
            <Link to={`/wardrobe/${item.id}`}>
              <WardrobeCard wardrobe={item} />
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.btn}>
        <Button onClick={() => navigate('/wardrobe/add')}>Добавить вещь</Button>
      </div>
    </>
  );
};
