import { ActionTypes } from "../actions/action-types";

const { SET_HEADER_USD, SET_HEADER_EUR } = ActionTypes;

export const setHeaderUSD = (rate) => {
  return {
    type: SET_HEADER_USD,
    payload: rate,
  };
};

export const setHeaderEUR = (rate) => {
  return {
    type: SET_HEADER_EUR,
    payload: rate,
  };
};
