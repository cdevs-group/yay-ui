import { Login } from "./types";
import { BlockChainNetwork } from "../Menu/types";
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
declare const useWalletModal: (login: Login, logout: () => void, textsAccount: TextsAccount, textsConnect: TextsConnect, network?: BlockChainNetwork | undefined, account?: string | undefined, hrefLearnHow?: string | undefined, vesting?: boolean | undefined, yayBalance?: string | number | undefined, dataTransactions?: any[] | undefined, handleClaimed?: any, bridge?: boolean | undefined, titleBridge?: string | undefined, tabsList?: string[] | undefined, textsWallet?: textsWallet | undefined, disconnectHandler?: (() => void) | undefined, transactionTitle?: string | undefined, transactionsList?: Itransactions[] | undefined, handleAddToken?: any) => ReturnType;
export default useWalletModal;
