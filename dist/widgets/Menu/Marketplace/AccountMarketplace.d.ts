import React from "react";
import { Login } from "../../WalletModal/types";
import { TextsConnect, TextsAccount } from "../../WalletModal/useWalletModal";
import { BlockChainNetwork } from "../types";
interface Props {
    account?: string;
    login: Login;
    logout: () => void;
    textsConnect: TextsConnect;
    textsAccount: TextsAccount;
    hrefLearnHow?: string;
    network?: BlockChainNetwork;
}
declare const AccountMarketplace: React.FC<Props>;
export default AccountMarketplace;
