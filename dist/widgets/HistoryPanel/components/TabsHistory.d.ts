/// <reference types="react" />
interface TabsProp {
    tabValue: number;
    onClick: (e: any) => Promise<void>;
    tabsList: Array<string>;
}
declare const TabsHistory: ({ tabValue, onClick, tabsList }: TabsProp) => JSX.Element;
export default TabsHistory;
