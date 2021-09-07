export interface TabsProp {
  tabValue?: number;
  onClick?: (e: any) => Promise<void> | void;
  tabsList?: Array<string>;
}

export interface TabsSmallProp {
  tabValue?: number | string;
  onClick?: (e: any) => Promise<void> | void;
  tabsList?: Array<string | number>;
}
