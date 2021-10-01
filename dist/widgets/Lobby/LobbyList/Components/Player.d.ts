/// <reference types="react" />
declare const Player: ({ title, gamer }: PlayerInterface) => JSX.Element;
interface PlayerInterface {
    title?: string;
    gamer: string;
}
export default Player;
