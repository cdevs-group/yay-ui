/// <reference types="react" />
interface Props {
    type: string;
    rounds: string | number;
    roundsInPercents: string;
    roundValue: string;
    roundPrice: String;
    texts?: string;
}
declare const Rounds: ({ texts, type, rounds, roundsInPercents, roundValue, roundPrice }: Props) => JSX.Element;
export default Rounds;
