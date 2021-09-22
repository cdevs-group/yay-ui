import React from "react";
import styled from "styled-components";
import { Flex } from "../../../components/Box";
import { Text } from "../../../components/Text";
import { LiveTabProps } from "./types";

const Live: React.FC<LiveTabProps> = ({ dataLive, prizePoolText, prizePool }) => {
  return (
    <>
      {dataLive.map((el: any, i: number) => (
        <Row key={i}>
          <Cell> {el.icon} </Cell>
          <Cell>
            <Text>{el.value1}</Text>
          </Cell>
          <Cell>
            <Arrow>f</Arrow>
          </Cell>
          <Cell>
            <Text color="textGray">{el.value2}</Text>
          </Cell>
          <Cell>
            <Block>{el.value3}</Block>
          </Cell>
        </Row>
      ))}

      <Flex>
        <Text ml="auto" color="green" bold fontSize="14px" mr="16px">
          {prizePoolText}
        </Text>
        <Text color="green" bold fontSize="14px">
          {prizePool}
        </Text>
      </Flex>
    </>
  );
};

export default Live;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Arrow = styled.div`
  padding-bottom: 17px;
  border-bottom: 2px solid #1c1c1c;
`;
const Block = styled.div`
  font-weight: 600;
  font-size: 9px;
  line-height: 11px;
`;
const Cell = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
`;
