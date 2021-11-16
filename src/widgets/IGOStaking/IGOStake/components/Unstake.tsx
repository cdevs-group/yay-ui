import React from "react";
import { StakeDescription, StakeTitle, UnstakeWrapper, Progress } from "../style";
import TimerNotSolidWithoutBg from "../../../../components/Timer/TimerNotSolidWithBg";
import { Button } from "../../../../components/Button";
import TextWithTooltip from "../../../IGOPlatform/Cards/components/TextWithTooltip";
import styled from "styled-components";

interface IUnstakeProps {
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
  cooldownDisabled: boolean;
  handleCooldown: () => void | Promise<void>;
  time: number;
}

const Unstake = ({ texts, cooldownDisabled, handleCooldown, time }: IUnstakeProps) => {
  return (
    <UnstakeWrapper>
      <div>
        <StakeTitle>{texts.unstakeTitle}</StakeTitle>
        <StakeDescription>
          <TextWithTooltip text={texts.unstakeDescription} textTooltip={texts.tooltip} />
        </StakeDescription>
      </div>
      <div>
        <TimerNotSolidWithoutBg width="100%" time={time} />
        <Progress />
      </div>
      <ButtonStyle disabled={cooldownDisabled} onClick={handleCooldown} variant={cooldownDisabled ? "option" : "green"}>
        {texts.cooldownButton}
      </ButtonStyle>
    </UnstakeWrapper>
  );
};

export default Unstake;

const ButtonStyle = styled(Button)`
  &:disabled {
    opacity: 1;
  }
`;
