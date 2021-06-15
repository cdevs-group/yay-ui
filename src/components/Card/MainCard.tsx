import React from "react";
import styled from "styled-components";
import Timer from "../Timer/Timer";
import CardHeader from "./components/CardHeader";
import { BnbIcon } from "../../components/Svg";
import { ClosedPrice } from "../ClosedPrice";

const payoutArr = [
  { name: <div>Payout:</div>, price: "5,09x" },
  { name: <div>Locked Price:</div>, price: <div className="bold">$ 1`200</div> },
  { name: <div className="bold">Prize Pool:</div>, price: <div className="bold">$ 3`500</div> },
]

const Wrap = styled.div`
  position: relative;
  padding: 22px 19px 32px 22px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.linkColor};
  z-index: 1;
  height: 100%;
  &.red { 
    /* background: red; */
  }
  &::before{
    position: absolute;
    display: block;
    content:'';   
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    box-sizing: border-box;
    top: 1px;
    left: 1px;
    background: ${({ theme }) => theme.colors.cardBg};;
    border-radius: 12px;
    z-index: -1;
    
  }
`

const Payout = styled.div`
  margin-top: 31px;
`

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
`

const TimerTitle = styled.div`
  margin: 51px 0 19px;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`

const MainCard: React.FC = () => {
  return (
    <Wrap>
      <CardHeader icon={<BnbIcon />} coin="BNB" upDown="UP" num="#0019" />
      <ClosedPrice price="$ 400`597" rightText="56.3%" />
      <Payout>
        {payoutArr.map((item, i) => (
          <div key={i}>
            <Item>{item.name} {item.price}</Item>
          </div>
        ))}
      </Payout>
      <TimerTitle>Bids close:</TimerTitle>
      <Timer time={1500} />
    </Wrap>
  );
};
export default MainCard;
