import React from "react";
import CollectRoundWinningsModal from "./CollectRoundWinningsModal";

export default {
  title: "Widgets/CollectRoundWinningsModal",
  argTypes: {},
};

export const CollectWinningsModal: React.FC = () => {
  return (
    <div>
      <CollectRoundWinningsModal
        title="Collect Winnings"
        collectText="Collecting"
        bnbText="0,02 BNB"
        convert="$0,544"
        buttonText="Confirm"
      />
    </div>
  );
};
