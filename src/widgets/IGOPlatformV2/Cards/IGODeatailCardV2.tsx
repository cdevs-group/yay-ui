import React, { useState } from "react";
import {
  TokenButton,
  Card,
  HeadLine,
  TokenName,
  StatusName,
  TokenInfoBlock,
  TokenInfo,
  TokenLogo,
  TokenBalance,
  AddressLine,
  TokenAddress,
  Tooltip,
  Buttons,
  TitleBlock,
  NetworkBlock,
} from "./styles";
import { IGODetailCardV2Props } from "../types";
import styled from "styled-components";
import { ArrowLeft } from "../../../components/Svg";
import { Text } from "../../../components/Text";
import { Button } from "../../../components/Button";
import CopyButton from "../../IGOPlatform/Cards/components/CopyButton";
import { ellipsis } from "../../../helpers/ellipsis";
import NetworksTabs from "../../IGOPlatform/Cards/components/NetworksTabs";
import TimerNotSolidWithoutBg from "../../../components/Timer/TimerNotSolidWithoutBg";
import { baseColors } from "../../../theme/colors";

const IGODetailCardV2 = ({
  token,
  statusTitle,
  site,
  texts,
  tokenImg,
  width,
  address,
  balance,
  externalLink,
  networksTab,
  currentNetwork,
  handleTab,
  tperiodText,
  time,
  linkView,
}: IGODetailCardV2Props) => {
  const [isTooltipDisplayed, setIsTooltipDisplayed] = useState(false);

  return (
    <CardFlex>
      <div>
        <HeadLine>
          <TokenName>{token}</TokenName>
          <StatusName>{statusTitle}</StatusName>
        </HeadLine>
        <SiteName>{site}</SiteName>
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
          <TitleBlock marginBottom="20px !important">{texts.availableNetwork}</TitleBlock>
          <NetworksTabs networksTab={networksTab} currentNetwork={currentNetwork} onClick={handleTab} />
        </NetworkBlock>
        <TimerBlock>
          <TitleBlock marginBottom="20px !important">{tperiodText}</TitleBlock>
          <TimerNotSolidWithoutBg
            widthWrapper="fit-content"
            margin="0"
            fontSize="15px"
            height="fit-content"
            time={time}
            color={baseColors.green}
          />
        </TimerBlock>
      </div>
      <ButtonStyle target="_blank" as="a" href={linkView} variant="green">
        {texts.button}
      </ButtonStyle>
    </CardFlex>
  );
};

export default IGODetailCardV2;

const CardFlex = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const SiteName = styled(Text)`
  margin-top: 37px;
  font-size: 21px;
  line-height: 100%;
`;
const TimerBlock = styled.div`
  margin-top: 25px;
`;
const ButtonStyle = styled(Button)`
  margin-top: 47px;
  width: 100%;
  display: flex;
  height: 50px;
  border: 0;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  cursor: pointer;
  background: linear-gradient(180deg, #4cee3e -16%, #47da3b 100%);
  color: #fff;
  box-shadow: none;
  transition: 0.3s;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;

  &:hover {
    box-shadow: 0px 0px 29px #2cb021;
  }
`;
