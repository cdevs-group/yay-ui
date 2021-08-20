import React, { ReactNode } from "react";
import styled from "styled-components";
import Text from "../../components/Text/Text";
import { Button } from "../../components/Button";
import { AvalancheIcon, BnbIcon } from "../../components/Svg";
import { BalanceInput } from "../../components/BalanceInput";
import { SwapButton } from "../../components/Toggle";
import { BridgeStep1Props } from "./types";
import { lightColors, baseColors } from "../../theme/colors";
import YAY from "../../components/Svg/Icons/YAY.svg";

const Wrapper = styled.div`
  width: fit-content;
`;
const BridgeWrapper = styled.div`
  max-width: 404px;
  max-height: 100vh;
  min-width: 303px;
  width: 100%;
  background: ${({ theme }) => theme.colors.bgGray};
  box-shadow: ${({ theme }) => theme.colors.boxShadow8};
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
const ButtonReverse = styled.div`
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
const YayLogo = styled.div`
  margin-bottom: 7px;
`;
const ButtonOpenProof = styled(Text)`
  text-align: center;
  margin: 32px auto 0;
  background: none;
  border: none;
  cursor: pointer;
`;

const BridgeStep1: React.FC<BridgeStep1Props> = ({
  handleButtonToMax,
  texts,
  onUserInput,
  value,
  inputError,
  fee,
  balanceText,
  fromChange,
  switchHandler,
  handleButton,
}) => {
  const BlockChainName = ({ icon, name }: { icon: ReactNode; name?: string }) => {
    return (
      <Field>
        {icon}
        <NameChain margin="0 0 0 10px">{name}</NameChain>
      </Field>
    );
  };

  return (
    <Wrapper>
      <BridgeWrapper>
        <BridgeContent>
          <Label size="lg">{texts.from}</Label>
          {fromChange ? (
            <BlockChainName icon={<BnbIcon />} name={texts.bsc} />
          ) : (
            <BlockChainName icon={<AvalancheIcon />} name={texts.avalanche} />
          )}
          <InputWrap>
            <BalanceInput
              handleButtonToMax={handleButtonToMax}
              token="yay"
              onUserInput={onUserInput}
              value={value}
              texts={texts.from}
              InputToken={
                <>
                  <YayLogo>
                    <img src={YAY} />
                  </YayLogo>
                  YAY
                </>
              }
            />
            <ButtonReverse>
              <SwapButton onClick={switchHandler} />
            </ButtonReverse>
            <MessageBox>
              <MessageText color={inputError ? lightColors.redBg : lightColors.text} size="xs">
                {balanceText.message1}{" "}
              </MessageText>
              <MessageText color={inputError ? lightColors.redBg : baseColors.green} size="xs">
                {" "}
                {balanceText.message2}
              </MessageText>
            </MessageBox>
          </InputWrap>
          <Label size="lg">{texts.to}</Label>
          {fromChange ? (
            <BlockChainName icon={<AvalancheIcon />} name={texts.avalanche} />
          ) : (
            <BlockChainName icon={<BnbIcon />} name={texts.bsc} />
          )}
          <FeeInfo>
            {texts.fee} {fee}
          </FeeInfo>
          <Button onClick={handleButton} width="100%" variant="green">
            {texts.button}
          </Button>
        </BridgeContent>
      </BridgeWrapper>
      <ButtonOpenProof>Proof of assets</ButtonOpenProof>
    </Wrapper>
  );
};

export default BridgeStep1;
