import React from "react";
import { useModal } from "../Modal";
import ConnectModal from "./ConnectModal";
import AccountModal from "./AccountModal";
import { Login } from "./types";
import AccountVestingModal from "./AccountVestingModal";

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
  yayBalance?: string;
  address?: string;
  tabs?: Array<string>;
  recentTransactions?: string;
  claimed?: string;
}

export interface TextsConnect {
  title: string;
  link: string;
}

const useWalletModal = (
  login: Login,
  logout: () => void,
  textsAccount: TextsAccount,
  textsConnect: TextsConnect,
  network?: string,
  account?: string,
  hrefLearnHow?: string,
  vesting?: boolean,
  yayBalance?: string | number,
  dataTransactions?: Array<any>,
  handleClaimed?: any
): ReturnType => {
  const [onPresentConnectModal] = useModal(
    <ConnectModal texts={textsConnect} login={login} hrefLearnHow={hrefLearnHow} network={network} />
  );
  const [onPresentAccountModal] = useModal(
    !vesting ? (
      <AccountModal texts={textsAccount} account={account || ""} logout={logout} />
    ) : (
      <AccountVestingModal
        texts={textsAccount}
        account={account || ""}
        logout={logout}
        yayBalance={yayBalance}
        dataTransactions={dataTransactions}
        handleClaimed={handleClaimed}
      />
    )
  );
  return { onPresentConnectModal, onPresentAccountModal };
};

export default useWalletModal;
