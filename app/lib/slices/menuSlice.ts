import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PRODUCTS, Product } from '@/app/constants/menu';

// state interface
interface MenuState {
  items: typeof PRODUCTS;
  visibleCount: number;
  isLoading: boolean;
}

const initialState: MenuState = {
  items: PRODUCTS,
  visibleCount: 6,
  isLoading: false,
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    loadMore: (state) => {
      const nextCount = state.visibleCount + 6;
      if (nextCount <= state.items.length) {
        state.visibleCount = nextCount;
      } else {
        state.visibleCount = state.items.length;
      }
    },
  },
});

export const { loadMore } = menuSlice.actions;
export default menuSlice.reducer;
