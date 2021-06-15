import React, {useState} from "react";
import styled from "styled-components";
import { BNB } from "../../constants/images";
import Timer from "../Timer/Timer";
import PriceBlock from "./components/PriceBlock";
import {BnbIcon} from "../../components/Svg";
import CardHeader from "./components/CardHeader";
import Button from "../Button/Button";
import PositionCard from "./PositionCard";

const Wrap = styled.div`
  padding: 22px 19px 22px 22px;
  &.show {
    /* transform: rotate(360deg); */
  }
`

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
  & div {
    position: absolute;
    right: 62%;
    text-shadow: ${({ theme }) => theme.colors.boxShadow5};
  }
  
`

const TimerTitle = styled.div`
  margin: 35px 0 19px;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`

const PositionBlock = styled.div`
  display: none;
`

const payoutArr = [
  {name: <div>Round:</div>, price: <div className="grey">#0021</div>},
  {name: <div>Current Price:</div>, price: <div className="bold">$ 3`500</div>},
  {name: <div className="prize">Prize Pool:</div>, price: <div className="boldPrice">12.000 BNB</div>},
]

const NewThirdCard: React.FC = () => {

  const[active, setActive] = useState("");

  const addClassName = () => {
    setActive("active");
  }

  return (
    <Wrap className={ active === "active" ? "show" : ""}>
      <CardHeader icon={<BnbIcon/>} coin="BNB"/>
      <PriceBlock arr={payoutArr}/>
      <ButtonBlock >
        <Button variant='green' onClick={addClassName}>Enter Up <div className="right">1,5x</div></Button>
        <Button variant='pink'>Enter Down <div className="right">2,7x</div></Button>
      </ButtonBlock>
      <TimerTitle>Bids close in:</TimerTitle>
      <Timer time={2000} color="#fff"/>
      <PositionBlock>
        <PositionCard/>
      </PositionBlock>     
    </Wrap>
  );
};
export default NewThirdCard;
