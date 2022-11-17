import { createSlice } from "@reduxjs/toolkit";
import { measureUnits } from "../api/measureUnits";

export const convertSlice = createSlice({
  name: "convert",
  initialState: {
    fromUnits: measureUnits[0],
    toUnits: measureUnits[0],
    value: "0",
    result: "0",
  },
  reducers: {
    setFromUnits: (state, action) => {
      state.fromUnits = action.payload;
    },
    setToUnits: (state, action) => {
      state.toUnits = action.payload;
    },
    setValue: (state, action) => {
      state.value = action.payload;
    },
    setResult: (state, action) => {
      if (state.fromUnits.shortHand === measureUnits[1].shortHand)
        state.result = "42";
      else state.result = "24";
    },
  },
});

export const { setFromUnits, setToUnits, setValue, setResult } =
  convertSlice.actions;

export const selectFromUnits = (state) => state.convert.fromUnits;
export const selectToUnits = (state) => state.convert.toUnits;
export const selectValue = (state) => state.convert.value;
export const selectResult = (state) => state.convert.result;

export default convertSlice.reducer;
