import React from "react";
import ProfileCard from "./ProfileCard";
import Achievement from "./Achievement";
import { ROKET1 } from "../../constants/images";

export default {
  title: "Widgets/Profile",
  argTypes: {},
};

export const ProfileCardWidget: React.FC = () => {
  return (
    <div style={{ marginTop: 50 }}>
      <ProfileCard />
    </div>
  );
};

export const AchievementSolo = () => {
  return (
    <div style={{ display: "grid", gap: "0 7px", gridTemplateColumns: "1fr 1fr" }}>
      <Achievement
        image={ROKET1}
        // count={2}
        countMax="10"
        title="Great loser"
        description="lose 10 times in a row"
        complete
        collectText="Collect Reward"
        collectTextMob="Collect"
      />
      <Achievement
        image={ROKET1}
        count={2}
        countMax="10"
        title="Great loser"
        description="lose 10 times in a row"
        complete={false}
        collectText="Collect Reward"
        collectTextMob="Collect"
      />
    </div>
  );
};
