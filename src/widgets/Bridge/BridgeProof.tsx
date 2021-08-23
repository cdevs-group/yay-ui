import React from "react";
import styled from "styled-components";
import { BrightProofProps } from "./types";
import { Text } from "../../components/Text";
import InfoWrapper from "./components/InfoWrapper";
import { CloseIcon } from "../../components/Svg";

const BridgeProof = ({
  texts,
  textsProof,
  ProofOfAssetsData,
  onDismiss,
  BSCSkanHandler,
  addTokenHandler,
}: BrightProofProps) => {
  return (
    <Wrapper>
      <Text size="lg">{texts.title}</Text>
      <Description marginTop="10px">{texts.description}</Description>
      <ButtonClose onClick={onDismiss}>
        <CloseIcon fill="transparent" />
      </ButtonClose>
      <TokenList>
        {ProofOfAssetsData.map((item, i) => (
          <InfoWrapper
            BSCSkanHandler={BSCSkanHandler}
            addTokenHandler={addTokenHandler}
            key={i}
            textsProof={textsProof}
            proofData={item.proofData}
            wrappedData={item.wrappedData}
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
  background: ${({ theme }) => theme.colors.bgGray};
  border-radius: 10px;
  ${({ theme }) => theme.mediaQueries.lg} {
    padding: 38px 44px 0 34px;
  } ;
`;
const TokenList = styled.div`
  margin-top: 28px;
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
