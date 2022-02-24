import React, { ReactText, useState } from "react";
import FarmingCard from "./components/FarmingCard/FarmingCard";
import { YAY_TOKEN_LOGO, AVAX_LOGO, BSC_ICON } from "../../constants/images";
import DepositFarmModal from "./components/FarmingCard/DepositFarmModal";
import styled from "styled-components";
import { Button, Grid } from "../..";
import { Avalanche, YAY_TOKEN_GREEN } from "../../constants/images";
import { ButtonProps } from "../../components/Button/types";
import { Skeleton } from "../../components/Skeleton";
import FarmingCardSkeleton from "./components/FarmingCard/FarmingCardSkeleton";

export default {
  title: "Widgets/Farming",
  argTypes: {},
};

export const FramingCardBlock = () => {
  const [openModal, setOpenModal] = useState(false);
  const [inputValue, setInputValue] = useState('0.0');

  const handleInput = (e) => {
    let start = e.target.selectionStart;
    let val = e.target.value;
    val = val.replace(/([^0-9.]+)/, "");
    val = val.replace(/^(0|\.)/, "");
    const match = /(\d{0,9})[^.]*((?:\.\d{0,1})?)/g.exec(val);
    const value = match[1] + match[2];
    e.target.value = value;
    setInputValue(value);
    if (val.length > 0) {
      e.target.value = Number(value).toFixed(1);
      e.target.setSelectionRange(start, start);
      setInputValue(Number(value).toFixed(1));
    }
  };

  const texts = {
    total: "Total Staked",
    farming: "Farming APY",
    network: "Available networks",
    startDate: "Start date",
    endDate: "End date",
    yourStake: "Your stake",
    reward: "reward",
    deposit: "Deposit",
    claim: "Claim",
    withdraw: "Withdraw",
    exit: "Exit",
    withdrawAndClaim: "Withdraw and claim",
    andEarn: "and earn",
    getLp: "Get LP tokens",
    tooltip: "hsbdchjsd dfvfdev fbdbd  dfgdfb  dfbgfdb dfbdfb fgb dfbdfvb",
  };
  const textsModal = {
    title: "Deposit",
    balance: "Balance:",
    stake: "You Staked",
    daily: "Daily Earnings",
    monthly: "Monthly Earnings",
    yearly: "Yearly Earnings",
    button: "Insufficient balance",
    stakeTooltip: "stakeTooltip",
    monthlyTooltip: "monthlyTooltip",
    yearlyTooltip: "yearlyTooltip",
    dailyTooltip: "dailyTooltip",
  };

  const CustomButton = (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <Button onClick={() => console.log("click")}>Connect Wallet</Button>
    </div>
  );

  const skeletonTextArgs = {
    width: 180,
    height: 19.5,
  };

  const variant = {
    RECT: "rect",
    CIRCLE: "circle",
  } as const;

  const skeletonLogoArgs = {
    width: 45,
    height: 45,
    variant: variant.CIRCLE,
  };

  const skeletonGetLpTone = {
    width: 100,
    heigth: 50,
    margin: "auto",
  };

  const network1 = [BSC_ICON, AVAX_LOGO];
  const network2 = [AVAX_LOGO];

  return (
    <Grid gridTemplateColumns="repeat(3, 1fr)" gridGap="30px">
      <FarmingCard
        texts={texts}
        logoToken0={YAY_TOKEN_LOGO}
        logoToken1={AVAX_LOGO}
        tokenReward="YAY"
        network={network1}
        startDate="24 Sep 2021 9:00 UTC"
        endDate="23 Jan 2022 9:00 UTC"
        yourStake="$0.00"
        reward="$0.00"
        lp="1LP-YAY - AVAX"
        pair="YAY-AVAX"
        total="$0"
        apy="0%"
        // depositButtonProps={{ spin: true }}
        claimButtonProps={{ disabled: true }}
        withdrawButtonProps={{ disabled: true, spin: true }}
        exitButtonProps={{ spin: true }}
        depositHandleClick={() => setOpenModal(true)}
        claimHandleClick={() => console.log("a")}
        widthDrawHandleClick={() => console.log("a")}
        exitHandleClick={() => console.log("a")}
        getLpHandleClick={() => console.log("a")}
      />
      <Overlay open={openModal} />
      <Modal open={openModal}>
        <DepositFarmModal
          texts={textsModal}
          onDismiss={() => setOpenModal(false)}
          lp="1LP-YAY-AVAX"
          balance={0}
          onUserInput={handleInput}
          inputValue={inputValue}
          pair="YAY/BUSD"
          tokenImg0={YAY_TOKEN_GREEN}
          tokenImg1={Avalanche}
          handleButton={() => console.log("click")}
          buttonProps={{ spin: true, disabled: true }}
          tokenName="YAY"
          stakeUsd="$0.00"
          dailyUsd="$0.00"
          monthlyUsd="$0.00"
          yearlyUsd="$0.00"
          stakeToken={0}
          dailyToken={0}
          monthlyToken={0}
          yearlyToken={0}
        />
      </Modal>
      <FarmingCard
        texts={texts}
        logoToken0={<Skeleton {...skeletonLogoArgs} />}
        logoToken1={<Skeleton {...skeletonLogoArgs} />}
        tokenReward="YAY"
        network={network2}
        startDate={<Skeleton {...skeletonTextArgs} />}
        endDate={<Skeleton {...skeletonTextArgs} />}
        yourStake={<Skeleton {...skeletonTextArgs} />}
        reward={<Skeleton {...skeletonTextArgs} />}
        lp="1LP-YAY - AVAX"
        pair="YAY-AVAX"
        total="$0"
        apy="0%"
        // depositButtonProps={{ spin: true }}
        claimButtonProps={{ disabled: true }}
        withdrawButtonProps={{ disabled: true, spin: true }}
        exitButtonProps={{ spin: true }}
        depositHandleClick={() => setOpenModal(true)}
        claimHandleClick={() => console.log("a")}
        widthDrawHandleClick={() => console.log("a")}
        exitHandleClick={() => console.log("a")}
        getLpHandleClick={() => console.log("a")}
        getLPTokenNode={<Skeleton {...skeletonGetLpTone} />}
        buttonsFooter={CustomButton}
      />
      <Overlay open={openModal} />
      <Modal open={openModal}>
        <DepositFarmModal
          texts={textsModal}
          onDismiss={() => setOpenModal(false)}
          lp="1LP-YAY-AVAX"
          balance={0}
          onUserInput={handleInput}
          inputValue={inputValue}
          pair="YAY/BUSD"
          tokenImg0={YAY_TOKEN_GREEN}
          tokenImg1={Avalanche}
          handleButton={() => console.log("click")}
          buttonProps={{ spin: true, disabled: true }}
          tokenName="YAY"
          stakeUsd="$0.00"
          dailyUsd="$0.00"
          monthlyUsd="$0.00"
          yearlyUsd="$0.00"
          stakeToken={0}
          dailyToken={0}
          monthlyToken={0}
          yearlyToken={0}
        />
      </Modal>
      <div style={{ width: 340 }}>
        <FarmingCardSkeleton />
      </div>
    </Grid>
  );
};
const Modal = styled.div<{ open: boolean }>`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: ${({ open }) => (open ? 16 : -1)};
  opacity: ${({ open }) => (open ? 1 : 0)};
  pointer-events: ${({ open }) => (open ? "all" : "none")};
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
