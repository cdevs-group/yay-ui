import React from "react";
import { Bet } from "../types";
interface IAccordeon {
    cards: Array<Bet>;
    children?: React.ReactNode;
}
declare const Accordeon: ({ cards, children }: IAccordeon) => JSX.Element;
export default Accordeon;
