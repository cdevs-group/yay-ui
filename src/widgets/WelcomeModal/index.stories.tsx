import React from "react";
import Button from "../../components/Button/Button";
import Flex from "../../components/Box/Flex";
import useWelcomeModal from "./useWelcomeModal";

export default {
  title: "Widgets/WelcomeModal",
  argTypes: {},
};

export const Welcome: React.FC = () => {
  const { onPresentWelcomeModal } = useWelcomeModal();
  return (
    <Flex>
      <Button onClick={onPresentWelcomeModal}>Open welcome modal</Button>
    </Flex>
  );
};
