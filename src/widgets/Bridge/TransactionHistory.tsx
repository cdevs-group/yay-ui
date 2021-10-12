import React from "react";
import styled from "styled-components";
import { TransactionHistoryProps } from "./types";
import { Text } from "../../components/Text";
import InfoWrapperTransactionHistory from "./components/InfoWrapperTransactionHistory";
import { CloseIcon } from "../../components/Svg";
import { Button } from "../../components/Button";

const TransactionHistory = ({
  texts,
  transactionHistoryData,
  onDismiss,
  textCopy,
  addTokenHandler,
  addTokenIcon,
  tokenLogo,
  tokenName,
  propsBtnSeeMore,
  textTransaction,
}: TransactionHistoryProps) => {
  return (
    <Wrapper>
      <Text size="lg">{texts.title}</Text>
      <Description marginTop="10px">{texts.description}</Description>
      <ButtonClose onClick={onDismiss}>
        <CloseIcon fill="transparent" />
      </ButtonClose>
      <TokenList>
        <>
          {transactionHistoryData.map((item: any, i: number) => (
            <InfoWrapperTransactionHistory
              addTokenIcon={addTokenIcon}
              textCopy={textCopy}
              addTokenHandler={addTokenHandler}
              key={i}
              data={item}
              tokenLogo={tokenLogo}
              tokenName={tokenName}
              textTransaction={textTransaction}
            />
          ))}
          <SeeMore variant="text" {...propsBtnSeeMore}>
            {texts.seeMore}
          </SeeMore>
        </>
      </TokenList>
    </Wrapper>
  );
};

export default TransactionHistory;

const Wrapper = styled.div`
  position: relative;
  max-width: 875px;
  height: auto;
  padding: 33px 24px 0 14px;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.bgGray};
  border-radius: 10px;
  ${({ theme }) => theme.mediaQueries.lg} {
    padding: 38px 44px 0 34px;
    width: 100%;
  } ;
`;
const TokenList = styled.div`
  padding-top: 28px;
  height: 70vh;
  overflow-y: auto;
  ${({ theme }) => theme.mediaQueries.md} {
    max-height: 450px;
  } ;
`;
const ButtonClose = styled.button`
  position: absolute;
  top: 34px;
  right: 25px;
  padding: 0;
  width: 30px;
  height: 30px;
  border: none;
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 7px;
  cursor: pointer;
  ${({ theme }) => theme.mediaQueries.sm} {
    right: 50px;
  } ;
`;
const Description = styled(Text)`
  font-size: 11px;
  padding-right: 70px;
  ${({ theme }) => theme.mediaQueries.lg} {
    font-size: 13px;
    padding-right: 0;
  } ;
`;

const SeeMore = styled(Button)`
  display: flex;
  align-items: center;
  margin: 38px auto 46px;
  color: ${({ theme }) => theme.colors.green};
  font-size: 15px;
  line-height: 19px;
  border: none;
  background: none;
  letter-spacing: 0.5px;
  transition: 0.3s;
  &:hover {
    transition: 0.3s;
    text-shadow: 0px 0px 20px rgba(86, 239, 75, 0.35);
  }
  &:disabled {
    opacity: 1;
  }
`;
