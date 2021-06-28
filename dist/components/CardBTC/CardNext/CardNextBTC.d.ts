import React from "react";
import { BetPosition } from "../../Card/types";
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
declare const CardNextBTC: React.FC<IProps>;
export default CardNextBTC;
