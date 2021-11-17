import React from "react";
import { InputBlock, StakeDescription, StakeTitle, StakeWrapper, Balance, Buttons } from "../style";
import BalanceInput from "../../../../components/BalanceInput/BalanceInput";
import { Button } from "../../../../components/Button";
import { YAY_TOKEN } from "../../../../constants/images";
import TabsSmall from "../../../../components/Tabs/TabsSmall";

interface IStakeProps {
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
  valueInput: string | number;
  onUserInput: (input: string) => void;
  iconBalanceInput?: string;
  disabledInput?: boolean;
  balance: string;
  tabsList: Array<number | string>;
  tabValue: number | string;
  handleTab: (e: any) => void;
  handleApprove: () => void | Promise<void>;
  handleStake: () => void | Promise<void>;
  disableStake: boolean;
  disableApprove: boolean;
}

const Stake = ({
  disableApprove,
  disableStake,
  handleApprove,
  handleStake,
  tabValue,
  handleTab,
  tabsList,
  texts,
  onUserInput,
  valueInput,
  iconBalanceInput,
  disabledInput,
  balance,
}: IStakeProps) => {
  return (
    <StakeWrapper>
      <StakeTitle>{texts.stakeTitle}</StakeTitle>
      <StakeDescription>{texts.stakeDescription}</StakeDescription>
      <InputBlock>
        <BalanceInput
          onUserInput={onUserInput}
          value={valueInput}
          icon={<img style={{ width: "32px", marginBottom: "5px" }} src={iconBalanceInput || YAY_TOKEN} alt="token" />}
          texts={{ commit: texts.stakeTitle, currency: texts.currencyInput || "YAY" }}
          disabled={disabledInput}
        />
      </InputBlock>
      <Balance>
        {texts.balance}
        <span>{balance}</span>
      </Balance>
      <TabsSmall tabValue={tabValue} tabsList={tabsList} onClick={handleTab} />
      <Buttons>
        <Button disabled={disableApprove} onClick={handleApprove} variant="green">
          {texts.buttonApprove}
        </Button>
        <Button disabled={disableStake} onClick={handleStake} variant="green">
          {texts.buttonStake}
        </Button>
      </Buttons>
    </StakeWrapper>
  );
};

export default Stake;
