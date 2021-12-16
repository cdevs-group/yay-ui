import React from "react";
import { Login } from "../../WalletModal/types";
import { TextsConnect } from "../../WalletModal/useWalletModal";
import { BlockChainNetwork, Funds, TextsAccountMarketplace } from "../types";
interface Props {
    account?: string;
    login: Login;
    logout: () => void;
    textsConnect: TextsConnect;
    textsAccount: TextsAccountMarketplace;
    hrefLearnHow?: string;
    network?: BlockChainNetwork;
    totalBalance: string;
    funds: Funds[];
}
declare const AccountMarketplace: React.FC<Props>;
export default AccountMarketplace;
