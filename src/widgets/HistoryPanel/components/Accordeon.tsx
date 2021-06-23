import React from "react";
import styled from "styled-components";
import { Flipper } from "react-flip-toolkit";
import { Bet } from "../types";

interface IAccordeon {
  cards: Array<Bet>;
  children?: React.ReactNode;
}

const Accordeon = ({ cards, children }: IAccordeon) => {
  return (
    <Wrap>
      <Flipper flipKey={cards[0]}>{children}</Flipper>
    </Wrap>
  );
};

export default Accordeon;

const Wrap = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.panel};
`;
