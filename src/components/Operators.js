import React from "react";
import {
  handleOperations,
  handleClear,
  handleEquals,
  handleDelete,
} from "../features/calcSlice";
import { useDispatch } from "react-redux";

export function Operators() {
  const dispatch = useDispatch();

  return (
    <>
      <button
        onClick={({ target }) => {
          dispatch(handleOperations(target.innerHTML));
        }}
        id="add"
      >
        +
      </button>
      <button
        onClick={({ target }) => {
          dispatch(handleOperations(target.innerHTML));
        }}
        id="multiply"
      >
        x
      </button>
      <button
        onClick={({ target }) => {
          dispatch(handleOperations(target.innerHTML));
        }}
        id="subtract"
      >
        -
      </button>
      <button
        onClick={({ target }) => {
          dispatch(handleOperations(target.innerHTML));
        }}
        id="divide"
      >
        /
      </button>
      <button
        onClick={({ target }) =>
          dispatch(handleClear(target.innerHTML.toLowerCase()))
        }
        id="clear"
      >
        AC
      </button>
      <button
        onClick={({ target }) => dispatch(handleEquals(target.innerHTML))}
        id="equals"
      >
        =
      </button>
      <button
        id="delete"
        onClick={({ target }) =>
          dispatch(handleDelete(target.innerHTML.toLowerCase()))
        }
      >
        C
      </button>
    </>
  );
}
