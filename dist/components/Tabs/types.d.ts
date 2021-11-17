export declare const variants: {
    readonly SMALL: "small";
};
export declare type Variant = typeof variants[keyof typeof variants];
export interface TabsProp {
    tabValue?: number;
    onClick?: (e: any) => Promise<void> | void;
    tabsList?: Array<string>;
    variant?: Variant;
}
export interface TabsSmallProp {
    tabValue?: number | string;
    onClick?: (e: any) => Promise<void> | void;
    tabsList?: Array<string | number>;
}
export interface TabsWithMovingLineProps {
    title: string;
    tabsList: string[];
    tabActive: number;
    handleToggleTab: (e: any) => void;
}
