import React from "react";
import { IGOSubscriptionCardProps } from "../types";
import { Card, Row, RowType, TitleBlock, TitleStyle, ValueBlock } from "./style";
import styled from "styled-components";
import { Flex } from "../../../components/Box";

const IGOSubscriptionCard = ({
  totalSale,
  rate,
  privateDate,
  publicDate,
  endDate,
  softCap,
  hardCap,
  minPurchased,
  maxPurchased,
  vestingStatus,
  texts,
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
        </Block>
        <Block>
          <TitleBlock>{texts.public}</TitleBlock>
          <ValueBlock>{publicDate}</ValueBlock>
        </Block>
        <Block>
          <TitleBlock>{texts.end}</TitleBlock>
          <ValueBlock>{endDate}</ValueBlock>
        </Block>
      </RowType>
      <RowType>
        <Block>
          <TitleBlock>{texts.soft}</TitleBlock>
          <ValueBlock>{softCap}</ValueBlock>
        </Block>
        <Block>
          <TitleBlock>{texts.hard}</TitleBlock>
          <ValueBlock>{hardCap}</ValueBlock>
        </Block>
      </RowType>
      <RowType>
        <Block>
          <TitleBlock>{texts.minPurchased}</TitleBlock>
          <ValueBlock>{minPurchased}</ValueBlock>
        </Block>
        <Block>
          <TitleBlock>{texts.maxPurchased}</TitleBlock>
          <ValueBlock>{maxPurchased}</ValueBlock>
        </Block>
      </RowType>
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

const Block = styled(Flex)`
  justify-content: space-between;
  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: column;
  }
`;
