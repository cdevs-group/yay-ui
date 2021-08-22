import React from "react";
import Button from "../../components/Button/Button";
import Flex from "../../components/Box/Flex";
import useWalletHistoryModal from "./useWalletHistoryModal";

export default {
  title: "Widgets/WalletHistoryModal",
  argTypes: {},
};

export const WalletHistoryModalBlock: React.FC = () => {
  const { onPresentWalletHistoryModal } = useWalletHistoryModal();
  return (
    <Flex>
      <Button onClick={onPresentWalletHistoryModal}>Wallet</Button>
    </Flex>
  );
};
