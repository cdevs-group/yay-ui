import React, { useCallback } from "react";
import styled from "styled-components";
import { Text } from "../../../components/Text";
import { Link } from "../../../components/Link";
import { AutoColumn } from "../../../components/Layouts/Column";
import { RowBetween } from "../../../components/Layouts/Row";

const InputPanel = styled.div`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  border-radius: 1.25rem;
  background-color: ${({ theme }) => theme.colors.cardBg};
  z-index: 1;
  width: 100%;
`;

const ContainerRow = styled.div<{ error: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.25rem;
  background-color: ${({ theme }) => theme.colors.cardBg};
`;

const InputContainer = styled.div`
  flex: 1;
`;

const Input = styled.input<{ error?: boolean }>`
  font-size: 16px;
  outline: none;
  border: none;
  flex: 1 1 auto;
  padding: 14px 14px 14px 25px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.bgCard5};
  box-shadow: ${({ theme }) => theme.shadows.input};
  transition: color 300ms ${({ error }) => (error ? "step-end" : "step-start")};
  color: ${({ error, theme }) => (error ? theme.colors.redBg : theme.colors.green)};
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
  width: 100%;
  ::placeholder {
    color: ${({ theme }) => theme.colors.textGray};
  }
  -webkit-appearance: textfield;

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.textGray};
  }
`;

export interface AddressInputPanelProps {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  linkText: string;
  recipientText: string;
  inputPlaceholderText: string;
  ENS: {
    address: string;
    loading: boolean;
    name: string;
  };
  chainId: any;
  bscScanLink: string;
}

export default function AddressInputPanel({
  id,
  value,
  onChange,
  linkText,
  recipientText,
  inputPlaceholderText,
  ENS,
  chainId,
  bscScanLink,
}: AddressInputPanelProps) {
  const { address, loading, name } = ENS;

  const handleInput = useCallback(
    (event) => {
      const input = event.target.value;
      const withoutSpaces = input.replace(/\s+/g, "");
      onChange(withoutSpaces);
    },
    [onChange]
  );

  const error = Boolean(value.length > 0 && !loading && !address);

  return (
    <InputPanel id={id}>
      <ContainerRow error={error}>
        <InputContainer>
          <AutoColumn gap="md">
            <RowBetween style={{ padding: "0 1rem" }}>
              <Text>{recipientText}</Text>
              {address && chainId && (
                <Link external small href={bscScanLink}>
                  ({linkText})
                </Link>
              )}
            </RowBetween>
            <Input
              className="recipient-address-input"
              type="text"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              placeholder={inputPlaceholderText}
              error={error}
              pattern="^(0x[a-fA-F0-9]{40})$"
              onChange={handleInput}
              value={value}
            />
          </AutoColumn>
        </InputContainer>
      </ContainerRow>
    </InputPanel>
  );
}
