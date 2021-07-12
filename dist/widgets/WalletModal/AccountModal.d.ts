import React from "react";
interface Props {
    account: string;
    logout: () => void;
    onDismiss?: () => void;
    texts: {
        title: string;
        copy: string;
        button: string;
        view: string;
    };
}
declare const AccountModal: React.FC<Props>;
export default AccountModal;
