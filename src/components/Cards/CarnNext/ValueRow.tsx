import React from "react";
import styled from "styled-components";
import { ValueProps } from "../types";

const ValueRow = ({ vector, value }: ValueProps) => {
  return (
    <ValueRowBlock vector={vector}>
      {vector}
      <div>
        <span>Payout</span>
        {value}
      </div>
    </ValueRowBlock>
  );
};

export default ValueRow;

const ValueRowBlock = styled.div<{ vector: string }>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-self: ${({ vector }) => (vector === "down" ? "baseline" : "")};
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.text};
  text-shadow: ${({ theme }) => theme.colors.textShadow};
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;
  & span {
    margin-right: 10px;
    font-weight: normal;
    color: ${({ theme }) => theme.colors.textGray};
  }
`;
