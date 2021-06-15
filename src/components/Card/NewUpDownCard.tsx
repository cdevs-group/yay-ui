import React from "react";
import styled from "styled-components";
import CardHeader from "./components/CardHeader";
import {BnbIcon, CompleteIcon} from "../../components/Svg";
import { ClosedPrice } from "../ClosedPrice";
import Button from "../Button/Button";

const payoutArr = [
  {name: <div>Payout:</div>, price: "5,09x"},
  {name: <div>Locked Price:</div>, price: <div className="bold">$ 1`200</div>},
  {name: <div className="bold">Prize Pool:</div>, price: <div className="bold">$ 3`500</div>},
]

const Wrap = styled.div<{ negative?: boolean }>`
  position: relative;
  padding: 22px 19px 30px 22px;
  border-radius: 12px;
  background: ${({ theme, negative }) =>
    negative
      ? theme.colors.redBg
      : theme.colors.linkColor};
  z-index: 1;
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

const ButtonBlock = styled.div`
  position: relative;
  margin-top: 86px;
  & div {
    position: absolute;
    right: 2%;
  }
`

const HeaderWrap = styled.div`
  margin-bottom: 49px;
`

interface UpDownProps {
  negative?: boolean;
}

const NewUpDownCard = (props: UpDownProps) => {
  const {
    negative,
  } = props;

  return (
    <Wrap negative={negative}>
      <HeaderWrap>
        <CardHeader icon={<BnbIcon/>} coin="BNB" num="#0019" negative={negative}/>
      </HeaderWrap>
      <ClosedPrice price="$ 400`597" rightText="56.3%" negative={negative}/>
      <Payout>
        {payoutArr.map((item, i) => (
          <div key={i}>
            <Item>{item.name} {item.price}</Item>
          </div>
        ))}
      </Payout>
      <ButtonBlock>
        <Button variant='green' className="withGreenBorder">Entered Up <div className="right"><CompleteIcon fill='#47DA3B'/></div></Button>
      </ButtonBlock>     
    </Wrap>
  );
};

export default NewUpDownCard;
