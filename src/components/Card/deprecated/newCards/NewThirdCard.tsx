import React, {useState} from "react";
import styled from "styled-components";
import Timer from "../Timer/Timer";
import PriceBlock from "./components/PriceBlock";
import {BnbIcon, ArrowLeft} from "../../components/Svg";
import CardHeader from "./components/CardHeader";
import Button from "../Button/Button";
import PositionCard from "./PositionCard";
import { transparentize } from 'polished';

const Wrap = styled.div`
  padding: 22px 0 22px;
  perspective: 1000;
  width: 350px;
  height: 480px;
  margin: 0 auto;
`

const Flipper = styled.div`
  position: relative;
  transition: 0.6s;
  transform-style: preserve-3d;
  &.hover {
    transform: rotateY(180deg);
  }
  & div.front {
    position: absolute;
    top: 0;
    left: 0;
    width: 350px;
    min-height: 480px;
    z-index: 2;
    backface-visibility: hidden;    
  }
  & div.back {
    position: absolute;
    top: 0;
    left: 0;
    width: 350px;
    min-height: 480px;
    transform: rotateY(180deg);
    backface-visibility: hidden;    
  }  
`

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
    right: 5%;
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

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  font-size: 21px;
  line-height: 27px;
  color: ${({ theme }) => theme.colors.text};
`

const ButtonArrow = styled.button`
  padding: 8px 8px 0;
  border: none;
  background: ${({ theme }) => transparentize(0.85, theme.colors.text)};
  border-radius: 7px;
  cursor: pointer;
`

const payoutArr = [
  {name: <div>Round:</div>, price: <div className="grey">#0021</div>},
  {name: <div>Current Price:</div>, price: <div className="bold">$ 3`500</div>},
  {name: <div className="prize">Prize Pool:</div>, price: <div className="boldPrice">12.000 BNB</div>},
]

const NewThirdCard: React.FC = () => {

  const[active, setActive] = useState("");

  const addClassName = () => {
    setActive("hover");
  }

  const addButtonClassName = () => {
    setActive("");
  }

  return (
    <Wrap>
      <Flipper className={active}>
        <div className="front">
          <CardHeader icon={<BnbIcon/>} coin="BNB"/>
          <PriceBlock arr={payoutArr}/>
          <ButtonBlock >
            <Button variant='green' onClick={addClassName}>Enter Up <div className="right">1,5x</div></Button>
            <Button variant='pink' onClick={addClassName}>Enter Down <div className="right">2,7x</div></Button>
          </ButtonBlock>
          <TimerTitle>Bids close in:</TimerTitle>
          <Timer time={2000} color="#fff"/>
          <PositionBlock>
            <PositionCard/>
          </PositionBlock>  
        </div>
        <div className="back">
          <Title>
            <div>Set Position</div>
            <ButtonArrow type="button" onClick={addButtonClassName}><ArrowLeft/></ButtonArrow>
          </Title>
          <PositionCard/>
        </div>
      </Flipper>     
    </Wrap>
  );
};
export default NewThirdCard;
