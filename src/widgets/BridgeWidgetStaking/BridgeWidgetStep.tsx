import React, { ReactNode } from "react";
import styled from "styled-components";
import Text from "../../components/Text/Text";
import { Button } from "../../components/Button";
import { BalanceInput } from "../../components/BalanceInput";
import { BridgeStepProps } from "./types";
import { Flex, Box } from "../../components/Box";
import { ArrowBigDownIcon } from "../../components/Svg";

const BridgeWrapper = styled.div`
  max-width: 404px;
  max-height: 100vh;
  min-width: 303px;
  width: 100%;
  margin: 0 auto;
  padding: 33px 23px 23px;
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

const Field = styled.div`
  min-height: 50px;
  display: flex;
  align-items: center;
  margin-top: 6px;
  position: relative;
  padding: 10px 25px;
  background: ${({ theme }) => theme.colors.buttonBg};
  box-shadow: ${({ theme }) => theme.colors.boxShadow10};
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.text};
`;
const NameChain = styled(Text)`
  letter-spacing: 0.5px;
`;
const Label = styled(Text)``;

const InputWrap = styled.div`
  margin-top: 13px;
  margin-bottom: 15px;
  & div {
    opacity: 1 !important;
  }
  & input {
    color: #fff !important;
  }
`;

const Tab = styled(Button)`
  width: 31%;
  padding: 4px 16px;
  border-radius: 9px;
  font-weight: 400;
  transition: 0.3s;
  &:hover {
    background: ${({ theme }) => theme.colors.green};
    box-shadow: ${({ theme }) => theme.colors.boxShadow12} !important;
  }
`;

const BlockChainWrap = styled.div`
  position: relative;
`;

const StyledArrow = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -40px;
  z-index: 1;
`;

const BridgeWidgetStep: React.FC<BridgeStepProps> = ({
  texts,
  onUserInput,
  tabs,
  value,
  iconNetwork1,
  iconNetwork2,
  iconBalanceInput,
  buttonLeft,
  buttonRight,
  hiddenToBlock,
  inputDisabled,
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
    <BridgeWrapper>
      <Label size="lg">{texts.from}</Label>
      <BlockChainName icon={iconNetwork1} name={texts.nameNetwork1} />
      <InputWrap>
        <BalanceInput
          disabled={inputDisabled}
          onUserInput={onUserInput}
          value={value}
          icon={iconBalanceInput}
          texts={{ commit: texts.commit, currency: texts.currency }}
          inputProps={{ readOnly: true }}
        />
      </InputWrap>
      <Flex justifyContent="space-between" mt="15px" mb={!hiddenToBlock ? "36px" : "22px"}>
        {tabs.map((el: string, i: number) => (
          <Tab key={i} scale="sm" variant={el === value ? "green" : "option"} onClick={() => onUserInput(el)}>
            {+el / 1000}K
          </Tab>
        ))}
      </Flex>
      {!hiddenToBlock && (
        <Box mb="39px">
          <Label size="lg">{texts.to}</Label>
          <BlockChainWrap>
            <StyledArrow>
              <ArrowBigDownIcon />
            </StyledArrow>
            <BlockChainName icon={iconNetwork2} name={texts.nameNetwork2} />
          </BlockChainWrap>
        </Box>
      )}
      <Flex justifyContent="space-between">
        {buttonLeft}
        {buttonRight}
      </Flex>
    </BridgeWrapper>
  );
};

export default BridgeWidgetStep;
