import type { FC } from 'react';
import { WardrobeList } from '@/components/WardrobeList';

export const WardrobePage: FC = () => {
  return (
    <section className="section-offset">
      <div className="container">
        <WardrobeList />
      </div>
    </section>
  );
};
