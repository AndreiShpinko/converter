import React, { useEffect, useState } from "react";
import styled from "styled-components";

import CurrencyService from "../service/CurrencyService";

import { useSelector } from "react-redux";

const Header = () => {
  // const [USDrate, setUSDrates] = useState(1);
  // const [EURrate, setEURrates] = useState(1);

  const { rateUSD, rateEUR } = useSelector((store) => store.currencyHeader);

  // const Round = (n) => Math.round(n * 1000) / 1000;

  // useEffect(() => {
  // CurrencyService.getRate("USD", "UAH").then((data) => {
  // setUSDrates(Round(data.conversion_rate));
  // });
  // CurrencyService.getRate("EUR", "UAH").then((data) => {
  // setEURrates(Round(data.conversion_rate));
  // });
  // }, []);

  return (
    <HeaderWrapper>
      <h1>💵🍀</h1>
      <Currencies>
        <Currency>$: {rateUSD}</Currency>
        <Currency>€: {rateEUR}</Currency>
      </Currencies>
    </HeaderWrapper>
  );
};

const Currencies = styled.span`
  margin: 0 -20px;
  @media (max-width: 480px) {
    margin: 0 -5px;
  }
`;

const Currency = styled.h3`
  display: inline-block;
  margin: 0 20px;
  @media (max-width: 480px) {
    margin: 0 5px;
    font-size: 16px;
  }
`;

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  padding: 15px 25px;
  background: #262626;
  color: #fff;
  z-index: 10;

  @media (max-width: 480px) {
    padding: 10px 10px;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Header;
