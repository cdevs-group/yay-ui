import React from 'react';
import styled from 'styled-components';
import Text from '../../../components/Text/Text';
import { bestProps } from '../types';

const Statistic = ({ bestNumber,best }: bestProps) => {
  const nameRow = (index: number) => {
    switch (index) {
      case 0:
        return { first: 'Average', second: 'return / round' }
      case 1:
        return { first: 'Best round:', second: `#${bestNumber?.number}` }
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
         
         <Best fontSize='13px' textAlign='right' color={i!==2?'#4BE43E':'white'}>
            {i===1?<Text color='#A3A3A3'fontSize='13px'>({bestNumber?.kef}X)</Text>:null}
          +{item.average}BNB</Best>
          
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
  margin: 17px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
`;
const Best = styled(Text)`
  display:flex;
  justify-content: flex-end;
`;
