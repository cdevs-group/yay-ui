import React from "react";
import styled from "styled-components";
import { Text } from "../../components/Text";
import YAY from "../../components/Svg/Icons/YAY.svg";
import { AvalancheIcon, BnbIcon } from "../../components/Svg";
import { Metamask } from "../../constants/images";
import { BridgeStep2Props } from "./types";
import ProgressSteps from "../../components/Progress/ProgressSteps";
import ProgressRange from "../../components/Progress/ProgressRange";
import { Loader } from "../../components/Loader";
import { baseColors } from "../../theme/colors";
import TimerNotSolidWithoutBg from "../../components/Timer/TimerNotSolidWithoutBg";

const BridgeStep2 = ({
  progress1,
  progress2,
  textsProgress1,
  textsProgress2,
  isError,
  texts,
  isLoadGas,
  timer1,
  timer2,
  transferredValue,
  addTokenHandler,
  WalletIcon,
  TokenIcon,
  gasPriceTextNetwork1,
  gasPriceTextNetwork2,
  BlockChainFrom,
  BlockChainTo,
  stepsText,
  isLoadTime,
}: BridgeStep2Props) => {
  return (
    <Wrapper>
      <Title size="lg">{texts.title}</Title>
      <TopLineBlock>
        <TokenBlock>
          <TopLineTitle textAlign="left">{texts.token}</TopLineTitle>
          <Token>
            {TokenIcon || (
              <>
                <TokenImg>
                  <img src={YAY} />
                </TokenImg>
                <Text>YAY</Text>
              </>
            )}
          </Token>
        </TokenBlock>
        <AmountTransfer>
          <TopLineTitle className="middle">{texts.amount}</TopLineTitle>
          <TokenValue>{transferredValue.token}</TokenValue>
          <ApproximatelyPrice>{transferredValue.fiat}</ApproximatelyPrice>
        </AmountTransfer>
        <TokenBlock>
          <TopLineTitle textAlign="right">{texts.addToken}</TopLineTitle>
          <MetamaskAdd onClick={addTokenHandler} as="button">
            {WalletIcon || (
              <TokenImg className="last">
                <img src={Metamask} />
              </TokenImg>
            )}
          </MetamaskAdd>
        </TokenBlock>
      </TopLineBlock>
      <BodyBlock>
        <HeadLine>
          <Text size="sm" color={baseColors.textGray}>
            {texts.network}
          </Text>
          <div></div>
          <Text textAlign="center" size="sm" color={baseColors.textGray}>
            {texts.timer}
          </Text>
          <Text textAlign="center" size="sm" color={baseColors.textGray}>
            {texts.coast}
          </Text>
        </HeadLine>
        <ProgressBlock>
          <TitleMobTop>{texts.network}</TitleMobTop>
          <Token className="main">
            {BlockChainFrom || (
              <>
                <BnbIcon />
                <Text marginLeft="10px">{texts.bsc}</Text>
              </>
            )}
          </Token>
          <Progress>
            <ProgressWrapper>
              <ProgressSteps stepsText={stepsText} isError={isError} texts={textsProgress1} step={progress1} />
            </ProgressWrapper>
          </Progress>
          <TitleMob>{texts.timer}</TitleMob>
          <TimerNotSolidWithoutBg isLoad={isLoadTime} time={timer1} />
          <TitleMob className="last">{texts.coast}</TitleMob>
          <GasCoast>
            {isLoadGas || !gasPriceTextNetwork1 ? (
              <LoaderWrap>
                <Loader />
              </LoaderWrap>
            ) : (
              <>
                <Text paddingTop="21px">{gasPriceTextNetwork1?.value}</Text>
                <Text size="sm" color={baseColors.textGray}>
                  {gasPriceTextNetwork1?.fiat}
                </Text>
              </>
            )}
          </GasCoast>
        </ProgressBlock>
        <ProgressBlock>
          <TitleMobTop>{texts.network}</TitleMobTop>
          <Token className="main">
            {BlockChainTo || (
              <>
                <AvalancheIcon />
                <Text marginLeft="10px">{texts.avalanche}</Text>
              </>
            )}
          </Token>
          <Progress>
            <ProgressWrapper>
              <ProgressRange progress={progress2} texts={textsProgress2} />
            </ProgressWrapper>
          </Progress>
          <TitleMob>{texts.timer}</TitleMob>
          <TimerNotSolidWithoutBg isLoad={isLoadTime} time={timer2} />
          <TitleMob className="last">{texts.coast}</TitleMob>
          <GasCoast>
            {isLoadGas || !gasPriceTextNetwork2 ? (
              <LoaderWrap>
                <Loader />
              </LoaderWrap>
            ) : (
              <>
                <Text paddingTop="21px">{gasPriceTextNetwork2?.value}</Text>
                <Text size="sm" color={baseColors.textGray}>
                  {gasPriceTextNetwork2?.fiat}
                </Text>
              </>
            )}
          </GasCoast>
        </ProgressBlock>
      </BodyBlock>
    </Wrapper>
  );
};

export default BridgeStep2;

const Title = styled(Text)`
  letter-spacing: 0.5px;
`;
const Wrapper = styled.div`
  margin: 0 auto;
  overflow: hidden;
  max-width: 650px;
  padding: 33px 14px 12px;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.dark};
  border-radius: 10px;
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
  margin-bottom: 24px;
  display: none;
  grid-template-columns: 0.7fr 1.3fr 0.4fr 0.7fr;
  grid-column-gap: 15px;
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
  justify-content: flex-end;
`;
const GasCoast = styled.div`
  text-align: center;
  display: flex;
  //justify-content: center;
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
`;
const ProgressWrapper = styled.div`
  width: 173px;
  ${({ theme }) => theme.mediaQueries.sm} {
    max-width: 173px;
    width: 100%;
  }
`;
