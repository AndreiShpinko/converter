import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

import CurrencyService from "../service/CurrencyService";

import {
  setFromName,
  setFromAmount,
  setFromFlags,
  setFromLongName,
  setFromSymbol,
} from "../redux/actionCreators/currFromActions";
import {
  setToName,
  setToAmount,
  setToLongName,
  setToFlags,
  setToSymbol,
} from "../redux/actionCreators/currToActions";
import { setRate } from "../redux/actionCreators/currInfoActions";

const SelectOptions = ({ currencyType }) => {
  const dispatch = useDispatch();

  const Round = (n) => Math.round(n * 1000) / 1000;

  const options = useSelector((store) => store.currencyInfo.options);
  const name = useSelector((store) => store[currencyType].name);

  const fromName = useSelector((store) => store.currencyFrom.name);
  const fromAmount = useSelector((store) => store.currencyFrom.amount);
  const toName = useSelector((store) => store.currencyTo.name);
  const toAmount = useSelector((store) => store.currencyTo.amount);

  const handlerChangeCurrency = (res) => {
    if (currencyType === "currencyFrom") {
      const newFromName = res.value;
      dispatch(setFromName(newFromName));

      CurrencyService.getCountries(newFromName).then((data) => {
        dispatch(setFromLongName(data[0].currencies[newFromName].name));
        dispatch(setFromSymbol(data[0].currencies[newFromName].symbol));
        dispatch(setFromFlags(data.map((obj) => obj.flags.svg)));
      });

      CurrencyService.getRate(newFromName, toName).then((data) => {
        dispatch(setRate(data.conversion_rate));
        dispatch(setFromAmount(Round(toAmount / data.conversion_rate)));
      });
    } else if (currencyType === "currencyTo") {
      const newToName = res.value;
      dispatch(setToName(newToName));

      CurrencyService.getCountries(newToName).then((data) => {
        dispatch(setToLongName(data[0].currencies[newToName].name));
        dispatch(setToSymbol(data[0].currencies[newToName].symbol));
        dispatch(setToFlags(data.map((obj) => obj.flags.svg)));
      });

      CurrencyService.getRate(fromName, newToName).then((data) => {
        dispatch(setRate(data.conversion_rate));
        dispatch(setToAmount(Round(fromAmount * data.conversion_rate)));
      });
    }
  };

  const customStyles = {
    menu: (styles) => ({
      ...styles,
      color: "#000",
    }),
    option: (styles) => ({
      ...styles,
      backgroundСolor: "#262626",
    }),
    singleValue: (styles) => ({
      ...styles,
      paddingRight: "15px",
    }),
  };

  return (
    <SelectWrapper
      style={{ borderRadius: "5px", fontSize: "20px" }}
      shadow={currencyType}
    >
      <Select
        options={options}
        onChange={handlerChangeCurrency}
        defaultValue={{ value: name, label: name }}
        styles={customStyles}
        theme={(theme) => ({
          ...theme,
          borderRadius: "5px",
          colors: {
            ...theme.colors,
            primary: "#262636",
          },
        })}
      />
    </SelectWrapper>
  );
};

const SelectWrapper = styled.div`
  box-shadow: ${({ shadow }) => (shadow === "currencyFrom" ? "-9px" : "9px")}
    10px #00000052;
  @media (max-width: 992px) {
    box-shadow: 0 10px #00000052;
  }
`;

export default SelectOptions;
