import { ReactNode } from "react";
declare const Player: ({ title, gamer, icon }: PlayerInterface) => JSX.Element;
interface PlayerInterface {
    title?: string;
    gamer: string;
    icon?: ReactNode;
}
export default Player;
