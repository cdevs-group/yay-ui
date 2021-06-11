import React from 'react';
import styled from 'styled-components';
import Text from '../../../components/Text/Text';
import { bestProps } from '../types';

const Statistic = ({ best }: bestProps) => {
  const nameRow = (index: number) => {
    switch (index) {
      case 0:
        return { first: 'Average', second: 'return / round' }
      case 1:
        return { first: 'Best round:', second: '#5426' }
      case 2:
        return { first: 'Average position', second: 'enetered / round' }
      default:
        return { first: 'Average', second: 'return / round' }
    }
  }

  return (
    <Wrap>
      {best.map((item, i) =>
        <Row>
          <Text>{nameRow(i).first}</Text>
          <Text textAlign='right' color={i!==3?'#4BE43E':'white'}>+{item.average}BNB</Text>
          <Text>{nameRow(i).second}</Text>
          <Text textAlign='right' >{item.round}</Text>
        </Row>
      )}
    </Wrap>
  )
};

export default Statistic;

const Wrap = styled.div`
  margin-top: 20px;
`;
const Row = styled.div`
  margin: 20px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
`;
