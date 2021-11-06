import React, { useState } from "react";
import { IGOCard } from "./index";
import IGODetailProgressCard from "./Cards/IGODetailProgressCard";
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
    timer: "Before start",
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
        status={CardStatus.WHITELIST_SALE}
        token="DESU Token"
        texts={texts}
        currentVolume={1000}
        totalVolume={1000}
        time={1000}
        statusText={
          <>
            CLAIMING IS <span>LIVE</span>
          </>
        }
      />
    </div>
  );
};

export const IGODetailProgressCardBlock = () => {
  const texts = {
    textBottomBaseProgress: "8,235.2941 DESU per 1 BNB",
    title: "Progress",
    whitelistToggle: "Whitelist",
    saleToggle: "Sale",
    slotsSummary: "Slots summary:",
    slotsSummaryTooltip: "Slots summary Tooltip",
    availableWhitelist: "Available whitelist slots:",
    availableWhitelistTooltip: "Available whitelist slots",
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleToggleChecked = () => setIsChecked(!isChecked);

  const slots = [
    {
      text: "Zeus -  10000 DESU per 1 BNB for 100 YAY",
      error: false,
    },
    {
      text: "Hermes - 20000 DESU per 1 BNB  for 500 YAY",
      error: true,
    },
    {
      text: (
        <>
          Poseidon <span> Slot available in 136h : 22m : 32s</span>
        </>
      ),
      error: false,
    },
    {
      text: "Public  - 100000 DESU  per 1 BNB",
      error: false,
    },
  ];
  return (
    <IGODetailProgressCard
      checkedToggle={isChecked}
      handleToggleChecked={handleToggleChecked}
      textBaseProgress="700 BNB/ 700 BNB"
      baseProgress={20}
      texts={texts}
      slots={slots}
    />
  );
};
