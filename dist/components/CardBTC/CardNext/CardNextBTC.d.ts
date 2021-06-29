import React from "react";
import { BetPosition } from "../../Card/types";
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
declare const CardNext: React.FC<IProps>;
export default CardNext;
