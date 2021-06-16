import React from "react";
import { Login } from "./types";
interface Props {
    login: Login;
    onDismiss?: () => void;
}
export declare const Button: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, {}, never>;
declare const ConnectModal: React.FC<Props>;
export default ConnectModal;