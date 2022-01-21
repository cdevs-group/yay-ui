import React from "react";
import Button from "../../components/Button/Button";
import Flex from "../../components/Box/Flex";
import { useModal } from "../Modal";
import ShareModal from "./ShareModal";

export default {
  title: "Widgets/ShareModal",
  argTypes: {},
};

export const Default: React.FC = () => {
  const [onPresentModal] = useModal(
    <ShareModal copyLink="dkvndfk" texts={{ title: "Results Sharing ", copyLink: "Copy Link" }} />
  );
  return (
    <Flex>
      <Button onClick={onPresentModal}>Open share modal</Button>
    </Flex>
  );
};
