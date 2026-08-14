import type { FC } from 'react';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchAddClothingItem } from '@/store/wardrobeSlice';
import { Input } from '@/UI/Input';
import { Button } from '@/UI/Button';

import styles from './AddItemForm.module.scss';
import type { IAddItemForm } from '@/types/clothingTypes';

export const AddItemForm: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.wardrobe);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAddItemForm>({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      category: '',
    },
  });

  const onSubmit = async (data: IAddItemForm) => {
    try {
      const fotrmatteDate = data.addedAt
        ? new Date(data.addedAt).toLocaleDateString('ru-RU')
        : new Date().toLocaleDateString('ru-RU');

      const newClothingItem = {
        id: crypto.randomUUID(),
        name: data.name,
        category: data.category,
        addedAt: fotrmatteDate,
        imageUrl:
          'https://storage-cdn10.gloria-jeans.ru/pictures/Cernye-solncezasitnye-ocki-klabmastery_BAS005477-1_01_2000Wx2000H.jpeg?q=568321',
      };

      await dispatch(fetchAddClothingItem(newClothingItem)).unwrap();
      toast.success('Вещь успешно добавлена в гардероб!');
      navigate('/wardrobe');
    } catch (error) {
      console.error(error);
      toast.error((error as string) || 'Произошла ошибка при сохранении');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        className={styles.input}
        type="text"
        placeholder="Введите название"
        {...register('name', {
          required: 'Название обязательно для заполнения',
        })}
        error={errors.name}
      />
      <div className={styles.selectWrapper}>
        <select
          {...register('category', {
            required: 'Категория обязательна',
            onChange: (e) => e.target.blur(),
          })}
          name="category"
          id="select"
          className={styles.select}
          defaultValue=""
        >
          <option value="" disabled>
            Выберите категорию
          </option>
          <option value="outerwear">Верхняя одежда</option>
          <option value="shoes">Обувь</option>
          <option value="accessories">Аксессуары</option>
        </select>
        {errors.category && (
          <span className={styles.error}>{errors.category?.message}</span>
        )}
      </div>
      <Input
        className={styles.input}
        type="date"
        {...register('addedAt', {
          required: 'Дата обязательно для заполнения',
        })}
        error={errors.addedAt}
      />
      <Input className={styles.input} type="file" accept="image/*" />

      <Button type="submit" isLoading={isLoading}>
        {isLoading ? 'Сохранение...' : 'Сохранить'}
      </Button>
    </form>
  );
};
