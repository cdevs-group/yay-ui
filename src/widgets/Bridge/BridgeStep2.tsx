import React from "react";
import styled from "styled-components";
import { Text } from "../../components/Text";
import YAYIcon from "../../components/Svg/Icons/YAYIcon";
import { AvalancheIcon, BnbIcon, CloseIcon } from "../../components/Svg";
import { GhostsIcon, Metamask } from "../../constants/images";
import { BridgeStep2Props, NoticeBridgeType } from "./types";
import ProgressSteps from "../../components/Progress/ProgressSteps";
import ProgressRange from "../../components/Progress/ProgressRange";
import { Loader } from "../../components/Loader";
import { baseColors } from "../../theme/colors";
import TimerNotSolidWithoutBg from "../../components/Timer/TimerNotSolidWithoutBg";
import { Button } from "../../components/Button";
import { Flex } from "../../components/Box";

const BridgeStep2 = ({
  network1,
  network2,
  onDismiss,
  progress1,
  progress2,
  textsProgress1,
  textsProgress2,
  isErrorNetwork1,
  isErrorNetwork2,
  texts,
  isLoadGasNetwork1,
  isLoadGasNetwork2,
  transferredValue,
  addTokenHandler,
  WalletIcon,
  TokenIcon,
  gasPriceTextNetwork1,
  gasPriceTextNetwork2,
  avalancheIcon,
  bscIcon,
  stepsText,
  isLoadTimeNetwork,
  noticeVisible,
  noticeImg,
  noticeType,
  noticeTitle,
  noticeText,
  noticeButton1,
  noticeButton2,
  timer,
  noticeOnDismiss,
}: BridgeStep2Props) => {
  const AvaxNetwork = () => (
    <>
      {avalancheIcon || <AvalancheIcon />}
      <Text marginLeft="10px">{texts.avalanche || "Avalanche"}</Text>
    </>
  );

  const BscNetwork = () => (
    <>
      {bscIcon || <BnbIcon />}
      <Text marginLeft="10px">{texts.bsc || "BSC"}</Text>
    </>
  );

  return (
    <Content>
      <Wrapper blur={noticeVisible}>
        <Title size="lg">{texts.title}</Title>
        <ButtonClose onClick={onDismiss}>
          <CloseIcon />
        </ButtonClose>
        <TopLineBlock>
          <TokenBlock>
            <TopLineTitle fontWeight="400" textAlign="left">
              {texts.token}
            </TopLineTitle>
            <Token>
              {TokenIcon || (
                <>
                  <TokenImg>
                    <YAYIcon />
                  </TokenImg>
                  <Text>YAY</Text>
                </>
              )}
            </Token>
          </TokenBlock>
          <AmountTransfer>
            <TopLineTitle fontWeight="400" className="middle">
              {texts.amount}
            </TopLineTitle>
            <TokenValue>{transferredValue.token}</TokenValue>
            <ApproximatelyPrice>{transferredValue.fiat}</ApproximatelyPrice>
          </AmountTransfer>
          <TokenBlock>
            <TopLineTitle fontWeight="400" textAlign="right">
              {texts.addToken}
            </TopLineTitle>
            <MetamaskAdd onClick={addTokenHandler} as="button">
              <TokenImg className="last">{WalletIcon || <img src={Metamask} />}</TokenImg>
            </MetamaskAdd>
          </TokenBlock>
        </TopLineBlock>
        <BodyBlock>
          <HeadLine>
            <TitleDesk size="sm" fontWeight="400" color={baseColors.textGray}>
              {texts.network}
            </TitleDesk>
            <Flex flexDirection="column">
              <Text textAlign="center" fontWeight="400" size="sm" color={baseColors.textGray}>
                {texts.timer}
              </Text>
              <TimerWrap>
                <TimerNotSolidWithoutBg
                  hoursHide={timer < 3600 || isLoadTimeNetwork}
                  marginPoint="0 3px"
                  fontSize="15px"
                  height="16px"
                  isLoad={isLoadTimeNetwork}
                  time={timer}
                />
              </TimerWrap>
            </Flex>
            <TitleDesk textAlign="center" fontWeight="400" size="sm" color={baseColors.textGray}>
              {texts.coast}
            </TitleDesk>
          </HeadLine>
          <ProgressBlock>
            <TitleMobTop>{texts.network}</TitleMobTop>
            <Token className="main">{network1 === "avax" ? <AvaxNetwork /> : <BscNetwork />}</Token>
            <Progress>
              <ProgressWrapper>
                <ProgressSteps
                  stepsText={stepsText}
                  isError={isErrorNetwork1}
                  texts={textsProgress1}
                  progress={progress1}
                />
              </ProgressWrapper>
            </Progress>
            <TitleMob className="last">{texts.coast}</TitleMob>
            <GasCoast>
              {isLoadGasNetwork1 || !gasPriceTextNetwork1 ? (
                <LoaderWrap>
                  <Loader />
                </LoaderWrap>
              ) : (
                <>
                  <Text size="sm" paddingTop="21px">
                    {gasPriceTextNetwork1?.value}
                  </Text>
                  <Text size="xs" color={baseColors.textGray}>
                    {gasPriceTextNetwork1?.fiat}
                  </Text>
                </>
              )}
            </GasCoast>
          </ProgressBlock>
          <ProgressBlock>
            <TitleMobTop fontWeight="400">{texts.network}</TitleMobTop>
            <Token className="main">{network2 === "avax" ? <AvaxNetwork /> : <BscNetwork />}</Token>
            <Progress>
              <ProgressWrapper>
                <ProgressRange isError={isErrorNetwork2} progress={progress2} texts={textsProgress2} />
              </ProgressWrapper>
            </Progress>
            <GasCoast>
              {isLoadGasNetwork2 || !gasPriceTextNetwork2 ? (
                <LoaderWrap>
                  <Loader />
                </LoaderWrap>
              ) : (
                <>
                  <Text size="sm" paddingTop="21px">
                    {gasPriceTextNetwork2?.value}
                  </Text>
                  <Text size="xs" color={baseColors.textGray}>
                    {gasPriceTextNetwork2?.fiat}
                  </Text>
                </>
              )}
            </GasCoast>
          </ProgressBlock>
        </BodyBlock>
      </Wrapper>
      {noticeVisible && (
        <>
          <Notice>
            <ButtonClose onClick={noticeOnDismiss}>
              <CloseIcon />
            </ButtonClose>
            {noticeImg || <img src={GhostsIcon} alt="" style={{ display: "block", margin: "0 auto 13px" }} />}
            <Text
              textAlign="center"
              fontSize="26px"
              letterSpacing="0.5px"
              mb="10px"
              color={getBgNotice(noticeType)?.color}
            >
              {noticeTitle}
            </Text>
            <Text fontSize="18px" letterSpacing="0.5px" mb="17px" textAlign="center">
              {noticeText}
            </Text>
            {noticeButton1}
            {noticeButton2}
          </Notice>
          <Border noticeType={noticeType} />
        </>
      )}
    </Content>
  );
};

