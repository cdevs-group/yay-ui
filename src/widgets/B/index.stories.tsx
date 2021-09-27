import React, { useState } from "react";
import BridgeWidgetStep1 from "./BridgeWidgetStep1";
import { AvalancheIcon, BnbIcon, YAYIcon } from "../../components/Svg";

export default {
  title: "Widgets/BridgeNew",
  argTypes: {},
};

export const BridgeWidgetStep1Block: React.FC = () => {
  const [value, onUserInput] = useState<string | number>("");

  const texts = {
    from: "From",
    to: "To",
    nameNetwork1: "Binance Smart Chain",
    nameNetwork2: "Avalanche",
    buttonLeft: "Enable Bridge",
    buttonTransfer: "Transfer",
    commit: "From",
    currency: "YAY",
  };

  return (
    <div>
      <div style={{ marginBottom: "50px" }}>
        <BridgeWidgetStep1
          tabs={["5000", "25000", "50000"]}
          texts={texts}
          iconNetwork1={<BnbIcon />}
          iconNetwork2={<AvalancheIcon />}
          iconBalanceInput={<YAYIcon />}
          onUserInput={onUserInput}
          value={value}
          handleButtonLeft={() => {}}
          handleButtonTransfer={() => {}}
          disabledBtnLeft={false}
          disabledBtnTransfer
        />
      </div>
    </div>
  );
};
