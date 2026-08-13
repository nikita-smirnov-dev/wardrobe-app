import type { FC } from 'react';
import { Input } from '@/UI/Input';
import styles from './AddItemForm.module.scss';
import { Button } from '@/UI/Button';

export const AddItemForm: FC = () => {
  return (
    <form className={styles.form}>
      <Input
        className={styles.input}
        type="text"
        placeholder="Введите название.."
      />
      <div className={styles.selectWrapper}>
        <select
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
      </div>
      <Input className={styles.input} type="date" />
      <Input className={styles.input} type="file" accept="image/*" />

      <Button type="submit">Сохранить</Button>
    </form>
  );
};
