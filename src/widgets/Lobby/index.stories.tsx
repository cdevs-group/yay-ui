import React, { useState } from "react";
import LobbyNav from "./LobbyNav/LobbyNav";
import LobbyCreatModal from "./LobbyCreatModal/LobbyCreatModal";
import LobbyList from "./LobbyList/LobbyList";
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
    <LobbyNav
      handleApprove={() => {}}
      isApprove={false}
      handleCreate={handleCreate}
      handleJoin={handleJoin}
      texts={texts}
    />
  );
};

export const LobbyCreatModalBlock = () => {
  const texts = {
    title: "Create Lobby",
    tabsTitle: "Your bet",
    create: "Create Lobby",
    join: "Join Lobby",
    balance: "Available balance: ",
    error: "Insufficient balance to make bet",
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
      balance="50 YAY"
      isError={false}
      handleCreate={handleCreate}
      handleJoin={handleJoin}
      onDismiss={onDismiss}
      toggleTab={toggleTab}
      activeTab={activeTab}
      texts={texts}
      tabsList={tabsList}
      // propsCreateButton={{ spin: true }}
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
      isEnoughYay: false,
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
    notEnoughYAY: "Not enough YAY",
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
        isEnoughYay={true}
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

export const LobyHistoryItem = () => {
  const texts = {
    player: "Player",
    bet: "Bet",
    time: "Still time",
    waitResult: "Waiting for results",
    winner: "Collect Winnings",
    winnerMob: "Collect",
    withApponent: "Play",
    waitPlayer: "Waiting for player",
    win: "win",
    join: "Join now",
    yourScore: "Your score",
    opportunScore: "Opponent score",
    lose: "Lose",
    play: "Play",
  };

  const handleButton = (param: any) => {};
  const account = "0x213123123";

  const data = [
    {
      epoch: "2",
      gameName: "bla",
      open: false,
      creator: "0x213123123",
      joiner: "0xhsdgafkgds",
      joinerJoin: true,
      joinerJoinBlockTimeStamp: 1212,
      scoreCreator: "2323",
      scoreJoiner: "10",
      winner: "0x213123123",
      bet: "100",
      claimed: false,
      blockNumber: "100500",
      timestampBlock: 121221,
      creatorStartedGame: false,
      joinerStartedGame: false,
    },
    {
      epoch: "2",
      gameName: "bla",
      open: false,
      creator: "0x213123123",
      joiner: "0xhsdgafkgds",
      joinerJoin: true,
      joinerJoinBlockTimeStamp: 1212,
      scoreCreator: "2323",
      scoreJoiner: "121212",
      winner: "0x213123123",
      bet: "100",
      claimed: false,
      blockNumber: "100500",
      timestampBlock: 121221,
      creatorStartedGame: false,
      joinerStartedGame: false,
    },
    {
      epoch: "2",
      gameName: "bla",
      open: false,
      creator: "0x213123123",
      joiner: "0xhsdgafkgds",
      joinerJoin: true,
      joinerJoinBlockTimeStamp: 12112,
      scoreCreator: "",
      scoreJoiner: "10",
      winner: "0x213123123",
      bet: "100",
      claimed: true,
      blockNumber: "100500",
      timestampBlock: 121221,
      creatorStartedGame: false,
      joinerStartedGame: false,
    },
    {
      epoch: "2",
      gameName: "bla",
      open: false,
      creator: "0x213123123",
      joiner: "0xhsdgafkgds",
      joinerJoin: true,
      joinerJoinBlockTimeStamp: 1212,
      scoreCreator: "2323",
      scoreJoiner: "1123210",
      winner: "0x213123123",
      bet: "10",
      claimed: false,
      blockNumber: "100500",
      timestampBlock: 121221,
      creatorStartedGame: false,
      joinerStartedGame: false,
    },
    {
      epoch: "2",
      gameName: "bla",
      open: false,
      creator: "0x213123123",
      joiner: "0xhsdgafkgds",
      joinerJoin: true,
      joinerJoinBlockTimeStamp: 1212,
      scoreCreator: "2323",
      scoreJoiner: "",
      winner: "0x213123123",
      bet: "100",
      claimed: false,
      blockNumber: "100500",
      timestampBlock: 121221,
      creatorStartedGame: false,
      joinerStartedGame: false,
    },
    {
      epoch: "2",
      gameName: "bla",
      open: false,
      creator: "0x213123123",
      joiner: "0xhsdgafkgds",
      joinerJoin: true,
      joinerJoinBlockTimeStamp: 12112,
      scoreCreator: "2323",
      scoreJoiner: "",
      winner: "0x213123123",
      bet: "100",
      claimed: false,
      blockNumber: "100500",
      timestampBlock: 121221,
      creatorStartedGame: false,
      joinerStartedGame: false,
    },
    {
      epoch: "2",
      gameName: "bla",
      open: false,
      creator: "0x213123123",
      joiner: "0xhsdgafkgds",
      joinerJoin: true,
      joinerJoinBlockTimeStamp: 12112,
      scoreCreator: "2323",
      scoreJoiner: "10",
      winner: "0x213123123",
      bet: "100",
      claimed: true,
      blockNumber: "100500",
      timestampBlock: 121221,
      creatorStartedGame: false,
      joinerStartedGame: false,
    },
  ];

  return (
    <div>
      {data.map(
        (item, i) => (
          // <div key={i} style={{marginTop: '20px'}}>
          <LobbyListItem
            history
            isEnoughYay={true}
            epoch={item.epoch}
            creator={item.creator}
            bet={item.bet}
            // текущее время - (joinerJoinBlockTimeStamp + 4 часа)
            startTime={item.joinerJoinBlockTimeStamp + 14400 - 15612}
            texts={texts}
            handleButton={handleButton}
            yourScore={account === item.creator ? item.scoreCreator : item.scoreJoiner}
            apponentScore={account === item.creator ? item.scoreJoiner : item.scoreCreator}
            winner={
              item.scoreCreator !== "" &&
              item.scoreJoiner !== "" &&
              account === item.creator &&
              +item.scoreCreator > +item.scoreJoiner
            }
            claimed={item.claimed}
            lose={
              item.scoreCreator !== "" &&
              item.scoreJoiner !== "" &&
              account === item.creator &&
              +item.scoreCreator < +item.scoreJoiner
            }
          />
        )
        // </div>
      )}
    </div>
  );
};
