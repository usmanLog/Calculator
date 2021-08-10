import { createSlice } from "@reduxjs/toolkit";

export const calcSlice = createSlice({
  name: "calcSlice",
  initialState: {
    currVal: [],
    prevVal: [],
    fullVal: null,
  },
  reducers: {
    showNumbers: (state, action) => {
      if (state.currVal.length === 0) {
        if (action.payload !== "0" && action.payload === ".") {
          state.currVal.push("0");
          state.currVal.push(action.payload);
        }
      }

      if (
        state.currVal.length === 0 &&
        action.payload !== "0" &&
        action.payload !== "."
      ) {
        state.currVal.push(action.payload);
      } else if (state.currVal.length >= 1 && action.payload !== ".") {
        state.currVal.push(action.payload);
      }

      if (
        state.currVal.length >= 1 &&
        !state.currVal.includes(".") &&
        action.payload === "." &&
        state.currVal.indexOf(".") === -1
      ) {
        state.currVal.push(action.payload);
      }
    },
  },
});

//Selectors
export const selectNumbers = (state) => state.calc.currVal.join("");

export const { showNumbers } = calcSlice.actions;

export default calcSlice.reducer;
