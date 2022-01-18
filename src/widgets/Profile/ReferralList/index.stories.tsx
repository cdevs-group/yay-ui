import React from "react";
import { ReferralList } from "./index";

export default {
  title: "Widgets/ReferralList",
};

export const ReferralListBlock = () => {
  const data = [
    {
      ref: "0x412123432iudbuyweyufbeuwygfasd2341",
      type: "Mini Games",
      earn: 0,
      time: "12.12.2021 21:43",
    },
    {
      ref: "0x412123432iudbuyweyufbeuwygfasd2341",
      type: "Mini Games",
      earn: 0,
      time: "12.12.2021 21:43",
    },
    {
      ref: "0x412123432iudbuyweyufbeuwygfasd2341",
      type: "Mini Games",
      earn: 0,
      time: "12.12.2021 21:43",
    },
    {
      ref: "0x412123432iudbuyweyufbeuwygfasd2341",
      type: "Mini Games",
      earn: 0,
      time: "12.12.2021 21:43",
    },
  ];

  const texts = {
    buttonBack: "Back to Referral page",
    topRef: "Ref Earned",
    topMini: "Mini game earned",
    topPrediction: "Prediction earned",
    topNft: "NFT marketplace earned",
    referralTitle: "Referral list",
    itemRef: "Referral TX",
    itemType: "Type",
    itemEarn: "All earned",
    itemTime: "Time",
  };
  return (
    <div>
      <ReferralList
        togglePage={async (e: any) => console.log("click")}
        currentPage={2}
        length={20}
        earnValue="436 000 YAY"
        miniValue="436 000 YAY"
        predictionValue="436 000 YAY"
        nftValue="436 000 YAY"
        texts={texts}
        data={data}
        handleBack={() => null}
      />
    </div>
  );
};
