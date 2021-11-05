import React from "react";
import { IGOCardProps } from "../types";
import styled from "styled-components";
import { Text } from "../../../components/Text";
import { Flex } from "../../../components/Box";
import { Button } from "../../../components/Button";
import NetworksTabs from "./components/NetworksTabs";
import Slots from "./components/Slots";
import BlurBlock from "./components/BlurBlock";
import Progress from "./components/Progress";

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
  statusTextVisible,
  currentVolume,
  totalVolume,
  texts,
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
        {statusTextVisible && <BlurBlock statusText={statusText} />}
        <SlotsBlock>
          <TitleBlock>{texts.slots}</TitleBlock>
          <Slots dataSlots={dataSlots} />
        </SlotsBlock>
      </div>

      <ProgressBlock>
        <TitleBlock marginBottom="15px">{texts.progress}</TitleBlock>
        <Progress totalVolume={totalVolume} currentVolume={currentVolume} />
      </ProgressBlock>
      <Button width="100%" variant="green">
        {texts.button}
      </Button>
    </Wrapper>
  );
};

export default IGOCard;

const Wrapper = styled.div`
  max-width: 360px;
  padding: 25px 25px 33px;
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
const AvailableBlock = styled(Flex)`
  align-items: center;
  margin-top: 30px;
  padding: 27px 20px;
  background: ${({ theme }) => theme.colors.buttonBg};
  border-radius: 12px;
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
  font-size: 17px;
  line-height: 100%;
`;
const NetworkBlock = styled.div`
  margin-top: 20px;
`;

const SlotsBlock = styled.div`
  padding-top: 20px;
  position: relative;
`;
const ProgressBlock = styled.div`
  margin-top: 20px;
  margin-bottom: 27px;
`;
