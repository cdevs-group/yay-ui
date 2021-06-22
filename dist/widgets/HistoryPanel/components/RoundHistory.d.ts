import React from "react";
interface IRoundHistory {
    price: string;
    priceRightText: string;
    result?: string;
    up: string | React.ReactNode;
    down: string | React.ReactNode;
    prizePool: string;
    openingBlock?: string;
    closingBlock?: string;
    negative?: boolean;
}
declare const RoundHistory: (props: IRoundHistory) => JSX.Element;
export default RoundHistory;
