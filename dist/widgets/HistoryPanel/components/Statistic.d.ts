/// <reference types="react" />
import { ITextsStatistic } from "../types";
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
    texts?: ITextsStatistic;
}
declare const Statistic: ({ averageReturn, averageReturnPrice, colorAverage, bestRound, hasBestRound, multiplierBestRound, bnbBestRound, bestRoundPrice, averagePosition, averagePositionPrice, texts, }: Props) => JSX.Element;
export default Statistic;
