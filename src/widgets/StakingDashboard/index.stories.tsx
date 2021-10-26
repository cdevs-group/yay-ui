import React from "react";
import StakingDashboard from "./StakingDashboard";
import { CercleIcon } from "../../components/Svg";

export default {
  title: "Widgets/StakingDashboard",
  component: [StakingDashboard],
};

export const StakingDashboardWidtdet: React.FC = () => {
  const dataClaimTokens = {
    totalRaised: "10M YAY",
    total: "30M YAY",
    left: "20M YAY",
  };

  const textsClaimTokens = {
    left: "Left",
    totalRaised: "Total raised",
    total: "Total ",
    title: "You can claim  $YAY",
    button: "Claim $YAY",
  };

  const handleClaimTokens = () => {};

  const dataCardsIndicators = [
    {
      text: "Your can claim",
      value: "2000000 $YAY",
    },
    {
      text: "Unlock BPT",
      value: "TBA",
    },
    {
      text: "Total raised",
      value: "1,000,000 $YAY",
    },
  ];

  const textClaimBlock = {
    title: "You can claim $BPT",
    description: "Release time: TBA",
    button: "Claim $BPT",
  };

  const handleClaimBlock = () => null;

  return (
    <StakingDashboard
      canClaim={true}
      dataClaimTokens={dataClaimTokens}
      textsClaimTokens={textsClaimTokens}
      handleClaimTokens={handleClaimTokens}
      dataCardsIndicators={dataCardsIndicators}
      textMarketplaceLink="Marketplace"
      linkMarketplace="http"
      textClaimBlock={textClaimBlock}
      handleClaimBlock={handleClaimBlock}
      dataTimer={{
        textFront: "Next stage after",
        textBack: "Your vesting stage",
        textStage: "Stage 1",
        timeSecond: 30000,
        totalSeconds: 50000,
        textsTime: {
          days: "d",
          hours: "h",
          minutes: "m",
          seconds: "s",
        },
      }}
      endIconButtonClaimTokens={<CercleIcon spin fill="none" />}
      // endIconButtonClaimBlock={<CercleIcon spin fill="none" />}
    />
  );
};
