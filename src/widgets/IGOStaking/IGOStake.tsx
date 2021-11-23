import React from "react";
import TopBlock from "./components/TopBlock";
import styled from "styled-components";
import Stake from "./components/Stake";
import Unstake from "./components/Unstake";
import { Text } from "../../components/Text";
import { transparentize } from "polished";

interface IGOStakeProps {
  handleCooldown: () => void | Promise<void>;
  tabValue: number | string;
  valueInput: number | string;
  handleTab: (e: any) => void;
  disableStake: boolean;
  disableApprove: boolean;
  handleApprove: () => void | Promise<void>;
  handleStake: () => void | Promise<void>;
  tabsList: Array<string | number>;
  disabledInput?: boolean;
  iconBalanceInput?: string;
  onUserInput: (input: string) => void;
  cooldownDisabled: boolean;
  balance: string;
  time: number;
  isBlur?: boolean;
  isBlurUnstake?: boolean;
  restakeDisabed?: boolean;
  handleRestake: () => void | Promise<void>;
  loadingRestake?: boolean;
  texts: {
    stakeTitle: string;
    stakeDescription: string;
    balance: string;
    buttonApprove: string;
    buttonStake: string;
    unstakeTitle: string;
    unstakeDescription: string;
    cooldownButton: string;
    textTooltip: string;
    tooltip: string;
    currencyInput?: string;
    totalStake: string;
    myStake: string;
    avaible: string;
    tookPart: string;
    restake: string;
    tooltipButton: string;
  };
  totalValue: string | number;
  myStakeValue: string | number;
  avaibleValue: string | number;
  tookPartValue: string | number;
  loadingApprove?: boolean;
  loadingStake?: boolean;
  isBlurTopBlockTookPart?: boolean;
  isBlurTopBlockAvailable?: boolean;
  progress: number;
  loadingCooldown?: boolean;
}

const IGOStake = ({
  totalValue,
  myStakeValue,
  avaibleValue,
  tookPartValue,
  time,
  cooldownDisabled,
  onUserInput,
  iconBalanceInput,
  disabledInput,
  balance,
  tabsList,
  handleStake,
  handleApprove,
  handleCooldown,
  texts,
  valueInput,
  tabValue,
  handleTab,
  disableStake,
  disableApprove,
  loadingStake,
  loadingApprove,
  isBlur,
  isBlurUnstake,
  isBlurTopBlockTookPart,
  isBlurTopBlockAvailable,
  progress,
  loadingCooldown,
  restakeDisabed,
  handleRestake,
  loadingRestake,
}: IGOStakeProps) => {
  return (
    <div style={{ position: "relative" }}>
      <div id="stakeBlock">
        <TopLine>
          <TopBlock title={texts.totalStake} value={totalValue} />
          <TopBlock title={texts.myStake} value={myStakeValue} />
          <TopBlock id="available" title={texts.avaible} value={avaibleValue} isBlur={isBlurTopBlockAvailable} />
          <TopBlock id="stake" title={texts.tookPart} value={tookPartValue} isBlur={isBlurTopBlockTookPart} />
        </TopLine>
        <MainLine>
          <Stake
            texts={texts}
            onUserInput={onUserInput}
            iconBalanceInput={iconBalanceInput}
            disabledInput={disabledInput}
            balance={balance}
            tabsList={tabsList}
            handleStake={handleStake}
            handleApprove={handleApprove}
            disableApprove={disableApprove}
            disableStake={disableStake}
            valueInput={valueInput}
            tabValue={tabValue}
            handleTab={handleTab}
            loadingApprove={loadingApprove}
            loadingStake={loadingStake}
          />
          <Unstake
            cooldownDisabled={cooldownDisabled}
            time={time}
            handleCooldown={handleCooldown}
            texts={texts}
            isBlur={isBlurUnstake}
            loadingCooldown={loadingCooldown}
            progress={progress}
            restakeDisabed={restakeDisabed}
            handleRestake={handleRestake}
            loadingRestake={loadingRestake}
          />
        </MainLine>
      </div>
      {isBlur && (
        <>
          <Claimed id="stakeBlock" />
          <StyleText>Change network to AVAX</StyleText>
        </>
      )}
    </div>
  );
};

export default IGOStake;

const TopLine = styled.div`
  margin-bottom: 15px;
  display: grid;
  gap: 15px;
  grid-template-columns: 1fr;

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    grid-template-columns: repeat(4, 1fr);
    gap: 0 15px;
  }
`;
const MainLine = styled(TopLine)`
  margin-bottom: 0;
  grid-template-columns: 1fr;
  gap: 15px;

  ${({ theme }) => theme.mediaQueries.xl} {
    grid-template-columns: repeat(2, 1fr);
    gap: 0 15px;
  }
`;
const Claimed = styled.div<{ id: string }>`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(15px);
  background: ${({ theme }) => transparentize(0.5, theme.colors.bgGray)};
  transition: 0.3s;
  pointer-events: none;
  border-radius: 20px;
  z-index: 1;
  background-image: ${({ id }) => `-moz-element(#${id})`};
  background-repeat: no-repeat;
  background-position: 50% 0;
  filter: blur(10px);
`;
const StyleText = styled(Text)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 15;
  font-size: 25px;
  left: 0;
  top: 0;
`;
