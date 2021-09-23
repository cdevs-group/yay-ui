import React from "react";
import Flex from "../../components/Box/Flex";
import HistoryBlock from "./components/HistoryBlock";
import PrizePoolBlock from "./components/PrizePoolBlock";
import { ChartIcon } from "../../components/Svg";

export default {
  title: "Widgets/GameWidget",
  argTypes: {},
};

export const Block: React.FC = () => {
  return (
    <Flex>
      <HistoryBlock>
        <></>
      </HistoryBlock>
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
