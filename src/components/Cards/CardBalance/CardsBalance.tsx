import React from "react";
import styled from "styled-components";
import CoinIcon from "../CoinIcon";
import DualshockIcon from "../DualshockIcon";
import { TextCardsProps } from "../types";
import Arrow from "./components/Arrow";
import CardBalance from "./components/CardBalance";

const CardsBalance = ({ text }: TextCardsProps) => {
  return (
    <Cards>
      <CardBalance title={text.title1} text={text.text1}>
        <CoinIconBalance>
          <CoinIcon />
        </CoinIconBalance>
      </CardBalance>
      <CardBalance right title={text.title2} text={text.text2}>
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
  transform: rotate(90deg);
  top: 20%;
  right: 50%;
  & svg {
    margin-top: 4px;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    transform: rotate(0deg);
    top: 45%;
    right: 50%;
  }
`;

CardsBalance.defaultProps = {};

export default CardsBalance;
