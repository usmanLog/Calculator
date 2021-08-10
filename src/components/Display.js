import React from "react";
import { useSelector } from "react-redux";
import { selectNumbers } from "../features/calcSlice";

export function Display() {
  const currNumbers = useSelector(selectNumbers);
  return (
    <div className="displayWrapper">
      <div id="display" className="allCharacters">
        0
      </div>
      <div id="display" className="currCharacters">
        {currNumbers}
      </div>
    </div>
  );
}
