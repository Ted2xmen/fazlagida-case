import { createSlice } from "@reduxjs/toolkit";

export const mainSlice = createSlice({
  name: "main",
  initialState: {
    value: 209,
  },
  reducers: {},
});

export default mainSlice.reducer;