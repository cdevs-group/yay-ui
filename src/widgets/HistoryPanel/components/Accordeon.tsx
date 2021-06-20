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
