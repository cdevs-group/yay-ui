import React from 'react';
import styled from "styled-components";
import CoinIcon from "../CoinIcon";
import DualshockIcon from "../DualshockIcon";
import  Arrow  from "./components/Arrow";
import CardBalance from './components/CardBalance'

const CardsBalance = () =>{
  return <Cards>
    <CardBalance
        title='2000 YAY'
        text='Ready to harvest'
      ><CoinIcon/>
    </CardBalance>
    <CardBalance
        right
        title='3`000 YAY'
        text='Your Balance'
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
