import React from "react";
import styled from "styled-components";

import Input from "./Input";
import Flags from "./Flags";
import SelectOptions from "./SelectOptions";

import { useSelector } from "react-redux";

const CurrencyRow = (props) => {
  const { currencyType } = props;

  const { longName, symbol, flags } = useSelector(
    (store) => store[currencyType]
  );

  return (
    <CurrencyBlockWrapper>
      <TopContent reverse={currencyType}>
        <Input currencyType={currencyType} />
        <Symbol>{symbol}</Symbol>
        <SelectOptions currencyType={currencyType} />
      </TopContent>
      <LongName>{longName}</LongName>
      <Flags countries={flags} />
    </CurrencyBlockWrapper>
  );
};

const LongName = styled.h2`
  text-align: center;
  margin: 25px 0 20px;
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const CurrencyBlockWrapper = styled.div`
  flex: 1 1 100%;
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 480px) {
    padding: 10px 0;
  }
`;

const Symbol = styled.h2`
  display: inline-block;
`;

const TopContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex-direction: ${(props) =>
    props.reverse === "currencyFrom" ? "row-reverse" : "row"};
  @media (max-width: 992px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

export default CurrencyRow;
