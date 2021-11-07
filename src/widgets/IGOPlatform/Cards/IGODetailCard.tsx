import React, { useState } from "react";
import styled from "styled-components";
import { IGOCardInfoProps } from "../types";
import { Text } from "../../../components/Text";
import { Flex } from "../../../components/Box";
import { Button } from "../../../components/Button";
import { ArrowLeft, CopyIcon } from "../../../components/Svg";
import NetworksTabs from "./components/NetworksTabs";
import TimerNotSolidWithoutBg from "../../../components/Timer/TimerNotSolidWithoutBg";

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
}: IGOCardInfoProps) => {
  const [isTooltipDisplayed, setIsTooltipDisplayed] = useState(false);
  return (
    <Card>
      <HeadLine>
        <TokenName>{name}</TokenName>
        <StatusName>{status}</StatusName>
      </HeadLine>
      <SiteToken>{site}</SiteToken>
      <TokenInfoBlock>
        <TokenLogo>
          <img src={tokenImg} />
        </TokenLogo>
        <TokenInfo>
          <TokenBalance>{balance}</TokenBalance>
          <AddressLine>
            <TokenAddress>{address}</TokenAddress>
            <Buttons>
              <TokenButton
                onClick={() => {
                  if (navigator.clipboard) {
                    navigator.clipboard.writeText(address);
                    setIsTooltipDisplayed(true);
                    setTimeout(() => {
                      setIsTooltipDisplayed(false);
                    }, 1000);
                  }
                }}
              >
                <CopyIcon />
              </TokenButton>
              <TokenButton target="_blank" as="a" href={externalLink}>
                <ArrowLeft />
              </TokenButton>
            </Buttons>
            <Tooltip isTooltipDisplayed={isTooltipDisplayed}>{texts.copied}</Tooltip>
          </AddressLine>
        </TokenInfo>
      </TokenInfoBlock>
      <NetworkBlock>
        <TitleBlock marginBottom="20px">{texts.networks}</TitleBlock>
        <NetworksTabs networksTab={networksTab} currentNetwork={currentNetwork} onClick={handleTab} />
      </NetworkBlock>
      <TimerBlock>
        {withTimer ? (
          <>
            <TitleBlock marginBottom="5px">{texts.before}</TitleBlock>
            <TimerNotSolidWithoutBg withTime fontSize="15px" time={time} />
          </>
        ) : (
          <StatusStyle>
            {texts.status} <span>{texts.isLive}</span>
          </StatusStyle>
        )}
      </TimerBlock>

      <SummaryBlock>
        <TitleBlock marginBottom="5px">{texts.summary}</TitleBlock>
        <SummaryText>{texts.summaryText}</SummaryText>
      </SummaryBlock>
      <ButtonStyle onClick={handleView} variant="green">
        {texts.button}
      </ButtonStyle>
    </Card>
  );
};

export default IGODetailCard;

const Card = styled.div`
  max-width: 548px;
  padding: 32px 22px;
  background: ${({ theme }) => theme.colors.bgGray};
  border-radius: 12px;
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

const SiteToken = styled(Text)`
  margin-top: 37px;
  font-weight: normal;
  font-size: 21px;
  line-height: 100%;
`;
const TokenInfoBlock = styled(Flex)`
  margin-top: 36px;
  padding: 27px 20px;
  background: ${({ theme }) => theme.colors.buttonBg};
  border-radius: 12px;
  align-items: center;
`;
const TokenLogo = styled.div`
  & img {
    width: 55px;
    height: 55px;
  }
`;
const TokenInfo = styled.div`
  margin-left: 10px;
  width: 100%;
`;
const TokenBalance = styled(Text)`
  font-weight: normal;
  font-size: 17px;
  line-height: 100%;
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

  & svg {
    width: 12px;
    height: 12px;
  }

  &:last-child {
    margin-left: 15px;

    & svg {
      transform: rotate(135deg);
      margin-top: -3px;
      margin-left: -1px;
      width: 15px;
      height: 15px;
    }
  }
`;
const NetworkBlock = styled.div`
  margin-top: 20px;
`;
const TitleBlock = styled(Text)`
  margin-bottom: 20px;
  font-weight: normal;
  font-size: 13px;
  line-height: 100%;
  color: ${({ theme }) => theme.colors.textGray};
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
`;
const SummaryText = styled(Text)`
  font-weight: normal;
  font-size: 15px;
  line-height: 22px;
`;
const ButtonStyle = styled(Button)`
  width: 100%;
  margin-top: 35px;
`;
const Tooltip = styled.div<{ isTooltipDisplayed: boolean }>`
  display: ${({ isTooltipDisplayed }) => (isTooltipDisplayed ? "block" : "none")};
  position: absolute;
  bottom: -22px;
  right: 0;
  left: 0;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.contrast};
  color: ${({ theme }) => theme.colors.invertedContrast};
  border-radius: 16px;
  opacity: 0.7;
`;
const Buttons = styled(Flex)`
  position: relative;
  justify-content: space-between;
`;
const StatusStyle = styled(Text)`
  margin-bottom: 20px;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0.05em;
  & span {
    color: ${({ theme }) => theme.colors.green};
  }
`;
