import React from "react";
import { CardStatus, IGOCardProps } from "../types";
import styled from "styled-components";
import { Text } from "../../../components/Text";
import { Flex } from "../../../components/Box";
import { Button } from "../../../components/Button";
import NetworksTabs from "./components/NetworksTabs";
import Slots from "./components/Slots";
import BlurBlock from "./components/BlurBlock";
import Progress from "./components/Progress";
import TimerNotSolidWithoutBg from "../../../components/Timer/TimerNotSolidWithoutBg";
import TextWithTooltip from "./components/TextWithTooltip";

const IGOCard = ({
  status,
  token,
  tokenImg,
  amount,
  networksTab,
  handleTab,
  currentNetwork,
  dataSlots,
  statusText,
  currentVolume,
  totalVolume,
  texts,
  time,
  handleView,
  statusTitle,
  tokenName,
}: IGOCardProps) => {
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
        <TitleBlock marginBottom="20px !important">{texts.networks}</TitleBlock>
        <NetworksTabs networksTab={networksTab} currentNetwork={currentNetwork} onClick={handleTab} />
      </NetworkBlock>
      <div style={{ position: "relative" }}>
        {status === CardStatus.COMPLETED && (
          <BlurBlock marginStatusText={status === CardStatus.COMPLETED ? 90 : 45} statusText={statusText} />
        )}
        {status === CardStatus.CLAIMING && (
          <BlurBlock marginStatusText={status === CardStatus.CLAIMING ? 90 : 45} statusText={statusText} />
        )}
        {(status === CardStatus.WAIT_SALE ||
          status === CardStatus.BEFORE_WHITELIST ||
          status === CardStatus.OPEN_WHITELIST) && (
          <SlotsBlock>
            <TextWithTooltip text={texts.slots} textTooltip={texts.slotsTooltip} />
            <div style={{ marginBottom: 10 }} />
            <Slots dataSlots={dataSlots} />
          </SlotsBlock>
        )}
      </div>

      {status === CardStatus.WAIT_TGE && (
        <TimerBlock>
          {statusText}

          <TimerNotSolidWithoutBg withTime fontSize="15px" time={time} />
        </TimerBlock>
      )}
      {status === CardStatus.WAIT_SALE && (
        <TimerBlock>
          {statusText}

          <TimerNotSolidWithoutBg withTime fontSize="15px" time={time} />
        </TimerBlock>
      )}
      {status === CardStatus.BEFORE_WHITELIST && (
        <TimerBlock>
          {statusText}

          <TimerNotSolidWithoutBg withTime fontSize="15px" time={time} />
        </TimerBlock>
      )}
      {status === CardStatus.PUBLIC_SALE && (
        <TimerBlock>
          {statusText}

          <TimerNotSolidWithoutBg withTime fontSize="15px" time={time} />
        </TimerBlock>
      )}
      {status === CardStatus.WHITELIST_SALE && (
        <TimerBlock style={{ marginTop: "25px" }}>
          {statusText}

          <TimerNotSolidWithoutBg withTime fontSize="15px" time={time} />
        </TimerBlock>
      )}
      {status === CardStatus.OPEN_WHITELIST && (
        <TimerBlock>
          {statusText}
          <TimerNotSolidWithoutBg withTime fontSize="15px" time={time} />
        </TimerBlock>
      )}
      {[CardStatus.PUBLIC_SALE, CardStatus.WHITELIST_SALE].find((el) => el === status) && (
        <ProgressBlock style={{ marginTop: "37px" }}>
          <TitleBlock marginBottom="15px">{texts.progress}</TitleBlock>
          <Progress totalVolume={totalVolume} currentVolume={currentVolume} tokenName={tokenName} />
        </ProgressBlock>
      )}
      <ButtonStyle onClick={handleView} variant="green">
        {texts.button}
      </ButtonStyle>
    </Wrapper>
  );
};

export default IGOCard;

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
  margin-bottom: 10px;
  font-weight: normal;
  font-size: 15px;
  line-height: 140%;
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
  bottom: 26px;
  width: calc(100% - 24px);

  ${({ theme }) => theme.mediaQueries.sm} {
    width: calc(100% - 50px);
  }
`;
