import React, { useState } from "react";
import { IGOCard } from "./index";
import { CardStatus, NetworksTab } from "./types";
import { BSC_ICON, DESU_TOKEN } from "../../constants/images";

export default {
  title: "Widgets/IGOPlatform",
  argTypes: {},
};

export const IGOCardBlock = () => {
  const networksTab = [
    { value: NetworksTab.BSC, img: BSC_ICON },
    { value: NetworksTab.AVAX, img: BSC_ICON },
  ];
  const [network, setNetwork] = useState<number>(NetworksTab.BSC);

  const handleChangeNetwork = (e: any) => {
    setNetwork(+e.target.value);
  };

  const dataSlots = [17, 80, 0];

  const texts = {
    available: "Available",
    networks: "Available networks:",
    slots: "Available whitelist slots:",
    progress: "Progress",
    button: "View more",
    isLive: "is live",
    success: "successfully",
    sale: "sale",
  };

  return (
    <div>
      <IGOCard
        dataSlots={dataSlots}
        currentNetwork={network}
        handleTab={handleChangeNetwork}
        networksTab={networksTab}
        amount="282,689,372.1176 DESU"
        tokenImg={DESU_TOKEN}
        status={CardStatus.PUBLIC_SALE}
        token="DESU Token"
        texts={texts}
        currentVolume={1000}
        totalVolume={1000}
      />
    </div>
  );
};
