import React, { useState } from "react";
import styled from "styled-components";
import { Text } from "../..";
import IGOTopList from "./components/IGOTopList";
import CardTopIndicator from "./components/CardTopIndicator";

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

  const indicatorList = [
    { name: "Your pool", value: "MAIN" },
    { name: "Your position", value: "2" },
    { name: "Your pool share", value: "1380,00000 YAY" },
    { name: "Your tier", value: "Hercules" },
  ];
  return (
    <>
      <Text fontSize="25px" lineHeight="32px" letterSpacing="0.03em" textAlign="center" mb="61px">
        Opportunities start here <br /> Together we're unstoppable, thank you for joining!
      </Text>
      <CardsTop>
        {indicatorList.map((el, i) => (
          <CardTopIndicator {...el} />
        ))}
      </CardsTop>
      <Cards>
        <IGOTopList
          topUsersList={topUsersList}
          texts={texts}
          myWallet="dhc52r6x87agshe"
          tabsList={tabsList}
          activeTab={activeTab}
          toggleTab={toggleTab}
        />
        <IGOTopList topUsersList={topUsersList} texts={texts} myWallet="dhc52r6x87agshe" />
      </Cards>
    </>
  );
};

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;
  ${({ theme }) => theme.mediaQueries.xl} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CardsTop = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;
  margin-bottom: 20px;
  ${({ theme }) => theme.mediaQueries.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${({ theme }) => theme.mediaQueries.xl} {
    grid-template-columns: repeat(4, 1fr);
  }
`;
