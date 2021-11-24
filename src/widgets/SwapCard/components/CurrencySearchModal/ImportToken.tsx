import React, { ReactNode, useState } from "react";
import { transparentize } from "polished";
import styled from "styled-components";
import { Button } from "../../../../components/Button";
import { Text } from "../../../../components/Text";
import { Flex } from "../../../../components/Box";
import { CheckboxInput } from "../../../../components/CheckboxInput";
import { AutoColumn } from "../../../../components/Layouts/Column";

export interface InjectedImportTokenProps {
  tokens: any[];
  handleCurrencySelect?: (currency: any) => void;
  children: ReactNode;
  texts: {
    createToken: string;
    purchaseToken: string;
    understanding: string;
    importText: string;
  };
  addToken: (token: any) => void;
}

function ImportToken({ tokens, handleCurrencySelect, children, texts, addToken }: InjectedImportTokenProps) {
  const { createToken, purchaseToken, understanding, importText } = texts;

  const [confirmed, setConfirmed] = useState(false);

  return (
    <AutoColumn gap="lg" style={{ padding: "0 27px 27px 27px" }}>
      <Message>
        <Text color="green">
          {createToken}
          <br />
          <br />
          {purchaseToken}
        </Text>
      </Message>
      {children}

      <Flex justifyContent="space-between" alignItems="center">
        <Flex alignItems="center" onClick={() => setConfirmed(!confirmed)}>
          <CheckboxInput
            scale="sm"
            name="confirmed"
            type="checkbox"
            checked={confirmed}
            onChange={() => setConfirmed(!confirmed)}
          />
          <Text ml="8px" style={{ userSelect: "none" }}>
            {understanding}
          </Text>
        </Flex>
        <Button
          variant="option"
          disabled={!confirmed}
          onClick={() => {
            tokens.map((token) => addToken(token));
            if (handleCurrencySelect) {
              handleCurrencySelect(tokens[0]);
            }
          }}
          className=".token-dismiss-button"
        >
          {importText}
        </Button>
      </Flex>
    </AutoColumn>
  );
}

export default ImportToken;

const Message = styled.div`
  padding: 20px;
  background: ${({ theme }) => transparentize(0.9, theme.colors.green)};
  border-radius: 12px;
`;
