import React from "react";
import ProfileCard from "./ProfileCard";
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
};

export const ProfileCardWidget: React.FC = () => {
  return (
    <div style={{ marginTop: 50 }}>
      <ProfileCard
        link="dd"
        texts={textsCard}
        account="6x3438e324938438e32438e329828x46R65"
        awards={[coins, win, skull, rocket]}
      />
    </div>
  );
};
