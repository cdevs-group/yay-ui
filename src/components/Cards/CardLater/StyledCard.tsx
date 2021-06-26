import React, { useState } from "react";
import styled from "styled-components";
import Timer from "../../Timer/Timer";
import { StyledCardProps } from "../../Card/types";
import { transparentize } from "polished";

const Wrap = styled.div<{ live?: boolean }>`
  width: 278px;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 308px;
  }
`;

const TopContent = styled.div`
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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 28px;
  background: ${({ theme }) => theme.colors.bgCard};
  border-radius: 15px;
`;

const MainBlock = styled.div<{ negative?: boolean; colorNone?: boolean }>`
  position: relative;
  z-index: 2;
  padding: 23px 35px 25px 32px;
  width: 308px;
  height: 193px;
  background: #26262d;
  border: 2px solid
    ${({ theme, negative, colorNone }) => (negative ? theme.colors.redBg : colorNone ? "none" : theme.colors.greenText)};
  box-sizing: border-box;
  box-shadow: 0px 4px 22px rgba(0, 0, 0, 0.31);
  border-radius: 15px;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 335px;
  }
`;

const StyledCardForlater: React.FC<StyledCardProps> = ({ children, rightContent, color, time }) => {
  return (
    <Wrap>
      <TopContent>
        <LeftContent>LATER</LeftContent>
        <Timer time={time} color={color} />
        <RightContent>{rightContent}</RightContent>
      </TopContent>
      <Content>
        <MainBlock>{children}</MainBlock>
      </Content>
    </Wrap>
  );
};

export default StyledCardForlater;
