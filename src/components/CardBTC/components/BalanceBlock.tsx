import React from "react";
import styled from "styled-components";
import { BalanceBlockProps } from "../types";
import BTC from "./btc.png";
import ETH from "./eth.png";

const BalanceBlock = ({ btc, value }: BalanceBlockProps) => {
  return (
    <Wrap>
      {btc && (
        <Icon className="btc">
          <img src={BTC} alt="btc" />
        </Icon>
      )}
      <p>{value}</p>
      {btc || (
        <Icon className="eth">
          <img src={ETH} alt="eth" />
        </Icon>
      )}
    </Wrap>
  );
};

export default BalanceBlock;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  width: 180px;
  padding: 5px;
  background: ${({ theme }) => theme.colors.buttonBg};
  border-radius: 12px;
  & p {
    width: 100%;
    font-size: 15px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
  }
`;
const Icon = styled.div`
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9px;
  flex: none;
  &.btc {
    background: ${({ theme }) => theme.colors.yellowGradient};
  }
  &.eth {
    background: ${({ theme }) => theme.colors.bgCardBtc};
  }
`;
