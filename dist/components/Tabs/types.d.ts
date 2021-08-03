export interface TabsProp {
    tabValue?: number;
    onClick?: (e: any) => Promise<void>;
    tabsList?: Array<string>;
}