export default BridgeStep2;

const getBgNotice = (type: any) => {
  switch (type) {
    case NoticeBridgeType.SUCCESS:
      return {
        color: "green",
        bg: `
      radial-gradient(98% 49.86% at 100.03% 100%, #4BE43E 0%, rgba(75, 228, 62, 0.05) 100%),
      radial-gradient(24.21% 39.21% at 0% 0%, rgba(255, 255, 255, 0.81) 0%, rgba(255, 255, 255, 0.19) 100%),
      radial-gradient(21.19% 40.1% at 100.03% 0%, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%);
      `,
      };
    case NoticeBridgeType.ERROR:
      return {
        color: "redBg",
        bg: `
      radial-gradient(98% 49.86% at 100.03% 100%, #F03A00 0%, rgba(240, 58, 0, 0.05) 100%),
      radial-gradient(24.21% 39.21% at 0% 0%, rgba(255, 255, 255, 0.81) 0%, rgba(255, 255, 255, 0.19) 100%),
      radial-gradient(21.19% 40.1% at 100.03% 0%, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%);
      `,
      };
    default:
      return { color: "green", bg: "none" };
  }
};

const Content = styled.div`
  position: relative;
  max-width: 650px;
  margin: 0 auto;
  border-radius: 10px;
`;
const Border = styled.div<{ noticeType?: NoticeBridgeType }>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 1px;
  background: ${({ noticeType }) => getBgNotice(noticeType)?.bg};
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  border-radius: 10px;
  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: ${({ theme }) => theme.colors.dark};
    border-radius: inherit;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    display: block;
  }
`;
const Notice = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0 10px 50px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled(Text)`
  letter-spacing: 0.5px;
