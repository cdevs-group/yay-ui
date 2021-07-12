import React from "react";
import { Login } from "../../WalletModal/types";
interface Props {
    account?: string;
    login: Login;
    text: string;
    logout: () => void;
}
declare const Account: React.FC<Props>;
export default Account;
