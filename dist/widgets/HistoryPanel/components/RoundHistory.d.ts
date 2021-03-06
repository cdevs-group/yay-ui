import React from "react";
import { ITextRoundHistory } from "../types";
interface IRoundHistory {
    price: string;
    priceRightText: string;
    result?: string;
    up: React.ReactNode;
    down: React.ReactNode;
    prizePool: string;
    openingBlock?: string | React.ReactNode;
    closingBlock?: string | React.ReactNode;
    negative?: boolean;
    lockPrice?: string;
    roundFailed?: boolean;
    texts?: ITextRoundHistory;
}
declare const RoundHistory: (props: IRoundHistory) => JSX.Element;
export default RoundHistory;
