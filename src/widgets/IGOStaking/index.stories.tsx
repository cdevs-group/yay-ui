import React, { useState } from "react";
import IGOTopList from "./components/IGOTopList";

export default {
  title: "Widgets/IGOTopList",
  component: [IGOTopList],
};

export const TopListBlock: React.FC = () => {
  enum TabsValue {
    ALL,
    HERCULES,
    PERSEUS,
    ARGUS,
    MINOS,
  }
  const [activeTab, setActiveTab] = useState(TabsValue.ALL);

  const tabsList = ["All", "Hercules", "Perseus", "Argus", "Minos"];
  const texts = {
    title: "Main pool",
    wallet: "Wallet",
    staked: "YAY staked",
    tokenName: "YAY",
    button: "My position",
  };
  const topUsersList = [
    {
      position: "1",
      wallet: "dhc526x87agshe",
      staked: "1000000",
    },
    {
      position: "2",
      wallet: "dhc52er6x87agshe",
      staked: "56382",
    },
    {
      position: "3",
      wallet: "dhc52rt6x87agshe",
      staked: "56382",
    },
    {
      position: "4",
      wallet: "dhc526x87tagshe",
      staked: "56382",
    },
    {
      position: "5",
      wallet: "dhc52r6x87agshe",
      staked: "56382",
    },
    {
      position: "6",
      wallet: "dhc526fx87agshe",
      staked: "56382",
    },
    {
      position: "7",
      wallet: "dhc526xg87agshe",
      staked: "56382",
    },
  ];

  const toggleTab = async (e: any) => {
    setActiveTab(+e.target.value);
  };

  const handleMyPosition = () => {};

  return (
    <div style={{ maxWidth: 538 }}>
      <IGOTopList
        topUsersList={topUsersList}
        texts={texts}
        myWallet="dhc52r6x87agshe"
        tabsList={tabsList}
        activeTab={activeTab}
        toggleTab={toggleTab}
      />
    </div>
  );
};
