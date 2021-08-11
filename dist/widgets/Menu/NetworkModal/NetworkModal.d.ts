import React from "react";
interface Props {
    title: string;
    linkText: string;
    linkHref: string;
    handleChooseNetwork: (e: any) => void;
    onDismiss?: () => void;
}
declare const NetworkModal: React.FC<Props>;
export default NetworkModal;
