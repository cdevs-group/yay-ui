import React from "react";
import styled from "styled-components";
import { Text } from "../../components/Text";
import YAY from "../../components/Svg/Icons/YAY.svg";
import { AvalancheIcon, BnbIcon } from "../../components/Svg";
import { Metamask } from "../../constants/images";
import { BridgeStep2Props } from "./types";
import { ProgressRange, ProgressSteps } from "../../components/Progress";
import { Loader } from "../../components/Loader";
import { baseColors } from "../../theme/colors";

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
  gasPriceText,
  BlockChainFrom,
  BlockChainTo,
  stepsText,
}: BridgeStep2Props) => {
  return (
    <Wrapper>
      <Title size="lg">{texts.title}</Title>
      <TopLineBlock>
        <TokenBlock>
          <TopLineTitle textAlign="left" marginBottom="18px">
            {texts.token}
          </TopLineTitle>
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
          <TopLineTitle marginBottom="16px">{texts.amount}</TopLineTitle>
          <TokenValue size="lg">{transferredValue.token}</TokenValue>
          <ApproximatelyPrice>{transferredValue.fiat}</ApproximatelyPrice>
        </AmountTransfer>
        <TokenBlock>
          <TopLineTitle marginBottom="18px" textAlign="right">
            {texts.addToken}
          </TopLineTitle>
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
          <Token>
            {BlockChainFrom || (
              <>
                <BnbIcon />
                <Text marginLeft="10px">{texts.bsc}</Text>
              </>
            )}
          </Token>
          <Progress>
            <div style={{ maxWidth: "173px", width: "100%" }}>
              <ProgressSteps stepsText={stepsText} isError={isError} texts={textsProgress1} step={progress1} />
            </div>
          </Progress>
          <Text textAlign="center">{timer1}</Text>
          <GasCoast>
            {isLoadGas || !gasPriceText ? (
              <LoaderWrap>
                <Loader />
              </LoaderWrap>
            ) : (
              <>
                <Text paddingTop="22px">{gasPriceText?.value}</Text>
                <Text size="sm" color={baseColors.textGray}>
                  {gasPriceText?.fiat}
                </Text>
              </>
            )}
          </GasCoast>
        </ProgressBlock>
        <ProgressBlock>
          <Token>
            {BlockChainTo || (
              <>
                <AvalancheIcon />
                <Text marginLeft="10px">{texts.avalanche}</Text>
              </>
            )}
          </Token>
          <Progress>
            <div style={{ maxWidth: "173px", width: "100%" }}>
              <ProgressRange progress={progress2} texts={textsProgress2} />
            </div>
          </Progress>
          <Text textAlign="center">{timer2}</Text>
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
  padding: 33px 23px;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.dark};
  border-radius: 10px;
`;
const TopLineBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  padding: 17px 17px 18px 23px;
  padding: 17px 25px;
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
`;
const AmountTransfer = styled.div`
  text-align: center;
`;
const TopLineTitle = styled(Text)`
  width: 100%;
  letter-spacing: 0.05em;
  opacity: 0.7;
`;
const TokenValue = styled(Text)`
  letter-spacing: 0.05em;
`;
const ApproximatelyPrice = styled(Text)`
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.textGray};
`;
const Token = styled.div`
  display: flex;
  align-items: center;
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
  padding: 0 15px 0 25px;
  margin-top: 30px;
`;
const HeadLine = styled.div`
  position: relative;
  margin-bottom: 24px;
  display: grid;
  grid-template-columns: 0.7fr 1.5fr 0.4fr 0.7fr;
  grid-column-gap: 25px;
  &:last-child {
    margin-bottom: 0;
    margin-top: 49px;
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
`;
const ProgressBlock = styled(HeadLine)`
  align-items: center;
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
`;
const LoaderWrap = styled.div`
  transform: scale(0.45);
`;
