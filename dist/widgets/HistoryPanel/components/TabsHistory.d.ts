/// <reference types="react" />
interface TabsProp {
    tabValue: number;
    onClick: (e: any) => Promise<void>;
}
declare const TabsHistory: ({ tabValue, onClick }: TabsProp) => JSX.Element;
export default TabsHistory;
