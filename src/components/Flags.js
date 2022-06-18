import React from "react";
import styled from "styled-components";

const Flags = ({ countries }) => {
  return (
    <FlagsWrapper>
      {countries.map((country, i) => {
        const countryLink = country.slice(-6, -4);
        return (
          <Link
            target="_blank"
            href={`https://www.google.com.ua/maps/search/${countryLink}`}
            key={i}
          >
            <ImgWrapper>
              <Img src={country} alt="country" />
            </ImgWrapper>
          </Link>
        );
      })}
    </FlagsWrapper>
  );
};

const FlagsWrapper = styled.div`
  flex: 1 1 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  max-width: 700px;
  width: calc(100% - 30px);
  min-height: 100px;
  padding: 5px;
  border-radius: 10px;
  background-color: #eee;

  @media (max-width: 992px) {
    max-width: 450px;
  }
`;

const Link = styled.a`
  margin: 5px 10px;
`;

const ImgWrapper = styled.div`
  width: 50px;
  border: 0;
  font-size: 0;
`;

const Img = styled.img`
  border-radius: 4px;
  width: 100%;
`;

export default Flags;
