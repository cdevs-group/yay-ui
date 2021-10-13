import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { BrightProofProps } from "./types";
import { Text } from "../../components/Text";
import InfoWrapper from "./components/InfoWrapper";
import { CloseIcon } from "../../components/Svg";

const BridgeProof = ({
  texts,
  ProofOfAssetsData,
  onDismiss,
  textCopy,
  addTokenHandler,
  addTokenIcon,
  tokenLogo,
  tokenName,
}: BrightProofProps) => {
  const scrollBlock = useRef<HTMLDivElement>(null);
  const [shadowVisibility, setShadowVisibility] = useState(false);

  // useEffect(() => {
  //   const block = scrollBlock.current;
  //   if (block) {
  //     block.addEventListener("scroll", () => setShadowVisibility(block.scrollTop > 0));
  //   }
  // }, [scrollBlock]);

  return (
    <Wrapper>
      <Text size="lg">{texts.title}</Text>
      <Description marginTop="10px">{texts.description}</Description>
      <ButtonClose onClick={onDismiss}>
        <CloseIcon fill="transparent" />
      </ButtonClose>
      <Shadow show={shadowVisibility} />
      <TokenList ref={scrollBlock}>
        {ProofOfAssetsData.map((item, i) => (
          <InfoWrapper
            addTokenIcon={addTokenIcon}
            textCopy={textCopy}
            addTokenHandler={addTokenHandler}
            key={i}
            proofData={item.proofData}
            wrappedData={item.wrappedData}
            tokenLogo={tokenLogo}
            tokenName={tokenName}
          />
        ))}
      </TokenList>
    </Wrapper>
  );
};

export default BridgeProof;

const Wrapper = styled.div`
  position: relative;
  max-width: 875px;
  height: auto;
  padding: 33px 24px 0 14px;
  box-sizing: border-box;
  border-radius: 10px 10px 0 0;
  background: ${({ theme }) => theme.colors.bgGray};
  ${({ theme }) => theme.mediaQueries.lg} {
    padding: 38px 44px 0 34px;
    width: 100%;
`;
const TokenList = styled.div`
  margin-top: 28px;
  position: relative;
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
const Shadow = styled.div<{ show: boolean }>`
  position: relative;
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
    top: 28px;
    transition: 0.3s;
    background: linear-gradient(180deg, #26262d 4.45%, rgba(38, 38, 45, 0) 68.51%, rgba(196, 196, 196, 0) 95.55%);
  }
`;
