import React, { useState } from "react";
import HistoryPanel from "./HistoryPanel";
import { ArrowDownIcon, PlayIcon, WatchIcon } from "../../components/Svg";
import PnlHistoryPanel from "./PnlHistoryPanel";
import { useAccordeon } from "../../hooks";
import Accordeon from "./components/Accordeon";
import AccordeonCard from "./components/AccordeonCard";
import HeaderHistory from "./components/HeaderHistory";
import Statistic from "./components/Statistic";
import NoHistory from "./components/NoHistory";
import RoundHistory from "./components/RoundHistory";
import RoundHistoryBTC from "./components/RoundHistoryBTC";
import { ICardAccordeon } from "./types";
import YourHistory from "./components/YourHistory";
import ProgressBar from "./components/ProgressBar";
import Rounds from "./components/Rounds";
import RoundsLink from "./components/RoundsLink";
import { Button } from "../../components/Button";

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
      break;
  }

  const roundsData = [
    {
      type: "won",
      rounds: 2,
      roundsInPercents: "string1",
      roundValue: " string2",
      roundPrice: "String3",
    },
    {
      type: "lost",
      rounds: 2,
      roundsInPercents: "string1",
      roundValue: " string2",
      roundPrice: "String3",
    },
    {
      type: "lost",
      rounds: 2,
      roundsInPercents: "string1",
      roundValue: " string2",
      roundPrice: "String3",
    },
  ];
  const textsRoundHistory = {
    rounds: "Round History",
    locked: "Locked Price",
    prize: "Prize Pool",
    open: "Opening Block",
    closing: "Closing Block",
  };
  const textsYourHistory = {
    position: "Your Position",
    lose: "LOSE",
    win: "WIN",
    history: "Your History",
  };

  const cardsAccordeon: Array<ICardAccordeon> = [
    {
      id: "1",
      number: "#0022",
      color: "text",
      text: "Starting soon",
      icon: <WatchIcon />,
      content: [
        <RoundHistoryBTC
          closeFirstPrice="$ 400`597"
          lockFirstPrice="dsdsd"
          changeTitleFirst="56.3%"
          btcPayout="2x Playout  0,281 BNB"
          ethPayout="2x Playout  0,791 BNB"
          prizePool="$ 3`500"
          texts={textsRoundHistory}
          isBTCWon={false}
          negativeFirst
        />,
      ],
    },
    {
      id: "2",
      number: "#0023",
      color: "green",
      text: "Live now",
      icon: <PlayIcon />,
      content: [
        <RoundHistory
          price="$ 400`597"
          priceRightText="56.3%"
          up="2x Playout  0,281 BNB"
          down="2x Playout  0,791 BNB"
          prizePool="$ 3`500"
          openingBlock="4542"
          texts={textsRoundHistory}
        />,
      ],
    },
    {
      id: "3",
      number: "#0024",
      color: "redBg",
      text: "-0,001 BNB",
      icon: <ArrowDownIcon />,
      content: [
        <RoundHistory
          price="$ 400`597"
          priceRightText="$1,57"
          up="2x Playout  0,281 BNB"
          down="2x Playout  0,791 BNB"
          prizePool="$ 3`500"
          openingBlock="483029"
          closingBlock="457442"
          negative
          texts={textsRoundHistory}
        />,
        <YourHistory
          price="+0,001 BNB"
          priceRightText="UP"
          result="$0.391"
          yourPosition="0,001 BNB"
          win={false}
          negative
          texts={textsYourHistory}
        />,
      ],
    },
    {
      id: "4",
      number: "#0025",
      color: "green",
      text: "+2,001 BNB",
      icon: <ArrowDownIcon />,
      collect: true,
      content: [
        <RoundHistory
          price="$ 400`597"
          priceRightText="$1,57"
          up="2x Playout  0,281 BNB"
          down="2x Playout  0,791 BNB"
          prizePool="$ 3`500"
          openingBlock="483029"
          closingBlock="457442"
          texts={textsRoundHistory}
        />,
        <YourHistory
          price="+0,001 BNB"
          priceRightText="UP"
          result="$0.391"
          yourPosition="0,001 BNB"
          texts={textsYourHistory}
          win
          collect
        />,
      ],
    },
  ];
  const { valueAccordeon, heightActiveBlock, handleToggleAccordeon, newCards, active, refHidden } =
    useAccordeon(cardsAccordeon);

  const textNoHistory = {
    ifYouSure:
      "If you are sure you should see history here, make sure you`re connected to the correct wallet and try again",
    noPredict: "No prediction history available",
  };

  const textHeader = {
    history: "History",
    all: "All history",
    collected: "Collected",
    uncollected: "Uncollected",
  };
  const textsStatistic = {
    average: "Average  return / round",
    best: "Best round",
    averagePosition: "Average position",
    entered: "entered / round",
  };
  const tabsList = ["Rounds", "PNL"];

  const hasBetHistory = true;
  return (
    <HistoryPanel isHistoryPaneOpen={isHistoryPaneOpen} handleToggle={handleToggle} valueAccordeon={valueAccordeon}>
      <HeaderHistory
        activeTab={activeTab}
        tabsList={tabsList}
        texts={textHeader}
        setActiveTab={setActiveTab}
        handleClose={handleToggle}
        switchTab={toggleBaseTab}
        handleChangeTab={setHistoryFilter}
        historyFilter={historyFilter}
        isFetchingHistory={false}
        account="ndkfjnjfnvsjfbvs"
      />
      {activeTab === HistoryTabs.ROUNDS && (
        <>
          <Accordeon cards={newCards}>
            {newCards.map((item: any) => (
              <AccordeonCard
                key={item.id}
                item={item}
                round="24234234"
                icon={item.icon}
                valueAccordeon={valueAccordeon}
                heightActiveBlock={heightActiveBlock}
                handleToggle={handleToggleAccordeon}
                active={active}
                refHidden={refHidden}
                detail={item.content}
                collectOrReclaim={<Button variant="green" size="xs">Collect</Button>}
              />
            ))}
          </Accordeon>

          {historyFilter === HistoryFilter.COLLECTED &&
            (hasBetHistory ? (
              <Accordeon cards={newCards}>
                {newCards.map((item: any) => (
                  <AccordeonCard
                    key={item.id}
                    item={item}
                    round={item.id}
                    icon={item.icon}
                    valueAccordeon={valueAccordeon}
                    heightActiveBlock={heightActiveBlock}
                    handleToggle={handleToggleAccordeon}
                    active={active}
                    refHidden={refHidden}
                    detail={"detail" + item.id}                   
                  />
                ))}
              </Accordeon>
            ) : (
              <NoHistory texts={textNoHistory} />
            ))}
          {historyFilter === HistoryFilter.UNCOLLECTED && <div>No result</div>}
        </>
      )}
      {activeTab === HistoryTabs.PNL &&
        (hasBetHistory ? (
          <PnlHistoryPanel>
            <ProgressBar won={3} lost={5} percentageWon="+121" result="+0012 BNB" price="$ 66" />
            <Statistic
              averageReturn="foo"
              averageReturnPrice="fooo2"
              colorAverage="#4BE43E"
              bestRound="foo4"
              hasBestRound
              multiplierBestRound="[xfoo5]"
              bnbBestRound="foo6"
              bestRoundPrice="foo7"
              averagePosition="foo0"
              averagePositionPrice="fooo89"
              texts={textsStatistic}
            />
            {roundsData.map((item, i) => (
              <React.Fragment key={i}>
                <Rounds
                  type={item.type}
                  rounds={item.rounds}
                  roundsInPercents={item.roundsInPercents}
                  roundValue={item.roundValue}
                  roundPrice={item.roundPrice}
                  texts="Rounds"
                />
              </React.Fragment>
            ))}
            <RoundsLink texts="View Reclaimed & Won" href="#" />
          </PnlHistoryPanel>
        ) : (
          <NoHistory texts={textNoHistory} />
        ))}
    </HistoryPanel>
  );
};
