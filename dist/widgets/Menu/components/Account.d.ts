import React from "react";
import { Login } from "../../WalletModal/types";
import { TextsConnect, TextsAccount } from "../../WalletModal/useWalletModal";
import { BlockChainNetwork } from "../types";
interface textsWallet {
    title: string;
    network: string;
    wallet: string;
    newtworkName: string;
    walletName: string;
    address: string;
    button: string;
    completeText: string;
    noRecentTransactions?: string;
}
interface Itransactions {
    number: string;
    link: string;
    status: boolean;
    profit: string;
}
interface Props {
    account?: string;
    login: Login;
    text: string;
    logout: () => void;
    textsConnect: TextsConnect;
    textsAccount: TextsAccount;
    hrefLearnHow?: string;
    network?: BlockChainNetwork;
    vesting?: boolean;
    yayBalance?: string | number;
    dataTransactions?: Array<any>;
    handleClaimed?: (value: string) => void;
    bridge?: boolean;
    titleBridge?: string;
    textsWallet?: textsWallet;
    disconnectHandler?: () => void;
    transactionTitle?: string;
    transactionsList?: Array<Itransactions>;
    tabsList?: Array<string>;
    handleAddToken?: () => void;
}
declare const Account: React.FC<Props>;
export default Account;
