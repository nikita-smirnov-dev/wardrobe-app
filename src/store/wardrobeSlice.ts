import { wardrobe } from '@/data/wardrobe';
import { type ClothingItem } from '@/types/clothingTypes';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface WardrobeState {
  list: ClothingItem[];
  isLoading: boolean;
  error: string | null;
}

interface IAddItemForm {
  name: string;
  category: string;
  addedAt: string;
  image: FileList;
}

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
      return wardrobe;
    }
  },
);

export const fetchAddClothingItem = createAsyncThunk(
  'wardrobe/fetchAddClothingItem',
  async (data: IAddItemForm, thunkAPI) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    const isError = Math.random() < 0.1;

    if (isError) {
      return thunkAPI.rejectWithValue(
        'Не удалось сохранить вещь. Ошибка сервера!',
      );
    } else {
      const newClothingItem: ClothingItem = {
        id: crypto.randomUUID(),
        name: data.name,
        category: data.category,
        addedAt: data.addedAt,
        imageUrl:
          'https://storage-cdn10.gloria-jeans.ru/pictures/Cernye-solncezasitnye-ocki-klabmastery_BAS005477-1_01_2000Wx2000H.jpeg?q=568321',
      };

      return newClothingItem;
    }
  },
);

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
      });
  },
});

export const { addItem, deleteItem } = wardrobeSlice.actions;

export default wardrobeSlice.reducer;
