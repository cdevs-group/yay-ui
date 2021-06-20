import React, { RefObject } from "react";
import { Bet } from "../types";
export interface IAccordeonCard {
    item: Bet;
    collectOrReclaim?: React.ReactNode;
    round?: string;
    icon?: React.ReactNode;
    betLabel?: React.ReactNode;
    detail?: React.ReactNode;
    valueAccordeon: string | null | undefined;
    heightActiveBlock: number;
    handleToggle: (item: Bet) => void;
    active: Bet;
    refHidden: RefObject<HTMLDivElement> | null | undefined;
}
declare const AccordeonCard: ({ item, collectOrReclaim, round, icon, betLabel, detail, valueAccordeon, heightActiveBlock, handleToggle, active, refHidden, }: IAccordeonCard) => JSX.Element;
export default AccordeonCard;
