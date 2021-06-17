import React from "react";
import styled from "styled-components";
import CardHeader from "./components/CardHeader";
import { BnbIcon } from "../Svg";
import { ClosedPrice } from "../ClosedPrice";
import { BetPosition, Round } from "./types";

const Wrap = styled.div`
  position: relative;
  padding: 22px 19px 22px 22px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.linkColor};
  z-index: 1;
  min-height: 480px;
  &.red {
    background: ${({ theme }) => theme.colors.redBg};
  }
  &::before {
    position: absolute;
    display: block;
    content: "";
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    box-sizing: border-box;
    top: 1px;
    left: 1px;
    background: ${({ theme }) => theme.colors.cardBg};
    border-radius: 12px;
    z-index: -1;
  }
`;

const Payout = styled.div`
  margin-top: 31px;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 13px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.text};
  & div.bold {
    font-weight: 500;
  }
`;
const HeaderWrap = styled.div`
  margin-bottom: 49px;
`;

interface ExpiredCardProps {
  round: Round;
  payot: string;
  up: boolean;
  lockPrice: string;
  prizePool: string;
  closePrice: string;
  priceDifference: string;
}

const ExpiredCard: React.FC<ExpiredCardProps> = ({
  round,
  lockPrice,
  prizePool,
  payot,
  up,
  closePrice,
  priceDifference,
}) => {
  const payoutArr = [
    { name: <div>Payout:</div>, price: payot },
    { name: <div>Locked Price:</div>, price: <div className="bold">{lockPrice}</div> },
    { name: <div className="bold">Prize Pool:</div>, price: <div className="bold">{prizePool}</div> },
  ];

  return (
    <Wrap className={up ? "" : "red"}>
      <HeaderWrap>
        <CardHeader icon={<BnbIcon />} coin="BNB" upDown={up ? "UP" : "DOWN"} num={`#${round.epoch}`} />
      </HeaderWrap>
      <ClosedPrice price={closePrice} rightText={priceDifference} negative={!up} />
      <Payout>
        {payoutArr.map((item, i) => (
          <div key={i}>
            <Item>
              {item.name} {item.price}
            </Item>
          </div>
        ))}
      </Payout>
    </Wrap>
  );
};

export default ExpiredCard;
