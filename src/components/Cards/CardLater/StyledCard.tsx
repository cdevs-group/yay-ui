import React, { useState } from "react";
import styled from "styled-components";
import Timer from "../../Timer/Timer";
import { StyledCardProps } from "../../Card/types";
import { transparentize } from "polished";

const Wrap = styled.div<{ live?: boolean }>`
  width: 308px;
  @media (max-width: 400px) {
    width: 278px;
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
  margin-top: 28px;
  border-radius: 15px;
  height: 300px;
  background: ${({ theme }) => theme.colors.bgCard};
  position: relative;
`;

const MainBlock = styled.div<{ negative?: boolean; colorNone?: boolean }>`
  position: absolute;
  left: -5%;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;
  z-index: 2;
  width: 335px;
  height: 193px;
  background: #26262d;
  box-sizing: border-box;
  box-shadow: 0px 4px 22px rgba(0, 0, 0, 0.31);
  border-radius: 15px;
  @media (max-width: 400px) {
    width: 308px;
  }
`;

const StyledCardForlater: React.FC<StyledCardProps> = ({ children, rightContent }) => {
  return (
    <Wrap>
      <TopContent>
        <LeftContent>NEXT</LeftContent>
        <Timer time={2000} color="#fff" />
        <RightContent>{rightContent}</RightContent>
      </TopContent>
      <Content>
        <MainBlock>{children}</MainBlock>
      </Content>
    </Wrap>
  );
};

export default StyledCardForlater;
