import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Flipper, Flipped } from 'react-flip-toolkit';
import { ICardAccordeon } from '../types';

interface IAccordeon {
  value?: number | null | undefined;
  setValue?: (value: any) => void;
  cards: Array<ICardAccordeon>;
}

const Accordeon = ({ value, setValue, cards }: IAccordeon) => {
  const [active, setActive] = useState<ICardAccordeon>(cards[0]);
  const [heightActiveBlock, setHeightActiveBlock] = useState<number>(0);
  const refHidden = useRef<HTMLDivElement | null>(null);
  const refCardActive = useRef<HTMLDivElement | null>(null);
  const [newCards, setNewCards] = useState(cards);

  const handleToggle = (item: ICardAccordeon) => {
    if (active && active.id !== item.id) {
      setActive(item);
    }
    if (value && value === item.id) {
      setValue && setValue(undefined);
    } else {
      setValue && setValue(item.id);
    }
  };

  useEffect(() => {
    if (refHidden?.current) {
      setHeightActiveBlock(refHidden?.current?.clientHeight);
    }
  }, [value]);

  useEffect(() => {
    const filterCards = cards
      .filter((el) => el.id !== active.id)
      .map((el, i) => ({ ...el, newId: i + 1 }));
    const filterActiveCard = cards
      .filter((el) => el.id === active.id)
      .map((el) => ({ ...el, newId: 0 }));
    setNewCards([...filterActiveCard, ...filterCards]);
  }, [active]);

  return (
    <Wrap>
      <Flipper flipKey={newCards[0]}>
        {newCards.map((item) => (
          <Flipped key={item.id} flipId={item.id} spring="gentle">
            <CardWrap key={item.id}>
              <Card
                onClick={() => handleToggle(item)}
                ref={refCardActive}
                className={
                  active && active.id === item.id && value ? 'active' : ''
                }
              >
                {item.value}
              </Card>
              <HiddenBlockWrap
                style={{
                  height: value && value === item.id ? heightActiveBlock : 0,
                }}
              >
                <HiddenBlock
                  ref={active && active.id === item.id ? refHidden : null}
                >
                  {item.content}
                </HiddenBlock>
              </HiddenBlockWrap>
            </CardWrap>
          </Flipped>
        ))}
      </Flipper>
    </Wrap>
  );
};

export default Accordeon;

const Wrap = styled.div`
  position: relative;
`;
const CardWrap = styled.div``;
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
  background: ${({ theme }) => theme.colors.dark};
`;
const HiddenBlock = styled.div`
  padding: 30px 20px;
`;
