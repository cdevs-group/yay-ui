import React from "react";
import { TokenPairImageProps } from "./types";
import styled from "styled-components";
import { YAY_TOKEN_GREEN } from "../../constants/images";

const TokenPairImage = ({ token1, token2, simpleFarm }: TokenPairImageProps) => {
  return (
    <TokenPairImageWrap>
      <Image1 simpleFarm={simpleFarm}>
        <img src={token1 || YAY_TOKEN_GREEN} alt="token1" />
      </Image1>
      <Image2 simpleFarm={simpleFarm}>
        <img src={token2 || YAY_TOKEN_GREEN} alt="token2" />
      </Image2>
    </TokenPairImageWrap>
  );
};

export default TokenPairImage;

const TokenPairImageWrap = styled.div`
  position: relative;
`;
const Image1 = styled.div<{ simpleFarm?: boolean }>`
  width: ${({ simpleFarm }) => (simpleFarm ? "40px" : "30px")};
  height: ${({ simpleFarm }) => (simpleFarm ? "40px" : "30px")};
  border-radius: 8px;
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
  }
`;
const Image2 = styled(Image1)<{ simpleFarm?: boolean }>`
  position: relative;
  width: ${({ simpleFarm }) => (simpleFarm ? "20px" : "30px")};
  height: ${({ simpleFarm }) => (simpleFarm ? "20px" : "30px")};
  border-radius: ${({ simpleFarm }) => (simpleFarm ? "4px" : "8px")};
  filter: ${({ theme }) => theme.colors.filterShadow};
  top: ${({ simpleFarm }) => (simpleFarm ? "-13px" : "-10px")};
  right: ${({ simpleFarm }) => (simpleFarm ? "-27px" : "-15px")};
`;
