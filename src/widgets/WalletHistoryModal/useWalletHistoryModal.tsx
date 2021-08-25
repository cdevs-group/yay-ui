import React, { useState } from "react";
import { useModal } from "../Modal";
import WalletHistoryModal from "./WalletHistoryModal";

interface ReturnType {
  onPresentWalletHistoryModal: () => void;
}

const useWalletHistoryModal = (): ReturnType => {
  const textsWallet = {
    title: "Your address",
    network: "Network",
    wallet: "Wallet",
    newtworkName: "Binance Smart Chain",
    walletName: "Metamask",
    address: "0x88259603-2f58ee92039d357307e3",
    button: "Disconnect Wallet",
    completeText: "Copied",
    noRecentTransactions: "No recent transactions",
  };

  const transactionsList = [
    {
      number: "#001",
      link: "BSC to Avalanche",
      profit: "12,000,00 $YAY",
      status: true,
    },
    {
      number: "#002",
      link: "Avalanche to BSC",
      status: false,
      profit: "Error",
    },
    {
      number: "#003",
      link: "Avalanche to BSC",
      status: true,
      profit: "12,000,00 $YAY",
    },
    {
      number: "#002",
      link: "Avalanche to BSC",
      status: false,
      profit: "Error",
    },
    {
      number: "#003",
      link: "Avalanche to BSC",
      status: true,
      profit: "12,000,00 $YAY",
    },
    {
      number: "#002",
      link: "Avalanche to BSC",
      status: false,
      profit: "Error",
    },
    {
      number: "#003",
      link: "Avalanche to BSC",
      status: true,
      profit: "12,000,00 $YAY",
    },
    {
      number: "#002",
      link: "Avalanche to BSC",
      status: false,
      profit: "Error",
    },
    {
      number: "#003",
      link: "Avalanche to BSC",
      status: true,
      profit: "12,000,00 $YAY",
    },
  ];

  const tabsList = ["Wallet", "Transactions"];

  const [onPresentWalletHistoryModal] = useModal(
    <WalletHistoryModal
      title="Your Wallet"
      tabsList={tabsList}
      textsWallet={textsWallet}
      disconnectHandler={() => {}}
      transactionTitle="Recent transactions"
      transactionsList={transactionsList}
    />
  );
  return { onPresentWalletHistoryModal };
};

export default useWalletHistoryModal;
