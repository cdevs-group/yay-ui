import React from "react";
import styled from "styled-components";
import { Button } from "../../Button";
import { BetPosition } from "../../Card/types";
import { ArrowCardDown } from "../../Svg";
import { Timer } from "../../Timer";
import ButtonsBlock from "./ButtonsBlock";
import TopContent from "../../Cards/CardNext/TopContent";
import ValueRow from "../../Cards/CardNext/ValueRow";

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
  canEnterPosition: boolean;
  negative: boolean;
  ethButton?: string;
  btcButton?: string;
}

const CardNextBTC: React.FC<IProps> = ({
  roundEpoch,
  time,
  payoutWin,
  payoutLose,
  pool,
  hasEnteredUp,
  hasEnteredDown,
  handleSetPosition,
  disabledButton,
  canEnterPosition,
  negative,
  btcButton,
  ethButton,
}) => {
  return (
    <>
      <TopContent rightContent={roundEpoch}>
        <Timer color="white" time={time} />
      </TopContent>
      <ValueRow vector="BTC" value={payoutWin} />

      {canEnterPosition ? (
        <ButtonsBlock
          pool={pool}
          hasEnteredUp={hasEnteredUp}
          hasEnteredDown={hasEnteredDown}
          handleSetPosition={handleSetPosition}
          disabledButton={disabledButton}
          ethButton={ethButton}
          btcButton={btcButton}
        />
      ) : (
        <div style={{ marginTop: 70 }}>
          <Button
            disabled
            startIcon={
              <Arrow negative={negative}>
                <ArrowCardDown color="white" />
              </Arrow>
            }
            width="100%"
            mb="8px"
            variant="green"
          >
            Entered
          </Button>
        </div>
      )}
      <ValueRow vector="ETH" value={payoutLose} />
    </>
  );
};

export default CardNextBTC;

const Arrow = styled.div<{ negative?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  transform: ${({ negative }) => (!negative ? "scale(1,-1)" : "none")};
`;
