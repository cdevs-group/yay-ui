import React from "react";
import styled from "styled-components";
import CardHeader from "./components/CardHeader";
import {BnbIcon, CompleteIcon} from "../../components/Svg";
import { ClosedPrice } from "../ClosedPrice";
import Button from "../Button/Button";
import {Winner, Win} from '../../constants/images';

const payoutArr = [
  {name: <div>Payout:</div>, price: "5,09x"},
  {name: <div>Locked Price:</div>, price: <div className="bold">$ 1`200</div>},
  {name: <div className="bold">Prize Pool:</div>, price: <div className="bold">$ 3`500</div>},
]

const Wrap = styled.div`
  position: relative;
  padding: 22px 19px 32px 22px;
  min-height: 480px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.linkColor};
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

const ButtonBnb = styled.div`
  position: relative;
  margin-top: 84px;
`

const WinIcon = styled.div`
  position: absolute;
  top: 76%;
  left: 8%;
  z-index: 2;
  pointer-events: none;
`

const WinnerImg = styled.div`
  position: absolute;
  top: 63%;
  left: 59%;
  pointer-events: none;
`

const HeaderWrap = styled.div`
  margin-bottom: 49px;
`

const NewWinCard: React.FC = () => {
  return (
    <Wrap>
      <HeaderWrap>
        <CardHeader icon={<BnbIcon/>} coin="BNB" upDown="UP" num="#0019" svg={<CompleteIcon fill='#47DA3B'/>}/>
      </HeaderWrap>
      <ClosedPrice price="$ 400`597" rightText="56.3%"/>
      <Payout>
        {payoutArr.map((item, i) => (
          <div key={i}>
            <Item>{item.name} {item.price}</Item>
          </div>
        ))}
      </Payout>
      <WinIcon><img src={Win}/></WinIcon>
      <ButtonBnb><Button variant='green' width="100%">Collect Winnings</Button></ButtonBnb>
      <WinnerImg><img src={Winner}/></WinnerImg>
    </Wrap>
  );
};
export default NewWinCard;
