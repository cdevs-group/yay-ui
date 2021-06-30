import React from "react";
import styled from "styled-components";
import { Timer } from "../../Timer";
import { IProps } from "../types";
import ButtonsBlock from "./ButtonsBlock";
import TopContent from "./TopContent";
import ValueRow from "./ValueRow";

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
  textsRow,
  textsButton,
}) => {
  return (
    <>
      <TopContent rightContent={roundEpoch}>
        <Timer color="white" time={time} disabled={disabledTimer} />
      </TopContent>
      <WrapContent>
        <ValueRow texts={textsRow} vector="UP" value={payoutWin} />
        <ButtonsBlockWrap>
          <ButtonsBlock
            pool={pool}
            hasEnteredUp={hasEnteredUp}
            hasEnteredDown={hasEnteredDown}
            handleSetPosition={handleSetPosition}
            disabledButton={disabledButton}
            texts={textsButton}
          />
        </ButtonsBlockWrap>
        <ValueRow texts={textsRow} vector="DOWN" value={payoutLose} />
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
