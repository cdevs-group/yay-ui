import React, { useState } from "react";
import { IGOCard } from "./index";
import IGODetailProgressCard from "./Cards/IGODetailProgressCard";
import { CardStatus, NetworksTab } from "./types";
import { BSC_ICON, DESU_TOKEN, MAIN_GAME } from "../../constants/images";
import styled from "styled-components";
import { Button } from "../../components/Button";
import IGODetailCard from "./Cards/IGODetailCard";
import IGOHistoryCard from "./Cards/IGOHistoryCard";
import IGOSubscriptionCard from "./Cards/IGOSubscriptionCard";
import IGOInfoCard from "./Cards/IGOInfoCard";
import InfoBoard from "./InfoBoard";
import { Flex, lightColors, Text, TimerNotSolidWithoutBg } from "../..";
import { baseColors } from "../../theme/colors";

export default {
  title: "Widgets/IGOPlatform",
  argTypes: {},
};

export const IGOCardBlock = () => {
  const networksTab = [
    { value: "BSC", img: BSC_ICON },
    { value: "AVAX", img: BSC_ICON },
  ];
  const [network, setNetwork] = useState<string>("BSC");

  const handleChangeNetwork = (e: any) => {
    setNetwork(e.target.value);
  };

  const dataSlots = [
    {
      all: 230,
      free: 200,
    },
    {
      all: 230,
      free: 230,
    },
    {
      all: 230,
      free: 0,
    },
  ];

  const handleView = () => {
    console.log("view");
  };
  const texts = {
    available: "Available",
    networks: "Available networks:",
    slots: "Available whitelist slots:",
    slotsTooltip: "Available whitelist slots Tooltip",
    progress: "Progress",
    button: "View more",
    isLive: "is live",
    success: "successfully",
    sale: "sale",
    timer: "Before start",
  };

  return (
    <div>
      <div style={{ marginTop: "50px" }}>
        <IGOCard
          dataSlots={dataSlots}
          currentNetwork={network}
          handleTab={handleChangeNetwork}
          networksTab={networksTab}
          amount="282,689,372.1176 DESU"
          tokenImg={DESU_TOKEN}
          status={CardStatus.BEFORE_WHITELIST}
          statusTitle="Before Whitelist"
          token="DESU Token"
          texts={texts}
          currentVolume={1000}
          totalVolume={1000}
          time={1000}
          handleView={handleView}
          statusText={
            <Text fontSize="15px" color={baseColors.green}>
              WHITELIST <span style={{ color: lightColors.text, marginLeft: "5px" }}>LIVE IN</span>
            </Text>
          }
        />
      </div>
      <div style={{ marginTop: "50px" }}>
        <IGOCard
          dataSlots={dataSlots}
          currentNetwork={network}
          statusTitle="Whitelist is open"
          handleTab={handleChangeNetwork}
          networksTab={networksTab}
          amount="282,689,372.1176 DESU"
          tokenImg={DESU_TOKEN}
          status={CardStatus.OPEN_WHITELIST}
          token="DESU Token"
          texts={texts}
          currentVolume={500}
          totalVolume={1000}
          time={1000}
          handleView={handleView}
          statusText={
            <Text fontSize="15px" color={baseColors.green}>
              WHITELIST SALE <span style={{ color: lightColors.text, marginLeft: "10px" }}>LIVE IN</span>
            </Text>
          }
        />
      </div>
      <div style={{ marginTop: "50px" }}>
        <IGOCard
          dataSlots={dataSlots}
          currentNetwork={network}
          handleTab={handleChangeNetwork}
          networksTab={networksTab}
          amount="282,689,372.1176 DESU"
          tokenImg={DESU_TOKEN}
          statusTitle="Whitelist is closed"
          status={CardStatus.WAIT_SALE}
          token="DESU Token"
          texts={texts}
          currentVolume={1000}
          totalVolume={1000}
          time={1000}
          handleView={handleView}
          statusText={
            <Text fontSize="15px" color={baseColors.green}>
              WHITELIST SALE <span style={{ color: lightColors.text, marginLeft: "10px" }}>LIVE IN</span>
            </Text>
          }
        />
      </div>
      <div style={{ marginTop: "50px" }}>
        <IGOCard
          dataSlots={dataSlots}
          currentNetwork={network}
          handleTab={handleChangeNetwork}
          networksTab={networksTab}
          amount="282,689,372.1176 DESU"
          tokenImg={DESU_TOKEN}
          statusTitle="Whitelist sale"
          status={CardStatus.WHITELIST_SALE}
          token="DESU Token"
          texts={texts}
          currentVolume={1000}
          totalVolume={1000}
          time={1000}
          handleView={handleView}
          statusText={
            <Text fontSize="15px" color={baseColors.green}>
              WHITELIST SALE <span style={{ color: lightColors.text, marginLeft: "10px" }}>LIVE IN</span>
            </Text>
          }
        />
      </div>

      <div style={{ marginTop: "50px" }}>
        <IGOCard
          dataSlots={dataSlots}
          currentNetwork={network}
          handleTab={handleChangeNetwork}
          networksTab={networksTab}
          amount="282,689,372.1176 DESU"
          tokenImg={DESU_TOKEN}
          status={CardStatus.PUBLIC_SALE}
          statusTitle="FCFS sale"
          token="DESU Token"
          texts={texts}
          currentVolume={500}
          totalVolume={1000}
          time={1000}
          handleView={handleView}
          statusText={
            <Text fontSize="15px" color={baseColors.green}>
              FCFS SALE <span style={{ color: lightColors.text, marginLeft: "10px" }}>LIVE IN</span>
            </Text>
          }
        />
      </div>
      <div style={{ marginTop: "50px" }}>
        <IGOCard
          dataSlots={dataSlots}
          currentNetwork={network}
          handleTab={handleChangeNetwork}
          networksTab={networksTab}
          amount="282,689,372.1176 DESU"
          tokenImg={DESU_TOKEN}
          status={CardStatus.WAIT_TGE}
          statusTitle="Waiting for TGE"
          token="DESU Token"
          texts={texts}
          currentVolume={500}
          totalVolume={1000}
          time={1000}
          handleView={handleView}
          statusText={
            <Text fontSize="15px" color={baseColors.green}>
              TGE <span style={{ color: lightColors.text, marginLeft: "5px" }}>IN</span>
            </Text>
          }
        />
      </div>
      <div style={{ marginTop: "50px" }}>
        <IGOCard
          dataSlots={dataSlots}
          currentNetwork={network}
          handleTab={handleChangeNetwork}
          networksTab={networksTab}
          amount="282,689,372.1176 DESU"
          tokenImg={DESU_TOKEN}
          status={CardStatus.CLAIMING}
          token="DESU Token"
          statusTitle="Claiming"
          texts={texts}
          currentVolume={1000}
          totalVolume={1000}
          time={1000}
          handleView={handleView}
          statusText={
            <>
              DESU CLAIMING IS <span>LIVE</span>
            </>
          }
        />
      </div>
      <div style={{ marginTop: "50px" }}>
        <IGOCard
          dataSlots={dataSlots}
          currentNetwork={network}
          handleTab={handleChangeNetwork}
          networksTab={networksTab}
          amount="282,689,372.1176 DESU"
          tokenImg={DESU_TOKEN}
          status={CardStatus.COMPLETED}
          statusTitle="Completed"
          token="DESU Token"
          texts={texts}
          currentVolume={1000}
          totalVolume={1000}
          time={1000}
          handleView={handleView}
          statusText={
            <>
              SEDU IGO IS <span>IS COMPLETED</span>
            </>
          }
        />
      </div>
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
    balance: "Available balance: ",
    error: "Insufficient balance to make bet",
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
        <Flex>
          Poseidon <span> Slot available in</span>{" "}
          <TimerNotSolidWithoutBg height="auto" withTime fontSize="13px" time={55555} />
        </Flex>
      ),
      error: false,
    },
    {
      text: "Public  - 100000 DESU  per 1 BNB",
      error: false,
    },
  ];

  const ButtonLeft = () => (
    <Button variant="green" width="100%">
      100 YAY
    </Button>
  );
  const ButtonRight = () => (
    <Button variant="green" disabled width="100%">
      1000 YAY
    </Button>
  );
  const ButtonCenter = () => (
    <Button variant="option" width="100%">
      Staked
    </Button>
  );
  const ButtonLong = () => (
    <Button variant="green" width="100%">
      Join public sale
    </Button>
  );
  const dataProgress = [
    {
      all: 230,
      free: 0,
    },
    {
      all: 230,
      free: 230,
    },
    {
      all: 230,
      free: 40,
    },
  ];

  return (
    <Cards>
      <IGODetailProgressCard
        balance="100yay"
        balanceError
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
        progress={dataProgress}
        progressVisible={false}
        descriptionsButtons={["ZEUS", "HERMES", "POSEIDON"]}
      />

      <IGODetailProgressCard
        checkedToggle={isChecked}
        balance="100yay"
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
        progress={dataProgress}
        progressVisible
      />

      <IGODetailProgressCard
        balance="100yay"
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
        progress={dataProgress}
        progressVisible
      />
    </Cards>
  );
};

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
`;

export const IGOCardDetailsBlock = () => {
  const networksTab = [
    { value: "BSC", img: BSC_ICON },
    { value: "AVAX", img: BSC_ICON },
  ];
  const [network, setNetwork] = useState<string>("BSC");

  const handleChangeNetwork = (e: any) => {
    setNetwork(e.target.value);
  };

  const texts = {
    status: <>PUBLIC</>,
    networks: "Available Networks:",
    networksTooltip: "Available Networks Tooltip",
    before: "Before IGO countdown:",
    summary: "Project summary:",
    button: "Visit website",
    copied: "Copied",
    summaryText:
      "Lorem ipsum dolor <br/> sit amet, consectetur adipiscing elit. Ut et nulla ultrices mi venenatis etiam . Vulputate sed semper blandit vitae ut lectus sed pulvinar. Mi neque tempor, lobortis adipiscing consectetur proin varius orci adipiscing semper venenatis etiam.",
  };
  const handleView = () => {
    console.log("view");
  };
  return (
    <div>
      <IGODetailCard
        name="DESU Token"
        status="Public Sale"
        site="DEXSPORT.io"
        tokenImg={DESU_TOKEN}
        balance="282,689,372.1176 DESU"
        address="0x524df384bffb18c0c8f3f43d012011f8f9795579"
        currentNetwork={network}
        handleTab={handleChangeNetwork}
        networksTab={networksTab}
        time={1000}
        texts={texts}
        handleView={handleView}
        withTimer={false}
        externalLink="/"
        width={500}
      />
      <div style={{ marginTop: "50px" }}>
        <IGODetailCard
          name="DESU Token"
          status="Public Sale"
          site="DEXSPORT.io"
          tokenImg={DESU_TOKEN}
          balance="282,689,372.1176 DESU"
          address="0x524df384bffb18c0c8f3f43d012011f8f9795579"
          currentNetwork={network}
          handleTab={handleChangeNetwork}
          networksTab={networksTab}
          time={1000}
          texts={texts}
          handleView={handleView}
          withTimer
          externalLink="/"
          width={500}
        />
      </div>
    </div>
  );
};

export const IGOHistoryCardBlock = () => {
  const texts = {
    date: "Date",
    allocations: "Allocations",
    amount: "BNB amount",
    tx: "TX",
    status: "Status",
    type: "Type",
  };

  const data = [
    {
      date: "04.11.2021",
      allocations: "50000000 YAY",
      amount: "123 BNB",
      tx: "123 BNB",
      status: "error",
      type: "unstacking",
    },
    {
      date: "04.11.2021",
      allocations: "50000000 YAY",
      amount: "123 BNB",
      tx: "123 BNB",
      status: "success",
      type: "buy",
    },
    {
      date: "04.11.2021",
      allocations: "50000000 YAY",
      amount: "123 BNB",
      tx: "123 BNB",
      status: "pending",
      type: "buy",
    },
  ];

  return data.map((el) => (
    <div style={{ marginBottom: 8 }}>
      <IGOHistoryCard texts={texts} data={el} />
    </div>
  ));
};

export const IGOSubscriptionCardBlock = () => {
  const texts = {
    title: "Subscription Info",
    totalSale: "Total Tokens for Sales",
    rate: "Rate",
    private: "Private Start",
    public: "Public Start",
    end: "End",
    soft: "Soft Cap",
    hard: "Hard Cap",
    minPurchased: "Min Purchase",
    maxPurchased: "Max Purchase",
    vesting: "Vesting Schedule",
  };

  return (
    <div>
      <IGOSubscriptionCard
        totalSale="5,742,345.42345612 i BFR"
        rate="8,235.2932 iBFR = 1 BNB"
        privateDate="20/09/2021"
        publicDate="20/09/2021"
        endDate="20/09/2021"
        softCap="244 BNB"
        hardCap="700 BNB"
        minPurchased="2.8 BNB"
        maxPurchased="2.8 BNB"
        vestingStatus="Refer to project details"
        texts={texts}
      />
    </div>
  );
};

export const IGOInfoCardBlock = () => {
  const texts = {
    title: "Token Info",
    name: "Name",
    address: "Address",
    copied: "Copied",
    liquid: "Liquidity Provision",
    initial: "Initial Liquidity",
    lock: "Lock Duration",
    status: "Status",
    link: "Link",
  };

  return (
    <div>
      <IGOInfoCard
        tokenName="iBuffer Token"
        address="0x524df384bffb18c0c8f3f43d012011f8f9795579"
        initial="244 BNB + 1,333,400 iBFR"
        lockDuration="6 month"
        status="Status"
        texts={texts}
        link="/"
        width={500}
      />
    </div>
  );
};

export const InfoBoardBlock = () => {
  const texts = {
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et nulla ultrices mi venenatis etiam . Vulputate sed semper blandit vitae ut lectus sed pulvinar. Mi neque tempor, lobortis adipiscing consectetur proin varius orci adipiscing semper venenatis etiam.",
    description2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et nulla ultrices mi venenatis etiam . Vulputate sed semper blandit vitae ut lectus sed pulvinar. Mi neque tempor, lobortis adipiscing consectetur proin varius orci adipiscing semper venenatis etiam.",
  };
  return (
    <div>
      <InfoBoard texts={texts} images={[MAIN_GAME, MAIN_GAME, MAIN_GAME]} imgMain={MAIN_GAME} />
    </div>
  );
};
