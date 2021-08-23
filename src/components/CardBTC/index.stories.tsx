import React, { useState } from "react";
import ExpiredCardBTC from "./ExpiredCardBTC";
import CardBTC from "./components/CardBTC";
import LiveCardBTC from "./LiveCardBTC";
import GhostCard from "../Card/GhostCard/GhostCard";
import CardFlipBTC from "./CardNext/CardFlipBTC";
import CardNextBTC from "./CardNext/CardNextBTC";
import SetPositionCardBTC from "./CardNext/SetPositionCardBTC";
import LoaderCardText from "./components/LoaderCardText";
import Loader from "../Card/Loader";
import Card from "../Card/Card";
import BalanceBlock from "./components/BalanceBlock";
import { CloseIcon } from "../Svg";

export default {
  title: "Components/CardBTC",
  component: [ExpiredCardBTC, LiveCardBTC, SetPositionCardBTC, CardFlipBTC, CardNextBTC, BalanceBlock],
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
          closedBTC="400'597"
          lockedBTC="3200"
          closedETH="25'100"
          lockedETH="1200"
          prize="0'005"
          percentBTC="+3,5%"
          percentETH="+3,5%"
          btcLider
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
        <ExpiredCardBTC closedBTC="400'597" lockedBTC="3200" closedETH="25'100" lockedETH="1200" prize="0'005" />
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
        <ExpiredCardBTC closedBTC="400'597" lockedBTC="3200" closedETH="25'100" lockedETH="1200" prize="0'005" />
      </CardBTC>
    </div>
  );
};

export const ExpiredCardBTCBlock: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <CardBTC leftContent="EXPIRED" rightContent="#001" payoutUp={1.03} payoutDown={5.03} time={2000}>
        <ExpiredCardBTC
          closedBTC="400'597"
          lockedBTC="3200"
          closedETH="25'100"
          lockedETH="1200"
          prize="0'005"
          ethUp
          btcLider
        />
      </CardBTC>
    </div>
  );
};

export const ExpiredCardBTCBlockWin: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <CardBTC live leftContent="EXPIRED" rightContent="#001" payoutUp={1.03} payoutDown={5.03} time={2000} btcWon>
        <ExpiredCardBTC closedBTC="400'597" lockedBTC="3200" closedETH="25'100" lockedETH="1200" prize="0'005" btcUp />
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
        <ExpiredCardBTC closedBTC="400'597" lockedBTC="3200" closedETH="25'100" lockedETH="1200" prize="0'005" ethUp />
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
          closedBTC="400'597"
          lockedBTC="3200"
          closedETH="25'100"
          lockedETH="1200"
          prize="0'005"
          btcUp
          ethUp
          btcLider
        />
      </CardBTC>
    </div>
  );
};

export const LiveCardBTCBlockETH: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <CardBTC live negative leftContent="LIVE" rightContent="#001" payoutUp={1.03} payoutDown={5.03} time={2000}>
        <LiveCardBTC
          closedBTC="400'597"
          lockedBTC="3200"
          closedETH="25'100"
          lockedETH="1200"
          prize="0'005"
          percentBTC="+3,5%"
          percentETH="+3,5%"
          btcLider
        />
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
        <LoaderCardText textTooltip="This round`s closing transactions has been submitted to the blockchain, and is awaiting confirmation" />
      </CardBTC>
    </div>
  );
};

export const NextCardBTC: React.FC = () => {
  const [inputValue, setInputValue] = useState("");

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

  const handleInputChange = (e: any) => {
    e.preventDefault();
    setInputValue(e.target.value);
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
  };

  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <CardFlipBTC isFlipped={state.isSettingPosition}>
        <CardNextBTC
          roundEpoch="round"
          time={200}
          payoutWin="payoutWin"
          payoutLose="payoutLose"
          pool="pool"
          hasEnteredUp={false}
          hasEnteredDown={false}
          handleSetPosition={handleSetPosition}
          disabledButton={false}
          ethButton="$ 128271123"
          btcButton="$ 121221232112"
        />
        <SetPositionCardBTC
          texts="Set Position"
          inputText="Commit"
          textsButtons={{ prize: "PRIZE POOL" }}
          inputValue={inputValue}
          onUserInput={handleInputChange}
          showFieldWarning={false}
          onBack={handleBack}
          handlePercentChange={() => ({})}
          inputProps={{ disabled: false }}
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

export const BalanceBlockItem = () => <BalanceBlock btc value="$ 213213123" />;

export const BalanceBlockItemETH = () => <BalanceBlock value="$ 213123" />;
