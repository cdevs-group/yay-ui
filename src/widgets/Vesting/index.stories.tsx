import React, { useState } from "react";
import VestingWidget from "./VestingWidget";

export default {
  title: "Widgets/VestingWidget",
  component: [VestingWidget],
};

export const VestingWidgetComponent: React.FC = () => {
  const dataClaimTokens = {
    totalRaised: "10M YAY",
    total: "20M YAY",
  };

  const textsClaimTokens = {
    totalRaised: "Total raised",
    total: "Total $YAY",
    title: "You can claim tokens",
    button: "Claim tokens",
  };

  const handleClaimTokens = () => {};

  const dataCardsIndicators = [
    {
      text: "Your can claim",
      value: "2000000 $YAY",
    },
    {
      text: "Your round",
      value: "Seed sale",
    },
    {
      text: "Total raised",
      value: "1,000,000 $YAY",
    },
  ];

  const textsTakeGift = {
    title: "Take your gift",
    button: "Take gift",
    claimed: "Claimed",
  };

  const textsPoolz = {
    title: "You can claim your token on Poolz",
    description:
      "It seems, you’ve bought your tokens at Poolz Launchpad. Its not a big deal, just claim your tokens at Poolz ",
    button: "Claim tokens",
  };

  const [claimedGift, setClaimedGift] = useState(false);

  const handleTakeGift = () => {
    setClaimedGift(true);
  };

  return (
    <VestingWidget
      // canClaim
      dataClaimTokens={dataClaimTokens}
      textsClaimTokens={textsClaimTokens}
      handleClaimTokens={handleClaimTokens}
      dataCardsIndicators={dataCardsIndicators}
      textMarketplaceLink="Marketplace"
      linkMarketplace="http"
      handleTakeGift={handleTakeGift}
      textsTakeGift={textsTakeGift}
      textsPoolz={textsPoolz}
      claimedGift={claimedGift}
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
      disabledButtonClaimTokens
    />
  );
};
