import React, { useState } from "react";
import BridgeStep1 from "./BridgeStep1";
import BridgeStep2 from "./BridgeStep2";
import { Timer } from "../../components/Timer";
import useBridgeModal from "./useBridgeModal";
import { Text } from "../../components/Text";
import styled from "styled-components";

export default {
  title: "Widgets/Bridge",
  argTypes: {},
};

export const BridgeStep1Block: React.FC = () => {
  const [value, onUserInput] = useState<string | number>("");
  const [fromChange, setFromChange] = useState(false);
  const texts = {
    from: "From",
    to: "To",
    fee: "Estimated transfer fee:",
    button: "Transfer",
    bsc: "Binance Smart Chain",
    avalanche: "Avalanche",
  };
  const balanceText = {
    message1: "Available balance:",
    message2: "12,200,000 YAY",
  };
  const switchHandler = () => {
    setFromChange(!fromChange);
  };

  return (
    <div>
      <div style={{ marginBottom: "50px" }}>
        <BridgeStep1
          handleButton={() => {}}
          fromChange={fromChange}
          switchHandler={switchHandler}
          balanceText={balanceText}
          fee="~0.00001BNB"
          handleButtonToMax={() => {}}
          texts={texts}
          value={value}
          onUserInput={onUserInput}
        />
      </div>
      <div style={{ marginBottom: "50px" }}>
        <BridgeStep1
          handleButton={() => {}}
          fromChange={fromChange}
          switchHandler={switchHandler}
          balanceText={balanceText}
          fee="~0.00001BNB"
          inputError
          handleButtonToMax={() => {}}
          texts={texts}
          value={value}
          onUserInput={onUserInput}
        />
      </div>
    </div>
  );
};

export const BridgeStep2Block = () => {
  const textsProgress1 = {
    waiting: "Waiting for ",
    error: "Fatal Error",
    confirmations: "confirmations",
    checkIt: "Check it",
    start: "Start",
    step1: "1/35",
    step2: "2/35",
    finish: "Final",
  };
  const textsProgress2 = {
    waiting: "Waiting for Binance Smart Chain",
    start: "Start",
    final: "Final",
  };
  const transferredValue = {
    token: "12,000 YAY",
    fiat: "~ $10.00",
  };
  const gasPriceText = {
    value: "0.00015 BNB",
    fiat: "~ $0.15",
  };

  const texts = {
    title: "Transaction status",
    token: "Token",
    addToken: "Add Token",
    amount: "Amount transferred",
    network: "Network",
    timer: "Timer",
    coast: "Coast of GAS",
    bsc: "BSC",
    avalanche: "Avalanche",
  };

  const stepsText = ["start", "1/25", "3/32", "finish"];

  return (
    <div>
      <div style={{ marginTop: "20px" }}>
        <BridgeStep2
          transferredValue={transferredValue}
          texts={texts}
          progress1={1}
          progress2={0}
          timer1="00:00"
          timer2="00:00"
          isLoadGas
          textsProgress2={textsProgress2}
          textsProgress1={textsProgress1}
          addTokenHandler={() => {}}
          stepsText={stepsText}
          gasPriceText={gasPriceText}
        />
      </div>
      <div style={{ marginTop: "20px" }}>
        <BridgeStep2
          transferredValue={transferredValue}
          texts={texts}
          progress1={3}
          progress2={0}
          timer1="01:22"
          timer2="00:00"
          textsProgress2={textsProgress2}
          textsProgress1={textsProgress1}
          addTokenHandler={() => {}}
          stepsText={stepsText}
          gasPriceText={gasPriceText}
        />
      </div>
      <div style={{ marginTop: "20px" }}>
        <BridgeStep2
          transferredValue={transferredValue}
          texts={texts}
          progress1={4}
          timer1="04:42"
          timer2="01:10"
          isError
          progress2={20}
          textsProgress2={textsProgress2}
          textsProgress1={textsProgress1}
          addTokenHandler={() => {}}
          stepsText={stepsText}
          gasPriceText={gasPriceText}
        />
      </div>
    </div>
  );
};

export const BrightProofBlock = () => {
  const { onPresentBridgeModal } = useBridgeModal();
  return (
    <Button as="button">
      <Button onClick={onPresentBridgeModal}>Proof of assets</Button>
    </Button>
  );
};
const Button = styled(Text)`
  background: none;
  border: none;
  cursor: pointer;
`;
