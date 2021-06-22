/// <reference types="react" />
import { Bet } from "../../widgets/HistoryPanel/types";
declare const useAccordeon: (cards?: any) => {
    valueAccordeon: string | null | undefined;
    setValueAccordeon: import("react").Dispatch<import("react").SetStateAction<string | null | undefined>>;
    heightActiveBlock: number;
    handleToggleAccordeon: (e: any, item: Bet) => void;
    newCards: Bet[];
    active: Bet | undefined;
    refHidden: import("react").MutableRefObject<HTMLDivElement | null>;
};
export default useAccordeon;
