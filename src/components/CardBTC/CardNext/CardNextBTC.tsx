import React from "react";
import styled from "styled-components";
import { Button } from "../../Button";
import { BetPosition } from "../../Card/types";
import { ArrowCardDown } from "../../Svg";
import { Timer } from "../../Timer";
import ButtonsBlock from "./ButtonsBlockBTC";
import TopContent from "../../Cards/CardNext/TopContent";
import ValueRow from "../../Cards/CardNext/ValueRow";
import { Itext } from "../types";
import { ITextsButtons } from "../../Cards/types";

interface IProps {
  roundEpoch: string;
  time: number;
  payoutWin: string;
  payoutLose: string;
  handleSetPosition: (newPosition: BetPosition) => void;
  pool: string;
  hasEnteredUp: boolean;
  hasEnteredDown: boolean;
  disabledButton: boolean;
  disabledTimer?: boolean;
  ethButton: string;
  btcButton: string;
  texts?: Itext;
  textRow?: string;
  textsButtons?: ITextsButtons;
}

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
  texts,
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

const Arrow = styled.div<{ negative?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  transform: ${({ negative }) => (!negative ? "scale(1,-1)" : "none")};
`;

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

const Prize = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.text};
  & span {
    font-size: 15px;
  }
`;
