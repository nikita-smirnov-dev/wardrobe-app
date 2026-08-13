import type { FC } from 'react';
import { Input } from '@/UI/Input';
import styles from './AddItemForm.module.scss';
import { Button } from '@/UI/Button';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

interface IAddItemForm {
  name: string;
  category: string;
  addedAt: string;
  image: FileList;
}

export const AddItemForm: FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAddItemForm>({
    mode: 'onBlur',
  });

  const onSubmit = (data: IAddItemForm) => {
    console.log('Данные формы успешно собраны:', data);
    setTimeout(() => {
      const isError = Math.random() < 0.1;

      if (isError) {
        alert('Ошибка сервера!');
      } else {
        alert('Успех! Форма валидна');
        navigate('/wardrobe');
      }
    }, 1500);
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
          required
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
          <span className={styles.errorText}>{errors.category.message}</span>
        )}
      </div>
      <Input className={styles.input} type="date" />
      <Input className={styles.input} type="file" accept="image/*" />

      <Button type="submit">Сохранить</Button>
    </form>
  );
};
