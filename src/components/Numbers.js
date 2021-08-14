import React from "react";
import { useDispatch } from "react-redux";
import { displayNumbers } from "../features/calcSlice";

export function Numbers() {
  const dispatch = useDispatch();

  return (
    <>
      <button
        onClick={({ target }) => dispatch(displayNumbers(target.innerHTML))}
        id="one"
      >
        1
      </button>
      <button
        onClick={({ target }) => dispatch(displayNumbers(target.innerHTML))}
        id="two"
      >
        2
      </button>
      <button
        onClick={({ target }) => dispatch(displayNumbers(target.innerHTML))}
        id="three"
      >
        3
      </button>
      <button
        onClick={({ target }) => dispatch(displayNumbers(target.innerHTML))}
        id="four"
      >
        4
      </button>
      <button
        onClick={({ target }) => dispatch(displayNumbers(target.innerHTML))}
        id="five"
      >
        5
      </button>
      <button
        onClick={({ target }) => dispatch(displayNumbers(target.innerHTML))}
        id="six"
      >
        6
      </button>
      <button
        onClick={({ target }) => dispatch(displayNumbers(target.innerHTML))}
        id="seven"
      >
        7
      </button>
      <button
        onClick={({ target }) => dispatch(displayNumbers(target.innerHTML))}
        id="eight"
      >
        8
      </button>
      <button
        onClick={({ target }) => dispatch(displayNumbers(target.innerHTML))}
        id="nine"
      >
        9
      </button>
      <button
        onClick={({ target }) => dispatch(displayNumbers(target.innerHTML))}
        id="zero"
      >
        0
      </button>
      <button
        onClick={({ target }) => dispatch(displayNumbers(target.innerHTML))}
        id="decimal"
      >
        .
      </button>
    </>
  );
}
