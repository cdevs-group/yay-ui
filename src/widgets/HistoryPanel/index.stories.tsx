import React, { useState } from "react";
import HistoryPanel from "./HistoryPanel2";
import PnlHistoryPanel from "./PnlHistoryPanel";

export default {
  title: "Components/HistoryPanel",
  component: [HistoryPanel, PnlHistoryPanel],
};


export const Panel: React.FC = () => {
  enum HistoryTabs {
  ROUNDS,
  PNL,
}
enum HistoryFilter {
  ALL = "all",
  COLLECTED = "collected",
  UNCOLLECTED = "uncollected",
}
  const [open, setOpen] = useState(true);
  const [activeTab, setActiveTab] = useState(HistoryTabs.ROUNDS);
  const [historyFilter, setHistoryFilter] = useState("all");

  
  const toggleHistoryFilter = (newFilter: HistoryFilter) => async () => {
  if (newFilter !== historyFilter) {
    setHistoryFilter(newFilter)
  }
}
  const toggleBaseTab = async (e: any) => {
    setActiveTab(+e.target.value)
    await toggleHistoryFilter(HistoryFilter.ALL)()
  }

  return (
    <HistoryPanel
      setOpen={setOpen}
      open={open}
      isFetchingHistory
      toggleBaseTab={toggleBaseTab}
      activeTab={activeTab}
      historyFilter={historyFilter}
      toggleHistoryFilter={toggleHistoryFilter}
      account="lfkbmdkjfgbndkjgnb"
      hasBetHistory
    />
  );
};
