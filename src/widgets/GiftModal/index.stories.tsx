import React from "react";
import Button from "../../components/Button/Button";
import Flex from "../../components/Box/Flex";
import useGigtModal from "./useGigtModal";

export default {
  title: "Widgets/ModalGift",
  argTypes: {},
};

export const Gift: React.FC = () => {
  const { onPresentWelcomeModal } = useGigtModal();
  return (
    <Flex>
      <Button onClick={onPresentWelcomeModal}>A Gift for you!</Button>
    </Flex>
  );
};
