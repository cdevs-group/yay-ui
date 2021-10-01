/// <reference types="react" />
declare const Bet: ({ title, red, bet }: BetInterface) => JSX.Element;
interface BetInterface {
    title?: string;
    red?: boolean;
    bet: number | bigint | string;
}
export default Bet;
