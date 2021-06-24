import React, { useState } from "react";
import CardsBalance from "./CardBalance/CardsBalance";
import CardsProducts from "./CardsProduct/CardsProducts";
import CardFlip from "./CarnNext/CardFlip";
import ValueRow from "./CarnNext/ValueRow";
import { Button } from "../Button";
import ButtonsBlock from "./CarnNext/ButtonsBlock";
import SetPositionCard from "./CarnNext/SetPositionCard";
import Timer from "../Timer/Timer";
import TopContent from "./CarnNext/TopContent";
import LaterCard from "./CardLater/LaterCard";

export default {
  title: "Components/Cards",
  component: [CardsBalance, CardsProducts],
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
            <ButtonsBlock betMethod={state.betMethod} pool="$ 12536145">
              <Button
                variant="green"
                width="100%"
                onClick={() => handleSetPosition(BetPosition.BULL)}
                // disabled={!canEnterPosition || isBufferPhase}
              >
                UP
              </Button>
              <Button
                variant="pink"
                width="100%"
                onClick={() => handleSetPosition(BetPosition.BEAR)}
                // disabled={!canEnterPosition || isBufferPhase}
              >
                DOWN
              </Button>
            </ButtonsBlock>

            <ValueRow vector="DOWN" value="2.23x" />
          </>
          <SetPositionCard
            inputValue={inputValue}
            handleBetMethod={handleBetMethod}
            handleInputChange={handleInputChange}
            showFieldWarning={false}
            onBack={handleBack}
            // onSuccess={()=>alert('ok')}
            inputProps={{ disabled: false }}
            // {{ disabled: !account || isTxPending }}
            position={position}
          />
        </CardFlip>
      </div>
      <div style={{ marginTop: "100px", marginLeft: "100px" }}>
        <LaterCard color="#4CEE3E" rightContent="#003" time={6616} />
      </div>
    </div>
  );
};

export const CardsProductsPreciew: React.FC = () => {
  return (
    <div>
      <CardsProducts />
    </div>
  );
};
