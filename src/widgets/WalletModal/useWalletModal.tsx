import React from "react";
import { useModal } from "../Modal";
import ConnectModal from "./ConnectModal";
import AccountModal from "./AccountModal";
import { Login } from "./types";
import AccountVestingModal from "./AccountVestingModal";
import { BlockChainNetwork } from "../Menu/types";
import { WalletHistoryModal } from "../WalletHistoryModal";

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
  noRecentTransactions?: string;
  addToken?: string;
}

export interface TextsConnect {
  title: string;
  link: string;
}

interface textsBridge {
  titleModal: string;
  title: string;
  network: string;
  wallet: string;
  newtworkName: string;
  walletName: string;
  button: string;
  completeText: string;
  transactionTitle?: string;
  tabsList?: Array<string> | any;
}

interface Itransactions {
  number: string;
  link: string;
  status: boolean;
  profit: string;
  linkHref: string;
}

const useWalletModal = (
  login: Login,
  logout: () => void,
  textsAccount: TextsAccount,
  textsConnect: TextsConnect,
  network?: BlockChainNetwork,
  account?: string,
  hrefLearnHow?: string,
  vesting?: boolean,
  yayBalance?: string | number,
  dataTransactions?: Array<any>,
  handleClaimed?: any,
  bridge?: boolean,
  textsBridge?: textsBridge,
  transactionsList?: Array<Itransactions> | [],
  handleAddToken?: any
): ReturnType => {
  const pageModal = () => {
    if (vesting) {
      return (
        <AccountVestingModal
          texts={textsAccount}
          account={account || ""}
          logout={logout}
          yayBalance={yayBalance}
          dataTransactions={dataTransactions}
          handleClaimed={handleClaimed}
          handleAddToken={handleAddToken}
        />
      );
    } else if (bridge) {
      return (
        <WalletHistoryModal
          account={account}
          textsBridge={textsBridge}
          logout={logout}
          transactionsList={transactionsList}
        />
      );
    } else {
      return <AccountModal texts={textsAccount} account={account || ""} logout={logout} />;
    }
  };

  const [onPresentConnectModal] = useModal(
    <ConnectModal texts={textsConnect} login={login} hrefLearnHow={hrefLearnHow} network={network} />
  );
  const [onPresentAccountModal] = useModal(pageModal());

  return { onPresentConnectModal, onPresentAccountModal };
};

export default useWalletModal;
