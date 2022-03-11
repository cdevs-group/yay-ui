import React from "react";
import Flex from "../../components/Box/Flex";
import { Button } from "../../components/Button";
import { GhostsIcon } from "../../constants/images";
import { useModal } from "../Modal";
import PausedErrorModals from "./PausedErrorModals";
import ErrorModal from "./ErrorModal";

export default {
  title: "Widgets/PausedErrorModals",
  argTypes: {},
};

export const Welcome: React.FC = () => {
  const [onPresentModal] = useModal(
    <ErrorModal
      title="Paused"
      descriptionTop={<b>After you add tokens, there will be an automatic claim.</b>}
      descriptionBottom="Your reward will be charged to your wallet and you will have a recalculation of interest on the updated amount of LP YAY/BUSD tokens."
      buttonText="Show history"
      img={GhostsIcon}
      hideCloseButton={false}
      loaderButton
      disabledButton
      imgProps={{ marginTop: 0, maxWidth: 135 }}
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
