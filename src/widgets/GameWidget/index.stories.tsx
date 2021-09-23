import React, { useState } from "react";
import Flex from "../../components/Box/Flex";
import { BNB } from "../../constants/images";
import HistoryBlock from "./components/HistoryBlock";
import WinnersBlock from "./components/WinnersBlock";
import PrizePoolBlock from "./components/PrizePoolBlock";
import { ChartIcon } from "../../components/Svg";

export default {
  title: "Widgets/GameWidget",
  argTypes: {},
};

export const History: React.FC = () => {
  const tabsListHistory = ["Live", "Round", "Your History"];
  const [tabActiveHistory, setTabActiveHistory] = useState<number>(0);

  const handleToggleTabHistory = (e: any) => {
    setTabActiveHistory(+e.target.value);
  };

  const dataLive = [
    { icon: <img src={BNB} />, value1: "$ 40.597,789", value2: "$ 48.245,678", value3: "4.02px", variant: "win" },
    { icon: <img src={BNB} />, value1: "$ 40.597,789", value2: "$ 48.245,678", value3: "4.02px", variant: "lose" },
  ];

  return (
    <Flex>
      <HistoryBlock
        handleToggleTab={handleToggleTabHistory}
        tabsList={tabsListHistory}
        tabActive={tabActiveHistory}
        title="History"
        dataLive={dataLive}
        prizePool="0,005 BNB"
        prizePoolText="PRIZE POOL"
      />
    </Flex>
  );
};

export const Winners: React.FC = () => {
  const tabsListWinners = ["Today", "Anytime", "Your Position"];
  const [tabActiveWinners, setTabActiveWinners] = useState<number>(0);

  const handleToggleTabWinners = (e: any) => {
    setTabActiveWinners(+e.target.value);
  };

  const dataToday = [
    {
      id: 1,
      icon: <img src={BNB} />,
      address: "0x023F12f38e0a8fhghA6FD9BCF393a996a6d2f73a",
      value1: "5`578 BNB",
      value2: "3421",
    },
    {
      id: 2,
      icon: <img src={BNB} />,
      address: "0xdfhyt2f38e0a8fhghA6FD9BCF393a996a6d2f73a",
      value1: "2`002 BNB",
      value2: "3421",
    },
  ];

  return (
    <Flex>
      <WinnersBlock
        handleToggleTab={handleToggleTabWinners}
        tabsList={tabsListWinners}
        tabActive={tabActiveWinners}
        title="Winners"
        dataToday={dataToday}
      />
    </Flex>
  );
};

export const PrizePool = () => {
  const cardData1 = {
    name: "BTC",
    coefficient: "1.03x",
    price: "Price",
    priceValue: "$ 65 565",
  };
  const cardData2 = {
    name: "ETH",
    coefficient: "1.93x",
    price: "Price",
    priceValue: "$ 3 565",
  };

  return (
    <Flex width="100%">
      <PrizePoolBlock
        leftContent="#678"
        disabled={false}
        time={2001}
        rightContent={<ChartIcon fill="transparent" />}
        cardData1={cardData1}
        cardData2={cardData2}
        value="5 000 BNB"
        title="PRIZE POOL"
      ></PrizePoolBlock>
    </Flex>
  );
};
