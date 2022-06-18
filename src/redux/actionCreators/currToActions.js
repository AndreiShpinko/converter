import { ActionTypes } from "../actions/action-types";

const {
  SET_TO_NAME,
  SET_TO_AMOUNT,
  SET_TO_LONGNAME,
  SET_TO_SYMBOL,
  SET_TO_FLAGS,
} = ActionTypes;

export const setToName = (name) => {
  return {
    type: SET_TO_NAME,
    payload: name,
  };
};

export const setToAmount = (amount) => {
  return {
    type: SET_TO_AMOUNT,
    payload: amount,
  };
};

export const setToLongName = (longName) => {
  return {
    type: SET_TO_LONGNAME,
    payload: longName,
  };
};

export const setToSymbol = (symbol) => {
  return {
    type: SET_TO_SYMBOL,
    payload: symbol,
  };
};

export const setToFlags = (arr) => {
  return {
    type: SET_TO_FLAGS,
    payload: arr,
  };
};
