import React from 'react';
import styled from 'styled-components';
import { ClosedPrice } from '../../../components/ClosedPrice';
import { Text } from '../../../components/Text';
import WIN from './img/win.png';
import LOSE from './img/lose.png';
import { Button } from '../../../components/Button';

interface IYourHistory {
  price: string;
  priceRightText: string;
  result?: string;
  yourPosition: string;
  negative?: boolean;
  win: boolean;
  collect?: boolean;
}

const YourHistory = (props: IYourHistory) => {
  const {
    price,
    priceRightText,
    yourPosition,
    win,
    negative,
    result,
    collect,
  } = props;

  return (
    <Block>
      <Line>
        <Text mb={17}>Your History </Text>
        <Line>
          {win && (
            <>
              <Text color="green" mr="6px">
                WIN
              </Text>
              <img src={WIN} alt="" />
            </>
          )}
          {!win && (
            <>
              <Text color="greyText" mr="6px">
                LOSE
              </Text>
              <img src={LOSE} alt="" />
            </>
          )}
        </Line>
      </Line>
      <ClosedPrice
        price={price}
        rightText={priceRightText}
        result={result}
        negative={negative}
      />
      <LineMargin>
        <Text size="sm" fontWeight={400}>
          Your Position
        </Text>
        <Text size="sm">{yourPosition}</Text>
      </LineMargin>
      {collect && <Button width='100%' scale='md' variant='green' disabled>Collect Winnings</Button>}
    </Block>
  );
};

export default YourHistory;

const Line = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;
const Block = styled.div`
  margin-top: 3px;
`;
const LineMargin = styled(Line)`
  margin-top: 31px;
  margin-bottom: 23px;
`;
