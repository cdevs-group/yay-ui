import React from "react";
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
}
declare const RoundHistory: (props: IRoundHistory) => JSX.Element;
export default RoundHistory;
