import React from "react";
import ProfileCard from "./ProfileCard";
import Achievement from "./Achievement";
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
};

export const ProfileCardWidget: React.FC = () => {
  return (
    <div style={{ marginTop: 50, maxWidth: 373 }}>
      <ProfileCard
        linkAccount="dd"
        linkRefferal={`https://play.yay.games/sponsor/6x3438e324938438e32438e329828x46R65`}
        texts={textsCard}
        account="6x3438e324938438e32438e329828x46R65"
        awards={[coins, win, skull, rocket]}
      />
    </div>
  );
};

export const AchievementSolo = () => {
  return (
    <div style={{ display: "grid", gap: "20px", gridTemplateColumns: "repeat(6, 1fr)" }}>
      <Achievement
        image={ROKET1}
        count={0}
        countMax="10"
        title="Great loser"
        description="lose 10 times in a row"
        progress
        collectText="Collect Reward"
        collectTextMob="Collect"
        network={BNB2}
        fullDescription="lose 10 times in a rolose 10 times in a rolose 10 times in a rolose 10 times in a rolose 10 times in a ro"
      />

      <Achievement
        image={ROKET1}
        title="Great loser"
        description="lose 10 times in a row"
        collectText="Collect Reward"
        collectTextMob="Collect"
        refferal
        refferalReward="12 YAY"
        disabledButton
        loadingButton
      />

      <Achievement
        image={ROKET1}
        count={2}
        countMax="10"
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
