import React, { useState } from "react";
import LobbyNav from "./LobbyNav/LobbyNav";
import LobbyCreatModal from "./LobbyCreatModal/LobbyCreatModal";
import LobbyList from "./LobbyList/LobbyList";
import { AVATAR_PLAYER, AVATAR_PLAYER_2 } from "../../constants/images";

export default {
  title: "Widgets/Lobby",
  argTypes: {},
};

export const LobbyNavBlock = () => {
  const texts = {
    create: "Create Lobby",
    join: "Join Lobby",
  };

  const handleJoin = () => alert("join");
  const handleCreate = () => alert("creat");

  return <LobbyNav handleCreate={handleCreate} handleJoin={handleJoin} texts={texts} />;
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
      playerImg1: AVATAR_PLAYER,
      playerImg2: AVATAR_PLAYER_2,
      player: "0xbdda50183d817c3289f895a4472eb475967dc980",
      bet: "5",
      // button: "Collect Winnings",
      type: "winner",
      ready: true,
      timer: 11723,
      result: "win",
      gameAddress: "0xbdda50183d817c3289f895a4472eb475967dc980",
    },
    {
      playerImg1: AVATAR_PLAYER,
      playerImg2: AVATAR_PLAYER_2,
      player: "0xbdda50183d817c3289f895a4472eb475967dc980",
      bet: "1",
      // button: "Join now",
      type: "join",
      ready: true,
      timer: 0,
      gameAddress: "0xbdda50183d817c3289f895a4472eb475967dc980",
    },
    {
      playerImg1: AVATAR_PLAYER,
      playerImg2: AVATAR_PLAYER_2,
      player: "0xbdda50183d817c3289f895a4472eb475967dc980",
      bet: "0.1",
      // button: "Waiting for player",
      type: "waitPlayer",
      ready: false,
      gameAddress: "0xbdda50183d817c3289f895a4472eb475967dc980",
    },
    {
      playerImg1: AVATAR_PLAYER,
      playerImg2: AVATAR_PLAYER_2,
      player: "0xbdda50183d817c3289f895a4472eb475967dc980",
      bet: "0.1",
      // button: "Waiting for results",
      type: "waitResult",
      ready: false,
      timer: 0,
      gameAddress: "0xbdda50183d817c3289f895a4472eb475967dc980",
    },
    {
      playerImg1: AVATAR_PLAYER,
      playerImg2: AVATAR_PLAYER_2,
      player: "0xbdda50183d817c3289f895a4472eb475967dc980",
      bet: "0.1",
      // button: "Play",
      type: "withApponent",
      ready: true,
      timer: 1111,
      gameAddress: "0xbdda50183d817c3289f895a4472eb475967dc980",
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
