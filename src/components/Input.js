import React from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";

import { setFromAmount } from "../redux/actionCreators/currFromActions";
import { setToAmount } from "../redux/actionCreators/currToActions";

const Input = ({ currencyType }) => {
  const dispatch = useDispatch();
  const rate = useSelector((store) => store.currencyInfo.rate);
  const amount = useSelector((state) => state[currencyType].amount);

  const Round = (n) => Math.round(n * 1000) / 1000;

  const handleAmountChange = (e) => {
    if (currencyType === "currencyFrom") {
      dispatch(setFromAmount(Round(e.target.value)));
      dispatch(setToAmount(Round(e.target.value * rate)));
    } else if (currencyType === "currencyTo") {
      dispatch(setFromAmount(Round(e.target.value / rate)));
      dispatch(setToAmount(Round(e.target.value)));
    }
  };

  return (
    <InputWrap
      type="number"
      min="0"
      value={amount}
      onChange={handleAmountChange}
      shadow={currencyType}
    />
  );
};

const InputWrap = styled.input`
  border-radius: 5px;
  padding: 0.25em;
  width: 185px;
  font-size: 2rem;
  outline: none;
  border: 0;
  box-shadow: ${({ shadow }) => (shadow === "currencyFrom" ? "-9px" : "9px")}
    10px #00000052;
  @media (max-width: 992px) {
    box-shadow: 0 10px #00000052;
  }
  @media (max-width: 768px) {
    font-size: 1.6rem;
    width: 130px;
  }
  @media (max-width: 480px) {
    font-size: 1.36rem;
    width: 120px;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    padding: 5px 10px;
    margin: -0.25em;
  }
`;

export default Input;
