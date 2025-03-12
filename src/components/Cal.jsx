import { useReducer, useState } from "react";
import ReactDOM from "react-dom/client";

const initialCal = {
  a: 0,
  b: 0,
  operator: "+",
  result: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_A":
      return {
        ...state,
        a: action.a,
      };

    case "SET_B":
      return {
        ...state,
        b: action.b,
      };

    case "SET_OPERATOR":
      return {
        ...state,
        operator: action.operator,
      };

    case "CAL":
      console.log(state.a, state.b, state.operator, state.result);

      return {
        ...state,
        result:
          state.operator === "+"
            ? parseInt(state.a) + parseInt(state.b)
            : state.operator === "-"
            ? parseInt(state.a) - parseInt(state.b)
            : state.operator === "*"
            ? parseInt(state.a) * parseInt(state.b)
            : parseInt(state.a) / parseInt(state.b),
      };

    default:
      return state;
  }
};

function Cal() {
  const [state, dispatch] = useReducer(reducer, initialCal);

  function handleCal() {
    dispatch({ type: "CAL" });
  }

  return (
    <>
      {/* Nhập vào hai số*/}
      <input
        type="number"
        placeholder="Nhập vào số thứ nhất"
        onChange={(event) => {
          dispatch({ type: "SET_A", a: event.target.value });
        }}
      />{" "}
      <br />
      <input
        type="number"
        placeholder="Nhập vào số thứ hai"
        onChange={(event) => {
          dispatch({ type: "SET_B", b: event.target.value });
        }}
      />{" "}
      <br />
      {/* Chọn phép toán cần thực hiện */}
      <input
        type="radio"
        value="+"
        name="operator"
        onChange={(e) => {
          dispatch({ type: "SET_OPERATOR", operator: e.target.value });
        }}
      />
      <span>+</span>
      <input
        type="radio"
        value="-"
        name="operator"
        onChange={(e) => {
          dispatch({ type: "SET_OPERATOR", operator: e.target.value });
        }}
      />
      <span>-</span>
      <input
        type="radio"
        value="*"
        name="operator"
        onChange={(e) => {
          dispatch({ type: "SET_OPERATOR", operator: e.target.value });
        }}
      />
      <span>*</span>
      <input
        type="radio"
        value="/"
        name="operator"
        onChange={(e) => {
          dispatch({ type: "SET_OPERATOR", operator: e.target.value });
        }}
      />
      <span>/</span> <br />
      <button type="button" onClick={handleCal}>
        Tính toán
      </button>
      <h2>Kết quả: {state.result}</h2>
    </>
  );
}

export default Cal;
