import { ActionTypes } from "../actions/action-types";

const { SET_OPTIONS, SET_RATE } = ActionTypes;

export const setOptions = (arr) => {
  return {
    type: SET_OPTIONS,
    payload: arr,
  };
};

export const setRate = (rate) => {
  return {
    type: SET_RATE,
    payload: rate,
  };
};
