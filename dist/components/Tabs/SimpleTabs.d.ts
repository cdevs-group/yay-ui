/// <reference types="react" />
import { TabsProp } from "./types";
export declare enum HistoryFilter {
    ALL = "all",
    COLLECTED = "collected",
    UNCOLLECTED = "uncollected"
}
declare const SimpleTabs: {
    ({ historyFilter, onClick }: TabsProp): JSX.Element;
    defaultProps: {
        tabsList: never[];
    };
};
export default SimpleTabs;
