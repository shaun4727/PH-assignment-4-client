import { createSlice } from "@reduxjs/toolkit";
import { TCarouselImage } from "../../../types";

const initialState: { carousel: TCarouselImage[] } = {
  carousel: [],
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setCarousel: (state, action) => {
      state.carousel = action.payload;
    },
  },
});
export const { setCarousel } = homeSlice.actions;

export default homeSlice.reducer;
