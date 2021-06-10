import React from "react";
import styled from "styled-components";
import Timer from "../Timer/Timer";
import PriceBlock from "./components/PriceBlock";
import {BnbIcon} from "../../components/Svg";
import CardHeader from "./components/CardHeader";

const Wrap = styled.div`
  padding: 22px 19px 0 22px;
`

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`
const TextLeft = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 21px;
  line-height: 27px;
  & div.white {
    margin: 0 11px 0 16px;
    color: ${({ theme }) => theme.colors.text};
  }
  & div.green {
    font-size: 15px;
    line-height: 19px;
    color: ${({ theme }) => theme.colors.greenText};
  }
`

const TextRight = styled.div`
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.greyText};
`

const ButtonBlock = styled.div`
  margin-top: 27px;

`

const GreenButton = styled.div`
  margin-bottom: 14px;
  padding: 16px 0;
  width: 100%;
  background: green;
  text-align: center;
`

const RedButton = styled(GreenButton)`
  background: red;
`

const TimerTitle = styled.div`
  margin: 35px 0 19px;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`

const ThirdCard: React.FC = () => {
  return (
    <Wrap >
      <CardHeader icon={<BnbIcon/>} coin="BNB" upDown="03.01%" num="#0021" greenColor whiteCoin/>
      <PriceBlock/>
      <ButtonBlock>
        <GreenButton>Enter Up</GreenButton>
        <RedButton>Enter Down</RedButton>
      </ButtonBlock>
      <TimerTitle>Bids close in:</TimerTitle>
      <Timer time={2000} />
    </Wrap>
  );
};
export default ThirdCard;
