import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Text } from '../../../components/Text';
import { bestProps } from '../types';

const ProgressBar = ({ best }: bestProps) => {
  const [count, setCount] = useState({count:0,profit:0})

  const countTrue = () => {
    let count = 0
    let profit = 0
    best.map(item => {
      if (item.win) {
        count++
        profit += item.average
      }
    })
    return {count, profit};
  }
  useEffect(() => {
    setCount(countTrue())
  }, [best])

  return (<div>
    <ProgressWrap>
      <Progress>
        {best.map((item, i) => <React.Fragment key={i}>
          <Step color={item.win ? '#47DA3B' : '#FF6161'} />
        </React.Fragment>
        )}
      </Progress>
    </ProgressWrap>
    <Counter>
    <Text fontSize='21px'>
      {count.count}/{best.length}
    </Text>
    <TextProfit textAlign='right' fontSize='21px' >+{count.profit} BNB</TextProfit>
    <TextPercents >100%</TextPercents>
    <Text textAlign='right'>$0.177</Text>
    </Counter>
  </div>
  )
};

export default ProgressBar;

const ProgressWrap = styled.div`
  padding:6px;
  background: ${({ theme }) => theme.colors.buttonBg};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  border-radius: 5px;
`;
const Progress = styled.div`
  display: flex;
  width: 100%;
  border-radius: 3px;
  overflow: hidden;
`;
const Step = styled.div<{ color: string }>`
  height: 9px;
  width: 100%;
  background: ${({ color }) => color};
  transition: none.3s;
`;
const Counter = styled.div`
  margin-top: 15px;
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
`;
const TextProfit = styled(Text)`
  color:${({theme})=>theme.colors.green};
`;
const TextPercents = styled(Text)`
  color:${({theme})=>theme.colors.textGray2};
`;