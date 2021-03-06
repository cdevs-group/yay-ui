import React from "react";
import { IGOCardV2Props, StatusType } from "../types";
import styled, { useTheme } from "styled-components";
import { Button } from "../../../components/Button";
import NetworksTabs from "../../IGOPlatform/Cards/components/NetworksTabs";
import TimerNotSolidWithoutBg from "../../../components/Timer/TimerNotSolidWithoutBg";
import {
  HeadLine,
  TokenName,
  StatusName,
  AvailableBlock,
  TokenLogo,
  TextBlock,
  TitleBlock,
  AmoutTokens,
  NetworkBlock,
  TierLine,
  StakeButton,
  InfoText,
  ChanceBlock,
  Ribbon,
} from "./styles";

const IGOCardV2 = ({
  chance,
  status,
  handleStake,
  texts,
  handleView,
  token,
  statusTitle,
  tokenImg,
  amount,
  networksTab,
  currentNetwork,
  handleTab,
  tierStatus,
  time,
  isStaked,
  allocation,
  inPool,
  tperiodText,
  propsButtonStake,
  disabledButtonStake,
  isLottery,
  holdersRound,
}: IGOCardV2Props) => {
  const theme = useTheme();
  return (
    <Wrapper>
      <HeadLine>
        {holdersRound && <Ribbon>{texts.holdersRound}</Ribbon>}
        <TokenName>{!holdersRound && token}</TokenName>
        <StatusName>{statusTitle}</StatusName>
      </HeadLine>
      <AvailableBlock>
        <TokenLogo>
          <img src={tokenImg} />
        </TokenLogo>
        <TextBlock>
          <TitleBlock>{texts.available}</TitleBlock>
          <AmoutTokens>{amount}</AmoutTokens>
        </TextBlock>
      </AvailableBlock>
      <NetworkBlock>
        <TitleBlock marginBottom="20px !important">{texts.availableNetwork}</TitleBlock>
        <NetworksTabs networksTab={networksTab} currentNetwork={currentNetwork} onClick={handleTab} />
      </NetworkBlock>
      <MainBlock>
        <TierLine>
          <div>
            <TitleBlock>{texts.tier}</TitleBlock>
            <InfoText white>{tierStatus}</InfoText>
          </div>
          {!isStaked && status === StatusType.BEFORE_SALE && (
            <StakeButton disabled={disabledButtonStake} onClick={handleStake} variant="green" {...propsButtonStake}>
              {texts.stakeButton}
            </StakeButton>
          )}
        </TierLine>
        <ChanceBlock>
          {status === StatusType.CLAIMING || status === StatusType.COMPLETED ? (
            <>
              {" "}
              <TitleBlock>{texts.allocation}</TitleBlock>
              {!inPool ? <InfoText white>-</InfoText> : <InfoText>{allocation}</InfoText>}
            </>
          ) : (
            <>
              {" "}
              <TitleBlock>{texts.chance}</TitleBlock>
              <InfoText white={chance === 0}>{chance}</InfoText>
            </>
          )}
        </ChanceBlock>
        {!isLottery && (
          <>
            <TitleBlock>{tperiodText}</TitleBlock>
            <TimerNotSolidWithoutBg
              widthWrapper="fit-content"
              margin="0"
              fontSize="15px"
              height="fit-content"
              time={time}
              color={theme.colors.green}
            />
          </>
        )}
      </MainBlock>
      <ButtonStyle onClick={handleView} variant="green">
        {texts.button}
      </ButtonStyle>
    </Wrapper>
  );
};

export default IGOCardV2;

const Wrapper = styled.div`
  position: relative;
  max-width: 548px;
  width: 100%;
  min-height: 555px;
  margin: 0 auto;
  padding: 12px 12px 23px;
  background: ${({ theme }) => theme.colors.bgGray};
  border-radius: 12px;
  overflow: hidden;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 25px 25px 33px;
  }
`;
const MainBlock = styled.div`
  margin-top: 20px;
`;

const ButtonStyle = styled(Button)`
  position: absolute;
  bottom: 25px;
  width: calc(100% - 24px);

  ${({ theme }) => theme.mediaQueries.sm} {
    width: calc(100% - 50px);
  }
`;
