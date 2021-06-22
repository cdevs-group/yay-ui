/// <reference types="react" />
interface IRoundHistory {
    price: string;
    priceRightText: string;
    result?: string;
    up: string;
    down: string;
    prizePool: string;
    openingBlock?: string;
    closingBlock?: string;
    negative?: boolean;
}
declare const RoundHistory: (props: IRoundHistory) => JSX.Element;
export default RoundHistory;
