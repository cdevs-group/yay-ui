import React from "react";
import { Bet } from "../../widgets/HistoryPanel/types";
declare const useAccordeon: (cards: any) => {
    valueAccordeon: string | null | undefined;
    setValueAccordeon: React.Dispatch<React.SetStateAction<string | null | undefined>>;
    heightActiveBlock: number;
    handleToggle: (item: Bet) => void;
    newCards: any;
    active: Bet;
    refHidden: React.MutableRefObject<HTMLDivElement | null>;
};
export default useAccordeon;
