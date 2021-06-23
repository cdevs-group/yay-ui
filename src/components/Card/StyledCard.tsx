import React, { useState } from "react";
import styled from "styled-components";
import Timer from "../Timer/Timer";
import { StyledCardProps } from "./types";
import { transparentize } from "polished";
import Button from "../Button/Button";
import { Winner } from "../../constants/images";
import { CompleteIcon } from "../Svg";

const Wrap = styled.div<{ live?: boolean }>`
  width: 308px;
  opacity: ${({ live }) => (live ? "1" : "0.5")};
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
  font-size: 9px;
  color: ${({ theme }) => theme.colors.text};
`;

const RightContent = styled(LeftContent)`
  font-size: 11px;
`;

const Content = styled.div`
  margin-top: 28px;
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: 15px;
`;

const UpContent = styled.div<{ negative?: boolean; showUp?: boolean }>`
  display: ${({ showUp }) => (showUp ? "none" : "flex")};
  justify-content: space-between;
  align-items: center;
  max-height: 50px;
  height: 100%;
  padding: 18px 20px 13px;
  background: ${({ theme, negative }) => (negative ? theme.colors.cardBg : theme.colors.greenText)};
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.text};
`;

const UpContentWin = styled.div<{ show?: boolean }>`
  display: ${({ show }) => (show ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
`;

const ButtonBnb = styled.div`
  position: relative;
  width: 100%;
  & button {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

const WinnerImg = styled.div`
  position: absolute;
  top: 55px;
  left: 20%;
  pointer-events: none;
`;

const RightText = styled.div<{ displayNone?: boolean }>`
  display: ${({ displayNone }) => (displayNone ? "none" : "flex")};
  align-items: center;
  & div.payout {
    margin-right: 9px;
    font-weight: normal;
    color: ${({ theme }) => transparentize(0.2, theme.colors.text)};
  }
`;

const IconComplete = styled.div<{ showIcon?: boolean }>`
  display: ${({ showIcon }) => (showIcon ? "flex" : "none")};
  margin-left: 7px;
`;

const MainBlock = styled.div<{ negative?: boolean }>`
  position: relative;
  left: -5%;
  z-index: 2;
  padding: 23px 35px 25px 32px;
  width: 335px;
  height: 193px;
  background: #26262d;
  border: 2px solid ${({ theme, negative }) => (negative ? theme.colors.redBg : theme.colors.greenText)};
  box-sizing: border-box;
  box-shadow: 0px 4px 22px rgba(0, 0, 0, 0.31);
  border-radius: 15px;
`;

const DownContent = styled.div<{ negative?: boolean }>`
  display: flex;
  justify-content: space-between;
  max-height: 50px;
  height: 100%;
  padding: 18px 20px 13px;
  background: ${({ theme, negative }) => (negative ? theme.colors.redBg : theme.colors.cardBg)};
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.text};
`;

const StyledCard: React.FC<StyledCardProps> = ({
  children,
  leftContent,
  rightContent,
  payoutUp,
  payoutDown,
  negative,
  show,
  showUp,
  showIcon,
  live,
  displayNone,
}) => {
  return (
    <Wrap live={live}>
      <TopContent>
        <LeftContent>{leftContent}</LeftContent>
        <Timer time={2000} color="#fff" />
        <RightContent>{rightContent}</RightContent>
      </TopContent>
      <Content>
        <UpContent negative={negative} showUp={showUp}>
          UP
          <RightText displayNone={displayNone}>
            <div className="payout">Payout</div>
            <div>{payoutUp}x</div>
            <IconComplete className="completeIcon" showIcon={showIcon}>
              <CompleteIcon fill="#FFB72C" />
            </IconComplete>
          </RightText>
        </UpContent>
        <UpContentWin show={show}>
          <ButtonBnb>
            <Button variant="green" width="100%">
              Collect Winnings
            </Button>
          </ButtonBnb>
          <WinnerImg>
            <img src={Winner} />
          </WinnerImg>
        </UpContentWin>
        <MainBlock negative={negative}>{children}</MainBlock>
        <DownContent negative={negative}>
          DOWN
          <RightText displayNone={displayNone}>
            <div className="payout">Payout</div>
            <div>{payoutDown}x</div>
          </RightText>
        </DownContent>
      </Content>
    </Wrap>
  );
};

export default StyledCard;
