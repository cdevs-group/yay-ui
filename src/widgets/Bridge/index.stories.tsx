import React, { useState } from "react";
import BridgeStep1 from "./BridgeStep1";
import BridgeStep2 from "./BridgeStep2";

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
          toMax={() => {}}
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
          toMax={() => {}}
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
  return (
    <div>
      <BridgeStep2 step={2} textsProgress1={textsProgress1} />
    </div>
  );
};
