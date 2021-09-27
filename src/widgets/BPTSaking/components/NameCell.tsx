import React from "react";
import styled from "styled-components";
import BaseCell, { CellContent } from "./BaseCell";
import { Text } from "../../../components/Text";
import { Flex } from "../../../components/Box";
import { TokenPairImage } from "../../../components/TokenPair";

interface NameCellProps {
  token1?: string;
  token2?: string;
  title?: string;
  tokenName?: string;
}
const LabelStyle = styled(Text)`
  margin-bottom: 9px;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.05em;
  display: none;
  color: ${({ theme }) => theme.colors.textGray};
  ${({ theme }) => theme.mediaQueries.md} {
    display: block;
  }
`;

const StyledCell = styled(BaseCell)`
  height: 70px;
  flex-direction: row;
  border-radius: 6px;
  align-items: center;
  justify-content: space-between;
  padding: 12px 19px 2px 13px;
  margin-bottom: 20px;
  background: ${({ theme }) => theme.colors.cardBg};
  text-align: center;
  ${({ theme }) => theme.mediaQueries.md} {
    height: 0;
    padding: 0;
    margin-bottom: 0;
    align-items: flex-start;
    text-align: left;
    justify-content: flex-start;
  }
`;
const NameWrap = styled(Flex)`
  align-items: center;
  margin-top: -10px;
  ${({ theme }) => theme.mediaQueries.md} {
    margin-top: 0;
  }
`;

const NameCell: React.FC<NameCellProps> = ({ token1, token2, title, tokenName }) => {
  return (
    <StyledCell role="cell">
      <TokenPairImage token1={token1} token2={token2} simpleFarm />
      <CellContent>
        <NameWrap>
          <Flex flexDirection="column" ml={35}>
            <LabelStyle>{title}</LabelStyle>
            <Text>{tokenName}</Text>
          </Flex>
        </NameWrap>
      </CellContent>
    </StyledCell>
  );
};

export default NameCell;
