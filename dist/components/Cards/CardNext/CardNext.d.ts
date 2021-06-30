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
    disabledTimer?: boolean;
    textsButton?: any;
    textsRow?: string;
}
declare const CardNext: React.FC<IProps>;
export default CardNext;
