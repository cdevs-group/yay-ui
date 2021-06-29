import React, { useState } from "react";
import ExpiredCardBTC from "./ExpiredCardBTC";
import CardBTC from "./components/CardBTC";
import LiveCardBTC from "./LiveCardBTC";
import GhostCard from "../Card/GhostCard/GhostCard";
import CardFlipBTC from "./CardNext/CardFlipBTC";
import CardNextBTC from "./CardNext/CardNextBTC";
import SetPositionCardBTC from "./CardNext/SetPositionCardBTC";
import LoaderCard from "../Card/Loader";
import Loader from "../Card/Loader";
import Card from "../Card/Card";

export default {
  title: "Components/CardBTC",
  component: [ExpiredCardBTC, LiveCardBTC, SetPositionCardBTC, CardFlipBTC, CardNextBTC],
  argTypes: {},
};

export const ExpiredCardBTCBlockETH: React.FC = () => {
  const texts = {
    collection: "Collect Winnings",
    payout: "Payout",
    locked: "Locked Price",
    closed: "CLOSED PRICE",
    prize: "PRIZE POLL",
  };

  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <CardBTC
        negative
        leftContent="EXPIRED"
        rightContent="#001"
        payoutUp={1.03}
        payoutDown={5.03}
        colorNone
        time={2000}
        texts={texts}
      >
        <ExpiredCardBTC
          texts={texts}
          clodedBTC="400'597"
          lockedBRC="3200"
          closedETH="25'100"
          lockedETH="1200"
          prize="0'005"
        />
      </CardBTC>
    </div>
  );
};
export const ExpiredCardBTCBlockCheck: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <CardBTC
        negative
        live
        leftContent="EXPIRED"
        rightContent="#001"
        payoutUp={1.03}
        payoutDown={5.03}
        colorNone
        hasEnteredUp
        time={2000}
      >
        <ExpiredCardBTC clodedBTC="400'597" lockedBRC="3200" closedETH="25'100" lockedETH="1200" prize="0'005" />
      </CardBTC>
    </div>
  );
};
export const ExpiredCardBTCBlockETрCheck: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <CardBTC
        negative
        live
        leftContent="EXPIRED"
        rightContent="#001"
        payoutUp={1.03}
        payoutDown={5.03}
        colorNone
        hasEnteredDown
        time={2000}
      >
        <ExpiredCardBTC clodedBTC="400'597" lockedBRC="3200" closedETH="25'100" lockedETH="1200" prize="0'005" />
      </CardBTC>
    </div>
  );
};

export const ExpiredCardBTCBlock: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <CardBTC leftContent="EXPIRED" rightContent="#001" payoutUp={1.03} payoutDown={5.03} time={2000}>
        <ExpiredCardBTC clodedBTC="400'597" lockedBRC="3200" closedETH="25'100" lockedETH="1200" prize="0'005" btc />
      </CardBTC>
    </div>
  );
};

export const ExpiredCardBTCBlockWin: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <CardBTC live leftContent="EXPIRED" rightContent="#001" payoutUp={1.03} payoutDown={5.03} time={2000} btcWon>
        <ExpiredCardBTC clodedBTC="400'597" lockedBRC="3200" closedETH="25'100" lockedETH="1200" prize="0'005" btc />
      </CardBTC>
    </div>
  );
};

export const ExpiredCardBTCBlocETHkWin: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <CardBTC
        live
        negative
        leftContent="EXPIRED"
        rightContent="#001"
        payoutUp={1.03}
        payoutDown={5.03}
        time={2000}
        ethWon
      >
        <ExpiredCardBTC clodedBTC="400'597" lockedBRC="3200" closedETH="25'100" lockedETH="1200" prize="0'005" btc />
      </CardBTC>
    </div>
  );
};

