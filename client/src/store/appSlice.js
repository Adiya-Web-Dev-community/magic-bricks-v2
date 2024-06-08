import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoriesLoading: true,
  categories: [],
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setCategoriesLoading: (state, { payload }) => {
      state.categoriesLoading = payload;
    },
    viewCategories: (state, { payload }) => {
      state.categories = payload;
    },
  },
});

export default appSlice.reducer;
export const { setCategoriesLoading, viewCategories } = appSlice.actions;
