import React from "react";
import styled from "styled-components";
import { BrightProofProps } from "./types";
import { Text } from "../../components/Text";
import InfoWrapper from "./components/InfoWrapper";
import { CloseIcon } from "../../components/Svg";

const BridgeProof = ({ texts, textsProof, ProofOfAssetsData, onDismiss }: BrightProofProps) => {
  return (
    <Wrapper>
      <Text size="lg">{texts.title}</Text>
      <Text marginTop="10px" size="sm">
        {texts.description}
      </Text>
      <ButtonClose onClick={onDismiss}>
        <CloseIcon fill="transparent" />
      </ButtonClose>
      <TokenList>
        {ProofOfAssetsData.map((item, i) => (
          <InfoWrapper key={i} textsProof={textsProof} proofData={item.proofData} wrappedData={item.wrappedData} />
        ))}
      </TokenList>
    </Wrapper>
  );
};

export default BridgeProof;

const Wrapper = styled.div`
  position: relative;
  width: 875px;
  height: 576px;
  padding: 38px 44px 0 34px;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.bgGray};
  border-radius: 10px;
`;
const TokenList = styled.div`
  margin-top: 28px;
  max-height: 450px;
  overflow-y: auto;
`;
const ButtonClose = styled.button`
  position: absolute;
  top: 34px;
  right: 50px;
  padding: 0;
  width: 30px;
  height: 30px;
  border: none;
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 7px;
  cursor: pointer;
`;
