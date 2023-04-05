import { Slide } from "@/types/slide";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Slide = {
  indexh: 0,
  indexv: 0,
};

const slideSlice = createSlice({
  name: "slide",
  initialState,
  reducers: {
    setIndexh: (state, action) => {
      state.indexh = action.payload;
    },
    setIndexv: (state, action) => {
      state.indexv = action.payload;
    },
  },
});

export const { setIndexh, setIndexv } = slideSlice.actions;
export default slideSlice.reducer;

//  PayloadAction<Pokemon[]>
