import { configureStore } from "@reduxjs/toolkit";
import convertReducer from '../components/convertSlice';

export default configureStore({
  reducer: {
    convert: convertReducer,
  },
});
