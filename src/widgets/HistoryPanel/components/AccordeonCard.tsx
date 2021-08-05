import React, { RefObject } from "react";
import { Flipped } from "react-flip-toolkit";
import styled from "styled-components";
import { Bet } from "../types";
import { Text } from "../../../components/Text";
import { Flex } from "../../../components/Box";
import { ArrowDownIcon } from "../../../components/Svg";

export interface IAccordeonCard {
  item: Bet;
  collectOrReclaim?: React.ReactNode;
  round?: string;
  icon?: React.ReactNode;
  betLabel?: React.ReactNode;
  detail?: React.ReactNode;
  valueAccordeon: string | null | undefined;
  heightActiveBlock: number;
  handleToggle: (item: Bet) => void;
  active: Bet | undefined;
  refHidden: RefObject<HTMLDivElement> | null | undefined;
}

const AccordeonCard = ({
  item,
  collectOrReclaim,
  round,
  icon,
  betLabel,
  detail,
  valueAccordeon,
  heightActiveBlock,
  handleToggle,
  active,
  refHidden,
}: IAccordeonCard) => {
  return (
    <Flipped key={item.id} flipId={item.id} spring="stiff">
      <div key={item.id}>
        <Card
          onClick={() => handleToggle(item)}
          className={active && active.id === item.id && valueAccordeon ? "active" : ""}
        >
          <Flex alignItems="center">
            <Text>{round}</Text>
          </Flex>
          <Flex alignItems="center">{collectOrReclaim && collectOrReclaim}</Flex>
          <Flex alignItems="center" justifyContent="flex-end">
            {betLabel}
            {icon || <ArrowDownIcon />}
          </Flex>
        </Card>
        <HiddenBlockWrap
          style={{
            height: valueAccordeon && valueAccordeon === item.id ? heightActiveBlock : 0,
          }}
        >
          <HiddenBlock ref={active && active.id === item.id ? refHidden : null}>{detail}</HiddenBlock>
        </HiddenBlockWrap>
      </div>
    </Flipped>
  );
};

export default AccordeonCard;

const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0 10px;
  padding: 23px 20px;
  cursor: pointer;
  &.active {
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  }
`;

const HiddenBlockWrap = styled.div`
  height: 0;
  transition: 0.5s;
  overflow: hidden;
`;

const HiddenBlock = styled.div`
  background: ${({ theme }) => theme.colors.panel};
`;
