import React, { useState } from "react";
import ApproveStakingBPT from "./ApproveStakingBPT";

export default {
  title: "Widgets/AproveStakingBPT",
  argTypes: {},
};

export const ApproveStakingBPTBlock = () => {
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
    <ApproveStakingBPT
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
