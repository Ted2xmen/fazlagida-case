import { createSlice } from "@reduxjs/toolkit";


export const mainSlice = createSlice({
  name: "main",
  initialState: {
    theme: true // dark
  },
  reducers: {
    handleTheme: (state, action) => {
      state.theme = action.payload
      if(state.theme) {
        localStorage.setItem('theme', "dark")
      } else {
        localStorage.setItem('theme', "light")
      }
      
    }
  },
});
export const { handleTheme } =
  mainSlice.actions
export default mainSlice.reducer;