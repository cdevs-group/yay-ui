import { Login } from "./types";
interface ReturnType {
    onPresentConnectModal: () => void;
    onPresentAccountModal: () => void;
}
interface TextsAccount {
    title: string;
    copy: string;
    button: string;
    view: string;
}
interface TextConnect {
    title: string;
    link: string;
}
declare const useWalletModal: (login: Login, logout: () => void, account?: string | undefined, textsAccount?: TextsAccount | undefined, textConnect?: TextConnect | undefined) => ReturnType;
export default useWalletModal;
