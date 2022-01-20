import React from "react";
import { BrowserRouter } from "react-router-dom";
import ProfileCard from "./ProfileCard";
import Achievement from "./Achievement";
import RefferalCard from "./RefferalCard";
import AccountProfileBlock from "./AccountProfileBlock";
import { ROKET1, BNB2 } from "../../constants/images";
import coins from "./images/coins.png";
import rocket from "./images/rocket.png";
import skull from "./images/skull.png";
import win from "./images/win.png";

export default {
  title: "Widgets/Profile",
  argTypes: {},
};

const textsCard = {
  title: "User Name",
  coins: "Coins",
  games: "games",
  wins: "wins",
  losses: "losses",
  edit: "Edit Profile",
  refferal: "Refferal Program",
  sponsor: "Sponsor",
  kyc: "KYC",
  kycVerified: "Verified",
  kycNotVerified: "Not Verified",
  tooltip: "Kyc info",
  refferalListBtn: "Referral list",
  comingSoon: "Coming Soon",
};

export const ProfileCardWidget: React.FC = () => {
  return (
    <BrowserRouter>
      <div style={{ marginTop: 50, maxWidth: 373 }}>
        <ProfileCard
          linkAccount="dd"
          linkRefferal={`https://play.yay.games/sponsor/6x3438e324938438e32438e329828x46R65`}
          texts={textsCard}
          account="6x3438e324938438e32438e329828x46R65"
          awards={[coins, win, skull, rocket]}
          sponsor="0x3asadsasasd2112312112321312312321312"
          verified
          linkRefferalList="/"
          linkEdit="/"
          linkKYC="/"
          disabledEditButton
          comingSoonEditButton
        />
      </div>
      <div style={{ marginTop: 50, maxWidth: 373 }}>
        <ProfileCard
          linkAccount="dd"
          linkRefferal={`https://play.yay.games/sponsor/6x3438e324938438e32438e329828x46R65`}
          texts={textsCard}
          account="6x3438e324938438e32438e329828x46R65"
          awards={[coins, win, skull, rocket]}
          sponsor="0x3asadsasasd2112312112321312312321312"
          linkEdit="/"
          linkKYC="/"
          linkRefferalList="/"
        />
      </div>
    </BrowserRouter>
  );
};

export const Cards = () => {
  return (
    <div style={{ display: "grid", gap: "20px", gridTemplateColumns: "repeat(6, 1fr)" }}>
      <Achievement
        image={ROKET1}
        count={0}
        reward="12 YAY"
        countMax="10"
        title="Great loser"
        description="lose 10 times in a row"
        progress
        collectText="Collect Reward"
        collectTextMob="Collect"
        network={BNB2}
        backTitle="Entered the games"
        fullDescription="lose 10 times in a rolose 10 times in a rolose 10 times in a rolose 10 times in a rolose 10 times in a ro"
      />
      <Achievement
        image={ROKET1}
        count={0}
        reward="12 YAY"
        countMax="10"
        title="Great loser"
        description="lose 10 times in a row"
        progress={false}
        collectText="Collect Reward"
        collectTextMob="Collect"
        network={BNB2}
        backTitle="Entered the games"
        fullDescription="lose 10 times in a rolose 10 times in a rolose 10 times in a rolose 10 times in a rolose 10 times in a ro"
      />
      <RefferalCard
        image={ROKET1}
        title="Doodle Pump"
        description="From 0x343..987"
        collectText="Collect Reward"
        collectTextMob="Collect"
        reward="12 YAY"
        disabledButton
        loadingButton
        created="11.01.2022 23:03"
      />

      <RefferalCard
        image={ROKET1}
        reward="12 YAY"
        title="Great loser"
        description="lose 10 times in a row"
        collectText="Collect Reward"
        collectTextMob="Collect"
      />
    </div>
  );
};

export const AccountProfile: React.FC = () => {
  return (
    <AccountProfileBlock
      linkAccount="dd"
      texts={textsCard}
      account="6x3438e324938438e32438e329828x46R65"
      marginTop={50}
    />
  );
};
