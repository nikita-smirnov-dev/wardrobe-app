import type { FC } from 'react';
import { WardrobeCard } from '@/UI/WardrobeCard';
import styles from './WardrobeList.module.scss';
import { Button } from '@/UI/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector } from '@/store/hooks';

export const WardrobeList: FC = () => {
  const data = useAppSelector((state) => state.wardrobe.list);
  const navigate = useNavigate();

  return (
    <>
      <ul className={`${styles.list} list-reset`}>
        {data.map((item) => (
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
