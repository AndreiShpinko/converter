import { ActionTypes } from "../actions/action-types";

const initialState = {
  name: "UAH",
  amount: 1,
  longName: "",
  symbol: "",
  flags: [],
};

export const currToReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_TO_NAME:
      return { ...state, name: payload };
    case ActionTypes.SET_TO_AMOUNT:
      return { ...state, amount: payload };
    case ActionTypes.SET_TO_LONGNAME:
      return { ...state, longName: payload };
    case ActionTypes.SET_TO_SYMBOL:
      return { ...state, symbol: payload };
    case ActionTypes.SET_TO_FLAGS:
      return { ...state, flags: payload };
    default:
      return state;
  }
};
