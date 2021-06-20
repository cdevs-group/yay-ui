import React from "react";
import { ICardAccordeon } from "../types";
interface IAccordeon {
    value?: string | null;
    setValue?: (value: any) => void;
    cards: Array<ICardAccordeon>;
    children?: React.ReactNode;
}
declare const Accordeon: ({ cards, children }: IAccordeon) => JSX.Element;
export default Accordeon;
