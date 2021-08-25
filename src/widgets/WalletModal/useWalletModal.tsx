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
}

export interface TextsConnect {
  title: string;
  link: string;
}

interface textsWallet {
  title: string;
  network: string;
  wallet: string;
  newtworkName: string;
  walletName: string;
  address: string;
  button: string;
  completeText: string;
}

interface Itransactions {
  number: string;
  link: string;
  status: boolean;
  profit: string;
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
  titleBridge?: string,
  tabsList?: Array<string>,
  textsWallet?: textsWallet,
  disconnectHandler?: () => void,
  transactionTitle?: string,
  transactionsList?: Array<Itransactions>
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
        />
      );
    } else if (bridge) {
      return (
        <WalletHistoryModal
          title={titleBridge}
          tabsList={tabsList}
          textsWallet={textsWallet}
          disconnectHandler={disconnectHandler}
          transactionTitle={transactionTitle}
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
