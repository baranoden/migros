import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};
const historySlice = createSlice({
  name: "collection",
  initialState: initialState,
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});
export const { getProducts } = historySlice.actions;

export default historySlice.reducer;
