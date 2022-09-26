import { configureStore } from "@reduxjs/toolkit";
import main from "./main/mainSlice";
export const store = configureStore({
  reducer: {
    main
  },
});