import React, { useState } from "react";
import BridgeWidgetStep1 from "./BridgeWidgetStep1";
import { AvalancheIcon, BnbIcon, YAYIcon } from "../../components/Svg";
import ApproveStakingBPTBlock from "./ApproveStakingBPT";
import HeaderBridgeStaking from "./components/HeaderBridgeStaking";
import { Text } from "../../components/Text";

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

export const ApproveStakingBPT = () => {
  const [isLoad, setIsLoad] = useState(false);

  const texts = {
    titleToken: "Token",
    nameToken: "YAY",
    totalStake: "Total staked",
    totalBPT: "Total BP Tokens",
    totalAVAX: "Total AVAX Tokens",
    buttonApprove: "Approve",
    waitingApprove: "Waiting for approval",
    infoLink: "See Token Info",
    contactLink: "View Contract",
    addTokenLink: "Add to Metamask",
  };

  return (
    <ApproveStakingBPTBlock
      isLoad={isLoad}
      handleApprove={() => setIsLoad(!isLoad)}
      handleAddToken={() => {}}
      texts={texts}
      stakingBalance="1000 $ YAY"
      BPTBalance="1000 $BPT"
      AVAXBalance="0.1 $AVAX"
    />
  );
};

export const HeaderBridgeStakingBlock = () => {
  return (
    <div>
      <HeaderBridgeStaking maxWidth="516px" margin="0 auto 25px" title="Step 1">
        <Text>
          Join{" "}
          <Text color="green" as="span">
            more than 80 talented
          </Text>{" "}
          people around the world. Our opportunities are all{" "}
          <Text color="green" as="span">
            100% remote.
          </Text>
        </Text>
      </HeaderBridgeStaking>
    </div>
  );
};
