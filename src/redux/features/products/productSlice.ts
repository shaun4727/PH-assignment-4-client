import { createSlice } from "@reduxjs/toolkit";
import { TBook } from "../../../types";

const initialState: {
  books: TBook[];
  checkoutSummary: { subTotal: number; vat: number; total: number };
} = {
  books: [],
  checkoutSummary: {
    subTotal: 0,
    vat: 0,
    total: 0,
  },
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setCart: (state, action) => {
      const index = state.books?.findIndex(
        (item) => item._id == action.payload._id
      );
      if (index < 0) {
        state.books.push(action.payload);
      }
    },
    setCheckoutSummary: (state, action) => {
      state.checkoutSummary = action.payload;
    },
    incrementProduct: (state, action) => {
      const product = state.books?.find((item) => item._id == action.payload);
      if (product) {
        (product.qty as number) += 1;
      }
    },
    decrementProduct: (state, action) => {
      const product = state.books?.find((item) => item._id == action.payload);
      if (product) {
        (product.qty as number) -= 1;
      }
    },
    emptyCart: (state) => {
      state.books = [];
      state.checkoutSummary = { subTotal: 0, vat: 0, total: 0 };
    },
    deleteCartItem: (state, action) => {
      state.books = state.books.filter((book) => book._id != action.payload);
    },
  },
});
export const {
  setCart,
  setCheckoutSummary,
  incrementProduct,
  decrementProduct,
  emptyCart,
  deleteCartItem,
} = productSlice.actions;

export default productSlice.reducer;
