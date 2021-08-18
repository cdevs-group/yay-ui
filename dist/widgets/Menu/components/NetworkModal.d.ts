import React from "react";
interface Props {
    title?: string;
    linkText?: string;
    linkHref?: string;
    handleToggleNetwork?: (e: any) => void;
    onDismiss?: () => void;
    valuesNetworks?: string[];
    network1Text?: string;
    network2Text?: string;
}
declare const NetworkModal: React.FC<Props>;
export default NetworkModal;
