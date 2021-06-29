import React from "react";
import styled from "styled-components";
import { ValueProps } from "../types";

const ValueRow = ({ vector, value, texts }: ValueProps) => {
  return (
    <ValueRowBlock vector={vector}>
      {vector}
      <div>
        <span>{texts?.payout || "Payout"}</span>
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

  max-height: 50px;
  height: 100%;
  padding: 18px 20px 13px;
  background: ${({ theme }) => theme.colors.bgCard};
  border-radius: ${({ vector }) => (vector === "DOWN" || vector === "ETH" ? "0 0 12px 12px" : "12px 12px 0 0")};
  color: ${({ theme }) => theme.colors.text};
`;
