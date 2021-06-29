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
    switchTab: (e: any) => Promise<void>;
    handleChangeTab: (newFilter: HistoryFilter) => any;
    historyFilter: string;
    isFetchingHistory: boolean;
    account: string;
    tabsList: Array<string>;
    texts: any;
}
declare const HeaderHistory: React.FC<HeaderProps>;
export default HeaderHistory;
