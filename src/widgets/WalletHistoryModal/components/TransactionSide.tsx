import React from "react";
import styled from "styled-components";
import { TransactionSideProps } from "../types";
import { Text } from "../../../components/Text";
import { ArrowLeft } from "../../../components/Svg";
import { lightColors } from "../../../theme/colors";

const TransactionSide = ({ transactionsList, transactionTitle }: TransactionSideProps) => {
  return (
    <Wrapper>
      <Title>{transactionTitle}</Title>
      <TransactionsBlock>
        {transactionsList.map((item, i) => (
          <Transaction key={i}>
            <Text>{item.number}</Text>
            <LinkBlock status={item.status}>
              <Text size="xs">{item.link}</Text>
              <ArrowLeft />
            </LinkBlock>
            <Text color={item.status ? lightColors.greenText2 : lightColors.redBg}>{item.profit}</Text>
          </Transaction>
        ))}
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
  gap: 0 20px;
  align-items: center;
  grid-template-columns: 1fr 3fr 2.5fr;
  &:first-child {
    margin-top: 0;
  }
`;
const LinkBlock = styled.div<{ status: boolean }>`
  position: relative;
  max-width: 144px;
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
