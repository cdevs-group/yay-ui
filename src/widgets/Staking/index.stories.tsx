import React from "react";
import StakingCard from "./components/StakingCard/StakingCard";
import { YAY_TOKEN_LOGO, AVAX_LOGO } from "../../constants/images";

export default {
  title: "Widgets/Staking",
  argTypes: {},
};

export const StakingCardBlcok = () => {
  const texts = {
    total: "Total Staked",
    farming: "Farming APY",
    startDate: "Start date",
    endDate: "End date",
    yourStake: "Your stake",
    reward: "reward",
    deposit: "Deposit",
    claim: "Claim",
    withdraw: "Withdraw",
    exit: "Exit",
    withdrawAndClaim: "Withdraw and claim",
    andEarn: "and earn",
  };

  return (
    <StakingCard
      texts={texts}
      logoToken0={YAY_TOKEN_LOGO}
      logoToken1={AVAX_LOGO}
      tokenReward="YAY"
      startDate="24 Sep 2021 9:00 UTC"
      endDate="23 Jan 2022 9:00 UTC"
      yourStake="$0.00"
      reward="$0.00"
      lp="1LP-YAY - AVAX"
      pair="YAY-AVAX"
      total="$0"
      apy="0%"
      depositButtonProps={{ spin: true }}
      claimButtonProps={{ disabled: true }}
      withdrawButtonProps={{ disabled: true, spin: true }}
      // exitButtonProps={{spin:true}}
    />
  );
};
