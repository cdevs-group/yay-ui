import React from "react";
import styled from "styled-components";
import { TransactionSideProps } from "../types";
import { Text } from "../../../components/Text";
import { ArrowLeft } from "../../../components/Svg";
import { lightColors } from "../../../theme/colors";

const TransactionSide = ({ transactionsList, transactionTitle, noRecentTransactions }: TransactionSideProps) => {
  return (
    <Wrapper>
      <Title>{transactionTitle}</Title>
      <TransactionsBlock>
        {transactionsList && transactionsList.length > 0 ? (
          transactionsList?.map((item, i) => (
            <Transaction key={i}>
              <TextBlock>{item.number}</TextBlock>
              <LinkBlock status={item.status}>
                <Text size="xs">{item.link}</Text>
                <ArrowLeft />
              </LinkBlock>
              <TextBlock color={item.status ? lightColors.greenText2 : lightColors.redBg}>{item.profit}</TextBlock>
            </Transaction>
          ))
        ) : (
          <Text fontSize="13px" letterSpacing="0.05em" textAlign="center" padding="16px 0">
            {noRecentTransactions}
          </Text>
        )}
      </TransactionsBlock>
    </Wrapper>
  );
};

export default TransactionSide;

const Wrapper = styled.div`
  margin-top: 26px;
`;
const Title = styled(Text)`
  color: ${({ theme }) => theme.colors.greyText};
`;
const TransactionsBlock = styled.div`
  margin-top: 21px;
  height: 232px;
  overflow-y: auto;
`;
const Transaction = styled.div`
  margin-top: 27px;
  display: grid;
  gap: 0 15px;
  align-items: center;
  grid-template-columns: 1fr 3fr 2.5fr;
  &:first-child {
    margin-top: 0;
  }
`;
const LinkBlock = styled.div<{ status: boolean }>`
  position: relative;
  width: 144px;
  padding: 8px 15px;
  border-radius: 7px;
  border: 1.5px solid ${({ status, theme }) => (status ? theme.colors.greenText2 : theme.colors.redBg)};
  & svg {
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-60%) rotate(225deg);
  }
`;
const TextBlock = styled(Text)`
  font-size: 11px;
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 15px;
  } ;
`;
