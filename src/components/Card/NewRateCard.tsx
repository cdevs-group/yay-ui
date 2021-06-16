import React from "react";
import styled from "styled-components";
import PriceBlock from "./components/PriceBlock";
import { BnbIcon, CompleteIcon } from "../Svg";
import CardHeader from "./components/CardHeader";
import Button from "../Button/Button";
import { Button as Input } from "../../widgets/WalletModal/ConnectModal";

const Wrap = styled.div`
  padding: 22px 19px 0 22px;
  min-height: 480px;
`;

const ButtonBlock = styled.div`
  position: relative;
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
  & div {
    position: absolute;
    right: 2%;
    text-shadow: ${({ theme }) => theme.colors.boxShadow5};
  }
`;

const TimerTitle = styled.div`
  margin: 35px 0 19px;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`;

const InputBlock = styled(Input)`
  width: 45%;
  height: 48px;
  margin: 0 28%;
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
  padding: 0 53px;
  cursor: auto;
`;

const payoutArr = [
  { name: <div>Round:</div>, price: <div className="grey">#0021</div> },
  { name: <div>Current Price:</div>, price: <div className="bold">$ 3`500</div> },
  { name: <div className="prize">Prize Pool:</div>, price: <div className="boldPrice">12.000 BNB</div> },
];

const NewRateCard: React.FC = () => {
  return (
    <Wrap>
      <CardHeader icon={<BnbIcon />} coin="BNB" />
      <PriceBlock arr={payoutArr} />
      <ButtonBlock>
        <Button variant="green" className="withGreenBorder">
          Entered Up{" "}
          <div className="right">
            <CompleteIcon fill="#47DA3B" />
          </div>
        </Button>
        <Button variant="pink" disabled className="withRedBorder">
          Enter Down
        </Button>
      </ButtonBlock>
      <TimerTitle>You Entered:</TimerTitle>
      <InputBlock as="input" />
    </Wrap>
  );
};
export default NewRateCard;
