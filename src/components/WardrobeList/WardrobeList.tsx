import type { FC } from 'react';
import type { ClothingItem } from '../../types/clothingTypes';
import { WardrobeCard } from '@/UI/WardrobeCard';
import styles from './WardrobeList.module.scss';
import { Button } from '@/UI/Button';
import { useNavigate } from 'react-router-dom';

const data: ClothingItem[] = [
  {
    id: '1',
    name: 'Зимний пуховик',
    category: 'Верхняя одежда',
    addedAt: '12.08.2026',
    imageUrl: 'https://ir.ozone.ru/s3/multimedia-v/6806713783.jpg',
  },
  {
    id: '2',
    name: 'Кожаные ботинки',
    category: 'Обувь',
    addedAt: '10.08.2026',
    imageUrl:
      'https://basket-01.wbbasket.ru/vol51/part5166/5166496/images/big/1.webp',
  },
  {
    id: '3',
    name: 'Солнцезащитные очки',
    category: 'Аксессуары',
    addedAt: '05.08.2026',
    imageUrl:
      'https://storage-cdn10.gloria-jeans.ru/pictures/Cernye-solncezasitnye-ocki-klabmastery_BAS005477-1_01_2000Wx2000H.jpeg?q=568321',
  },
];

export const WardrobeList: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <ul className={`${styles.list} list-reset`}>
        {data.map((item) => (
          <li className={styles.item} key={item.id}>
            <WardrobeCard wardrobe={item} />
          </li>
        ))}
      </ul>
      <div className={styles.btn}>
        <Button onClick={() => navigate('/wardrobe/add')}>Добавить вещь</Button>
      </div>
    </>
  );
};
