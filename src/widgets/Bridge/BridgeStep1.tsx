import React from "react";
import styled from "styled-components";
import Text from "../../components/Text/Text";
import { Button } from "../../components/Button";
import { AvalancheIcon, BnbIcon } from "../../components/Svg";
import { BalanceInput } from "../../components/BalanceInput";
import { SwapButton } from "../../components/Toggle";
import { BridgeStep1Props } from "./types";

const BridgeWrapper = styled.div`
  max-width: 404px;
  max-height: 100vh;
  min-width: 303px;
  width: 100%;
  background: ${({ theme }) => theme.colors.bgGray};
  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  z-index: ${({ theme }) => theme.zIndices.modal};
  overflow-y: auto;
  ${({ theme }) => theme.mediaQueries.xs} {
    min-width: 360px;
    width: 100%;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    min-width: 404px;
    width: 100%;
  }
`;
const BridgeContent = styled.div`
  padding: 33px 23px 23px;
`;
const Field = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  margin-top: 6px;
  position: relative;
  padding: 10px 25px;
  background: ${({ theme }) => theme.colors.buttonBg};
  box-shadow: inset ${({ theme }) => theme.colors.boxShadow};
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.text};
`;
const NameChain = styled(Text)`
  letter-spacing: 0.5px;
`;
const Label = styled(Text)``;
const InputWrap = styled.div`
  margin-top: 13px;
  position: relative;
`;
const ButonReverse = styled.div`
  width: fit-content;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -10px);
`;
const MessageBox = styled.div`
  margin: 10px 0 0 auto;
  width: fit-content;
`;
const MessageText = styled(Text)`
  letter-spacing: 0.13em;
`;
const FeeInfo = styled(Text)`
  margin: 33px 0 43px;
  text-align: center;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.greyText};
`;

const BridgeStep1: React.FC<BridgeStep1Props> = ({
  toMax,
  texts,
  onUserInput,
  value,
  inputError,
  fee,
  balanceText,
  fromChange,
  switchHandler,
  handleButton,
}) => (
  <>
    <BridgeWrapper>
      <BridgeContent>
        <Label size="lg">{texts.from}</Label>
        {fromChange ? (
          <Field>
            <BnbIcon />
            <NameChain margin="0 0 0 10px">Binance Smart Chain</NameChain>
          </Field>
        ) : (
          <Field>
            <AvalancheIcon />
            <NameChain margin="0 0 0 10px">Avalanche</NameChain>
          </Field>
        )}
        <InputWrap>
          <BalanceInput toMax={toMax} token="yay" onUserInput={onUserInput} value={value} texts={texts.from} />
          <ButonReverse>
            <SwapButton onClick={switchHandler} />
          </ButonReverse>
          <MessageBox>
            <MessageText color={inputError ? "#FF6161" : "white"} size="xs">
              {balanceText.message1}{" "}
            </MessageText>
            <MessageText color={inputError ? "#FF6161" : "green"} size="xs">
              {" "}
              {balanceText.message2}
            </MessageText>
          </MessageBox>
        </InputWrap>
        <Label size="lg">{texts.to}</Label>
        {fromChange ? (
          <Field>
            <AvalancheIcon />
            <NameChain margin="0 0 0 10px">Avalanche</NameChain>
          </Field>
        ) : (
          <Field>
            <BnbIcon />
            <NameChain margin="0 0 0 10px">Binance Smart Chain</NameChain>
          </Field>
        )}
        <FeeInfo>
          {texts.fee} {fee}
        </FeeInfo>
        <Button onClick={handleButton} width="100%" variant="green">
          {texts.button}
        </Button>
      </BridgeContent>
    </BridgeWrapper>
  </>
);

export default BridgeStep1;
