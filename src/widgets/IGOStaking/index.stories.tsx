import React, { useState } from "react";
import styled from "styled-components";
import { Text } from "../..";
import IGOTopList from "./components/IGOTopList";
import CardTopIndicator from "./components/CardTopIndicator";
import IGOStake from "./IGOStake";
import { ComingSoonIcon, YAY_TOKEN } from "../../constants/images";
import ModalUnstake from "./components/ModalUnstake";

export default {
  title: "Widgets/IGOStake",
  argTypes: {},
};

export const IGOStakeBlock = () => {
  const [tabValue, setTabValue] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const handleModal = () => {
    setOpenModal(!openModal);
  };

  const tabsList = ["25%", "50%", "75%", "100%"];
  const texts = {
    stakeTitle: "Stake",
    stakeDescription: "Lock YAY to unlock full potential (pun intended)",
    balance: "Available balance: ",
    buttonApprove: "Approve",
    buttonStake: "Stake",
    unstakeTitle: "Unstake",
    unstakeDescription: "To unstake, activate the cooldown",
    cooldownButton: "Cooldown",
    textTooltip: "To unstake, activate the cooldown",
    tooltip: "shfksdhkfv",
    totalStake: "Total staked",
    myStake: "My stake",
    avaible: "Avaiable tickets",
    tookPart: "Took part in IGOs",
    restake: "Restake",
    tooltipButton: "Our next IGO is nearing. if you unstake now, you might lose the chance to join.",
  };

  const handleButton = () => {
    console.log("click");
  };
  const handleTab = (e: any) => {
    setTabValue(e.target.value);
  };

  return (
    <div>
      <Overlay open={openModal} />
      <Modal>
        <ModalUnstake
          open={openModal}
          img={ComingSoonIcon}
          textsUnstake="Unstake"
          textClose="Cancel"
          textContent="Our next IGO is nearing. if you unstake now, you might lose the chance to join."
          handleClose={handleModal}
          handleUnstake={() => console.log("unstake")}
        />
      </Modal>
      <IGOStake
        isBlur={false}
        onUserInput={(input) => null}
        iconBalanceInput={YAY_TOKEN}
        disabledInput={false}
        balance="1000 yay"
        tabsList={tabsList}
        handleStake={handleButton}
        handleApprove={handleButton}
        disableApprove={false}
        handleTab={handleTab}
        disableStake={false}
        tabValue={tabValue}
        valueInput={0}
        handleCooldown={handleModal}
        texts={texts}
        cooldownDisabled={false}
        time={53}
        totalValue="1212 YAY"
        myStakeValue="1212 YAY"
        avaibleValue="0.00001"
        tookPartValue="12"
        loadingApprove
        loadingStake
        isBlurUnstake={false}
        progress={90}
        restakeDisabed={false}
        handleRestake={() => console.log("unsatke")}
        loadingRestake={false}
      />
    </div>
  );
};

export const TopListBlock: React.FC = () => {
  enum TabsValue {
    ALL,
    HERCULES,
    PERSEUS,
    ARGUS,
    MINOS,
  }
  const [activeTab, setActiveTab] = useState(TabsValue.ALL);

  const tabsList = ["All", "Hercules", "Perseus", "Argus", "Minos"];
  const texts = {
    title: "HEROS pool",
    wallet: "Wallet",
    staked: "YAY staked",
    tokenName: "YAY",
    button: "My position",
  };
  const topUsersList = [
    {
      position: "1",
      wallet: "dhc526x87agshe",
      stake: "1000000",
    },
  ];

  const toggleTab = async (e: any) => {
    setActiveTab(+e.target.value);
  };

  const handleMyPosition = () => {};

  const indicatorList = [
    { name: "Your pool", value: "MAIN" },
    { name: "Your position", value: "2" },
    { name: "Your pool share", value: "1380,00000 YAY" },
    { name: "Your tier", value: "Hercules" },
  ];
  return (
    <>
      <Text fontSize="25px" lineHeight="32px" letterSpacing="0.03em" textAlign="center" mb="61px">
        Opportunities start here <br /> Together we're unstoppable, thank you for joining!
      </Text>
      <CardsTop>
        {indicatorList.map((el, i) => (
          <CardTopIndicator {...el} />
        ))}
      </CardsTop>
      <Cards>
        <IGOTopList
          topUsersList={topUsersList}
          texts={texts}
          myWallet="dhc52r6x87agshe"
          tabsList={tabsList}
          activeTab={activeTab}
          toggleTab={toggleTab}
        />
        <IGOTopList topUsersList={topUsersList} texts={texts} myWallet="dhc52r6x87agshe" />
      </Cards>
    </>
  );
};

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;
  ${({ theme }) => theme.mediaQueries.xl} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CardsTop = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;
  margin-bottom: 20px;
  ${({ theme }) => theme.mediaQueries.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${({ theme }) => theme.mediaQueries.xl} {
    grid-template-columns: repeat(4, 1fr);
  }
`;
const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 16;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 397px;
  ${({ theme }) => theme.mediaQueries.sm} {
    max-height: 440px;
  }
`;
const Overlay = styled.div<{ open?: boolean }>`
  pointer-events: none;
  display: block;
  background: ${({ theme }) => theme.colors.overlayBg};
  position: fixed;
  z-index: ${({ open }) => (open ? 15 : -1)};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
`;
