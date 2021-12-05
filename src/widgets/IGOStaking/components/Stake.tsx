import React, { useState } from "react";
import { InputBlock, StakeDescription, StakeTitle, StakeWrapper, Balance, Buttons } from "../style";
import BalanceInput from "../../../components/BalanceInput/BalanceInput";
import { Button } from "../../../components/Button";
import { YAY_TOKEN } from "../../../constants/images";
import TabsSmall from "../../../components/Tabs/TabsSmall";
import { Flex, Box } from "../../../components/Box";
import BaseToggle from "../../../components/Toggle/BaseToggle/BaseToggle";
import { Text } from "../../../components/Text";

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
    standart: string;
    stakers: string;
    countdown: string;
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
  loadingApprove?: boolean;
  loadingStake?: boolean;
  isStaker?: boolean;
  handleStaketype?: () => void;
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
  loadingApprove,
  loadingStake,
  isStaker,
  handleStaketype,
}: IStakeProps) => {
  const [checkedToggle, setCheckedToggle] = useState(false);
  const handleToggleChecked = () => {
    setCheckedToggle(!checkedToggle);
  };
  return (
    <StakeWrapper>
      <Flex justifyContent="space-between" alignItems="center">
        <StakeTitle margin={0}>{texts.stakeTitle}</StakeTitle>
        <Flex alignItems="center">
          <Text fontSize="13px">{texts.standart}</Text>
          <Box margin="0 15px">
            <BaseToggle checked={isStaker} onChange={handleStaketype} />
          </Box>

          <Text fontSize="13px">{texts.stakers}</Text>
        </Flex>
      </Flex>

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
        <Button padding={0} disabled={disableApprove} onClick={handleApprove} variant="green" spin={loadingApprove}>
          {texts.buttonApprove}
        </Button>
        <Button padding={0} disabled={disableStake} onClick={handleStake} variant="green" spin={loadingStake}>
          {texts.buttonStake}
        </Button>
      </Buttons>
    </StakeWrapper>
  );
};

export default Stake;
