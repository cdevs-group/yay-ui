/// <reference types="react" />
interface TabsProp {
    tabValue: number;
    setTabValue: (val: number) => void;
}
declare const TabsHistory: ({ tabValue, setTabValue }: TabsProp) => JSX.Element;
export default TabsHistory;
