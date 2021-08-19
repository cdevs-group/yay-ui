import React from "react";
import styled from "styled-components";
import { Text } from "../../components/Text";
import YAY from "../../components/Svg/Icons/YAY.svg";
import { AvalancheIcon, BnbIcon } from "../../components/Svg";
import { Metamask } from "../../constants/images";
import { BridgeStep2Props } from "./types";
import { ProgressSteps } from "../../components/Progress";

const BridgeStep2 = ({ step, textsProgress1 }: BridgeStep2Props) => {
  return (
    <Wrapper>
      <Title size="lg">Transaction status</Title>
      <TopLineBlock>
        <TokenBlock>
          <TopLineTitle textAlign="left" marginBottom="18px">
            Token
          </TopLineTitle>
          <Token>
            <TokenImg>
              <img src={YAY} />
            </TokenImg>
            <TokenName>YAY</TokenName>
          </Token>
        </TokenBlock>
        <AmountTransfer>
          <TopLineTitle marginBottom="16px">Amount transferred</TopLineTitle>
          <TokenValue size="lg">12,000 YAY</TokenValue>
          <ApproximatelyPrice>~ $10.00</ApproximatelyPrice>
        </AmountTransfer>
        <TokenBlock>
          <TopLineTitle marginBottom="18px" textAlign="right">
            Add token
          </TopLineTitle>
          <MetamaskAdd onClick={() => {}} as="button">
            <TokenImg className="last">
              <img src={Metamask} />
            </TokenImg>
          </MetamaskAdd>
        </TokenBlock>
      </TopLineBlock>
      <BodyBlock>
        <HeadLine>
          <Text size="sm" color="#A3A3A3">
            Network
          </Text>
          <Text size="sm" color="#A3A3A3">
            Timer
          </Text>
          <Text size="sm" color="#A3A3A3">
            Coat of GAS
          </Text>
        </HeadLine>
        <ProgressBlock>
          <Token>
            <BnbIcon />
            <Text marginLeft="10px">BSC</Text>
          </Token>
        </ProgressBlock>
        <ProgressBlock>
          <Token>
            <AvalancheIcon />
            <Text marginLeft="10px">Avalanche</Text>
          </Token>
          <Progress>
            <ProgressSteps texts={textsProgress1} step={step} />
          </Progress>
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
  padding: 17px 25px;
  background: ${({ theme }) => theme.colors.buttonBg};
  box-shadow: ${({ theme }) => theme.colors.boxShadow4};
  border-radius: 15px;
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
const TokenName = styled(Text)``;
const BodyBlock = styled.div`
  margin-top: 30px;
`;
const HeadLine = styled.div``;
const ProgressBlock = styled.div``;
const Progress = styled.div``;
