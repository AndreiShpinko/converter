import { ActionTypes } from "../actions/action-types";

const {
  SET_FROM_NAME,
  SET_FROM_AMOUNT,
  SET_FROM_LONGNAME,
  SET_FROM_SYMBOL,
  SET_FROM_FLAGS,
} = ActionTypes;

export const setFromName = (name) => {
  return {
    type: SET_FROM_NAME,
    payload: name,
  };
};

export const setFromAmount = (amount) => {
  return {
    type: SET_FROM_AMOUNT,
    payload: amount,
  };
};

export const setFromLongName = (longName) => {
  return {
    type: SET_FROM_LONGNAME,
    payload: longName,
  };
};

export const setFromSymbol = (symbol) => {
  return {
    type: SET_FROM_SYMBOL,
    payload: symbol,
  };
};

export const setFromFlags = (arr) => {
  return {
    type: SET_FROM_FLAGS,
    payload: arr,
  };
};
