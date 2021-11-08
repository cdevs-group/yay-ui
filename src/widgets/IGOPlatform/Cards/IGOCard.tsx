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
}: IGOCardProps) => {
  return (
    <Wrapper>
      <HeadLine>
        <TokenName>{token}</TokenName>
        <StatusName>{status}</StatusName>
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
        <TitleBlock marginBottom="20px">{texts.networks}</TitleBlock>
        <NetworksTabs networksTab={networksTab} currentNetwork={currentNetwork} onClick={handleTab} />
      </NetworkBlock>
      <div style={{ position: "relative" }}>
        {status !== CardStatus.OPEN_WHITELIST && (
          <BlurBlock
            marginStatusText={status === CardStatus.COMPLETED || status === CardStatus.CLAIMING ? 90 : 45}
            statusText={statusText}
          />
        )}
        {status === CardStatus.OPEN_WHITELIST && (
          <SlotsBlock>
            <TextWithTooltip text={texts.slots} textTooltip={texts.slotsTooltip} />
            <div style={{ marginBottom: 10 }} />
            <Slots dataSlots={dataSlots} />
          </SlotsBlock>
        )}
      </div>
      {status === CardStatus.OPEN_WHITELIST && (
        <TimerBlock>
          <TimerTitle>{texts.timer}</TimerTitle>
          <TimerNotSolidWithoutBg withTime fontSize="15px" time={time} />
        </TimerBlock>
      )}
      {[CardStatus.PUBLIC_SALE, CardStatus.WHITELIST_SALE].find((el) => el === status) && (
        <ProgressBlock>
          <TitleBlock marginBottom="15px">{texts.progress}</TitleBlock>
          <Progress totalVolume={totalVolume} currentVolume={currentVolume} />
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
  bottom: 33px;
  width: calc(100% - 24px);
  ${({ theme }) => theme.mediaQueries.sm} {
    width: calc(100% - 50px);
  }
`;
