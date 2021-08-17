import React from "react";
import { Login } from "../../WalletModal/types";
import { TextsConnect, TextsAccount } from "../../WalletModal/useWalletModal";
interface Props {
    account?: string;
    login: Login;
    text: string;
    logout: () => void;
    textsConnect: TextsConnect;
    textsAccount: TextsAccount;
    hrefLearnHow?: string;
    network?: string;
    vesting?: boolean;
    yayBalance?: string | number;
    dataTransactions?: Array<any>;
}
declare const Account: React.FC<Props>;
export default Account;
