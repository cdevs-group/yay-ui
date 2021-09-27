import React from "react";
import styled from "styled-components";
import BaseCell, { CellContent } from "./BaseCell";
import { Text } from "../../../components/Text";
import { CercleIcon } from "../../../components/Svg";

interface TotalStakedCellProps {
  title: string;
  balance?: string;
}

const StyledCell = styled(BaseCell)`
  padding: 0 9px 0 16px;
  margin-bottom: 15px;
  height: 15px;
  ${({ theme }) => theme.mediaQueries.md} {
    height: 40px;
    padding: 0;
    margin-bottom: 0;
    text-align: center;
  }
`;
const LabelStyle = styled(Text)`
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.textGray};
  ${({ theme }) => theme.mediaQueries.md} {
    margin-bottom: 9px;
  }
`;
const TitleStyle = styled(Text)`
  margin-bottom: 8px;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.textGray};
`;
const BalanceStyle = styled(Text)`
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.text};
`;

const TotalStakedCell: React.FC<TotalStakedCellProps> = ({ title, balance }) => {
  return (
    <StyledCell role="cell">
      <CellContent height="15px">
        <LabelStyle textAlign="left">{title}</LabelStyle>
        {balance ? <BalanceStyle>{balance}</BalanceStyle> : <CercleIcon spin fill="none" />}
      </CellContent>
    </StyledCell>
  );
};

export default TotalStakedCell;
