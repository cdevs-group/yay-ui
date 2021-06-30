import React from "react";
import CollectWinningsPopup from "./CollectWinningsPopup";

export default {
  title: "Widgets/CollectWinningsPopup",
  argTypes: {},
};

export const WinningsPopup: React.FC = () => {
  return (
    <div style={{ marginRight: 950, marginTop: 50 }}>
      <CollectWinningsPopup btnText="Collect Winnings" />
    </div>
  );
};
