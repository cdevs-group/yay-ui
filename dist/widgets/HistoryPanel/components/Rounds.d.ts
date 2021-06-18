/// <reference types="react" />
interface Props {
    type: string;
    rounds: string | number;
    roundsInPercents: string;
    roundValue: string;
    roundPrice: String;
}
declare const Rounds: ({ type, rounds, roundsInPercents, roundValue, roundPrice }: Props) => JSX.Element;
export default Rounds;
