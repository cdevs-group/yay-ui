import React from "react";
import styled from "styled-components";
import { CheckmarkIcon, CloseIcon } from "../../../../../components/Svg";
import { LinkExternal } from "../../../../..";
import CircleLoader from "../../../../../components/Loader/CircleLoader";
import { TransactionDetailsProps } from "./types";

const TransactionState = styled.div<{ pending: boolean; success?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none !important;
  border-radius: 0.5rem;
  padding: 0.25rem 0rem;
  font-weight: 500;
  font-size: 0.825rem;
  color: ${({ theme }) => theme.colors.text};
`;

const IconWrapper = styled.div<{ pending: boolean; success?: boolean }>`
  color: ${({ pending, success, theme }) =>
    pending ? theme.colors.text : success ? theme.colors.success : theme.colors.failure};
`;

export default function Transaction({ bscScanLink, summary, pending, success }: TransactionDetailsProps) {
  return (
    <TransactionState pending={pending} success={success}>
      <LinkExternal href={bscScanLink}>{summary}</LinkExternal>
      <IconWrapper pending={pending} success={success}>
        {pending ? (
          <CircleLoader color="#FFFFFF" />
        ) : success ? (
          <CheckmarkIcon color="#49DE3C" />
        ) : (
          <CloseIcon color="#F65656" />
        )}
      </IconWrapper>
    </TransactionState>
  );
}
