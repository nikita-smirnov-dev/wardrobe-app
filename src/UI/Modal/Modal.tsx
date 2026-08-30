import { useEffect, useState, type FC } from 'react';
import { createPortal } from 'react-dom';

import styles from '@/UI/Modal/Modal.module.scss';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose?: VoidFunction;
}

export const Modal: FC<ModalProps> = ({ children, isOpen, onClose }) => {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      const showTimer = setTimeout(() => setIsVisible(true), 10);
      return () => clearTimeout(showTimer);
    } else {
      setIsVisible(false);
      const hideTimer = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(hideTimer);
    }
  }, [isOpen]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose?.();
    }
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose?.();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.removeProperty('overflow');
    };
  }, [isOpen, onClose]);

  if (!shouldRender) return null;

  return createPortal(
    <div
      className={`${styles.overlay} ${
        isVisible ? styles.visible : styles.hide
      }`}
      onClick={handleOverlayClick}
    >
      <div className={styles.content}>{children}</div>
    </div>,
    document.body,
  );
};
