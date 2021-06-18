import React from "react";
import styled from "styled-components";
import { Flipper, Flipped } from "react-flip-toolkit";
import { ICardAccordeon } from "../types";
import { Text } from "../../../components/Text";
import { Flex } from "../../../components/Box";
import useAccordeon from "../../../hooks/useAccordeon/useAccordeon";

interface IAccordeon {
  value?: string | null;
  setValue?: (value: any) => void;
  cards: Array<ICardAccordeon>;
  children?: React.ReactNode;
}

const Accordeon = ({ value, setValue, cards, children }: IAccordeon) => {
  const { valueAccordeon, heightActiveBlock, handleToggle, newCards, active, refHidden } = useAccordeon(cards);

  return (
    <Wrap>
      <Flipper flipKey={newCards[0]}>
        {newCards.map((item: any) => (
          <Flipped key={item.id} flipId={item.id} spring="stiff">
            <div key={item.id}>
              <Card
                onClick={() => handleToggle(item)}
                className={active && active.id === item.id && valueAccordeon ? "active" : ""}
              >
                <Text>{item.number}</Text>
                {item.collect && <Collect>Collect</Collect>}
                <Flex alignItems="center">
                  <Text mr={15} color={item.color}>
                    {item.text}
                  </Text>
                  {item.icon}
                </Flex>
              </Card>
              <HiddenBlockWrap
                style={{
                  height: valueAccordeon && valueAccordeon === item.id ? heightActiveBlock : 0,
                }}
              >
                <HiddenBlock ref={active && active.id === item.id ? refHidden : null}>
                  {item.content.map((el: any, i: number) => (
                    <HiddenItem key={i}>{el}</HiddenItem>
                  ))}
                </HiddenBlock>
              </HiddenBlockWrap>
            </div>
          </Flipped>
        ))}
      </Flipper>
    </Wrap>
  );
};

export default Accordeon;

const Wrap = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.panel};
`;

const Collect = styled.div`
  padding: 7px 21px;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.5px;
  border-radius: 7px;
  border: 1px solid ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.text};
`;

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const HiddenItem = styled.div`
  padding: 30px 20px;
  background: ${({ theme }) => theme.colors.dark};
`;
