import React, { useState } from "react";
import Flex from "../../components/Box/Flex";
import { BNB } from "../../constants/images";
import HistoryBlock from "./components/HistoryBlock";

export default {
  title: "Widgets/GameWidget",
  argTypes: {},
};

export const Block: React.FC = () => {
  const tabsList = ["Live", "Round", "Your History"];
  const [tabActive, setTabActive] = useState<number>(0);

  const handleToggleTab = (e: any) => {
    setTabActive(+e.target.value);
  };

  const dataLive = [
    { icon: <img src={BNB} />, value1: "$ 40.597,789", value2: "$ 48.245,678", value3: "4.02px", variant: "win" },
  ];

  return (
    <Flex>
      <HistoryBlock
        handleToggleTab={handleToggleTab}
        tabsList={tabsList}
        tabActive={tabActive}
        title="History"
        dataLive={dataLive}
        prizePool="0,005 BNB"
        prizePoolText="PRIZE POOL"
      />
    </Flex>
  );
};
