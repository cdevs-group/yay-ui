import { HistoryFilter } from "../../widgets/HistoryPanel/HistoryPanel2";

export interface TabsProp {
  onClick: ((e: any) => () => Promise<void>) | undefined;
  historyFilter: string;
}
