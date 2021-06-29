import React from "react";
import { ITextsRound } from "../types";
interface IYourHistory {
    price: string;
    priceRightText: string;
    result?: string;
    yourPosition: string;
    negative?: boolean;
    win: boolean;
    collect?: React.ReactNode;
    texts?: ITextsRound;
}
declare const YourHistory: (props: IYourHistory) => JSX.Element;
export default YourHistory;
