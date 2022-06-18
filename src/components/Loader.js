import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <LoaderWrapper>
      <Circle />
      <Circle />
      <Circle />
      <Circle />
    </LoaderWrapper>
  );
};

export default Loader;

const LoaderWrapper = styled.div`
  display: flex;
  width: 105px;
  height: 15px;
  position: relative;
`;
const Circle = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: rgb(0, 0, 0);
  margin-right: 30px;
  animation: move 500ms linear 0ms infinite;
  &:first-child {
    position: absolute;
    top: 0;
    left: 0;
    animation: grow 500ms linear 0ms infinite;
  }
  &:last-child {
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 0;
    animation: grow 500ms linear 0s infinite reverse;
  }

  @keyframes grow {
    from {
      transform: scale(0, 0);
      opacity: 0;
    }
    to {
      transform: scale(1, 1);
      opacity: 1;
    }
  }

  @keyframes move {
    from {
      transform: translateX(0px);
    }
    to {
      transform: translateX(45px);
    }
  }
`;
