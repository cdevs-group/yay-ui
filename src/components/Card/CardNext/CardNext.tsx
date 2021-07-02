import React from "react";
import styled from "styled-components";
import { Timer } from "../../Timer";
import { IPropsCardNext } from "../types";
import ButtonsBlock from "./ButtonsBlock";
import TopContent from "./TopContent";
import ValueRow from "./ValueRow";

const CardNext: React.FC<IPropsCardNext> = ({
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
  texts,
}) => {
  return (
    <>
      <TopContent rightContent={roundEpoch}>
        <Timer color="white" time={time} disabled={disabledTimer} />
      </TopContent>
      <WrapContent>
        <ValueRow texts={texts?.payout} vector={texts?.up || "UP"} value={payoutWin} />
        <ButtonsBlockWrap>
          <ButtonsBlock
            pool={pool}
            hasEnteredUp={hasEnteredUp}
            hasEnteredDown={hasEnteredDown}
            handleSetPosition={handleSetPosition}
            disabledButton={disabledButton}
            texts={texts}
          />
        </ButtonsBlockWrap>
        <ValueRow texts={texts?.payout} vector={texts?.down || "DOWN"} value={payoutLose} />
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
