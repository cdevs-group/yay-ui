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
import { HelpIcon2, useTooltip } from "../../../index";
import { Flex } from "../../../components/Box";

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
    countdown: string;
    unstake?: string;
    claim?: string;
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
  isStaker?: boolean;
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
  isStaker,
}: IUnstakeProps) => {
  const { tooltipVisible, targetRef } = useTooltip(texts.tooltipButton, { placement: "top-start", trigger: "hover" });

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
            {isStaker ? texts.unstake : texts.cooldownButton}
          </ButtonStyle>
          <ButtonWrap ref={targetRef}>
            {tooltipVisible && !isStaker && <StyledTooltip>{texts.tooltipButton}</StyledTooltip>}
            <ButtonStyle disabled={restakeDisabed} onClick={handleRestake} variant="green" spin={loadingRestake}>
              {isStaker ? texts.claim : texts.restake}
              <Flex ml="10px" alignItems="center">
                {!isStaker && (
                  <Flex alignItems="center">
                    <HelpIcon2 />
                  </Flex>
                )}
              </Flex>
            </ButtonStyle>
          </ButtonWrap>{" "}
        </Buttons>
      </UnstakeWrapper>
      {isBlur && <Claimed id="unstake" />}
    </div>
  );
};

export default Unstake;

const ButtonStyle = styled(Button)<ButtonProps<ElementType>>`
  position: relative;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const ButtonWrap = styled.div`
  position: relative;
  width: 100%;
  pointer-events: all;
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

export const StyledTooltip = styled.div`
  opacity: 1;
  left: -100px;
  top: -70px;
  width: 230px;
  position: absolute;
  padding: 11px;
  font-size: 11px;
  line-height: 16px;
  border-radius: 8px;
  max-width: 320px;
  z-index: 101;
  background: ${({ theme }) => theme.colors.bgGray};
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid #606060;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);

  ${({ theme }) => theme.mediaQueries.sm} {
    left: 0;
  }
`;
