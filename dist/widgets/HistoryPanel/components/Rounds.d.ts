/// <reference types="react" />
import { ITexts } from "../types";
interface Props {
    type: string;
    rounds: string | number;
    roundsInPercents: string;
    roundValue: string;
    roundPrice: String;
    texts?: ITexts;
}
declare const Rounds: ({ texts, type, rounds, roundsInPercents, roundValue, roundPrice }: Props) => JSX.Element;
export default Rounds;
