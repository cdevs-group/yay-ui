import React from "react";
import { BetValue, BetWrap, TextTitle } from "../styles";

const Bet = ({ title, red, bet }: BetInterface) => {
  return (
    <>
      <BetWrap>
        <TextTitle mb="3px !important">{title}</TextTitle>
        <BetValue lose={red}>{bet}</BetValue>
      </BetWrap>
    </>
  );
};

interface BetInterface {
  title?: string;
  red?: boolean;
  bet: number | bigint | string;
}
export default Bet;
