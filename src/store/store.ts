import { configureStore } from '@reduxjs/toolkit';
import waredrobeSlice from './wardrobeSlice';

export const store = configureStore({
  reducer: {
    wardrobe: waredrobeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
