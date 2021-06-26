import React from "react";
import styled from "styled-components";
import { Button } from "../../Button";
import { BetPosition } from "../../Card/types";
import { CompleteIcon } from "../../Svg";
import { ButtonsBlockRops } from "../../Cards/types";
import BTC from "../components/btc.png";
import ETH from "../components/eth.png";

const ButtonsBlock = ({
  ethButton,
  btcButton,
  pool,
  hasEnteredUp,
  hasEnteredDown,
  handleSetPosition,
  disabledButton,
}: ButtonsBlockRops) => {
  return (
    <ButtonsBlockWrap>
      <PrizeBlock>
        <p>PRIZE POOL</p>
        <p>{pool}</p>
      </PrizeBlock>
      <Buttons>
        <ButtonWrap style={{ marginBottom: 14 }} className={hasEnteredDown ? "unCoise" : ""}>
          <ButtonItem
            width="100%"
            variant="yellow"
            onClick={() => handleSetPosition(BetPosition.BULL)}
            disabled={disabledButton}
          >
            <>
              <Currency>
                <img src={BTC} alt="btc" />
                BTC
              </Currency>
              <ButtonRightBlock>
                {btcButton}
                <IconComplete className="completeIcon" hasEntered={hasEnteredUp}>
                  <CompleteIcon fill="#FFB72C" />
                </IconComplete>
              </ButtonRightBlock>
            </>
          </ButtonItem>
        </ButtonWrap>
        <ButtonWrap className={hasEnteredUp ? "unCoise" : ""}>
          <ButtonItem
            width="100%"
            variant="gray"
            onClick={() => handleSetPosition(BetPosition.BEAR)}
            disabled={disabledButton}
            display="flex"
          >
            <>
              <Currency>
                <img src={ETH} alt="btc" />
                ETH
              </Currency>
              <ButtonRightBlock>
                {ethButton}
                <IconComplete className="completeIcon" hasEntered={hasEnteredDown}>
                  <CompleteIcon fill="#FFB72C" />
                </IconComplete>
              </ButtonRightBlock>
            </>
          </ButtonItem>
        </ButtonWrap>
      </Buttons>
    </ButtonsBlockWrap>
  );
};

export default ButtonsBlock;

const Currency = styled.div`
  display: flex;
  align-items: center;
  & img {
    margin-right: 7px;
  }
`;
const ButtonItem = styled(Button)`
  padding: 0 18px;
  justify-content: space-between;
`;
const ButtonsBlockWrap = styled.div`
  height: 193px;
  width: 335px;
  padding-bottom: 17px;
  background: ${({ theme }) => theme.colors.bgGray};
  position: relative;
  left: -10%;
  z-index: 2;
  padding: 0 13px;
  top: 0px;
  box-sizing: border-box;
  box-shadow: ${({ theme }) => theme.colors.cardShadow};
  border-radius: 15px;
  @media (max-width: 767px) {
    width: 303px;
  }
`;
const Buttons = styled.div`
  position: relative;
  &.unChoiced {
    opacity: 0.25;
  }
`;
const PrizeBlock = styled.div`
  padding: 23px 18px 18px;
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.text};
`;
const ButtonWrap = styled.div`
  position: relative;
  &.unCoise {
    opacity: 0.25;
  }
`;
const ButtonRightBlock = styled.div`
  display: flex;
  align-items: center;
`;
const IconComplete = styled.div<{ hasEntered?: boolean }>`
  display: ${({ hasEntered }) => (hasEntered ? "flex" : "none")};
  margin-left: 7px;
  margin-right: -5px;
`;
