import React, { useState } from 'react';
import styled from 'styled-components';
import Text from '../../../components/Text/Text';
import { bestProps } from '../types';
import  WIN  from './img/win.png';
import  LOSE from './img/lose.png'; 

const Rounds = ({ best }: bestProps) => {
const [count, setCount] = useState({winCount:0, profit:0, loseCount:0,loseProfit:0,winProfit:0})
const winCount =()=>{
  let winCount = 0;
  let winProfit = 0
  let profit = 0;
  let loseCount = 0;
  let loseProfit =0;
  best.map(item=>{
    if(item.win){
    ++winCount
    winProfit+=item.average
    }else{
      ++loseCount
      loseProfit+=item.average
    }
  })
  profit = winProfit-loseProfit
  return {winCount, profit, loseCount,loseProfit,winProfit}
}
  return (
    <Wrap>
      {best.map((item, i) =>
        <Row>

        </Row>
      )}
    </Wrap>
  )
};

export default Rounds;

const Wrap = styled.div`
  background: ${({theme})=>theme.colors.cardBg};
  padding-bottom: 30px;
  width: 100%;
  left: 0;
`;
const Row = styled.div`
  padding: 20px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
`;
