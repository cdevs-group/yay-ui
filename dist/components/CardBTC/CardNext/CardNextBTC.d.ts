import React from "react";
import { BetPosition } from "../../Card/types";
import { Itext } from "../types";
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
    disabledTimer?: boolean;
    ethButton: string;
    btcButton: string;
    texts?: Itext;
}
declare const CardNext: React.FC<IProps>;
export default CardNext;
