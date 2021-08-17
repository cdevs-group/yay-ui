import { Login } from "./types";
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
declare const useWalletModal: (login: Login, logout: () => void, textsAccount: TextsAccount, textsConnect: TextsConnect, network?: string | undefined, account?: string | undefined, hrefLearnHow?: string | undefined, vesting?: boolean | undefined, yayBalance?: string | number | undefined, dataTransactions?: any[] | undefined) => ReturnType;
export default useWalletModal;
