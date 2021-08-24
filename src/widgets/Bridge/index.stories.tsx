import React, { useState } from "react";
import styled from "styled-components";
import BridgeStep1 from "./BridgeStep1";
import BridgeStep2 from "./BridgeStep2";
import { Timer } from "../../components/Timer";
import useBridgeModal from "./useBridgeModal";
import { Text } from "../../components/Text";
import { AvalancheIcon, BnbIcon } from "../../components/Svg";
import YAYIcon from "../../components/Svg/Icons/YAYIcon";

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
    nameNetwork1: "Binance Smart Chain",
    nameNetwork2: "Avalanche",
    buttonProofOfState: "Proof of State",
    currencyInput: "YAY",
    commit: "From",
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
          iconNetwork1={<BnbIcon />}
          iconNetwork2={<AvalancheIcon />}
          handleOpenProofOfAssets={() => {}}
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
          iconNetwork1={<BnbIcon />}
          iconNetwork2={<AvalancheIcon />}
          handleOpenProofOfAssets={() => {}}
          handleButtonToMax={() => {}}
          texts={texts}
          value={value}
          onUserInput={onUserInput}
          iconBalanceInput={<YAYIcon />}
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
    waiting: "Waiting for BSC",
    start: "Start",
    final: "Final",
  };
  const transferredValue = {
    token: "12,000 YAY",
    fiat: "~ $10.00",
  };
  const gasPriceTextNetwork1 = {
    value: "0.00015 BNB",
    fiat: "~ $0.15",
  };
  const gasPriceTextNetwork2 = {
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
          timer1={435}
          timer2={34534}
          isLoadGas
          textsProgress2={textsProgress2}
          textsProgress1={textsProgress1}
          addTokenHandler={() => {}}
          stepsText={stepsText}
          gasPriceTextNetwork1={gasPriceTextNetwork1}
          gasPriceTextNetwork2={gasPriceTextNetwork2}
          isLoadGasNetwork2
          isLoadTimeNetwork1
          isLoadGasNetwork1
          isLoadTimeNetwork2
        />
      </div>
      <div style={{ marginTop: "20px" }}>
        <BridgeStep2
          transferredValue={transferredValue}
          texts={texts}
          progress1={3}
          progress2={0}
          timer1={342324}
          timer2={23}
          textsProgress2={textsProgress2}
          textsProgress1={textsProgress1}
          addTokenHandler={() => {}}
          stepsText={stepsText}
          gasPriceTextNetwork1={gasPriceTextNetwork1}
          gasPriceTextNetwork2={gasPriceTextNetwork2}
          isLoadGasNetwork2={false}
          isLoadTimeNetwork1
          isLoadGasNetwork1
          isLoadTimeNetwork2={false}
        />
      </div>
      <div style={{ marginTop: "20px" }}>
        <BridgeStep2
          transferredValue={transferredValue}
          texts={texts}
          progress1={4}
          timer1={334}
          timer2={100}
          isError
          progress2={20}
          textsProgress2={textsProgress2}
          textsProgress1={textsProgress1}
          addTokenHandler={() => {}}
          stepsText={stepsText}
          gasPriceTextNetwork1={gasPriceTextNetwork1}
          gasPriceTextNetwork2={gasPriceTextNetwork2}
          isLoadGasNetwork2
          isLoadTimeNetwork1={false}
          isLoadGasNetwork1={false}
          isLoadTimeNetwork2
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
