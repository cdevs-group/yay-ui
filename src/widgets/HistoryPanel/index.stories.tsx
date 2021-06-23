import React, { useState } from "react";
import HistoryPanel from "./HistoryPanel";
import PnlHistoryPanel from "./PnlHistoryPanel";
import { useAccordeon } from "../../hooks/useAccordeon";
import HeaderHistory from "./components/HeaderHistory";
import Statistic from "./components/Statistic";

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
  const [activeTab, setActiveTab] = useState(HistoryTabs.ROUNDS);
  const [historyFilter, setHistoryFilter] = useState("all");
  const [isHistoryPaneOpen, setIsHistoryPaneOpen] = useState(true);
  const { valueAccordeon, heightActiveBlock, handleToggleAccordeon, newCards, active, refHidden } = useAccordeon([]);

  const toggleHistoryFilter = (e) => {
    // if (e.target.value !== historyFilter) {
    //   setHistoryFilter(e.target.value);
    // }
  };
  const toggleBaseTab = async (e: any) => {
    setActiveTab(+e.target.value);
    setHistoryFilter(HistoryFilter.ALL);
  };

  const handleToggle = () => {
    if (isHistoryPaneOpen) {
      setIsHistoryPaneOpen(false);
    } else setIsHistoryPaneOpen(true);
  };

  let activeTabComponent = null;

  switch (activeTab) {
    case HistoryTabs.PNL:
      activeTabComponent = (
        <Statistic
          averageReturn={`+3561651 BNB`}
          averageReturnPrice={`~$43434`}
          colorAverage="#4BE43E"
          bestRound="#5454"
          hasBestRound
          multiplierBestRound={`(434343x)`}
          bnbBestRound={`+5657 BNB`}
          bestRoundPrice={`~$6656`}
          averagePosition={`67644 BNB`}
          averagePositionPrice={`~$3434`}
        />
      );
      break;
    case HistoryTabs.ROUNDS:
    default:
      // activeTabComponent = <RoundsTab hasBetHistory={hasBetHistory} bets={results} />;
      break;
  }

  return (
    <HistoryPanel isHistoryPaneOpen={isHistoryPaneOpen} handleToggle={handleToggle} valueAccordeon={valueAccordeon}>
      <HeaderHistory
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        handleClose={handleToggle}
        switchTab={toggleBaseTab}
        handleChangeTab={toggleHistoryFilter}
        historyFilter={historyFilter}
        isFetchingHistory={false}
        account="ndkfjnjfnvsjfbvs"
      />
      {activeTabComponent}
    </HistoryPanel>
  );
};
