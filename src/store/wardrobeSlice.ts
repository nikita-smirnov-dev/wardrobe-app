import { type ClothingItem } from '@/types/clothingTypes';
import { createSlice } from '@reduxjs/toolkit';

interface WardrobeState {
  list: ClothingItem[];
}

const initialState: WardrobeState = {
  list: [
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
  ],
};

const wardrobeSlice = createSlice({
  name: 'wardrobe',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.list.push(action.payload);
    },
    deleteItem: (state, action) => {
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.payload),
      };
    },
  },
});

export const { addItem, deleteItem } = wardrobeSlice.actions;

export default wardrobeSlice.reducer;
