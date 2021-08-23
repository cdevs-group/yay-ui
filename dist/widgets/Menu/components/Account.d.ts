import React from "react";
import { Login } from "../../WalletModal/types";
import { TextsConnect, TextsAccount } from "../../WalletModal/useWalletModal";
import { BlockChainNetwork } from "../types";
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
}
declare const Account: React.FC<Props>;
export default Account;
