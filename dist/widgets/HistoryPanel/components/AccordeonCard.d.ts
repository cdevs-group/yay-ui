import React from "react";
import { Bet } from "../types";
export interface IAccordeonCard {
    cards: any;
    item: Bet;
    collectOrReclaim?: React.ReactNode;
    round?: string;
    icon?: React.ReactNode;
    betLabel?: React.ReactNode;
    detail?: React.ReactNode;
}
declare const AccordeonCard: ({ cards, item, collectOrReclaim, round, icon, betLabel, detail }: IAccordeonCard) => JSX.Element;
export default AccordeonCard;
