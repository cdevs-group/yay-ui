import React from "react";
import { useModal } from "../Modal";
import ConnectModal from "./ConnectModal";
import AccountModal from "./AccountModal";
import { Login } from "./types";

interface ReturnType {
  onPresentConnectModal: () => void;
  onPresentAccountModal: () => void;
}

const useWalletModal = (login: Login, logout: () => void, account?: string): ReturnType => {
  const textsAccount = {
    copy: "Copy",
    title: "Your wallet",
    button: "Logout",
    view: "View on BscScan",
  };
  const textConnect = {
    title: "Сonnect wallet",
    link: "Learn how connect",
  };

  const [onPresentConnectModal] = useModal(<ConnectModal texts={textConnect} login={login} />);
  const [onPresentAccountModal] = useModal(
    <AccountModal texts={textsAccount} account={account || ""} logout={logout} />
  );
  return { onPresentConnectModal, onPresentAccountModal };
};

export default useWalletModal;
