import React from "react";
import { Login } from "../../WalletModal/types";
import { TextsConnect, TextsAccount } from "../../WalletModal/useWalletModal";
import { BlockChainNetwork } from "../types";
import { Variant } from "../../../components/Button/types";
interface textsBridge {
    titleModal: string;
    title: string;
    network: string;
    wallet: string;
    newtworkName: string;
    walletName: string;
    button: string;
    completeText: string;
    noRecentTransactions?: string;
    transactionTitle?: string;
    tabsList?: Array<string>;
}
interface Itransactions {
    number: string;
    link: string;
    status: boolean;
    profit: string;
    linkHref: string;
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
    textsBridge?: textsBridge;
    transactionsList?: Array<Itransactions> | [];
    handleAddToken?: () => void;
    marginContent?: string;
    minHeight?: string;
    buttonLogoutType?: Variant;
    linkExternalWalletModal?: string;
}
declare const Account: React.FC<Props>;
export default Account;
