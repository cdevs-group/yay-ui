import React from "react";
import styled from "styled-components";
import { Timer } from "../../Timer";
import ButtonsBlock from "./ButtonsBlockBTC";
import TopContent from "../../Card/CardNext/TopContent";
import ValueRow from "../../Card/CardNext/ValueRow";
import { IProps } from "../types";

const CardNext: React.FC<IProps> = ({
  roundEpoch,
  time,
  payoutWin,
  payoutLose,
  pool,
  hasEnteredUp,
  hasEnteredDown,
  handleSetPosition,
  disabledButton,
  disabledTimer,
  textRow,
  textsButtons,
  ethButton,
  btcButton,
}) => {
  return (
    <>
      <TopContent rightContent={roundEpoch}>
        <Timer color="white" time={time} disabled={disabledTimer} />
      </TopContent>
      <WrapContent>
        <ValueRow texts={textRow} vector="BTC" value={payoutWin} />
        <ButtonsBlockWrap>
          <ButtonsBlock
            ethButton={ethButton}
            btcButton={btcButton}
            texts={textsButtons}
            pool={pool}
            hasEnteredUp={hasEnteredUp}
            hasEnteredDown={hasEnteredDown}
            handleSetPosition={handleSetPosition}
            disabledButton={disabledButton}
          />
        </ButtonsBlockWrap>
        <ValueRow texts={textRow} vector="ETH" value={payoutLose} />
      </WrapContent>
    </>
  );
};

export default CardNext;

const WrapContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.bgCard};
  margin-top: 28px;
`;

const ButtonsBlockWrap = styled.div`
  height: 193px;
  width: 308px;
  padding-bottom: 17px;
  background: ${({ theme }) => theme.colors.bgGray};
  position: relative;
  z-index: 2;
  padding: 0 13px;
  box-sizing: border-box;
  box-shadow: ${({ theme }) => theme.colors.cardShadow};
  border-radius: 15px;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 335px;
  }
`;
