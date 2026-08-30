import { useEffect, type FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { WardrobeCard } from '@/UI/WardrobeCard';
import { Button } from '@/UI/Button';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchWardrobeItems } from '@/store/wardrobeSlice';
import { Loader } from '@/UI/Loader';
import { ErrorMessage } from '@/UI/ErrorMessage';

import styles from '@/components/WardrobeList/WardrobeList.module.scss';

export const WardrobeList: FC = () => {
  const { list, isFetchLoading, fetchError } = useAppSelector(
    (state) => state.wardrobe,
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchWardrobeItems());
  }, [dispatch]);

  if (isFetchLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (fetchError) {
    return (
      <ErrorMessage
        message={fetchError}
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
