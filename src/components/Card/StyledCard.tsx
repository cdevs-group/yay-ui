import React from "react";
import styled from "styled-components";
import Timer from "../Timer/Timer";
import { StyledCardProps } from "./types";
import { transparentize } from "polished";

const Wrap = styled.div`
  width: 308px;
  opacity: 0.5;
  &:hover {
    opacity: 1;
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
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text};
`;

const RightContent = styled(LeftContent)``;

const Content = styled.div`
  margin-top: 28px;
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: 15px;
`;

const Up = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 18px 20px 13px;
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.text};
`;

const RightText = styled.div`
  display: flex;
  & div.payout {
    margin-right: 9px;
    font-weight: normal;
    color: ${({ theme }) => theme.colors.textGray};
  }
`;

const MainBlock = styled.div`
  position: relative;
  left: -5%;
  z-index: 2;
  padding: 23px 35px 25px 32px;
  width: 335px;
  height: 193px;
  background: #26262d;
  border: 2px solid #ff6161;
  box-sizing: border-box;
  box-shadow: 0px 4px 22px rgba(0, 0, 0, 0.31);
  border-radius: 15px;
`;

const Down = styled(Up)``;

const StyledCard: React.FC<StyledCardProps> = ({ children, leftContent, rightContent }) => {
  return (
    <Wrap>
      <TopContent>
        <LeftContent>{leftContent}</LeftContent>
        <Timer time={2000} color="#fff" />
        <RightContent>{rightContent}</RightContent>
      </TopContent>
      <Content>
        <Up>
          UP
          <RightText>
            <div className="payout">Payout</div>
            <div>1,03x</div>
          </RightText>
        </Up>
        <MainBlock>{children}</MainBlock>
        <Down>
          DOWN
          <RightText>
            <div className="payout">Payout</div>
            <div>1,03x</div>
          </RightText>
        </Down>
      </Content>
    </Wrap>
  );
};

export default StyledCard;
