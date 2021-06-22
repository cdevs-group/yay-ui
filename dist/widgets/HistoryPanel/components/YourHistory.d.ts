/// <reference types="react" />
interface IYourHistory {
    price: string;
    priceRightText: string;
    result?: string;
    yourPosition: string;
    negative?: boolean;
    win: boolean;
    collect?: boolean;
}
declare const YourHistory: (props: IYourHistory) => JSX.Element;
export default YourHistory;
