import React from "react";
import styled from "styled-components";
import { BNB } from "../../constants/images";
import Timer from "../Timer/Timer";
import CardHeader from "./components/CardHeader";
import {BnbIcon} from "../../components/Svg";

const payoutArr = [
  {name: <div>Payout:</div>, price: "5,09x"},
  {name: <div>Locked Price:</div>, price: <div className="bold">$ 1`200</div>},
  {name: <div className="bold">Prize Pool:</div>, price: <div className="bold">$ 3`500</div>},
]

const Wrap = styled.div`
  position: relative;
  padding: 22px 19px 32px 22px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.linkColor};
  z-index: 1;
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

const TextLeft = styled.div`
  display: flex;
  font-weight: 500;
  font-size: 21px;
  line-height: 27px;
  background: ${({ theme }) => theme.colors.linkColor};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  & div:last-child {
    margin-left: 16px;
  }
`

const PriceBlock = styled.div`
  position: relative;
  margin-top: 49px;
  padding: 17px 13px 14px 25px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.linkColor};
  z-index:1;
  &::before{
    position: absolute;
    display: block;
    content:'';   
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    box-sizing: border-box;
    top: 1px;
    left: 1px;
    background: ${({ theme }) => theme.colors.darkGreyBg};
    border-radius: 12px;
    z-index: 0;
  }
  & span {
    position: relative;
    z-index: 3;
    font-size: 15px;
    line-height: 19px;
    color: ${({ theme }) => theme.colors.greyText};
  }
`

const Price = styled(TextLeft)`
  position: relative;
  z-index: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 18px;
  font-weight: 500;
  font-size: 17px;
  line-height: 22px;
  & div {
    padding: 6px 12px;
    background: ${({ theme }) => theme.colors.gradients.greenGradient};
    border-radius: 7px;
    font-size: 15px;
    line-height: 19px;
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
      <CardHeader icon={<BnbIcon/>} coin="BNB" upDown="UP" num="#0019"/>

      <PriceBlock><span>Closed Price</span><Price>$ 400`597<div>56.3%</div></Price></PriceBlock>
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
