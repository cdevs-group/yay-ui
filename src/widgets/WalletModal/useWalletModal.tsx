import React from "react";
import { useModal } from "../Modal";
import ConnectModal from "./ConnectModal";
import AccountModal from "./AccountModal";
import { Login } from "./types";

interface ReturnType {
  onPresentConnectModal: () => void;
  onPresentAccountModal: () => void;
}

interface TextsAccount {
  title: string;
  copy: string;
  button: string;
  view: string;
}

interface TextConnect {
  title: "Сonnect wallet";
  link: "Learn how connect";
}

const useWalletModal = (
  login: Login,
  logout: () => void,
  account?: string,
  textsAccount?: TextsAccount,
  textConnect?: TextConnect
): ReturnType => {
  const textsAccountDefault = {
    copy: "Copy",
    title: "Your wallet",
    button: "Logout",
    view: "View on BscScan",
  };
  
  const textConnectDefault = {
    title: "Сonnect wallet",
    link: "Learn how connect",
  };

  const [onPresentConnectModal] = useModal(<ConnectModal texts={textConnect || textConnectDefault} login={login} />);
  const [onPresentAccountModal] = useModal(
    <AccountModal texts={textsAccount || textsAccountDefault} account={account || ""} logout={logout} />
  );
  return { onPresentConnectModal, onPresentAccountModal };
};

export default useWalletModal;
