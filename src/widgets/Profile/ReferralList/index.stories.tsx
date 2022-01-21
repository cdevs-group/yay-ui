import React, { useState } from "react";
import { ReferralList } from "./index";

export default {
  title: "Widgets/ReferralList",
};

export const ReferralListBlock = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const togglePaginationPage = async (e: any) => {
    setCurrentPage(+e.target.value);
  };

  const data = [
    {
      ref: "0x412123432iudbuyweyufbeuwygfasd2341",
      loginName: "RostislavB1",
      earn: 0,
      time: "12.12.2021 21:43",
    },
    {
      ref: "0x412123432iudbuyweyufbeuwygfasd2341",
      loginName: "RostislavB2",
      earn: 0,
      time: "12.12.2021 21:43",
    },
    {
      ref: "0x412123432iudbuyweyufbeuwygfasd2341",
      loginName: "RostislavB3",
      earn: 0,
      time: "12.12.2021 21:43",
    },
    {
      ref: "0x412123432iudbuyweyufbeuwygfasd2341",
      loginName: "RostislavB4",
      earn: 0,
      time: "12.12.2021 21:43",
    },
    {
      ref: "0x412123432iudbuyweyufbeuwygfasd2341",
      loginName: "RostislavB5",
      earn: 0,
      time: "12.12.2021 21:43",
    },
    {
      ref: "0x412123432iudbuyweyufbeuwygfasd2341",
      loginName: "RostislavB6",
      earn: 0,
      time: "12.12.2021 21:43",
    },
    {
      ref: "0x412123432iudbuyweyufbeuwygfasd2341",
      loginName: "RostislavB7",
      earn: 0,
      time: "12.12.2021 21:43",
    },
    {
      ref: "0x412123432iudbuyweyufbeuwygfasd2341",
      loginName: "RostislavB8",
      earn: 0,
      time: "12.12.2021 21:43",
    },
    {
      ref: "0x412123432iudbuyweyufbeuwygfasd2341",
      loginName: "RostislavB9",
      earn: 0,
      time: "12.12.2021 21:43",
    },
    {
      ref: "0x412123432iudbuyweyufbeuwygfasd2341",
      loginName: "RostislavB10",
      earn: 0,
      time: "12.12.2021 21:43",
    },
    {
      ref: "0x412123432iudbuyweyufbeuwygfasd2341",
      loginName: "RostislavB11",
      earn: 0,
      time: "12.12.2021 21:43",
    },
    {
      ref: "0x412123432iudbuyweyufbeuwygfasd2341",
      loginName: "RostislavB12",
      earn: 0,
      time: "12.12.2021 21:4313",
    },
    {
      ref: "0x412123432iudbuyweyufbeuwygfasd2341",
      loginName: "RostislavB14",
      earn: 0,
      time: "12.12.2021 21:4313",
    },
    {
      ref: "0x412123432iudbuyweyufbeuwygfasd2341",
      loginName: "RostislavB15",
      earn: 0,
      time: "12.12.2021 21:4313",
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
    itemLogin: "Login",
    itemEarn: "All earned",
    itemTime: "Time",
  };
  return (
    <div>
      <ReferralList
        pagination={{
          togglePage: togglePaginationPage,
          currentPage,
          countPerPage: 4,
        }}
        earnValue="436 000 YAY"
        miniValue="436 000 YAY"
        predictionValue="436 000 YAY"
        nftValue="436 000 YAY"
        texts={texts}
        data={data}
        handleBack={() => null}
        keys={{
          txHashKey: "ref",
          loginKey: "loginName",
          earnedKey: "earn",
          dateKey: "time",
        }}
      />
    </div>
  );
};
