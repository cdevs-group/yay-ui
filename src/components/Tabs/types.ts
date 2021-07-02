export interface TabsProp {
  onClick: ((e: any) => () => Promise<void>) | undefined;
  historyFilter: string;
}
