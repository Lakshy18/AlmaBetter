import { FORM_DATA } from "../types";

const inputlocal = localStorage.getItem("card-input");

const initialState = {
  inputData: inputlocal ? JSON.parse(inputlocal) : [],
};

//We are defining the reducer function to determine changes to the application's state.
export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case FORM_DATA:
      localStorage.setItem(
        "card-input",
        JSON.stringify([...state.inputData, action.payload])
      );
      return {
        ...state,
        inputData: [...state.inputData, action.payload],
      };

    default:
      return {
        ...state,
        showNum: 0,
      };
  }
};
