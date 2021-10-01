import React from "react";
import { BetValue, BetWrap, TextTitle } from "../styles";

const Bet = ({ title, red, bet }: BetInterface) => {
  return (
    <>
      <BetWrap>
        <TextTitle>{title}</TextTitle>
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
