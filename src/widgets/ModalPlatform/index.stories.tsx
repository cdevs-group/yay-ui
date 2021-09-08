import React from "react";
import Button from "../../components/Button/Button";
import Flex from "../../components/Box/Flex";
import useModalPlatform from "./useModalPlatform";

export default {
  title: "Widgets/ModalPlatform",
  argTypes: {},
};

export const Platform: React.FC = () => {
  const { onPresentModalPlatform } = useModalPlatform();
  return (
    <Flex>
      <Button onClick={onPresentModalPlatform}>Open welcome modal</Button>
    </Flex>
  );
};
