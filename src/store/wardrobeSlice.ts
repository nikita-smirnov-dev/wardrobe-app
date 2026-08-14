import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { wardrobe } from '@/data/wardrobe';
import { type ClothingItem } from '@/types/clothingTypes';

interface WardrobeState {
  list: ClothingItem[];
  isLoading: boolean;
  error: string | null;
}

let wardrobeData = [...wardrobe];

const initialState: WardrobeState = {
  list: [],
  isLoading: false,
  error: null,
};

export const fetchWardrobeItems = createAsyncThunk(
  'wardrobe/fetchWardrobeItems',
  async (_, thunkAPI) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    const isError = Math.random() < 0.1;

    if (isError) {
      return thunkAPI.rejectWithValue(
        'Не удалось загрузить список гардероба. Ошибка сервера!',
      );
    } else {
      return wardrobeData;
    }
  },
);

export const fetchAddClothingItem = createAsyncThunk(
  'wardrobe/fetchAddClothingItem',
  async (newClothingItem: ClothingItem, thunkAPI) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    const isError = Math.random() < 0.1;

    if (isError) {
      return thunkAPI.rejectWithValue(
        'Не удалось сохранить вещь. Ошибка сервера!',
      );
    } else {
      wardrobeData = [...wardrobeData, newClothingItem];
      return newClothingItem;
    }
  },
);

export const fetchDeleteClothingItem = createAsyncThunk(
  'wardrobe/fetchDeleteClothingItem',
  async (id: string, thunkAPI) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    const isError = Math.random() < 0.1;

    if (isError) {
      return thunkAPI.rejectWithValue(
        'Не удалось удалить вещь. Ошибка сервера!',
      );
    } else {
      wardrobeData = wardrobeData.filter((item) => item.id !== id);
      return id;
    }
  },
);

const wardrobeSlice = createSlice({
  name: 'wardrobe',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchWardrobeItems.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchWardrobeItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list = action.payload;
      })
      .addCase(fetchWardrobeItems.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })

      .addCase(fetchAddClothingItem.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAddClothingItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list.push(action.payload);
      })
      .addCase(fetchAddClothingItem.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })

      .addCase(fetchDeleteClothingItem.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchDeleteClothingItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list = state.list.filter((item) => item.id !== action.payload);
      })
      .addCase(fetchDeleteClothingItem.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default wardrobeSlice.reducer;
