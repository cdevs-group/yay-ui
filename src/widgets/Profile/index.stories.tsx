import React from "react";
import ProfileCard from "./ProfileCard";

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
