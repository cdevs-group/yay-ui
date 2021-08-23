import React from "react";
import { ITextRoundBTCHistory } from "../types";
interface IRoundHistory {
    btcPayout: React.ReactNode;
    ethPayout: React.ReactNode;
    prizePool: string;
    openingBlock?: string | React.ReactNode;
    closingBlock?: string | React.ReactNode;
    negativeFirst?: boolean;
    negativeSecond?: boolean;
    negativeBlock?: boolean;
    lockPrice?: string;
    roundFailed?: boolean;
    texts?: ITextRoundBTCHistory;
    isBTCWon?: boolean;
    textLockedPrice?: string;
    textTitle?: string;
    closeFirstPrice: string;
    lockFirstPrice: string;
    closeSecondPrice: string;
    lockSecondPrice: string;
    changeTitleFirst: string;
    changeTitleSecond: string;
}
declare const RoundHistoryBTC: (props: IRoundHistory) => JSX.Element;
export default RoundHistoryBTC;
