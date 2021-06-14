import React from 'react';
import styled from 'styled-components';
import { ClosedPrice } from '../../../components/ClosedPrice';
import { Text } from '../../../components/Text';

interface IRoundHistory {
  price: string;
  priceRightText: string;
  result?: string;
  up: string;
  down: string;
  prizePool: string;
  openingBlock?: string;
  closingBlock?: string;
  negative?: boolean;
}

const RoundHistory = (props: IRoundHistory) => {
  const {
    price,
    priceRightText,
    up,
    down,
    prizePool,
    openingBlock,
    closingBlock,
    negative,
    result,
  } = props;

  return (
    <>
      <Text mb={17}>Round History </Text>
      <ClosedPrice
        price={price}
        rightText={priceRightText}
        result={result}
        negative={negative}
      />
      <Block>
        <Line>
          <Text size="sm" fontWeight={400}>
            Up
          </Text>
          <Text size="sm">{up}</Text>
        </Line>
        <Line>
          <Text size="sm" fontWeight={400}>
            Down
          </Text>
          <Text size="sm">{down}</Text>
        </Line>
        <LineMargin>
          <Text size="sm">Prize Pool:</Text>
          <Text>{prizePool}</Text>
        </LineMargin>
        <Line>
          <Text size="sm" fontWeight={400}>
            Opening Block
          </Text>
          <Text size="sm" color={negative ? 'redBg' : 'green'}>
            {openingBlock}
          </Text>
        </Line>
        <Line>
          <Text size="sm" fontWeight={400}>
            Closing Block
          </Text>
          <Text size="sm" color={negative ? 'redBg' : 'green'}>
            {closingBlock}
          </Text>
        </Line>
      </Block>
    </>
  );
};

export default RoundHistory;

const Line = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;
const Block = styled.div`
  margin-top: 31px;
`;
const LineMargin = styled(Line)`
  margin-bottom: 17px;
`;
