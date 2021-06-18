/// <reference types="react" />
import { TabsProp } from "./types";
declare const SimpleTabs: {
    ({ historyFilter, onClick }: TabsProp): JSX.Element;
    defaultProps: {
        tabsList: never[];
    };
};
export default SimpleTabs;
