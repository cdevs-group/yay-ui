import React from "react";
import TopBlock from "./components/TopBlock";
import styled from "styled-components";
import Stake from "./components/Stake";
import Unstake from "./components/Unstake";

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
  };
  totalValue: string | number;
  myStakeValue: string | number;
  avaibleValue: string | number;
  tookPartValue: string | number;
  loadingApprove?: boolean;
  loadingStake?: boolean;
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
}: IGOStakeProps) => {
  return (
    <div>
      <TopLine>
        <TopBlock title={texts.totalStake} value={totalValue} />
        <TopBlock title={texts.myStake} value={myStakeValue} />
        <TopBlock id="available" title={texts.avaible} value={avaibleValue} />
        <TopBlock id="stake" title={texts.tookPart} value={tookPartValue} />
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
        <Unstake cooldownDisabled={cooldownDisabled} time={time} handleCooldown={handleCooldown} texts={texts} />
      </MainLine>
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
