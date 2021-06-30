import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import CardsBalance from "./CardBalance/CardsBalance";
import CardsProducts from "./CardsProduct/CardsProducts";
import CardFlip from "./CardNext/CardFlip";
import ValueRow from "./CardNext/ValueRow";
import { Button } from "../Button";
import ButtonsBlock from "./CardNext/ButtonsBlock";
import SetPositionCard from "./CardNext/SetPositionCard";
import Timer from "../Timer/Timer";
import TopContent from "./CardNext/TopContent";
import LaterCard from "./CardLater/LaterCard";
import CardNext from "./CardNext/CardNext";

export default {
  title: "Components/Cards",
  component: [CardsBalance, CardsProducts, CardNext],
  argTypes: {},
};

export const CardsBalancePreview: React.FC = () => {
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

  const textsButtons = {
    entered: "Entered",
    prize: "Prize Pool",
    enter: "Enter",
  };

  return (
    <div>
      <CardsBalance text={text} />
      <div style={{ marginTop: "100px", marginLeft: "100px" }}>
        <p style={{ fontSize: "22px", color: "#fff", marginBottom: "20px" }}>Auth</p>
        <CardFlip isFlipped={state.isSettingPosition}>
          <>
            <TopContent rightContent="#002">
              <Timer color="white" time={200} />
            </TopContent>
            <ValueRow vector="UP" value="1.23x" />
            <ButtonsBlock
              texts={textsButtons}
              pool="$ 12536145"
              hasEnteredDown
              hasEnteredUp={false}
              handleSetPosition={handleSetPosition}
              disabledButton={false}
            />

            <ValueRow vector="DOWN" value="2.23x" />
          </>
          <SetPositionCard
            inputValue={inputValue}
            texts="Set Position"
            inputText="Commit"
            handleInputChange={handleInputChange}
            showFieldWarning={false}
            onBack={handleBack}
            // onSuccess={()=>alert('ok')}
            inputProps={{ disabled: false }}
            // {{ disabled: !account || isTxPending }}
          >
            <></>
          </SetPositionCard>
        </CardFlip>
      </div>
      <div style={{ marginTop: "100px", marginLeft: "100px" }}>
        <LaterCard color="#4CEE3E" rightContent="#003" time={6616} />
      </div>
      <div style={{ marginTop: "100px", marginLeft: "100px" }}>
        <CardFlip isFlipped={state.isSettingPosition}>
          <CardNext
            textsRow="Payout"
            textsButton={textsButtons}
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
          />
          <SetPositionCard
            inputValue={inputValue}
            handleInputChange={handleInputChange}
            showFieldWarning={false}
            onBack={handleBack}
            texts="Set Position"
            inputText="Commit"
            // onSuccess={()=>alert('ok')}
            inputProps={{ disabled: false }}
            // {{ disabled: !account || isTxPending }}
          >
            <></>
          </SetPositionCard>
        </CardFlip>
      </div>
    </div>
  );
};

export const CardsProductsPreciew: React.FC = () => {
  return (
    <BrowserRouter>
      <CardsProducts />
    </BrowserRouter>
  );
};
