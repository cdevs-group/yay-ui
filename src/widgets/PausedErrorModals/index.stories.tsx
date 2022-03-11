import React from "react";
import Flex from "../../components/Box/Flex";
import { Button } from "../../components/Button";
import { GhostsIcon } from "../../constants/images";
import { useModal } from "../Modal";
import PausedErrorModals from "./PausedErrorModals";

export default {
  title: "Widgets/PausedErrorModals",
  argTypes: {},
};

export const Welcome: React.FC = () => {
  const [onPresentModal] = useModal(
    <PausedErrorModals
      title="Paused"
      descriptionTop={
        <b>Prediction markets have been paused due to an error. All open positions have been canceled.</b>
      }
      descriptionBottom="You can reclaim any funds entered into existing positions via the History tab on this page."
      buttonText="Show history"
      img={GhostsIcon}
      hideCloseButton={false}
      loaderButton
      disabledButton
    />
  );

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
          marginImg="20px 0"
        />
      </div>
      <div>
        <Button onClick={onPresentModal}>Open</Button>
      </div>
    </Flex>
  );
};
