/// <reference types="react" />
import { TabsProp } from "./types";
declare const SimpleTabs: {
    ({ tabValue, setTabValue, tabsList }: TabsProp): JSX.Element;
    defaultProps: {
        tabsList: never[];
    };
};
export default SimpleTabs;
