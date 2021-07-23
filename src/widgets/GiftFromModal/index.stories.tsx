import React from "react";
import Button from "../../components/Button/Button";
import Flex from "../../components/Box/Flex";
import useGiftFromModal from "./useGiftFromModal";

export default {
  title: "Widgets/ModalFromGift",
  argTypes: {},
};

export const Gift: React.FC = () => {
  const { onPresentWelcomeModal } = useGiftFromModal();
  return (
    <Flex>
      <Button onClick={onPresentWelcomeModal}>A Gift for you!</Button>
    </Flex>
  );
};
