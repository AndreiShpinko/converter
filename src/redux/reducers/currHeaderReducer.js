import { ActionTypes } from "../actions/action-types";

const initialState = {
  rateUSD: 1,
  rateEUR: 1,
};

export const currHeaderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_HEADER_USD:
      return { ...state, rateUSD: payload };
    case ActionTypes.SET_HEADER_EUR:
      return { ...state, rateEUR: payload };
    default:
      return state;
  }
};
