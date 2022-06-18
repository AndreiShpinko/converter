import { ActionTypes } from "../actions/action-types";

const initialState = {
  options: [],
  rate: 1,
};

export const currInfoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_OPTIONS:
      return { ...state, options: payload };
    case ActionTypes.SET_RATE:
      return { ...state, rate: payload };
    default:
      return state;
  }
};
