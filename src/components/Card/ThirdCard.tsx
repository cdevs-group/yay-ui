import React from "react";
import styled from "styled-components";
import Timer from "../Timer/Timer";
import * as BnbIcon from "./img/bnb.png";

const payoutArr = [
  {name: <div>Start Price:</div>, price: <div className="bold">$ 1`200</div>},
  {name: <div>Current Price:</div>, price: <div className="bold">$ 3`500</div>},
  {name: <div className="prize">Prize Pool:</div>, price: <div className="boldPrice">12.000 BNB</div>},
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
  align-items: center;
  font-weight: 500;
  font-size: 21px;
  line-height: 27px;
  & div.white {
    margin: 0 11px 0 16px;
    color: #FFFFFF;
  }
  & div.green {
    font-size: 15px;
    line-height: 19px;
    color: #4AE43D;
  }
`

const TextRight = styled.div`
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  color: #A3A3A3;
`

const Payout = styled.div`
  margin-top: 25px;
`

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 13px;
  line-height: 16px;
  color: #fff;
  & div.bold {
    font-weight: bold;
  }
  & div.prize {
    margin-top: 21px;
    font-weight: 500;
    font-size: 15px;
    line-height: 19px;
  }
  & div.boldPrice {
    margin-top: 20px;
    font-weight: 500;
    font-size: 21px;
    line-height: 27px;
  }
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
  color: #fff;
`

const ThirdCard: React.FC = () => {
  return (
    <Wrap >
      <Title>
        <TextLeft>
          <div><img src={BnbIcon}/></div>
          <div className="white">BNB</div>
          <div className="green">03.01%</div>
        </TextLeft>
        <TextRight>#0021</TextRight>
      </Title>
      <Payout>
        {payoutArr.map((item, i) => (
          <div key={i}>
            <Item>{item.name} {item.price}</Item>
          </div>
        ))}
      </Payout>
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
