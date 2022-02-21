import React, { ReactText } from "react";
import styled from "styled-components";
import { Text } from "../../../../components/Text";
import { Flex } from "../../../../components/Box";
import { Button } from "../../../../components/Button";
import { CloseIcon } from "../../../../components/Svg";
import { BalanceInput } from "../../../../components/BalanceInput";
import PairSquare from "./PairSquare";
import TextWithTooltip from "../../../../components/TextWithTooltip/TextWithTooltip";
import { ButtonProps } from "../../../../components/Button/types";

interface IProps {
  onDismiss: () => void;
  texts: {
    title: string;
    balance: string;
    stake: string;
    daily: string;
    monthly: string;
    yearly: string;
    button: string;
    stakeTooltip: string;
    monthlyTooltip: string;
    yearlyTooltip: string;
    dailyTooltip: string;
  };
  lp: string;
  balance: string | number;
  onUserInput: (input: string) => void;
  inputValue: ReactText;
  pair: string;
  tokenImg0: string;
  tokenImg1: string;
  handleButton: () => void | Promise<void>;
  buttonProps: ButtonProps;
  tokenName: string;
  stakeUsd: string;
  dailyUsd: string;
  monthlyUsd: string;
  yearlyUsd: string;
  stakeToken: string | number;
  dailyToken: string | number;
  monthlyToken: string | number;
  yearlyToken: string | number;
}

const DepositFarmModal = ({
  onDismiss,
  texts,
  lp,
  balance,
  onUserInput,
  inputValue,
  pair,
  tokenImg0,
  tokenImg1,
  handleButton,
  tokenName,
  buttonProps,
  dailyUsd,
  monthlyUsd,
  yearlyUsd,
  dailyToken,
  monthlyToken,
  yearlyToken,
  stakeUsd,
  stakeToken,
}: IProps) => {
  return (
    <StyledModal>
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontSize="21px">{texts.title}</Text>
        <ButtonClose onClick={onDismiss}>
          <CloseIcon />
        </ButtonClose>
      </Flex>
      <Flex mt={15} marginBottom="7px" justifyContent="flex-end">
        <Text mr="5px" fontSize="11px">
          {lp} {texts.balance}
        </Text>
        <Text fontSize="11px" color="green">
          {balance}
        </Text>
      </Flex>
      <BalanceInput
        texts={{
          commit: "Amount Token",
        }}
        onUserInput={onUserInput}
        value={inputValue}
        pairBlock={
          <>
            <PairBlock alignItems="center">
              <Text marginRight="10px" fontSize="13px">
                {pair}
              </Text>
              <PairSquare token0={tokenImg0} token1={tokenImg1} />
            </PairBlock>
          </>
        }
      />
      <Row>
        <Flex alignItems="center">
          {" "}
          <Text style={{ fontWeight: 400 }} fontSize="11px">
            {texts.stake}{" "}
          </Text>
          <TextWithTooltip textTooltip={texts.stakeTooltip} />
        </Flex>
        <Text color="green" fontSize="13px">
          {stakeToken}
          {""}
          {tokenName}
        </Text>
        <Text textAlign="right" color="green" fontSize="13px">
          {stakeUsd}
        </Text>
      </Row>
      <Row style={{ fontWeight: 400 }}>
        <Flex alignItems="center">
          {" "}
          <Text style={{ fontWeight: 400 }} fontSize="11px">
            {texts.daily}{" "}
          </Text>
          <TextWithTooltip textTooltip={texts.dailyTooltip} />
        </Flex>
        <Text color="green" fontSize="13px">
          {dailyToken}
          {""}
          {tokenName}
        </Text>
        <Text textAlign="right" color="green" fontSize="13px">
          {dailyUsd}
        </Text>
      </Row>
      <Row style={{ fontWeight: 400 }}>
        <Flex alignItems="center">
          {" "}
          <Text style={{ fontWeight: 400 }} fontSize="11px">
            {texts.monthly}{" "}
          </Text>
          <TextWithTooltip textTooltip={texts.monthlyTooltip} />
        </Flex>
        <Text color="green" fontSize="13px">
          {monthlyToken}
          {""}
          {tokenName}
        </Text>
        <Text textAlign="right" color="green" fontSize="13px">
          {monthlyUsd}
        </Text>
      </Row>
      <Row>
        <Flex alignItems="center">
          {" "}
          <Text style={{ fontWeight: 400 }} fontSize="11px">
            {texts.yearly}{" "}
          </Text>
          <TextWithTooltip textTooltip={texts.yearlyTooltip} />
        </Flex>
        <Text color="green" fontSize="13px">
          {yearlyToken}
          {""}
          {tokenName}
        </Text>
        <Text textAlign="right" color="green" fontSize="13px">
          {yearlyUsd}
        </Text>
      </Row>
      <Button onClick={handleButton} variant="green" width="100%" marginTop="50px" {...buttonProps}>
        {texts.button}
      </Button>
    </StyledModal>
  );
};

export default DepositFarmModal;

export const StyledModal = styled.div`
  max-width: 404px;
  max-height: 100vh;
  min-width: 303px;
  width: 100%;
  padding: 27px 22px 24px;
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
const ButtonClose = styled(Button)`
  padding: 0;
  background: none;
  box-shadow: none;
`;

const PairBlock = styled(Flex)`
  & div {
    white-space: nowrap;
  }
`;
const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr 0.5fr;
  font-weight: 400;
  margin-top: 22px;
  &:first-child {
    margin-top: 42px;
  }
`;