`;

const Wrapper = styled.div<{ blur?: boolean }>`
  position: relative;
  overflow: hidden;
  padding: 33px 14px 12px;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.dark};
  border-radius: 10px;
  filter: ${({ blur }) => (blur ? `blur(5px)` : "none")};
  z-index: 1;
  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 33px 23px;
  } ;
`;
const TopLineBlock = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  padding: 17px 21px;
  background: ${({ theme }) => theme.colors.buttonBg};
  box-shadow: ${({ theme }) => theme.colors.boxShadow4};
  border-radius: 15px;
  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 17px 25px;
  } ;
`;
const TokenBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:first-child {
    align-items: baseline;
  }
  &:last-child {
    align-items: flex-end;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    &:first-child {
      align-items: center;
    }
    &:last-child {
      align-items: center;
    }
  } ;
`;
const AmountTransfer = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -45%);
  ${({ theme }) => theme.mediaQueries.sm} {
    position: static;
    transform: translate(0, 0);
  }
`;
const TopLineTitle = styled(Text)`
  margin-bottom: 10px;
  width: 100%;
  letter-spacing: 0.05em;
  opacity: 0.7;
  &.middle {
    display: none;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    margin-bottom: 18px;
    &.middle {
      display: block;
    }
  }
`;
const TokenValue = styled(Text)`
  font-size: 11px;
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 21px;
  } ;
`;
const ApproximatelyPrice = styled(Text)`
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.textGray};
  font-size: 11px;
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 15px;
  } ;
`;
const Token = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &.main {
    flex-direction: row;
    margin-bottom: 25px;
    & svg {
      margin: 0 10px 0 0;
    }
  }
  & div {
    margin: 5px 0 0;
    &:first-child {
      margin: 0;
    }
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
    &.main {
      margin-bottom: 0;
    }
    & div {
      &:first-child {
        margin: 0 10px 0 0;
      }
    }
  } ;
`;
const TokenImg = styled.div`
  width: 38px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.bgOpacitY3};
  border-radius: 9px;
  margin: 0 10px 0 0;
`;
const MetamaskAdd = styled(Token)`
  cursor: pointer;
  padding: 0;
  margin: 0;
  border: none;
  background: none;
`;
const BodyBlock = styled.div`
  padding: 0;
  margin-top: 30px;
  ${({ theme }) => theme.mediaQueries.lg} {
    padding: 0 15px 0 25px;
  } ;
`;
const HeadLine = styled.div`
  position: relative;
  margin-bottom: 20px;
  grid-template-columns: 0.7fr 1.3fr 0.7fr;
  grid-column-gap: 25px;
  &:last-child {
    margin-bottom: 0;
    margin-top: 24px;
    ${({ theme }) => theme.mediaQueries.sm} {
      margin-top: 49px;
    }
    &::after {
      display: block;
      position: absolute;
      content: "";
      width: 200%;
      top: -25px;
      left: -100px;
      height: 1px;
      background: ${({ theme }) => theme.colors.greyRgba};
    }
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    display: grid;
  } ;
`;
const ProgressBlock = styled(HeadLine)`
  align-items: center;
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.mediaQueries.sm} {
    display: grid;
  } ;
`;
const Progress = styled.div`
  display: flex;
  justify-content: center;
`;
const GasCoast = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 85px;
  ${({ theme }) => theme.mediaQueries.sm} {
    height: auto;
  }
`;
const LoaderWrap = styled.div`
  transform: scale(0.45);
`;
const TitleMob = styled(Text)`
  display: block;
  font-size: 13px;
  margin: 25px 0 20px;
  &.last {
    margin: 25px 0 0;
  }
  color: ${({ theme }) => theme.colors.greyText};
  ${({ theme }) => theme.mediaQueries.sm} {
    display: none;
  } ;
`;
const TitleMobTop = styled(TitleMob)`
  margin: 0 0 10px;
  font-size: 13px;
`;
const ProgressWrapper = styled.div`
  width: 173px;
  ${({ theme }) => theme.mediaQueries.sm} {
    max-width: 173px;
    width: 100%;
  }
`;
const ButtonClose = styled.button`
  padding: 0;
  width: 30px;
  height: 30px;
  position: absolute;
  border: none;
  background: none;
  top: 40px;
  right: 25px;
  cursor: pointer;
  & svg {
    position: absolute;
    top: -8px;
    left: -8px;
  }
`;
const TimerWrap = styled.div`
  height: 16px;
  margin-top: 5px;
`;
const TitleDesk = styled(Text)`
  display: none;
  ${({ theme }) => theme.mediaQueries.sm} {
    display: block;
  }
`;
