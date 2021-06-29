import React from "react";
import { ITextsYourHistory } from "../types";
interface IYourHistory {
    price: string;
    priceRightText: string;
    result?: string;
    yourPosition: string;
    negative?: boolean;
    win: boolean;
    collect?: React.ReactNode;
    texts?: ITextsYourHistory;
}
declare const YourHistory: (props: IYourHistory) => JSX.Element;
export default YourHistory;
