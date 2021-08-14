import React from "react";
import {
  selectCurrVal,
  selectPrevVal,
  selectSign,
} from "../features/calcSlice";
import { useSelector } from "react-redux";

export function Display() {
  const currVal = useSelector(selectCurrVal);
  const prevVal = useSelector(selectPrevVal);
  const sign = useSelector(selectSign);

  return (
    <div className="displayWrapper">
      {/* <div id="display" className="allCharacters">
        0
      </div> */}
      <div id="display" className="currCharacters">
        {currVal
          ? currVal
          : sign && !currVal
          ? sign
          : !currVal && !prevVal && !sign
          ? "0"
          : prevVal}
      </div>
    </div>
  );
}
