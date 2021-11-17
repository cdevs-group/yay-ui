import React from "react";
import { IGOCardV2Props, StatusType } from "../types";
import styled from "styled-components";
import { Text } from "../../../components/Text";
import { Flex } from "../../../components/Box";
import { Button } from "../../../components/Button";
import NetworksTabs from "../../IGOPlatform/Cards/components/NetworksTabs";
import { baseColors } from "../../../theme/colors";
import TimerNotSolidWithoutBg from "../../../components/Timer/TimerNotSolidWithoutBg";

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
  isClaimed,
  tperiodText,
}: IGOCardV2Props) => {
  return (
    <Wrapper>
      <HeadLine>
        <TokenName>{token}</TokenName>
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
          {!isStaked && (
            <StakeButton onClick={handleStake} variant="green">
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
              <InfoText white={chance === 0}>{chance}%</InfoText>
            </>
          )}
        </ChanceBlock>
        <TitleBlock>{tperiodText}</TitleBlock>
        <TimerNotSolidWithoutBg
          widthWrapper="fit-content"
          margin="0"
          fontSize="15px"
          height="fit-content"
          time={time}
          color={baseColors.green}
        />
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

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 25px 25px 33px;
  }
`;
const HeadLine = styled(Flex)`
  align-items: center;
  justify-content: space-between;
`;
const TokenName = styled(Text)`
  font-size: 17px;
  line-height: 100%;
  color: ${({ theme }) => theme.colors.textGray};
`;
const StatusName = styled(Text)`
  font-size: 15px;
  line-height: 100%;
  color: ${({ theme }) => theme.colors.green};
  position: relative;

  &:after {
    display: block;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    position: absolute;
    content: "";
    left: -9px;
    top: 50%;
    transform: translateY(-50%);
    background: ${({ theme }) => theme.colors.green};
  }
`;
const AvailableBlock = styled(Flex)`
  align-items: center;
  margin-top: 30px;
  padding: 20px 15px;
  background: ${({ theme }) => theme.colors.buttonBg};
  border-radius: 12px;
  padding: ${({ theme }) => theme.mediaQueries.sm} {
    padding: 27px 20px;
  } ;
`;
const TokenLogo = styled.div`
  flex-shrink: 0;

  & img {
    width: 55px;
    height: 55px;
  }
`;
const TextBlock = styled.div`
  margin-left: 10px;
`;
const TitleBlock = styled(Text)`
  margin-bottom: 12px;
  font-weight: normal;
  font-size: 13px;
  line-height: 100%;
  color: ${({ theme }) => theme.colors.textGray};
`;
const AmoutTokens = styled(Text)`
  font-size: 15px;
  line-height: 100%;

  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 17px;
  }
`;
const NetworkBlock = styled.div`
  margin-top: 20px;
`;
const MainBlock = styled.div`
  margin-top: 20px;
`;
const TierLine = styled(Flex)`
  margin-bottom: 20px;
  justify-content: space-between;
  align-items: flex-end;
`;
const InfoText = styled(Text)<{ white?: boolean }>`
  font-weight: normal;
  font-size: 15px;
  line-height: 100%;
  color: ${({ theme, white }) => (white ? theme.colors.text : theme.colors.green)};
`;
const StakeButton = styled(Button)`
  height: 30px;
  max-width: 130px;
  width: 100%;
  border-radius: 7px;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.5px;
`;
const ChanceBlock = styled.div`
  margin-bottom: 20px;
`;
const SlotsBlock = styled.div`
  padding-top: 20px;
  position: relative;
`;
const ProgressBlock = styled.div`
  margin-top: 43px;
  margin-bottom: 27px;
`;
const TimerBlock = styled.div`
  margin-top: 40px;
  margin-bottom: 20px;
  text-align: center;
`;
const TimerTitle = styled(Text)`
  color: ${({ theme }) => theme.colors.textGray};
  font-size: 15px;
  line-height: 100%;
`;
const ButtonStyle = styled(Button)`
  position: absolute;
  bottom: 25px;
  width: calc(100% - 24px);

  ${({ theme }) => theme.mediaQueries.sm} {
    width: calc(100% - 50px);
  }
`;
