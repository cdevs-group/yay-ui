import React, { useEffect, useMemo, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import CardProduct from "../../components/Cards/CardsProduct/components/CardProduct";
import GamesTable from "./GamesTable";
import PlayerList from "./PlayerList";
import ListWrap from "./components/ListWrap";
import COINS from "../../components/Cards/image/coins.png";
import BALANCE from "../../components/Cards/image/balance.png";
import HERO from "../../components/Cards/image/hero.png";
import TabsTypeList from "./components/TabsTypeList";
import GamesList from "./GamesList";

export default {
  title: "Widgets/GamesTable",
  component: [GamesTable, ListWrap],
};

export const GamesTableBlock: React.FC = () => {
  enum TypeList {
    TABLE = "table",
    LIST = "list",
  }
  const [inputValue, setInputValue] = useState<string | number>("");
  const [typeList, setTypeList] = useState(TypeList.LIST);

  const typeTabsList = ["table", "list"];
  const gamesList = [
    {
      position: 1,
      img: <CardProduct small title="BTC vs ETH" bg="pink" img={BALANCE} isNotLink />,
      value: "BTC vs ETH",
      playedOnce: "565642",
      imgSrc: BALANCE,
    },
    {
      position: 2,
      img: <CardProduct small title="Up or DOwn" bg="green" img={COINS} isNotLink />,
      value: "Up or Down",
      playedOnce: "565642",
      imgSrc: COINS,
    },
    {
      position: 3,
      img: <CardProduct closed small title="Bold Point" bg="blue" right="-10px" bottom="-3px" img={HERO} />,
      value: "Bold Point",
      playedOnce: "565642",
      disabled: true,
      imgSrc: HERO,
    },
  ];

  const handleInput = (e: any) => {
    setInputValue(e.target.value);
  };

  const toggleTypeList = (e: any) => {
    setTypeList(e.target.value);
  };

  const newGamesList = useMemo(() => {
    if (inputValue) {
      return gamesList.filter((el) => el.value.toLowerCase().includes(inputValue.toString().toLowerCase()));
    }

    return gamesList;
  }, [inputValue]);

  const handleSelectValue = (val: string) => {
    console.log(val);
  };

  return (
    <BrowserRouter>
      <ListWrap
        handleInput={handleInput}
        inputValue={inputValue}
        placeholder="Search"
        toggleTypeList={toggleTypeList}
        typeTabsList={typeTabsList}
        title="Best scores"
        // nameInput="search"
      >
        {typeList === TypeList.TABLE ? (
          <GamesTable texts={{ title: "Choose Game" }} gamesList={newGamesList} handleSelectValue={handleSelectValue} />
        ) : (
          <GamesList
            texts={{ title: "Choose Game", gameName: "Game Name", playedOnce: "Played Once" }}
            gamesList={newGamesList}
            handleSelectValue={handleSelectValue}
          />
        )}
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
    button: "My position",
  };
  const playersList = [
    {
      position: "1",
      name: "dhc526x87agshe",
      score: "56382",
    },
    {
      position: "2",
      name: "dhc526x87agshe",
      score: "56382",
    },
    {
      position: "3",
      name: "dhc526x87agshe",
      score: "56382",
    },
    {
      position: "4",
      name: "dhc526x87agshe",
      score: "56382",
    },
    {
      position: "5",
      name: "dhc526x87agshe",
      score: "56382",
    },
    {
      position: "6",
      name: "dhc526x87agshe",
      score: "56382",
    },
    {
      position: "7",
      name: "dhc526x87agshe",
      score: "56382",
    },
  ];

  const toggleTab = async (e: any) => {
    setActiveTab(+e.target.value);
  };

  const togglePage = async (e: any) => {
    setCurrentPage(+e.target.value);
  };

  const handleMyPosition = () => {};

  return (
    <ListWrap
      activeTab={activeTab}
      toggleTab={toggleTab}
      tabsList={tabsList}
      players
      myPositionButton={handleMyPosition}
      texts={{ button: "My position" }}
      length={25}
      togglePage={togglePage}
      currentPage={currentPage}
      // nameInput="search"
      title="Best scores"
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
