import React from "react";
import styled from "styled-components";
import Timer from "../../Timer/Timer";
import PriceBlock from "../components/PriceBlock";
import { BnbIcon } from "../../../components/Svg";
import CardHeader from "../components/CardHeader";
import Button from "../../Button/Button";

const Wrap = styled.div`
  padding: 22px 19px 0 22px;
  min-height: 445px;
`;

const ButtonBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 27px;
  & button {
    font-weight: 500;
    font-size: 15px;
    line-height: 19px;
  }

  & button:not(:last-child) {
    margin-bottom: 14px;
  }
`;

const GreenButton = styled.div`
  margin-bottom: 14px;
  padding: 16px 0;
  width: 100%;
  background: green;
  text-align: center;
`;

const RedButton = styled(GreenButton)`
  background: red;
`;

const TimerTitle = styled.div`
  margin: 35px 0 19px;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`;

const payoutArr = [
  { name: <div>Start Price:</div>, price: <div className="bold">$ 1`200</div> },
  { name: <div>Current Price:</div>, price: <div className="bold">$ 3`500</div> },
  { name: <div className="prize">Prize Pool:</div>, price: <div className="boldPrice">12.000 BNB</div> },
];

const ThirdCard: React.FC = () => {
  return (
    <Wrap>
      <CardHeader icon={<BnbIcon />} coin="BNB" upDown="03.01%" num="#0021" greenColor />
      <PriceBlock arr={payoutArr} />
      <ButtonBlock>
        <Button variant="green">Enter Up</Button>
        <Button variant="pink">Enter Down</Button>
      </ButtonBlock>
      <TimerTitle>Bids close in:</TimerTitle>
      <Timer time={2000} color="#fff" />
    </Wrap>
  );
};
export default ThirdCard;
