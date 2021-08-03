import React from "react";
import GiftPopup from "./GiftPopup";

export default {
  title: "Widgets/GiftPopup",
  argTypes: {},
};

export const WinningsPopup: React.FC = () => {
  return (
    <div style={{ marginRight: 950, marginTop: 50 }}>
      <GiftPopup btnText="A Gift for you!" />
    </div>
  );
};
