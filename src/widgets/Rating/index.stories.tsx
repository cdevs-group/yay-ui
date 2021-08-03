import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import CardProduct from "../../components/Cards/CardsProduct/components/CardProduct";
import GamesTable from "./GamesTable";
import PlayerList from "./PlayerList";
import ListWrap from "./components/ListWrap";
import COINS from "../../components/Cards/image/coins.png";
import BALANCE from "../../components/Cards/image/balance.png";
import HERO from "../../components/Cards/image/hero.png";
import TOKEN from "./img/token.svg";
import TabsTypeList from "./components/TabsTypeList";

export default {
  title: "Widgets/GamesTable",
  component: [GamesTable, ListWrap],
};

export const GamesTableBlock: React.FC = () => {
  enum TypeList {
    TABLE,
    LIST,
  }
  const [inputValue, setInputValue] = useState<string | number>("");
  const [typeList, setTypeList] = useState(TypeList.LIST);

  const typeTabsList = ["table", "list"];
  const gamesList = [
    {
      img: <CardProduct small title="BTC vs ETH" bg="pink" img={BALANCE} />,
      value: "BTCvsETH",
    },
    {
      img: <CardProduct small title="Up or DOwn" bg="green" img={COINS} />,
      value: "UpOrDown",
    },
    {
      img: <CardProduct small title="Bold Point" bg="blue" right="-10px" bottom="-3px" img={HERO} />,
      value: "Bold",
    },
  ];

  const handleInput = (e: any) => {
    setInputValue(e.target.value);
  };

  const toggleTypeList = (e: any) => {
    setTypeList(e.target.value);
  };
  return (
    <BrowserRouter>
      <ListWrap
        handleInput={handleInput}
        inputValue={inputValue}
        placeholder="Search"
        toggleTypeList={toggleTypeList}
        typeTabsList={typeTabsList}
      >
        <GamesTable texts="Choose Game" gamesList={gamesList} />
      </ListWrap>
    </BrowserRouter>
  );
};

export const PlayerListBlock: React.FC = () => {
  enum TabsValue {
    AMOUNT,
    WINNING,
    GAMES,
  }
  const [activeTab, setActiveTab] = useState(TabsValue.AMOUNT);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const tabsList = ["Amount", "Winning", "Games"];
  const texts = {
    title: "Players",
    playerName: "Player Name",
    games: "Games",
  };
  const playersList = [
    {
      position: "1",
      token: TOKEN,
      name: "dhc526x87agshe",
      games: "56382",
    },
    {
      position: "2",
      token: TOKEN,
      name: "dhc526x87agshe",
      games: "56382",
    },
    {
      position: "3",
      token: TOKEN,
      name: "dhc526x87agshe",
      games: "56382",
    },
    {
      position: "4",
      token: TOKEN,
      name: "dhc526x87agshe",
      games: "56382",
    },
    {
      position: "5",
      token: TOKEN,
      name: "dhc526x87agshe",
      games: "56382",
    },
    {
      position: "6",
      token: TOKEN,
      name: "dhc526x87agshe",
      games: "56382",
    },
    {
      position: "7",
      token: TOKEN,
      name: "dhc526x87agshe",
      games: "56382",
    },
  ];

  const toggleTab = async (e: any) => {
    setActiveTab(+e.target.value);
  };

  const togglePage = async (e: any) => {
    setCurrentPage(+e.target.value);
  };

  const myPosstionButton = () => {};

  return (
    <ListWrap
      activeTab={activeTab}
      toggleTab={toggleTab}
      tabsList={tabsList}
      players
      myPosstionButton={myPosstionButton}
      texts={{ button: "My position" }}
      length={25}
      togglePage={togglePage}
      currentPage={currentPage}
    >
      <PlayerList playersList={playersList} texts={texts} />
    </ListWrap>
  );
};

export const TabsTypeListBlock = () => {
  enum TypeList {
    TABLE,
    LIST,
  }
  const [typeList, setTypeList] = useState(TypeList.LIST);

  const typeTabsList = ["table", "list"];

  const toggleTypeList = (e: any) => {
    setTypeList(e.target.value);
  };

  return <TabsTypeList toggleTypeList={toggleTypeList} typeTabsList={typeTabsList} />;
};
