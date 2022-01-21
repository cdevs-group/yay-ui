export const variants = {
  SMALL: "small",
} as const;

export type Variant = typeof variants[keyof typeof variants];

export interface TabsProp {
  tabValue?: number | null;
  onClick?: (e: any) => Promise<void> | void;
  tabsList?: Array<string>;
  width?: string;
  paddingTabs?: string;
  colorActive?: string;
  fontSize?: string;
  variant?: Variant;
}

export interface TabsWithCommingSoonProp extends Omit<TabsProp, "tabsList"> {
  tabsList: TabTitleProp[];
}

export interface TabTitleProp {
  title: string;
  disabled?: boolean;
  commingSoonText?: string;
}

export interface TabsSmallProp {
  tabValue?: number | string;
  onClick?: (e: any) => Promise<void> | void;
  tabsList?: Array<string | number>;
}

export interface TabsWithMovingLineProps {
  title?: string;
  tabsList: string[];
  tabActive: number;
  handleToggleTab: (e: any) => void;
}
