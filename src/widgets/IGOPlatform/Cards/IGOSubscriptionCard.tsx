import React from "react";
import { IGOSubscriptionCardProps } from "../types";
import { Card, Row, RowType, TitleBlock, TitleStyle, ValueBlock } from "./style";
import styled from "styled-components";
import { Text } from "../../../components/Text";

const IGOSubscriptionCard = ({
  totalSale,
  rate,
  privateDate,
  publicDate,
  endDate,
  // softCap,
  hardCap,
  purchasedLimit,
  // maxPurchased,
  vestingStatus,
  texts,
  privateTime,
  publicTime,
  endTime,
}: IGOSubscriptionCardProps) => {
  return (
    <Card>
      <TitleStyle>{texts.title}</TitleStyle>
      <Row>
        <div>
          <TitleBlock>{texts.totalSale}</TitleBlock>
          <ValueBlock>{totalSale}</ValueBlock>
        </div>
      </Row>
      <Row>
        <div>
          <TitleBlock>{texts.rate}</TitleBlock>
          <ValueBlock>{rate}</ValueBlock>
        </div>
      </Row>
      <RowType>
        <Block>
          <TitleBlock>{texts.private}</TitleBlock>
          <ValueBlock>{privateDate}</ValueBlock>
          {privateTime && (
            <Text fontSize="13px" fontWeight={400} mt={10}>
              {privateTime}
            </Text>
          )}
        </Block>
        <Block>
          <TitleBlock>{texts.public}</TitleBlock>
          <ValueBlock>{publicDate}</ValueBlock>
          {publicTime && (
            <Text fontSize="13px" fontWeight={400} mt={10}>
              {publicTime}
            </Text>
          )}
        </Block>
        <Block>
          <TitleBlock>{texts.end}</TitleBlock>
          <ValueBlock>{endDate}</ValueBlock>
          {endTime && (
            <Text fontSize="13px" fontWeight={400} mt={10}>
              {endTime}
            </Text>
          )}
        </Block>
      </RowType>
      <Row>
        {/* <Block>
          <TitleBlock>{texts.soft}</TitleBlock>
          <ValueBlock>{softCap}</ValueBlock>
        </Block> */}
        <div>
          <TitleBlock>{texts.hard}</TitleBlock>
          <ValueBlock>{hardCap}</ValueBlock>
        </div>
      </Row>
      <Row>
        <div>
          <TitleBlock>{texts.purchasedLimit}</TitleBlock>
          <ValueBlock>{purchasedLimit}</ValueBlock>
        </div>
        {/* <Block>
          <TitleBlock>{texts.maxPurchased}</TitleBlock>
          <ValueBlock>{maxPurchased}</ValueBlock>
        </Block> */}
      </Row>
      <Row>
        <div>
          <TitleBlock>{texts.vesting}</TitleBlock>
          <ValueBlock>{vestingStatus}</ValueBlock>
        </div>
      </Row>
    </Card>
  );
};

export default IGOSubscriptionCard;

const Block = styled.div`
  margin-bottom: 25px;
  ${({ theme }) => theme.mediaQueries.sm} {
    margin-bottom: 0;
  }
`;
