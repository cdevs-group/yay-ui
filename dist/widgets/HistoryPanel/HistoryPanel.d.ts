import React from "react";
import { Bet, InjectedProps } from "./types";
interface Props extends InjectedProps {
    isFetchingHistory?: boolean;
    bets?: Bet[];
    isOpenRound?: boolean;
    isLiveRound?: boolean;
    yourResult?: string;
    canClaim?: string | number;
    roundResult?: string;
    account: string;
    toggleBaseTab?: ((e: any) => Promise<void>) | undefined;
    activeTab: HistoryTabs;
    historyFilter: string;
    toggleHistoryFilter?: ((e: any) => () => Promise<void>) | undefined;
    hasBetHistory: true;
}
export declare enum HistoryTabs {
    ROUNDS = 0,
    PNL = 1
}
export declare enum HistoryFilter {
    ALL = "all",
    COLLECTED = "collected",
    UNCOLLECTED = "uncollected"
}
declare const HistoryPanel: React.FC<Props>;
export default HistoryPanel;
