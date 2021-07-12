import React from "react";
import { useModal } from "../Modal";
import ConnectModal from "./ConnectModal";
import AccountModal from "./AccountModal";
import { Login } from "./types";

interface ReturnType {
  onPresentConnectModal: () => void;
  onPresentAccountModal: () => void;
}

export interface TextsAccount {
  title: string;
  copy: string;
  button: string;
  view: string;
  copied: string;
}

interface TextConnect {
  title: string;
  link: string;
}

const useWalletModal = (
  login: Login,
  logout: () => void,
  textsAccount: TextsAccount,
  textConnect: TextConnect,
  account?: string,
): ReturnType => {
  const [onPresentConnectModal] = useModal(<ConnectModal texts={textConnect} login={login} />);
  const [onPresentAccountModal] = useModal(
    <AccountModal texts={textsAccount} account={account || ""} logout={logout} />
  );
  return { onPresentConnectModal, onPresentAccountModal };
};

export default useWalletModal;
