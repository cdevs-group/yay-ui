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
import { ICardAccordeon } from "./types";
import YourHistory from "./components/YourHistory";
import ProgressBar from "./components/ProgressBar";
import Rounds from "./components/Rounds";
import RoundsLink from "./components/RoundsLink";
import HiddenItemAccordeonCard from "./components/HiddenItemAccordeonCard";

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
  // const toggleHistoryFilter = (e) => {
  //   console.log(e.target)
  //   if (e.target?.value !== historyFilter) {
  //     setHistoryFilter(e.target?.value);
  //   }
  // };
  // console.log(historyFilter)

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

  const cardsAccordeon: Array<ICardAccordeon> = [
    {
      id: "1",
      number: "#0022",
      color: "text",
      text: "Starting soon",
      icon: <WatchIcon />,
      content: [
        <RoundHistory
          price="$ 400`597"
          priceRightText="56.3%"
          up="2x Playout  0,281 BNB"
          down="2x Playout  0,791 BNB"
          prizePool="$ 3`500"
        />,
      ],
    },
    {
      id: "2",
      number: "#0023",
      color: "#4BE43E",
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
        />,
      ],
    },
    {
      id: "3",
      number: "#0024",
      color: "#FF6161",
      text: "-0,001 BNB",
      icon: <ArrowDownIcon />,
      content: [
        <RoundHistory
          price="$ 400`597"
          priceRightText="$1,57"
          up="2x Playout  0,281 BNB"
          down="2x Playout  0,791 BNB"
          prizePool="$ 3`600"
          openingBlock="483029"
          closingBlock="457442"
          negative
        />,
        <YourHistory
          price="+0,001 BNB"
          priceRightText="UP"
          result="$0.391"
          yourPosition="0,001 BNB"
          win={false}
          negative
        />,
      ],
    },
    {
      id: "4",
      number: "#0025",
      color: "#4BE43E",
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
        />,
        <YourHistory price="+0,001 BNB" priceRightText="UP" result="$0.391" yourPosition="0,001 BNB" win collect />,
      ],
    },
  ];
  const { valueAccordeon, heightActiveBlock, handleToggleAccordeon, newCards, active, refHidden } =
    useAccordeon(cardsAccordeon);
  console.log(heightActiveBlock);
  const hasBetHistory = true;
  return (
    <HistoryPanel isHistoryPaneOpen={isHistoryPaneOpen} handleToggle={handleToggle} valueAccordeon={valueAccordeon}>
      <HeaderHistory
        activeTab={activeTab}
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
          {historyFilter === HistoryFilter.ALL &&
            (hasBetHistory ? (
              <Accordeon cards={newCards}>
                {newCards.map((item: any) => (
                  <AccordeonCard
                    key={item.id}
                    item={item}
                    detail={
                      <>
                        <HiddenItemAccordeonCard>{item.content[0]}</HiddenItemAccordeonCard>
                        <HiddenItemAccordeonCard>{item.content[1]}</HiddenItemAccordeonCard>
                      </>
                    }
                    icon={item.icon}
                    valueAccordeon={valueAccordeon}
                    heightActiveBlock={heightActiveBlock}
                    handleToggle={handleToggleAccordeon}
                    active={active}
                    refHidden={refHidden}
                    betLabel={<p style={{ color: item.color, marginRight: "15px" }}>{item.text}</p>}
                    round={item.number}
                  />
                ))}
              </Accordeon>
            ) : (
              <NoHistory />
            ))}
          {historyFilter === HistoryFilter.COLLECTED &&
            (hasBetHistory ? (
              <Accordeon cards={newCards}>
                {newCards.map((item: any) => (
                  <AccordeonCard
                    key={item.id}
                    item={item}
                    detail={
                      <>
                        <HiddenItemAccordeonCard>{item.content[0]}</HiddenItemAccordeonCard>
                        <HiddenItemAccordeonCard>{item.content[1]}</HiddenItemAccordeonCard>
                      </>
                    }
                    icon={item.icon}
                    valueAccordeon={valueAccordeon}
                    heightActiveBlock={heightActiveBlock}
                    handleToggle={handleToggleAccordeon}
                    active={active}
                    refHidden={refHidden}
                    betLabel={<p style={{ color: item.color, marginRight: "15px" }}>{item.text}</p>}
                    round={item.number}
                  />
                ))}
              </Accordeon>
            ) : (
              <NoHistory />
            ))}
          {historyFilter === HistoryFilter.UNCOLLECTED && <div>No result</div>}
        </>
      )}
      {activeTab === HistoryTabs.PNL &&
        (hasBetHistory ? (
          <PnlHistoryPanel>
            <ProgressBar won={3} lost={5} percentageWon="+121" result="+0012 BNB" price="$ 66" />
            <Statistic
              averageReturn="foo1"
              averageReturnPrice="fooo2"
              colorAverage="#4BE43E"
              bestRound="foo4"
              hasBestRound
              multiplierBestRound="[xfoo5]"
              bnbBestRound="foo6"
              bestRoundPrice="foo7"
              averagePosition="foo0"
              averagePositionPrice="fooo89"
            />
            {roundsData.map((item, i) => (
              <React.Fragment key={i}>
                <Rounds
                  type={item.type}
                  rounds={item.rounds}
                  roundsInPercents={item.roundsInPercents}
                  roundValue={item.roundValue}
                  roundPrice={item.roundPrice}
                />
              </React.Fragment>
            ))}
            <RoundsLink href="#" />
          </PnlHistoryPanel>
        ) : (
          <NoHistory />
        ))}
    </HistoryPanel>
  );
};
