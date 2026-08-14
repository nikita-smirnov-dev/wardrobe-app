import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './BackButton.module.scss';

interface BackButtonProps {
  className?: string;
  text?: string;
}

export const BackButton: FC<BackButtonProps> = ({
  className,
  text = 'Назад',
}) => {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className={`${styles.backBtn} ${className || ''}`}
      onClick={() => navigate(-1)}
    >
      {text}
    </button>
  );
};
