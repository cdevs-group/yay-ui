import React from "react";
import styled from "styled-components";
import { InfoWrapperProps } from "../types";
import YAY from "../../../components/Svg/Icons/YAY.svg";
import { Text } from "../../../components/Text";
import { TokenInfo } from "../../../components/TokenInfo";
import { ClipIcon } from "../../../components/Svg";

const InfoWrapper = ({
  tokenLogo,
  textsProof,
  proofData,
  wrappedData,
  BSCSkanHandler,
  addTokenHandler,
  addTokenIcon,
}: InfoWrapperProps) => {
  return (
    <Wrapper>
      <TokenLogo>
        {tokenLogo || (
          <>
            <TokenImg>
              <img src={YAY} />
            </TokenImg>
            <Text marginLeft="10px">YAY</Text>
          </>
        )}
      </TokenLogo>
      <MainBlock>
        <LeftColumn>
          <Text>{textsProof.proof}</Text>
          <TokenInfo
            addTokenIcon={addTokenIcon}
            BSCSkanHandler={BSCSkanHandler}
            addTokenHandler={addTokenHandler}
            margin="10px 0 0"
            textsInfo={proofData}
          />
        </LeftColumn>
        <MiddleColumn>
          <ClipIcon />
        </MiddleColumn>
        <RightColumn>
          <Text>{textsProof.wrapped}</Text>
          {wrappedData.map((item, i) => (
            <TokenInfo
              BSCSkanHandler={BSCSkanHandler}
              addTokenHandler={addTokenHandler}
              key={i}
              margin="10px 0 0"
              textsInfo={item}
            />
          ))}
        </RightColumn>
      </MainBlock>
    </Wrapper>
  );
};

export default InfoWrapper;

const Wrapper = styled.div`
  margin-top: 60px;
  padding: 22px 13px 27px 13px;
  background: ${({ theme }) => theme.colors.buttonBg};
  border-radius: 12px;
  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 30px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    padding: 22px 23px 27px 23px;
  } ;
`;
const TokenLogo = styled.div`
  display: flex;
  align-items: center;
`;
const TokenImg = styled.div`
  width: 38px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.bgOpacitY3};
  border-radius: 9px;
  margin: 0 10px 0 0;
`;
const MainBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 17px;
  flex-direction: column;
  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: row;
    align-items: baseline;
    margin-top: 23px;
  } ;
`;
const LeftColumn = styled.div``;
const RightColumn = styled(LeftColumn)``;
const MiddleColumn = styled.div`
  position: relative;
  top: 0;
  width: 30px;
  height: 30px;
  display: flex;
  margin: 30px 0 20px;

  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.whiteRgba};
  border-radius: 7px;
  ${({ theme }) => theme.mediaQueries.lg} {
    margin: 0 30px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    margin: 0 15px;
    top: 65px;
  } ;
`;
