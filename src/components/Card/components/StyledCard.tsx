import React from "react";
import styled from "styled-components";
import Timer from "../../Timer/Timer";
import { StyledCardProps } from "../../Card/types";
import { transparentize } from "polished";
import { Winner } from "../../../constants/images";
import { CompleteIcon } from "../../Svg";

const Wrap = styled.div<{ live?: boolean }>`
  width: 278px;
  opacity: ${({ live }) => (live ? "1" : "0.5")};
  &:hover {
    opacity: 1;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 308px;
  }
`;

const TopContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: -11px;
  margin-right: -11px;
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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 28px;
  background: ${({ theme }) => theme.colors.bgCard};
  border-radius: 15px;
`;

const UpContent = styled.div<{ negative?: boolean; showUp?: boolean; colorNone?: boolean; displayNone?: boolean }>`
  display: ${({ showUp }) => (showUp ? "none" : "flex")};
  justify-content: ${({ displayNone }) => (displayNone ? "center" : "space-between")};
  text-align: center;
  align-items: center;
  max-height: 50px;
  height: 100%;
  width: 100%;
  padding: 18px 20px 13px;
  background: ${({ theme, negative, colorNone }) =>
    negative ? theme.colors.cardBg : colorNone ? "none" : theme.colors.greenText};
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
  position: relative;
  display: ${({ show }) => (show ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
  width: 100%;
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
  top: -64px;
  right: -37px;
  pointer-events: none;
  z-index: 3;
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

const IconCompleteDown = styled.div<{ showIcon?: boolean }>`
  display: ${({ showIcon }) => (showIcon ? "flex" : "none")};
  margin-left: 7px;
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

const DownContent = styled.div<{ negative?: boolean; displayNone?: boolean }>`
  display: flex;
  justify-content: ${({ displayNone }) => (displayNone ? "center" : "space-between")};
  max-height: 50px;
  height: 100%;
  width: 100%;
  padding: 13px 20px 18px;
  background: ${({ theme, negative }) => (negative ? theme.colors.redBg : theme.colors.bgCard)};
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.text};
`;
const Vector = styled.p<{ loader?: boolean; hide?: boolean }>`
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.05em;
  color: ${({ theme, loader }) => (loader ? theme.colors.greyText2 : theme.colors.text)};
  opacity: ${({ hide }) => (hide ? "0" : "1")};
`;

const StyledCard: React.FC<StyledCardProps> = ({
  children,
  leftContent,
  rightContent,
  payoutUp,
  payoutDown,
  negative,
  showBtnWinnings,
  hasEnteredUp,
  hasEnteredDown,
  live,
  displayNone,
  colorNone,
  time,
  btnWinnings,
  hide,
  disabledTimer,
  texts,
  loader,
}) => {
  return (
    <Wrap live={live}>
      <TopContent>
        <LeftContent>{leftContent}</LeftContent>
        <Timer time={time} color="#fff" disabled={disabledTimer} />
        <RightContent>{rightContent}</RightContent>
      </TopContent>
      <Content>
        <UpContent negative={negative} showUp={showBtnWinnings} colorNone={colorNone} displayNone={displayNone}>
          <Vector hide={hide} loader={loader}>
            {texts?.up || "UP"}
          </Vector>
          <RightText displayNone={displayNone}>
            <div className="payout">{texts?.payout || "Payout"}</div>
            <div>{payoutUp}</div>
            <IconComplete className="completeIcon" showIcon={hasEnteredUp}>
              <CompleteIcon fill="#FFB72C" />
            </IconComplete>
          </RightText>
        </UpContent>
        <UpContentWin show={showBtnWinnings}>
          <ButtonBnb>{btnWinnings}</ButtonBnb>
          <WinnerImg>
            <img src={Winner} />
          </WinnerImg>
        </UpContentWin>
        <MainBlock negative={negative} colorNone={colorNone}>
          {children}
        </MainBlock>
        <DownContent negative={negative} displayNone={displayNone}>
          <Vector hide={hide} loader={loader} style={{ opacity: hide ? "0" : "1" }}>
            {texts?.down || "DOWN"}
          </Vector>
          <RightText displayNone={displayNone}>
            <div className="payout">{texts?.payout || "Payout"}</div>
            <div>{payoutDown}</div>
            <IconCompleteDown className="completeIcon" showIcon={hasEnteredDown}>
              <CompleteIcon fill="#FFB72C" />
            </IconCompleteDown>
          </RightText>
        </DownContent>
      </Content>
    </Wrap>
  );
};

export default StyledCard;
