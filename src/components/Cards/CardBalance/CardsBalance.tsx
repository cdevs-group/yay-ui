import React from "react";
import styled from "styled-components";
import CoinIcon from "../CoinIcon";
import DualshockIcon from "../DualshockIcon";
import { TextCardsProps } from "../types";
import Arrow from "./components/Arrow";
import CardBalance from "./components/CardBalance";

const CardsBalance = ({ texts, account }: TextCardsProps) => {
  return (
    <Cards>
      <CardBalance
        texts={{
          title: texts?.title1 || "2`000 YAY",
          text: texts?.text1 || "Ready to harvest",
          connect: texts?.connect || "Сonnect wallet",
        }}
        account={account}
      >
        <CoinIconBalance>
          <CoinIcon />
        </CoinIconBalance>
      </CardBalance>
      <CardBalance
        right
        texts={{
          title: texts?.title2 || "3`000 YAY",
          text: texts?.text2 || "Your Balance",
          connect: texts?.connect || "Сonnect wallet",
        }}
        account={account}
      >
        <DualShockBalance>
          <DualshockIcon />
        </DualShockBalance>
      </CardBalance>
      <ArrowIcon>
        <Arrow center={true} />
      </ArrowIcon>
    </Cards>
  );
};

const Cards = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  ${({ theme }) => theme.mediaQueries.sm} {
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0 16px;
  }
`;

const CoinIconBalance = styled.div`
  position: absolute;
  left: 0%;
  bottom: 0;
  z-index: -1;
`;

const DualShockBalance = styled.div`
  position: absolute;
  right: 0%;
  bottom: 0;
  z-index: -1;
`;

const ArrowIcon = styled.div`
  position: absolute;
  z-index: 2;
  transform: rotate(90deg) translate(-50%, -50%);
  top: calc(50% - 12px);
  left: 50%;
  & svg {
    margin-top: 4px;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    transform: rotate(0deg);
    top: 50%;
    right: 50%;
  }
`;

CardsBalance.defaultProps = {};

export default CardsBalance;
