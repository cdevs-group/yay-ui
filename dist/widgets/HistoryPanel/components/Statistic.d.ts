/// <reference types="react" />
interface Props {
    averageReturn: string;
    averageReturnPrice: string;
    colorAverage: string;
    bestRound: string;
    hasBestRound: boolean;
    multiplierBestRound: string;
    bnbBestRound: string;
    bestRoundPrice: string;
    averagePosition: string;
    averagePositionPrice: string;
}
declare const Statistic: ({ averageReturn, averageReturnPrice, colorAverage, bestRound, hasBestRound, multiplierBestRound, bnbBestRound, bestRoundPrice, averagePosition, averagePositionPrice, }: Props) => JSX.Element;
export default Statistic;