export const LiveCardBTCBlock: React.FC = () => {
  const texts = {
    last: "LAST PRICE",
    locked: "Locked Price",
    prize: "PRIZE POLL",
  };

  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <CardBTC live leftContent="LIVE" rightContent="#001" payoutUp={1.03} payoutDown={5.03} time={2000}>
        <LiveCardBTC
          texts={texts}
          clodedBTC="400'597"
          lockedBRC="3200"
          closedETH="25'100"
          lockedETH="1200"
          prize="0'005"
          btc
        />
      </CardBTC>
    </div>
  );
};

export const LiveCardBTCBlockETH: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <CardBTC live negative leftContent="LIVE" rightContent="#001" payoutUp={1.03} payoutDown={5.03} time={2000}>
        <LiveCardBTC clodedBTC="400'597" lockedBRC="3200" closedETH="25'100" lockedETH="1200" prize="0'005" />
      </CardBTC>
    </div>
  );
};

export const CancelCardBTC: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <CardBTC
        live
        colorNone
        loader
        displayNone
        leftContent="CANCEL"
        rightContent="#001"
        payoutUp={1.03}
        payoutDown={5.03}
        time={2000}
      >
        <GhostCard text="Learn More" href="#" />
      </CardBTC>
    </div>
  );
};

export const WithLoaderBTC: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <CardBTC
        loader
        live
        colorNone
        displayNone
        leftContent="CANCEL"
        rightContent="#001"
        payoutUp={1.03}
        payoutDown={5.03}
        time={2000}
      >
        <Loader textTooltip="This round`s closing transactions has been submitted to the blockchain, and is awaiting confirmation" />
      </CardBTC>
    </div>
  );
};

export const NextCardBTC: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const text = { text1: "2000 YAY", title1: "Ready to harvest", text2: "Your Balance", title2: "3`000 YAY" };

  enum BetPosition {
    BULL = "Bull",
    BEAR = "Bear",
    HOUSE = "House",
  }
  const [state, setState] = useState({
    isSettingPosition: false,
    position: BetPosition.BULL,
    betMethod: "",
  });

  const { isSettingPosition, position } = state;

  const handleInputChange = (e: any) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  const handleBetMethod = () => {
    const newBetmethod = position === BetPosition.BULL ? "betBull" : "betBear";
    setState((prevState) => ({
      ...prevState,
      betMethod: newBetmethod,
      isSettingPosition: false,
    }));
  };

  const handleSetPosition = (newPosition) => {
    setState((prevState) => ({
      ...prevState,
      isSettingPosition: true,
      position: newPosition,
    }));
  };

  const handleBack = () =>
    setState((prevState) => ({
      ...prevState,
      isSettingPosition: false,
    }));

  const texts = {
    entered: "Entered",
    prize: "Prize Pool",
    payout: "Payout",
    setPosition: "Set Position",
    commit: "Commit",
  };

  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <CardFlipBTC isFlipped={state.isSettingPosition}>
        <CardNextBTC
          texts={texts}
          roundEpoch="round"
          time={200}
          payoutWin="payoutWin"
          payoutLose="payoutLose"
          pool="pool"
          hasEnteredUp
          hasEnteredDown={false}
          handleSetPosition={handleSetPosition}
          disabledButton={false}
          canEnterPosition
          negative
          ethButton="$ 128271123"
          btcButton="$232112"
        />
        <SetPositionCardBTC
          texts={texts}
          inputValue={inputValue}
          handleInputChange={handleInputChange}
          showFieldWarning={false}
          onBack={handleBack}
          // onSuccess={()=>alert('ok')}
          inputProps={{ disabled: false }}
          // {{ disabled: !account || isTxPending }}
        >
          <></>
        </SetPositionCardBTC>
      </CardFlipBTC>
    </div>
  );
};

export const LaterCardTextBTC: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Card
        live
        colorNone
        displayNone
        hide
        leftContent="LATER"
        rightContent="#001"
        payoutUp={1.03}
        payoutDown={5.03}
        time={2000}
      >
        <Loader />
      </Card>
    </div>
  );
};
