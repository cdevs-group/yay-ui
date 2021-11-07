import React, { useState } from "react";
import { IGOCard } from "./index";
import IGODetailProgressCard from "./Cards/IGODetailProgressCard";
import { CardStatus, NetworksTab } from "./types";
import { BSC_ICON, DESU_TOKEN } from "../../constants/images";
import styled from "styled-components";
import { Button } from "../../components/Button";

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
        statusText={
          <>
            CLAIMING IS <span>LIVE</span>
          </>
        }
        statusTextVisible={false}
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
    status: (
      <>
        PUBLIC sale <span>SOLD OUT</span>
      </>
    ),
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

  const ButtonLeft = () => <Button variant="green">100 YAY</Button>;
  const ButtonRight = () => <Button variant="green" disabled>1000 YAY</Button>;
  const ButtonCenter = () => <Button variant="option">Staked</Button>;
  const ButtonLong = () => (
    <Button variant="green" width="100%">
      Join public sale
    </Button>
  );

  return (
    <Cards>
      <IGODetailProgressCard
        checkedToggle={isChecked}
        handleToggleChecked={handleToggleChecked}
        textBaseProgress="Whitelist Phase"
        baseProgress={0}
        texts={texts}
        slots={slots}
        status
        buttonLeft={<ButtonLeft />}
        buttonRight={<ButtonRight />}
        buttonLong={<ButtonLong />}
        buttonCenter={<ButtonCenter />}
      />

      <IGODetailProgressCard
        checkedToggle={isChecked}
        handleToggleChecked={handleToggleChecked}
        textBaseProgress="700 BNB/ 700 BNB"
        baseProgress={20}
        texts={texts}
        slots={[slots[0]]}
        status
        buttonLeft={<ButtonLeft />}
        buttonRight={<ButtonRight />}
        buttonLong={<ButtonLong />}
        buttonCenter={<ButtonCenter />}
      />

      <IGODetailProgressCard
        checkedToggle={!isChecked}
        handleToggleChecked={handleToggleChecked}
        textBaseProgress="700 BNB/ 700 BNB"
        baseProgress={100}
        texts={texts}
        slots={slots}
        status={false}
        buttonLeft={<ButtonLeft />}
        buttonRight={<ButtonRight />}
        buttonLong={<ButtonLong />}
        buttonCenter={<ButtonCenter />}
      />
    </Cards>
  );
};

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
`;
