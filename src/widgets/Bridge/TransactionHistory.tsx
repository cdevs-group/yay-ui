import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
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
  const scrollBlock = useRef<HTMLDivElement>(null);
  const [shadowVisibility, setShadowVisibility] = useState(false);

  const toggleShadow = useCallback((block: HTMLDivElement) => {
    setShadowVisibility(block.scrollTop > 0);
  }, []);

  useLayoutEffect(() => {
    const block = scrollBlock.current;
    if (block) {
      block.addEventListener("scroll", () => toggleShadow(block));
    }
    return () => {
      block?.removeEventListener("scroll", () => toggleShadow(block));
    };
  }, [scrollBlock]);

  return (
    <Wrapper>
      <Text size="lg">{texts.title}</Text>
      <Description marginTop="10px">{texts.description}</Description>
      <ButtonClose onClick={onDismiss}>
        <CloseIcon fill="transparent" />
      </ButtonClose>
      <Shadow show={shadowVisibility} />
      <TokenList ref={scrollBlock}>
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
  height: 70vh;
  padding: 33px 14px 0 14px;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.bgGray};
  border-radius: 10px;
  width: 100%;
  overflow: hidden;
  top: 80px;
  ${({ theme }) => theme.mediaQueries.lg} {
    padding: 38px 44px 0 34px;
    height: auto;
    overflow: auto;
  } ;
`;
const TokenList = styled.div`
  margin-top: 28px;
  height: 70%;
  overflow-y: auto;
  border-radius: 12px 12px 0 0;
  ${({ theme }) => theme.mediaQueries.md} {
    height: 500px;
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

const Shadow = styled.div<{ show: boolean }>`
  position: relative;
  display: none;
  &:after {
    position: absolute;
    display: block;
    pointer-events: none;
    opacity: ${({ show }) => (show ? 1 : 0)};
    content: "";
    width: calc(100% - 8px);
    left: 0;
    height: 64px;
    z-index: 2;
    top: -1px;
    transition: 0.3s;
    background: linear-gradient(180deg, #26262d 50%, rgba(38, 38, 45, 0.5) 68.51%, rgba(196, 196, 196, 0) 95.55%);
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    display: block;
  }
`;
