import React from "react";
import styled from "styled-components";
import { Text } from "../../../components/Text";
import { IGOHistoryCardProps, StatusHistory, TypeHistory } from "../types";

const IGOHistoryCard: React.FC<IGOHistoryCardProps> = ({ texts, data }) => {
  const getColorStatus = () => {
    switch (data.status) {
      case StatusHistory.ERROR:
        return "darkPink";
      case StatusHistory.SUCCESS:
        return "green";
      default:
        return "text";
    }
  };

  const getColorType = () => {
    switch (data.type) {
      case TypeHistory.UNSTACKING:
        return "darkPink";
      case TypeHistory.BUY:
        return "green";
      default:
        return "text";
    }
  };

  const cellList = [
    {
      text: texts.date,
      value: data.date,
    },
    {
      text: texts.allocations,
      value: data.allocations,
    },
    {
      text: texts.amount,
      value: data.amount,
    },
    {
      text: texts.tx,
      value: data.tx,
    },
    {
      text: texts.status,
      value: data.status,
      color: getColorStatus(),
    },
    {
      text: texts.type,
      value: data.type,
      color: getColorType(),
    },
  ];

  return (
    <Card>
      {cellList.map((el, i) => (
        <Block>
          <Text key={i} fontSize="13px" letterSpacing="0.05em" color="textGray">
            {el.text}
          </Text>
          <Text key={i} letterSpacing="0.05em" textTransform="capitalize" color={el.color || "text"}>
            {el.value}
          </Text>
        </Block>
      ))}
    </Card>
  );
};

export default IGOHistoryCard;

const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 7px 20px;
  width: 100%;
  padding: 8px 34px;
  background: ${({ theme }) => theme.colors.bgGray};
  border-radius: 15px;
  ${({ theme }) => theme.mediaQueries.xmd} {
    grid-template-columns: repeat(3, 1fr);
    padding: 0 34px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    grid-template-columns: repeat(6, 1fr);
  }
`;

const Block = styled.div`
  padding: 4px 0;
  ${({ theme }) => theme.mediaQueries.lg} {
    padding: 16px 0;
  }
`;
