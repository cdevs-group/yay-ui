/// <reference types="react" />
interface Props {
    won: number;
    lost: number;
    percentageWon: number;
    result: string;
    price: string;
}
declare const ProgressBar: ({ won, lost, percentageWon, result, price }: Props) => JSX.Element;
export default ProgressBar;
