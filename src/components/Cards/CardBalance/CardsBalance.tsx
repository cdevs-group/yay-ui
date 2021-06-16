import React from 'react';
import styled from "styled-components";
import CoinIcon from "../CoinIcon";
import DualshockIcon from "../DualshockIcon";
import { TextCardsProps } from '../types';
import  Arrow  from "./components/Arrow";
import CardBalance from './components/CardBalance'

const CardsBalance = ({text}:TextCardsProps) =>{
  return <Cards>
    <CardBalance
        title={text.title1}
        text={text.text1}
      ><CoinIcon/>
    </CardBalance>
    <CardBalance
        right
        title={text.title2}
        text={text.text2}
      ><DualshockIcon/>
    </CardBalance>
    <Arrow center={true}/>
  </Cards>
}

const Cards = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0 16px;
`;

CardsBalance.defaultProps = {
};

export default CardsBalance;
