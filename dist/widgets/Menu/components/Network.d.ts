import React from "react";
interface Props {
    network?: string;
    titleNetwork?: string;
    linkTextNetwork?: string;
    linkHrefNetwork?: string;
    handleToggleNetwork?: (e: any) => void;
    valuesNetworks?: string[];
    network1Text?: string;
    network2Text?: string;
}
declare const Network: React.FC<Props>;
export default Network;
