import React, { ReactNode } from "react";
import styled from "styled-components";
import { Flex } from "../../../../components/Box";

const PairToken = ({ token0, token1 }: { token0: string | ReactNode; token1: string | ReactNode }) => {
  return (
    <Flex>
      <Token>
        {typeof token0 === "string" ? <img src={token0} /> : token0}
      </Token>
      <Token>
      {typeof token1 === "string" ? <img src={token1} /> : token1}
      </Token>
    </Flex>
  );
};

export default PairToken;

const Token = styled.div`
  z-index: 1;
  width: 40px;
  height: 40px;
  margin-right: -10px;
  background: ${({ theme }) => theme.colors.buttonBg3};
  border: 5px solid ${({ theme }) => theme.colors.bgGray};
  box-shadow: ${({ theme }) => theme.colors.boxShadow15};
  border-radius: 50%;
  & img {
    width: 100%;
    height: 100%;
  }
  &:after {
    margin-right: 0;
    margin-left: -10px;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 55px;
    height: 55px;
  }
`;
