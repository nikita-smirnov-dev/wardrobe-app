import type { FC } from 'react';
import { Input } from '@/UI/Input';
import styles from './AddItemForm.module.scss';
import { Button } from '@/UI/Button';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchAddClothingItem } from '@/store/wardrobeSlice';
import { useNavigate } from 'react-router-dom';

interface IAddItemForm {
  name: string;
  category: string;
  addedAt: string;
  image: FileList;
}

export const AddItemForm: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.wardrobe);
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
      await dispatch(fetchAddClothingItem(data)).unwrap();
      navigate('/wardrobe');
    } catch (error) {
      console.error(error);
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
          {...register('category', { required: 'Категория обязательна' })}
          name="category"
          id="select"
          className={styles.select}
          defaultValue=""
          onChange={(e) => e.target.blur()}
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
