import { transparentize } from "polished";
import React from "react";
import styled from "styled-components";
import { TopContentProps } from "../types";

const TopContent = ({ children, rightContent }: TopContentProps) => {
  return (
    <Wrap>
      <LeftContent>NEXT</LeftContent>
      {children}
      <RightContent>{rightContent}</RightContent>
    </Wrap>
  );
};

export default TopContent;

const Wrap = styled.div`
  width: 100%; 
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: ${({ theme }) => transparentize(0.75, theme.colors.invertedContrast)};
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  font-weight: 500;
  font-size: 9px;
  color: ${({ theme }) => theme.colors.text};
`;

const RightContent = styled(LeftContent)`
  font-size: 11px;
`;
