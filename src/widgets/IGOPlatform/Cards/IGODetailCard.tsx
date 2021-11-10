import React, { useState } from "react";
import styled from "styled-components";
import { IGOCardInfoProps } from "../types";
import { Text } from "../../../components/Text";
import { Flex } from "../../../components/Box";
import { Button } from "../../../components/Button";
import { ArrowLeft } from "../../../components/Svg";
import NetworksTabs from "./components/NetworksTabs";
import TimerNotSolidWithoutBg from "../../../components/Timer/TimerNotSolidWithoutBg";
import CopyButton from "./components/CopyButton";
import { Tooltip } from "./style";
import { ellipsis } from "../../../helpers/ellipsis";
import TextWithTooltip from "./components/TextWithTooltip";

const IGODetailCard = ({
  name,
  status,
  site,
  tokenImg,
  balance,
  address,
  networksTab,
  currentNetwork,
  handleTab,
  time,
  texts,
  handleView,
  externalLink,
  withTimer,
  width,
}: IGOCardInfoProps) => {
  const [isTooltipDisplayed, setIsTooltipDisplayed] = useState(false);

  return (
    <Card>
      <HeadLine>
        <TokenName>{name}</TokenName>
        <StatusName>{status}</StatusName>
      </HeadLine>
      <SiteToken>{site}</SiteToken>{" "}
      <TokenInfoBlock>
        <TokenLogo>
          <img src={tokenImg} alt="token" />
        </TokenLogo>
        <TokenInfo>
          <TokenBalance>{balance}</TokenBalance>
          <AddressLine>
            <TokenAddress>{width && width < 560 ? ellipsis(address, 5) : address}</TokenAddress>
            <Buttons>
              <CopyButton textCopy={address} setIsTooltipDisplayed={setIsTooltipDisplayed} />
              <TokenButton target="_blank" as="a" href={externalLink}>
                <ArrowLeft />
              </TokenButton>
            </Buttons>
            <Tooltip isTooltipDisplayed={isTooltipDisplayed}>{texts.copied}</Tooltip>
          </AddressLine>
        </TokenInfo>
      </TokenInfoBlock>
      <NetworkBlock>
        <TextWithTooltip text={texts.networks} textTooltip={texts.networksTooltip} />
        <div style={{ marginBottom: 20 }} />
        <NetworksTabs networksTab={networksTab} currentNetwork={currentNetwork} onClick={handleTab} />
      </NetworkBlock>
      <TimerBlock>
        {withTimer ? (
          <>
            <TitleBlock marginBottom="5px">{texts.before}</TitleBlock>
            <TimerNotSolidWithoutBg withTime fontSize="15px" time={time} />
          </>
        ) : (
          <StatusStyle>{texts.status}</StatusStyle>
        )}
      </TimerBlock>
      <SummaryBlock>
        <TitleBlock marginBottom="5px">{texts.summary}</TitleBlock>
        <SummaryText
          dangerouslySetInnerHTML={{
            __html: texts.summaryText,
          }}
        />
      </SummaryBlock>
      <ButtonStyle onClick={handleView} variant="green">
        {texts.button}
      </ButtonStyle>
    </Card>
  );
};

export default IGODetailCard;

const Card = styled(Flex)`
  max-width: 548px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px 12px 23px;
  background: ${({ theme }) => theme.colors.bgGray};
  border-radius: 12px;
  margin: 0 auto;
  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 32px 22px;
  }
`;
const HeadLine = styled(Flex)`
  align-items: center;
  justify-content: space-between;
`;
const TokenName = styled(Text)`
  font-size: 15px;
  line-height: 100%;
  color: ${({ theme }) => theme.colors.textGray};
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 17px;
  }
`;
const StatusName = styled(Text)`
  font-size: 13px;
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
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 15px;
  }
`;

const SiteToken = styled(Text)`
  margin-top: 37px;
  font-weight: normal;
  font-size: 19px;
  line-height: 100%;
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 21px;
  }
`;
const TokenInfoBlock = styled(Flex)`
  align-items: center;
  margin-top: 36px;
  padding: 20px 15px 20px 15px;
  background: ${({ theme }) => theme.colors.buttonBg};
  border-radius: 12px;
`;
const TokenLogo = styled.div`
  flex-shrink: 0;
  & img {
    width: 55px;
    height: 55px;
  }
`;
const TokenInfo = styled.div`
  width: 100%;
  margin-left: 10px;
`;
const TokenBalance = styled(Text)`
  font-weight: normal;
  font-size: 15px;
  line-height: 100%;
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 17px;
  } ;
`;
const AddressLine = styled(Flex)`
  position: relative;
  margin-top: 15px;
  justify-content: space-between;
  align-items: center;
`;
const TokenAddress = styled(Text)`
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.colors.textGray};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const TokenButton = styled(Button)`
  width: 20px;
  height: 20px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.whiteRgba};
  margin-left: 15px;

  & svg {
    transform: rotate(135deg);
    margin-top: -3px;
    margin-left: -1px;
    width: 15px;
    height: 15px;
  }
`;

const NetworkBlock = styled.div`
  margin-top: 20px;
`;
const TitleBlock = styled(Text)`
  margin-bottom: 20px;
  font-weight: normal;
  font-size: 11px;
  line-height: 100%;
  color: ${({ theme }) => theme.colors.textGray};
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 13px;
  }
`;
const TimerBlock = styled(Flex)`
  margin-top: 20px;
  flex-direction: column;
  align-items: start;

  & ${TitleBlock} {
    margin-bottom: 5px;
  }
`;
const SummaryBlock = styled.div`
  margin-top: 5px;
  margin-bottom: 35px;
`;
const SummaryText = styled(Text)`
  font-weight: normal;
  font-size: 13px;
  line-height: 22px;
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 15px;
  }
`;
const ButtonStyle = styled(Button)`
  width: 100%;
  margin-top: auto;
`;

const Buttons = styled(Flex)`
  justify-content: space-between;
  margin-left: 10px;
`;
const StatusStyle = styled(Text)`
  margin-bottom: 20px;
  font-size: 13px;
  line-height: 19px;
  letter-spacing: 0.05em;

  & span {
    color: ${({ theme }) => theme.colors.green};
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 15px;
  }
`;
