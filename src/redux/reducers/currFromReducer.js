import { ActionTypes } from "../actions/action-types";

const initialState = {
  name: "USD",
  amount: 1,
  longName: "",
  symbol: "",
  flags: [],
};

export const currFromReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_FROM_NAME:
      return { ...state, name: payload };
    case ActionTypes.SET_FROM_AMOUNT:
      return { ...state, amount: payload };
    case ActionTypes.SET_FROM_LONGNAME:
      return { ...state, longName: payload };
    case ActionTypes.SET_FROM_SYMBOL:
      return { ...state, symbol: payload };
    case ActionTypes.SET_FROM_FLAGS:
      return { ...state, flags: payload };
    default:
      return state;
  }
};
