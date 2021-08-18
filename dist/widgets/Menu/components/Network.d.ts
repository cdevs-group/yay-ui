import React from "react";
import { BlockChainNetwork } from "../types";
interface Props {
    network?: BlockChainNetwork;
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
