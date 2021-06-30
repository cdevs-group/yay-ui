import { transparentize } from "polished";
import React from "react";
import styled from "styled-components";
import { IPropsTopAndGhost } from "../types";

const TopContent = ({ children, rightContent, texts }: IPropsTopAndGhost) => {
  return (
    <Wrap>
      <LeftContent>{texts || "NEXT"}</LeftContent>
      {children}
      <RightContent>{rightContent}</RightContent>
    </Wrap>
  );
};

export default TopContent;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: -12px;
  margin-right: -12px;
  ${({ theme }) => theme.mediaQueries.sm} {
    margin-left: 0;
    margin-right: 0;
  }
`;

const LeftContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
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
