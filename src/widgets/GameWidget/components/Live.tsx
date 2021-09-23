import React from "react";
import styled from "styled-components";
import { transparentize } from "polished";
import { ArrowTopRight } from "../../..";
import { Flex } from "../../../components/Box";
import { Text } from "../../../components/Text";
import { LiveTabProps } from "./types";

const Live: React.FC<LiveTabProps> = ({ dataLive, prizePoolText, prizePool }) => {
  return (
    <>
      <DataContent>
        {dataLive.map((el: any, i: number) => (
          <Row key={i}>
            <Cell>{el.icon}</Cell>
            <Cell>
              <Text fontSize="14px">{el.value1}</Text>
            </Cell>
            <Cell>
              <Arrow variant={el.variant}>
                <ArrowTopRight />
              </Arrow>
            </Cell>
            <Cell>
              <Text fontSize="14px" color="textGray">
                {el.value2}
              </Text>
            </Cell>
            <Cell>
              <Block variant={el.variant}>{el.value3}</Block>
            </Cell>
          </Row>
        ))}
      </DataContent>
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

const DataContent = styled.div`
  padding: 24px 0 16px;
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Arrow = styled.div<{ variant: string }>`
  & svg {
    width: 24px;
    height: 24px;
  }
  & rect {
    fill: ${({ theme, variant }) =>
      variant === "win" ? transparentize(0.85, theme.colors.green) : transparentize(0.85, theme.colors.redBg)};
  }
  & path {
    stroke: ${({ theme, variant }) => (variant === "win" ? theme.colors.green : theme.colors.redBg)};
  }
`;
const Block = styled.div<{ variant: string }>`
  padding: 4px;
  font-weight: 600;
  font-size: 9px;
  line-height: 11px;
  border-radius: 4px;
  background: ${({ theme, variant }) =>
    variant === "win" ? transparentize(0.85, theme.colors.green) : transparentize(0.85, theme.colors.text)};
  color: ${({ theme, variant }) => (variant === "win" ? theme.colors.green : theme.colors.text)};
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
