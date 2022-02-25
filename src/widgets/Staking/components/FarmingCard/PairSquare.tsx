import React from "react";
import styled from "styled-components";
import { Flex } from "../../../../components/Box";

const PairSquare = ({ token0, token1 }: { token0: string; token1: string }) => {
  return (
    <Wrapper>
      <img src={token0} />
      <img src={token1} />
    </Wrapper>
  );
};

export default PairSquare;

const Wrapper = styled(Flex)`
  position: relative;
  flex-direction: column;
  & img {
    //position: absolute;
    width: 30px;
    height: 30px;
    max-width: none;
    &:first-child {
      margin-bottom: -10px;
    }
    &:last-child {
      margin-top: 0px;
      margin-left: 20px;
    }
  }
`;
