import React from "react";
import styled from "styled-components";

export interface Props {
  children: React.ReactNode;
}

const HiddenItemAccordeonCard = ({ children }: Props) => {
  return <HiddenItem>{children}</HiddenItem>;
};

export default HiddenItemAccordeonCard;

const HiddenItem = styled.div`
  padding: 30px 20px;
  background: ${({ theme }) => theme.colors.dark};
`;
