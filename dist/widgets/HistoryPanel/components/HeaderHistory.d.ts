import React from "react";
export declare enum HistoryTabs {
    ROUNDS = 0,
    PNL = 1
}
export declare enum HistoryFilter {
    ALL = "all",
    COLLECTED = "collected",
    UNCOLLECTED = "uncollected"
}
interface HeaderProps {
    activeTab: HistoryTabs;
    setActiveTab: (value: HistoryTabs) => void;
    handleClose: () => void;
    switchTab: (tabIndex: number) => Promise<void>;
    handleChangeTab: (newFilter: HistoryFilter) => any;
    historyFilter: string;
    isFetchingHistory: boolean;
    account: string;
}
declare const HeaderHistory: React.FC<HeaderProps>;
export default HeaderHistory;
