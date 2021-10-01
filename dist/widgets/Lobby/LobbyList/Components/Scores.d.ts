/// <reference types="react" />
declare const Scores: ({ titleYou, titleOpponent, yourScore, opponentScore }: ScoresInterface) => JSX.Element;
interface ScoresInterface {
    titleYou?: string;
    titleOpponent?: string;
    yourScore?: string | number;
    opponentScore?: string | number;
}
export default Scores;
