import React from "react";
import styled from "styled-components";
import { ClosedPrice } from "../../../components/ClosedPrice";
import { Text } from "../../../components/Text";
import { ITextsRound } from "../types";

interface IRoundHistory {
  price: string;
  priceRightText: string;
  result?: string;
  up: React.ReactNode;
  down: React.ReactNode;
  prizePool: string;
  openingBlock?: string | React.ReactNode;
  closingBlock?: string | React.ReactNode;
  negative?: boolean;
  lockPrice?: string;
  roundFailed?: boolean;
  texts?: ITextsRound;
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
    lockPrice,
    roundFailed,
    texts,
  } = props;

  return (
    <>
      <Text mb={17}>{texts?.rounds || "Round History"} </Text>
      <ClosedPrice
        price={price}
        rightText={priceRightText}
        result={result}
        negative={negative}
        roundFailed={roundFailed}
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
        {lockPrice && (
          <Line>
            <Text size="sm" fontWeight={400}>
              {texts?.locked || "Locked Price"}:
            </Text>
            <Text size="sm">{lockPrice}</Text>
          </Line>
        )}
        <LineMargin>
          <Text size="sm">{texts?.prize || "Prize Pool"}:</Text>
          <Text>{prizePool}</Text>
        </LineMargin>
        <Line>
          <Text size="sm" fontWeight={400}>
            {texts?.open || "Opening Block"}
          </Text>
          <Text size="sm" color={negative ? "redBg" : "green"}>
            {openingBlock}
          </Text>
        </Line>
        <Line>
          <Text size="sm" fontWeight={400}>
            {texts?.closing || "Closing Block"}
          </Text>
          <Text size="sm" color={negative ? "redBg" : "green"}>
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
