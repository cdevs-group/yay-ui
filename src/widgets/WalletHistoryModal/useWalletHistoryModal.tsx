import React, { useState } from "react";
import { useModal } from "../Modal";
import WalletHistoryModal from "./WalletHistoryModal";

interface ReturnType {
  onPresentWalletHistoryModal: () => void;
}

const useWalletHistoryModal = (): ReturnType => {
  const transactionsList = [
    {
      number: "#001",
      link: "BSC to Avalanche",
      profit: "12,000,00 $YAY",
      status: true,
      linkHref: "asdfsf",
    },
  ];

  const textsBridge = {
    titleModal: "Your wallet",
    title: "Your address",
    network: "Network",
    wallet: "Wallet",
    newtworkName: "Binance Smart Chain",
    walletName: "Metamask",
    button: "Disconnect Wallet",
    completeText: "Copied",
    noRecentTransactions: "No recent transactions",
    transactionTitle: "Recent transactions",
    tabsList: ["Wallet", "Transactions"],
  };

  const [onPresentWalletHistoryModal] = useModal(
    <WalletHistoryModal
      account="hjwebfuy2438fbiu34bgouy34bfuyob34fouyb34"
      textsBridge={textsBridge}
      transactionsList={transactionsList}
      logout={() => {}}
    />
  );
  return { onPresentWalletHistoryModal };
};

export default useWalletHistoryModal;
