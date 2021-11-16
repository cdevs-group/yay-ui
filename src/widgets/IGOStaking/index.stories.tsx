import React, { useState } from "react";
import IGOStake from "./IGOStake/IGOStake";
import { YAY_TOKEN } from "../../constants/images";

export default {
  title: "Widgets/IGOStake",
  argTypes: {},
};

export const IGOStakeBlock = () => {
  const [tabValue, setTabValue] = useState(0);

  const tabsList = ["25%", "50%", "75%", "100%"];
  const texts = {
    stakeTitle: "Stake",
    stakeDescription: "Lock YAY to unlock full potential (pun intended)",
    balance: "Available balance: ",
    buttonApprove: "Approve",
    buttonStake: "Stake",
    unstakeTitle: "Unstake",
    unstakeDescription: "To unstake, activate the cooldown",
    cooldownButton: "Cooldown",
    textTooltip: "To unstake, activate the cooldown",
    tooltip: "shfksdhkfv",
    totalStake: "Total staked",
    myStake: "My stake",
    avaible: "Avaiable tickets",
    tookPart: "Took part in IGOs",
  };

  const handleButton = () => {
    console.log("click");
  };
  const handleTab = (e: any) => {
    setTabValue(e.target.value);
  };
  return (
    <div>
      <IGOStake
        onUserInput={(input) => null}
        iconBalanceInput={YAY_TOKEN}
        disabledInput={false}
        balance="1000 yay"
        tabsList={tabsList}
        handleStake={handleButton}
        handleApprove={handleButton}
        disableApprove={false}
        handleTab={handleTab}
        disableStake={false}
        tabValue={tabValue}
        valueInput={0}
        handleCooldown={handleButton}
        texts={texts}
        cooldownDisabled
        time={53}
        totalValue="1212 YAY"
        myStakeValue="1212 YAY"
        avaibleValue="0.00001"
        tookPartValue="12"
      />
    </div>
  );
};
