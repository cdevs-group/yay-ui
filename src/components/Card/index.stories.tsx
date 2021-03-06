import React, { useState } from "react";
import ExpiredCard from "./ExpiredCard";
import LiveCard from "./LiveCard";
import LoaderCard from "./Loader";
import Card from "./Card";
import { CercleIcon } from "../Svg";
import { Button } from "../Button";
import GhostCard from "./GhostCard/GhostCard";
import CardFlip from "./CardNext/CardFlip";
import CardNext from "./CardNext/CardNext";
import SetPositionCard from "./CardNext/SetPositionCard";

export default {
  title: "Components/Card",
  component: [ExpiredCard, LiveCard, LoaderCard, GhostCard],
  argTypes: {},
};

export const GhostCardBlock: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Card
        live
        leftContent="CANCEL"
        rightContent="#001"
        payoutUp={1.03}
        payoutDown={5.03}
        displayNone
        colorNone
        time={2000}
        loader
      >
        <GhostCard href="#" />
      </Card>
    </div>
  );
};

export const ExpiredNAuth: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Card
        disabledTimer
        leftContent="EXPIRED"
        rightContent="#001"
        payoutUp={1.03}
        payoutDown={5.03}
        negative
        time={2000}
      >
        <ExpiredCard negative closedCount="400`597" linePrice="0`654" lockedPrice="1`200" prize="0`678" />
      </Card>
    </div>
  );
};

export const ExpiredAuth: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Card leftContent="EXPIRED" rightContent="#001" payoutUp={1.03} payoutDown={5.03} time={2000}>
        <ExpiredCard closedCount="400`597" linePrice="0`654" lockedPrice="1`200" prize="0`678" />
      </Card>
    </div>
  );
};

export const CollectWinnings: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Card
        leftContent="EXPIRED"
        rightContent="#001"
        payoutUp={1.03}
        payoutDown={5.03}
        showBtnWinnings
        time={2000}
        btnWinnings={
          <Button variant="green" width="100%">
            Collect Winnings
          </Button>
        }
      >
        <ExpiredCard closedCount="400`597" linePrice="0`654" lockedPrice="1`200" prize="0`678" />
      </Card>
    </div>
  );
};

export const ResultUpDownCard: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Card
        leftContent="EXPIRED"
        rightContent="#001"
        payoutUp={1.03}
        payoutDown={5.03}
        hasEnteredUp
        hasEnteredDown
        time={2000}
      >
        <ExpiredCard closedCount="400`597" linePrice="0`654" lockedPrice="1`200" prize="0`678" />
      </Card>
    </div>
  );
};

export const CardLiveNAuth: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Card live negative leftContent="LIVE" rightContent="#001" payoutUp={1.03} payoutDown={5.03} time={2000}>
        <LiveCard negative closedCount="400`597" linePrice="0`654" lockedPrice="1`200" prize="0`678" />
      </Card>
    </div>
  );
};

export const CardLiveAuth: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Card live leftContent="LIVE" rightContent="#001" payoutUp={1.03} payoutDown={5.03} time={2000}>
        <LiveCard closedCount="400`597" linePrice="0`654" lockedPrice="1`200" prize="0`678" />
      </Card>
    </div>
  );
};

export const LiveUpDownCard: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Card
        live
        negative
        leftContent="LIVE"
        rightContent="#001"
        payoutUp={1.03}
        payoutDown={5.03}
        hasEnteredUp
        time={2000}
      >
        <LiveCard negative closedCount="400`597" linePrice="0`654" lockedPrice="1`200" prize="0`678" />
      </Card>
    </div>
  );
};

export const CardLoader: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Card live leftContent={<CercleIcon fill="none" spin />} rightContent="#001" displayNone colorNone time={2000}>
        <LoaderCard />
      </Card>
    </div>
  );
};

export const CardNxetUpOrDown: React.FC = () => {
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
    enterUp: "Enter UP",
    prize: "Prize Pool",
    enterDown: "Enter DOWN",
    payout: "Payout",
  };

  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <CardFlip isFlipped={state.isSettingPosition}>
        <CardNext
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
        />
        <SetPositionCard
          inputValue={inputValue}
          onUserInput={handleInputChange}
          showFieldWarning={false}
          onBack={handleBack}
          texts="Set Position"
          inputText="Commit"
          handlePercentChange={() => ({})}
          inputProps={{ disabled: false }}
        >
          <></>
        </SetPositionCard>
      </CardFlip>
    </div>
  );
};

export const CardLaterBlock: React.FC = () => {
  return (
    <Card live hide leftContent="LATER" rightContent="#001" displayNone colorNone time={2000} color="green">
      <LoaderCard />
    </Card>
  );
};
