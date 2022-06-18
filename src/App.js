import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

import CurrencyRow from "./components/CurrencyRow";
import Loader from "./components/Loader";
import Header from "./components/Header";
import CurrencyService from "./service/CurrencyService";

import { useDispatch, useSelector } from "react-redux";
import {
  setFromFlags,
  setFromLongName,
  setFromSymbol,
} from "./redux/actionCreators/currFromActions";
import {
  setToAmount,
  setToLongName,
  setToFlags,
  setToSymbol,
} from "./redux/actionCreators/currToActions";
import { setOptions, setRate } from "./redux/actionCreators/currInfoActions";
import {
  setHeaderUSD,
  setHeaderEUR,
} from "./redux/actionCreators/currHeaderActions";

const App = () => {
  const dispatch = useDispatch();

  const fromName = useSelector((store) => store.currencyFrom.name);
  const fromAmount = useSelector((store) => store.currencyFrom.amount);
  const toName = useSelector((store) => store.currencyTo.name);

  const [load, setLoad] = useState(true);

  const Round = (n) => Math.round(n * 1000) / 1000;

  useEffect(() => {
    const requests = [
      CurrencyService.getOptions().then((data) => {
        dispatch(
          setOptions(
            Object.keys(data.conversion_rates).map((item) => ({
              value: item,
              label: item,
            }))
          )
        );
      }),

      CurrencyService.getRate("USD", "UAH").then((data) => {
        dispatch(setHeaderUSD(Round(data.conversion_rate)));
      }),
      CurrencyService.getRate("EUR", "UAH").then((data) => {
        dispatch(setHeaderEUR(Round(data.conversion_rate)));
      }),

      CurrencyService.getCountries(fromName).then((data) => {
        dispatch(setFromLongName(data[0].currencies[fromName].name));
        dispatch(setFromSymbol(data[0].currencies[fromName].symbol));
        dispatch(setFromFlags(data.map((obj) => obj.flags.svg)));
      }),

      CurrencyService.getCountries(toName).then((data) => {
        dispatch(setToLongName(data[0].currencies[toName].name));
        dispatch(setToSymbol(data[0].currencies[toName].symbol));
        dispatch(setToFlags(data.map((obj) => obj.flags.svg)));
      }),

      CurrencyService.getRate(fromName, toName).then((data) => {
        dispatch(setRate(data.conversion_rate));
        dispatch(setToAmount(Round(fromAmount * data.conversion_rate)));
      }),
    ];

    Promise.allSettled(requests).finally(() => {
      if (load) setLoad(false);
    });
  }, []);

  return (
    <Wrapper>
      {load ? (
        <Loader />
      ) : (
        <WrapperInner>
          <Header />
          <Main>
            <Fade top>
              <Block>
                <BlockHeader>Currency Converter</BlockHeader>
                <BlockInner>
                  <CurrencyRow currencyType={"currencyFrom"} />
                  <CurrencyRow currencyType={"currencyTo"} />
                </BlockInner>
              </Block>
            </Fade>
          </Main>
        </WrapperInner>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #999;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Montserrat", sans-serif;
`;

const WrapperInner = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1 1 100%;

  display: flex;
  flex-direction: column;
  padding: 15px 30px;

  @media (max-width: 768px) {
    padding: 10px;
  }

  .react-reveal {
    flex: 1 1 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Block = styled.div`
  width: 100%;
  background-color: #262626;
  color: #fff;
  border-radius: 10px;
  padding: 15px 25px;

  @media (max-width: 992px) {
    max-width: 600px;
  }
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const BlockHeader = styled.h1`
  margin-bottom: 15px;
  @media (max-width: 768px) {
    margin-left: 10px;
  }
  @media (max-width: 480px) {
    font-size: 28px;
    margin-left: 0;
  }
`;

const BlockInner = styled.div`
  display: flex;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export default App;
