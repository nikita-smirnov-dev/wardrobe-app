import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { wardrobe } from '@/data/wardrobe';
import { type ClothingItem } from '@/types/clothingTypes';

interface WardrobeState {
  list: ClothingItem[];
  isFetchLoading: boolean;
  fetchError: string | null;
  isCreateLoading: boolean;
  createError: string | null;
  isDeleteLoading: boolean;
  deleteError: string | null;
}

let wardrobeData = [...wardrobe];

const initialState: WardrobeState = {
  list: [],
  isFetchLoading: false,
  fetchError: null,
  isCreateLoading: false,
  createError: null,
  isDeleteLoading: false,
  deleteError: null,
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
    }

    const itemExists = wardrobeData.some((item) => item.id === id);

    if (!itemExists) {
      return thunkAPI.rejectWithValue(
        'Вещь не найдена на сервере или уже удалена!',
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
        state.isFetchLoading = true;
        state.fetchError = null;
      })
      .addCase(fetchWardrobeItems.fulfilled, (state, action) => {
        state.isFetchLoading = false;
        state.list = action.payload;
      })
      .addCase(fetchWardrobeItems.rejected, (state, action) => {
        state.isFetchLoading = false;
        state.fetchError = action.payload as string;
      })

      .addCase(fetchAddClothingItem.pending, (state) => {
        state.isCreateLoading = true;
        state.createError = null;
      })
      .addCase(fetchAddClothingItem.fulfilled, (state, action) => {
        state.isCreateLoading = false;
        state.list.push(action.payload);
      })
      .addCase(fetchAddClothingItem.rejected, (state, action) => {
        state.isCreateLoading = false;
        state.createError = action.payload as string;
      })

      .addCase(fetchDeleteClothingItem.pending, (state) => {
        state.isDeleteLoading = true;
        state.deleteError = null;
      })
      .addCase(fetchDeleteClothingItem.fulfilled, (state, action) => {
        state.isDeleteLoading = false;
        state.list = state.list.filter((item) => item.id !== action.payload);
      })
      .addCase(fetchDeleteClothingItem.rejected, (state, action) => {
        state.isDeleteLoading = false;
        state.deleteError = action.payload as string;
      });
  },
});

export default wardrobeSlice.reducer;
