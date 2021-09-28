import React, { useState } from "react";
import LobbyNav from "./LobbyNav/LobbyNav";
import LobbyCreatModal from "./LobbyCreatModal/LobbyCreatModal";
import LobbyList from "./LobbyList/LobbyList";
import { AVATAR_PLAYER, AVATAR_PLAYER_2 } from "../../constants/images";
import LobbyListItem from "./LobbyList/LobbyListItem";

export default {
  title: "Widgets/Lobby",
  argTypes: {},
};

export const LobbyNavBlock = () => {
  const texts = {
    create: "Create Lobby",
    join: "Join Lobby",
    approve: "Approve token",
  };

  const handleJoin = () => alert("join");
  const handleCreate = () => alert("creat");

  return (
    <LobbyNav handleApprove={() => {}} isApprove handleCreate={handleCreate} handleJoin={handleJoin} texts={texts} />
  );
};

export const LobbyCreatModalBlock = () => {
  const texts = {
    title: "Create Lobby",
    tabsTitle: "Your bet",
    create: "Create Lobby",
    join: "Join Lobby",
  };
  const tabsList = ["0.01", "0.1", "0.5", "1"];
  const [activeTab, setActiveTab] = useState(0);

  const onDismiss = () => {};
  const toggleTab = async (e: any) => {
    setActiveTab(+e.target.value);
  };

  const handleJoin = () => alert("join");
  const handleCreate = () => alert("creat");

  return (
    <LobbyCreatModal
      handleCreate={handleCreate}
      handleJoin={handleJoin}
      onDismiss={onDismiss}
      toggleTab={toggleTab}
      activeTab={activeTab}
      texts={texts}
      tabsList={tabsList}
      propsCreateButton={{ spin: true }}
    />
  );
};

export const LobbyListBlock = () => {
  const data = [
    {
      epoch: 4,
      creator: "0x049900f4204604c52BF76Ba61e72a43e04B0AA54",
      bet: "10000000000000000",
      startTime: null,
      status: "CREATED",
    },
    {
      epoch: 4,
      creator: "0x049900f4204604c52BF76Ba61e72a43e04B0AA54",
      bet: "10000000000000000",
      startTime: null,
      status: "CREATED",
    },
    {
      epoch: 4,
      creator: "0x049900f4204604c52BF76Ba61e72a43e04B0AA54",
      bet: "10000000000000000",
      startTime: null,
      status: "CREATED",
    },
    {
      epoch: 4,
      creator: "0x049900f4204604c52BF76Ba61e72a43e04B0AA54",
      bet: "10000000000000000",
      startTime: null,
      status: "CREATED",
    },
    {
      epoch: 4,
      creator: "0x049900f4204604c52BF76Ba61e72a43e04B0AA54",
      bet: "10000000000000000",
      startTime: null,
      status: "CREATED",
    },
    {
      epoch: 4,
      creator: "0x049900f4204604c52BF76Ba61e72a43e04B0AA54",
      bet: "10000000000000000",
      startTime: null,
      status: "CREATED",
    },
    {
      epoch: 4,
      creator: "0x049900f4204604c52BF76Ba61e72a43e04B0AA54",
      bet: "10000000000000000",
      startTime: null,
      status: "CREATED",
    },
  ];

  const texts = {
    player: "Player",
    bet: "Bet",
    time: "Still time",
    waitResult: "Waiting for results",
    winner: "Collect Winnings",
    winnerMob: "Collect",
    withApponent: "Play",
    waitPlayer: "Waiting for player",
    join: "Join now",
  };

  const handleButton = (param: any) => {};

  return <LobbyList handleButton={handleButton} texts={texts} data={data} />;
};

export const LobyItem = () => {
  const texts = {
    player: "Player",
    bet: "Bet",
    time: "Still time",
    waitResult: "Waiting for results",
    winner: "Collect Winnings",
    winnerMob: "Collect",
    withApponent: "Play",
    waitPlayer: "Waiting for player",
    join: "Join now",
  };

  const handleButton = (param: any) => {};

  return (
    <div>
      <LobbyListItem
        epoch={4}
        creator="0x049900f4204604c52BF76Ba61e72a43e04B0AA54"
        bet={10000000000000000}
        startTime={null}
        status="CREATED"
        texts={texts}
        handleButton={handleButton}
      />
    </div>
  );
};
