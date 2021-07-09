import React from "react";
import styled from "styled-components";
import Timer from "../../Timer/Timer";
import { StyledCardProps } from "../../Card/types";
import { transparentize } from "polished";
import { Winner } from "../../../constants/images";
import { CompleteIcon } from "../../Svg";
import BTC from "./btc.png";
import ETH from "./eth.png";
import WIN from "./win.png";

const WrapOpacity = styled.div<{ live?: boolean }>`
  width: 308px;
  opacity: ${({ live }) => (live ? "1" : "0.5")};
  transition: 0.3s;
  &:hover {
    opacity: 1;
    transition: 0.3s;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 335px;
  }
`;

const Wrap = styled.div`
  width: 278px;
  margin: 0 auto;
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
    negative ? theme.colors.bgCard : colorNone ? "none" : theme.colors.bgCardBtc2};
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

const MainBlock = styled.div<{ negative?: boolean; colorNone?: boolean; loader?: boolean }>`
  position: relative;
  z-index: 2;
  padding: ${({ loader }) => (loader ? "23px 12px 25px" : "23px 35px 25px 32px")};
  width: 308px;
  height: 193px;
  background: #26262d;
  border: 2px solid
    ${({ theme, negative, colorNone }) =>
      negative ? theme.colors.colorCardBtc : colorNone ? "none" : theme.colors.bgCardBtc2};
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
  background: ${({ theme, negative }) => (negative ? theme.colors.bgCardBtc : theme.colors.bgCard)};
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.text};
`;

const Currency = styled.div<{ loader?: boolean }>`
  display: flex;
  align-items: center;
  color: ${({ theme, loader }) => (loader ? theme.colors.greyText2 : theme.colors.text)};
  & img {
    display: none;
    margin-right: 10px;
    ${({ theme }) => theme.mediaQueries.sm} {
      display: ${({ loader }) => (loader ? "none" : "block")};
    }
  }
`;

const WonBlcok = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
  & img {
    position: absolute;
    top: -95px;
    right: -70px;
    z-index: 10;
  }
`;

const StyledCardBTC: React.FC<StyledCardProps> = ({
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
  disabledTimer,
  btnWinnings,
  btcWon,
  ethWon,
  loader,
  texts,
}) => {
  return (
    <WrapOpacity live={live}>
      <Wrap>
        <TopContent>
          <LeftContent>{leftContent}</LeftContent>
          <Timer time={time} color="#fff" disabled={disabledTimer} />
          <RightContent>{rightContent}</RightContent>
        </TopContent>
        <Content>
          <UpContent negative={negative} showUp={showBtnWinnings} colorNone={colorNone} displayNone={displayNone}>
            {btcWon ? (
              <WonBlcok>
                {texts?.collection || "Collect Winnings"}
                <img src={WIN} alt="win" />
              </WonBlcok>
            ) : (
              <>
                <Currency loader={loader}>
                  <img src={BTC} alt="btc" />
                  BTC
                </Currency>
                <RightText displayNone={displayNone}>
                  <div className="payout">{texts?.payout || "Payout"}</div>
                  <div>{payoutUp}</div>
                  <IconComplete className="completeIcon" showIcon={hasEnteredUp}>
                    <CompleteIcon fill="#FFB72C" />
                  </IconComplete>
                </RightText>
              </>
            )}
          </UpContent>
          <UpContentWin show={showBtnWinnings}>
            <ButtonBnb>{btnWinnings}</ButtonBnb>
            <WinnerImg>
              <img src={Winner} />
            </WinnerImg>
          </UpContentWin>
          <MainBlock loader={loader} negative={negative} colorNone={colorNone}>
            {children}
          </MainBlock>
          <DownContent negative={negative} displayNone={displayNone}>
            {ethWon ? (
              <WonBlcok>
                {texts?.collection || "Collect Winnings"}
                <img src={WIN} alt="win" />
              </WonBlcok>
            ) : (
              <>
                <Currency loader={loader}>
                  <img src={ETH} alt="eth" />
                  ETH
                </Currency>
                <RightText displayNone={displayNone}>
                  <div className="payout">{texts?.payout || "Payout"}</div>
                  <div>{payoutDown}</div>
                  <IconCompleteDown className="completeIcon" showIcon={hasEnteredDown}>
                    <CompleteIcon fill="#FFB72C" />
                  </IconCompleteDown>
                </RightText>
              </>
            )}
          </DownContent>
        </Content>
      </Wrap>
    </WrapOpacity>
  );
};

export default StyledCardBTC;
