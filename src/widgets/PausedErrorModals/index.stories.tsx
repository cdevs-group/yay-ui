import React from "react";
import Flex from "../../components/Box/Flex";
import PausedErrorModals from "./PausedErrorModals";

export default {
  title: "Widgets/PausedErrorModals",
  argTypes: {},
};

export const Welcome: React.FC = () => {
  return (
    <Flex>
      <div style={{ marginRight: 50 }}>
        <PausedErrorModals
          title="Paused"
          descriptionTop="Prediction markets have been paused due to an error. All open positions have been canceled."
          descriptionBottom="You can reclaim any funds entered into existing positions via the History tab on this page."
          buttonText="Show history"
        />
      </div>
      <div>
        <PausedErrorModals
          title="Error"
          descriptionTop="This page can`t be displayed right now due to an error. Please check back soon."
          buttonText="Show history"
          errorPadding
          buttonVariant="purple"
        />
      </div>
    </Flex>
  );
};
