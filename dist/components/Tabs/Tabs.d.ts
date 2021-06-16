/// <reference types="react" />
import { TabsProp } from "./types";
declare const Tabs: {
    ({ tabValue, tabsList, setTabValue }: TabsProp): JSX.Element;
    defaultProps: {
        tabsList: never[];
    };
};
export default Tabs;
