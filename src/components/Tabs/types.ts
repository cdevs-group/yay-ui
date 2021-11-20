export interface TabsProp {
  tabValue?: number | null;
  onClick?: (e: any) => Promise<void> | void;
  tabsList?: Array<string>;
  width?: string;
  paddingTabs?: string;
  colorActive?: string;
  fontSize?: string;
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
