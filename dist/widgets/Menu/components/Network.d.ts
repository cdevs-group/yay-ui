import React from "react";
interface Props {
    network: string;
    titleNetwork: string;
    linkTextNetwork: string;
    linkHrefNetwork: string;
    handleChooseNetwork: (e: any) => void;
}
declare const Network: React.FC<Props>;
export default Network;
