import React from "react";
import styled from "styled-components";
import Timer from "../Timer/Timer";
import PriceBlock from "./components/PriceBlock";
import {BnbIcon} from "../../components/Svg";
import CardHeader from "./components/CardHeader";

const Wrap = styled.div`
  padding: 22px 19px 0 22px;
`

const ButtonBlock = styled.div`
  margin-top: 27px;
`

const GreenButton = styled.div`
  margin-bottom: 14px;
  padding: 16px 0;
  width: 100%;
  background: none;
  border: 1px solid green;
  text-align: center;
`

const RedButton = styled(GreenButton)`
  background: none;
  border: 1px solid red;
`

const TimerTitle = styled.div`
  margin: 35px 0 19px;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`

const LastCard: React.FC = () => {
  return (
    <Wrap>
      <CardHeader icon={<BnbIcon/>} coin="BNB" upDown="03.01%" num="#0021" greenColor whiteCoin/>
      <PriceBlock/>
      <ButtonBlock>
        <GreenButton>Enter Up</GreenButton>
        <RedButton>Enter Down</RedButton>
      </ButtonBlock>
      <TimerTitle>You Entered:</TimerTitle>
      
    </Wrap>
  );
};
export default LastCard;
