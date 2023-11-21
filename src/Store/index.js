import { configureStore } from "@reduxjs/toolkit";
import ReadSlice from "./Slices/ReadSlice";

const Store = configureStore({
  reducer: {
    ReadingList: ReadSlice,
  },
});

export default Store;
