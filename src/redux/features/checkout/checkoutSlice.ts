import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  checkoutSummary: { subTotal: number; vat: number; total: number };
} = {
  checkoutSummary: {
    subTotal: 0,
    vat: 0,
    total: 0,
  },
};

const checkoutSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setCheckoutSummary: (state, action) => {
      console.log("action", action.payload);
      state.checkoutSummary = action.payload;
    },
  },
});
export const { setCheckoutSummary } = checkoutSlice.actions;

export default checkoutSlice.reducer;
