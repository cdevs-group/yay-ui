import React from "react";
import styled from "styled-components";
import { Text } from "../../../components/Text";
import { TodayTabProps } from "./types";

const Today: React.FC<TodayTabProps> = ({ dataToday }) => {
  return (
    <DataContent>
      <Block />
      {dataToday.map((el: any, i: number) => (
        <Row key={i}>
          <Cell>
            <Text fontSize="14px" color="textGray">
              {i + 1}
            </Text>
          </Cell>
          <Cell>{el.icon}</Cell>
          <Cell>
            <TextStyled fontSize="14px">{el.address}</TextStyled>
          </Cell>
          <Cell>
            <Text fontSize="14px">{el.value1}</Text>
          </Cell>
          <Cell>
            <Text fontSize="14px">{el.value2}</Text>
          </Cell>
        </Row>
      ))}
    </DataContent>
  );
};

export default Today;

const DataContent = styled.div`
  padding: 24px 0 16px;
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Block = styled.div`
  padding: 20px;
  margin-bottom: 19px;
  background: ${({ theme }) => theme.colors.bgCard4};
  border-radius: 10px;
`;

const Cell = styled.div`
  display: flex;
  align-items: center;
  padding: 7px;
  &:first-child {
    padding-left: 0;
  }
  &:last-child {
    padding-right: 0;
  }
`;

const TextStyled = styled(Text)`
  max-width: 79px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
