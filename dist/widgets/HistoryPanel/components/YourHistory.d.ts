import React from "react";
interface IYourHistory {
    price: string;
    priceRightText: string;
    result?: string;
    yourPosition: string;
    negative?: boolean;
    win: boolean;
    collect?: React.ReactNode;
}
declare const YourHistory: (props: IYourHistory) => JSX.Element;
export default YourHistory;
