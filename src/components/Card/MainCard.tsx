import React from "react";
import styled from "styled-components";
import Timer from "../Timer/Timer";
import * as BnbIcon from "./img/bnb.png";

const payoutArr = [
  {name: <div>Payout:</div>, price: "5,09x"},
  {name: <div>Locked Price:</div>, price: <div className="bold">$ 1`200</div>},
  {name: <div className="bold">Prize Pool:</div>, price: <div className="bold">$ 3`500</div>},
]

const Wrap = styled.div`
  padding: 22px 19px 0 22px;
`

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 49px;
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

const TextRight = styled.div`
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  color: #A3A3A3;
`

const PriceBlock = styled.div`
  position: relative;
  padding: 17px 13px 14px 25px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.linkColor};
  z-index:1;
  &::before{
    position: absolute;
    display:block;
    content:'';   
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    box-sizing: border-box;
    top: 1px;
    left: 1px;
    background: #1d1d22;
    border-radius: 12px;
    z-index: 0;
  }
  & span {
    position: relative;
    z-index: 3;
    font-size: 15px;
    line-height: 19px;
    color: #A3A3A3
  }
`

const Price = styled(TextLeft)`
  position: relative;
  z-index: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 18px;
  & div {
    padding: 6px 12px;
    background: linear-gradient(180deg, rgba(76, 238, 62, 0.15) -16%, rgba(71, 218, 59, 0.15) 100%);
    border-radius: 7px;
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
  color: #fff;
  & div.bold {
    font-weight: 500;
  }
`

const TimerTitle = styled.div`
  margin: 51px 0 19px;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  color: #fff;
`

const MainCard: React.FC = () => {
  return (
    <Wrap >
      <Title>
        <TextLeft>
          <div><img src={BnbIcon}/></div>
          <div>BNB UP</div>
        </TextLeft>
        <TextRight>#0019</TextRight>
      </Title>
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
