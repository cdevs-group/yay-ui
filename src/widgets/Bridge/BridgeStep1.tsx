import React, { ReactNode } from "react";
import styled, { useTheme } from "styled-components";
import Text from "../../components/Text/Text";
import { BalanceInput } from "../../components/BalanceInput";
import { SwapButton } from "../../components/Toggle";
import { BridgeStep1Props, NoticeBridgeType } from "./types";
import BlurWithBorder from "../../components/BlurWithBorder/BlurWithBorder";

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  margin: 0 auto;
`;

const BridgeWrapper = styled.div`
  position: relative;
  max-width: 404px;
  max-height: 100vh;
  min-width: 303px;
  width: 100%;
  background: ${({ theme }) => theme.colors.bgGray};
  box-shadow: ${({ theme }) => theme.colors.boxShadow8};
  border-radius: 15px;
  z-index: ${({ theme }) => theme.zIndices.modal};
  overflow-y: auto;
  z-index: 1;
  ${({ theme }) => theme.mediaQueries.xs} {
    min-width: 360px;
    width: 100%;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    min-width: 404px;
    width: 100%;
  }
`;
const BridgeContent = styled.div<{ blur?: boolean }>`
  padding: 33px 23px 23px;
  position: relative;
  z-index: 1;
  filter: ${({ blur }) => (blur ? `blur(5px)` : "none")};
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
  letter-spacing: 0.05em;
  ${({ theme }) => theme.mediaQueries.sm} {
    letter-spacing: 0.13em;
  } ;
`;
const Error = styled(Text)`
  margin: 33px 0 43px;
  text-align: center;
  letter-spacing: 0.5px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.redBg};
`;
const ButtonOpenProof = styled(Text)`
  text-align: center;
  margin: 32px auto 0;
  background: none;
  border: none;
  cursor: pointer;
`;
const ButtonsWrap = styled.div`
  position: absolute;
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const BridgeStep1: React.FC<BridgeStep1Props> = ({
  handleButtonToMax,
  texts,
  onUserInput,
  value,
  inputError,
  balanceText,
  handleToggleNetwork,
  iconNetwork1,
  iconNetwork2,
  iconBalanceInput,
  handleOpenProofOfAssets,
  handleOpenTransactionsHistory,
  disabledInput,
  actionButton,
  noticeVisible,
  blurContent,
  noticeType,
  radiusBlur,
}) => {
  const theme = useTheme();
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
        <BridgeContent blur={noticeVisible}>
          <Label size="lg">{texts.from}</Label>
          <BlockChainName icon={iconNetwork1} name={texts.nameNetwork1} />
          <InputWrap>
            <BalanceInput
              handleButtonToMax={handleButtonToMax}
              onUserInput={onUserInput}
              value={value}
              icon={iconBalanceInput}
              texts={{ commit: texts.commit, currency: texts.currencyInput }}
              disabled={disabledInput}
            />
            <ButtonReverse>
              <SwapButton onClick={handleToggleNetwork} />
            </ButtonReverse>
            <MessageBox>
              <MessageText fontWeight={400} color={inputError ? "redBg" : "text"} size="xs">
                {balanceText.message1}{" "}
              </MessageText>
              <MessageText fontWeight={400} color={inputError ? "redBg" : "green"} size="xs">
                {" "}
                {balanceText.message2}
              </MessageText>
            </MessageBox>
          </InputWrap>
          <Label size="lg">{texts.to}</Label>
          <BlockChainName icon={iconNetwork2} name={texts.nameNetwork2} />
          <Error>
            <p style={{ minHeight: 22.5 }}>{texts.error}</p>
          </Error>
          {actionButton}
        </BridgeContent>
      </BridgeWrapper>
      {noticeVisible && (
        <BlurWithBorder noticeType={noticeType} radiusBlur={radiusBlur}>
          {blurContent}
        </BlurWithBorder>
      )}
      <ButtonsWrap>
        <ButtonOpenProof onClick={handleOpenProofOfAssets}>{texts.buttonProofOfState}</ButtonOpenProof>
        <ButtonOpenProof onClick={handleOpenTransactionsHistory}>{texts.buttonTransactionsHistory}</ButtonOpenProof>
      </ButtonsWrap>
    </Wrapper>
  );
};

export default BridgeStep1;
