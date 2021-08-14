import { createSlice } from "@reduxjs/toolkit";

export const calcSlice = createSlice({
  name: "calcSlice",
  initialState: {
    currVal: "",
    prevVal: "",
    currOperand: null,
    prevOperand: null,
    limit: false,
    includesDecimal: false,
    lastTyped: "",
  },
  reducers: {
    displayNumbers: (state, action) => {
      state.lastTyped = action.payload;

      //Bound the total length of numbers to 18 max
      if (state.currVal.length >= 18) {
        state.limit = true;
      }

      //Check if the current number includes decimal
      if (state.currVal.includes(".")) {
        state.includesDecimal = true;
      }

      if (!state.limit) {
        //add zero before decimal if only decimal is clicked
        if (
          action.payload === "." &&
          !state.includesDecimal &&
          state.currVal.length === 0
        ) {
          state.currVal += "0";
          state.currVal += action.payload;
        }

        //Prevent user from entering zeroes at the beginning of number
        if (state.currVal.length < 1 && action.payload === "0") {
          state.currVal = "";
        }

        //Only let user enter decimal once
        if (!state.includesDecimal && action.payload === ".") {
          state.currVal += action.payload;
        } else if (action.payload !== ".") {
          state.currVal += action.payload;
        }
      }
    },

    handleOperations: (state, action) => {
      state.lastTyped = action.payload;

      if (state.currVal && !state.prevVal) {
        state.prevOperand = action.payload;
      }

      if (!state.currVal && action.payload === "-") {
        state.currVal += "-";
        return;
      }
      switch (state.prevOperand) {
        case "+":
          if (state.currVal && !state.prevVal) {
            state.prevVal = state.currVal;
            state.currVal = "";
          }

          if (
            state.currVal &&
            state.prevVal &&
            typeof +state.lastTyped === "number"
          ) {
            state.currVal = (+state.prevVal + +state.currVal).toString();
            state.prevVal = state.currVal;
            state.currVal = "";
          }
          break;
        case "-":
          if (state.currVal && !state.prevVal && state.currVal !== "-") {
            state.prevVal = state.currVal;
            state.currVal = "";
          }

          if (
            state.currVal &&
            state.prevVal &&
            state.currVal !== "-" &&
            typeof +state.lastTyped === "number"
          ) {
            state.currVal = (+state.prevVal - +state.currVal).toString();
            state.prevVal = state.currVal;
            state.currVal = "";
          }
          break;

        case "x":
          if (state.currVal && !state.prevVal) {
            state.prevVal = state.currVal;
            state.currVal = "";
          }

          if (
            state.currVal &&
            state.prevVal &&
            typeof +state.lastTyped === "number"
          ) {
            state.currVal = (+state.prevVal * +state.currVal).toString();
            state.prevVal = state.currVal;
            state.currVal = "";
          }
          break;

        case "/":
          if (state.currVal && !state.prevVal) {
            state.prevVal = state.currVal;
            state.currVal = "";
          }

          if (
            state.currVal &&
            state.prevVal &&
            typeof +state.lastTyped === "number"
          ) {
            state.currVal = (+state.prevVal / +state.currVal).toString();
            state.prevVal = state.currVal;
            state.currVal = "";
          }
          break;
        default:
          break;
      }

      if (
        state.prevOperand !== action.payload &&
        !state.currVal.includes("-")
      ) {
        state.prevOperand = action.payload;
      }
    },

    handleClear: (state, action) => {
      if (action.payload === "ac") {
        state.currVal = "";
        state.prevVal = "";
        state.prevOperand = "";
      }
    },

    handleEquals: (state, action) => {
      if (action.payload === "=") {
        if (state.currVal && state.prevVal && state.prevOperand) {
          if (state.prevOperand === "+") {
            state.currVal = (+state.prevVal + +state.currVal).toString();
            state.prevVal = "";
          } else if (state.prevOperand === "-") {
            state.currVal = (+state.prevVal - +state.currVal).toString();
            state.prevVal = "";
          } else if (state.prevOperand === "x") {
            state.currVal = (+state.prevVal * +state.currVal).toString();
            state.prevVal = "";
          } else if (state.prevOperand === "/") {
            state.currVal = (+state.prevVal / +state.currVal).toString();
            state.prevVal = "";
          }
        }
      }
    },
  },
});

//Selectors
export const selectCurrVal = (state) => state.calc.currVal;
export const selectPrevVal = (state) => state.calc.prevVal;
export const selectSign = (state) =>
  state.calc.lastTyped === state.calc.prevOperand ? state.calc.prevOperand : "";

export const { displayNumbers, handleOperations, handleClear, handleEquals } =
  calcSlice.actions;

export default calcSlice.reducer;
