import React, { ElementType } from "react";
import {
  StakeDescription,
  StakeTitle,
  UnstakeWrapper,
  ProgressTrack,
  ProgressWrap,
  ProgressBar,
  Buttons,
} from "../style";
import { Button, ButtonProps } from "../../../components/Button";
import TextWithTooltip from "../../IGOPlatform/Cards/components/TextWithTooltip";
import TimerNotSolidWithoutBg from "../../../components/Timer/TimerNotSolidWithoutBg";

import styled from "styled-components";
import { transparentize } from "polished";

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
    restake: string;
    tooltipButton: string;
  };
  cooldownDisabled: boolean;
  handleCooldown: () => void | Promise<void>;
  time: number;
  isBlur?: boolean;
  loadingCooldown?: boolean;
  progress: number;
  restakeDisabed?: boolean;
  handleRestake?: () => void | Promise<void>;
  loadingRestake?: boolean;
}

const Unstake = ({
  texts,
  cooldownDisabled,
  handleCooldown,
  time,
  isBlur,
  loadingCooldown,
  progress,
  restakeDisabed,
  handleRestake,
  loadingRestake,
}: IUnstakeProps) => {
  return (
    <div style={{ position: "relative" }}>
      <UnstakeWrapper id="unstake">
        <div>
          <StakeTitle>{texts.unstakeTitle}</StakeTitle>
          <StakeDescription>
            <TextWithTooltip text={texts.unstakeDescription} textTooltip={texts.tooltip} />
          </StakeDescription>
        </div>
        <div>
          <TimerNotSolidWithoutBg width="100%" time={time} />
          <ProgressTrack>
            <ProgressWrap>
              <ProgressBar progress={progress} />
            </ProgressWrap>
          </ProgressTrack>
        </div>
        <Buttons>
          <ButtonStyle disabled={cooldownDisabled} onClick={handleCooldown} variant="green" spin={loadingCooldown}>
            {texts.cooldownButton}
          </ButtonStyle>
          <ButtonStyle disabled={restakeDisabed} onClick={handleRestake} variant="green" spin={loadingRestake}>
            {texts.restake}
            <TextWithTooltip textTooltip={texts.tooltipButton} />
          </ButtonStyle>
        </Buttons>
      </UnstakeWrapper>
      {isBlur && <Claimed id="unstake" />}
    </div>
  );
};

export default Unstake;

const ButtonStyle = styled(Button)<ButtonProps<ElementType>>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
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
