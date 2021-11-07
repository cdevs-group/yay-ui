import React from "react";
import styled from "styled-components";
import { Text } from "../../../components/Text";
import { IGOHistoryCardProps, StatusHistory, TypeHistory } from "../types";

const IGOHistoryCard: React.FC<IGOHistoryCardProps> = ({ texts, data }) => {
  const cells = [data.date, data.allocations, data.amount, data.tx];

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

  const getColorType= () => {
    switch (data.status) {
      case TypeHistory.UNSTACKING:
        return "darkPink";
      case TypeHistory.UNSTACKING:
        return "green";
      default:
        return "text";
    }
  };

  return (
    <Card>
      {Object.values(texts).map((el, i) => (
        <Text key={i} fontSize="13px" letterSpacing="0.05em" color="textGray">
          {el}
        </Text>
      ))}
      {cells.map((el, i) => (
        <Text key={i} letterSpacing="0.05em">
          {el}
        </Text>
      ))}
      <Text color={getColorStatus()} textTransform="capitalize">{data.status}</Text>
      <Text color={getColorType()} textTransform="capitalize">{data.type}</Text>
    </Card>
  );
};

export default IGOHistoryCard;

const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 7px 20px;
  width: 100%;
  padding: 16px 34px;
  background: ${({ theme }) => theme.colors.bgGray};
  border-radius: 15px;
  ${({ theme }) => theme.mediaQueries.lg} {
    grid-template-columns: repeat(6, 1fr);
  }
`;

const Status = styled(Text)`
  padding: 20px 0 50px;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  & span {
    color: ${({ theme }) => theme.colors.green};
  }
`;
