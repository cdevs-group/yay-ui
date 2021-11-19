import React, { ReactNode, useState } from "react";
import { transparentize } from "polished";
import styled from "styled-components";
import { Button } from "../../../../components/Button";
import { Text } from "../../../../components/Text";
import { ErrorIcon } from "../../../../components/Svg";
import { Flex } from "../../../../components/Box";
import { CheckboxInput } from "../../../../components/CheckboxInput";
import { Link } from "../../../../components/Link";
import { Tag } from "../../../../components/Tag";
import { Grid } from "../../../../components/Box";
import { AutoColumn } from "../../../../components/Layout/Column";

export interface InjectedImportTokenProps {
  tokens: any[];
  handleCurrencySelect?: (currency: any) => void;
  listLogo: ReactNode;
  texts: {
    createToken: string;
    purchaseToken: string;
    via: string;
    unknownSource: string;
    viewOnbscScan: string;
    understanding: string;
    importText: string;
  };
  addToken: (token: any) => void;
  chainId: number;
  inactiveTokenList: any;
  truncateHash: any;
  bscScanLink: string;
}

function ImportToken({
  tokens,
  handleCurrencySelect,
  listLogo,
  texts,
  addToken,
  chainId,
  inactiveTokenList,
  truncateHash,
  bscScanLink,
}: InjectedImportTokenProps) {
  const { createToken, purchaseToken, via, unknownSource, viewOnbscScan, understanding, importText } = texts;

  const [confirmed, setConfirmed] = useState(false);

  return (
    <AutoColumn gap="lg">
      <Message>
        <Text color="green">
          {createToken}
          <br />
          <br />
          {purchaseToken}
        </Text>
      </Message>

      {tokens.map((token: any) => {
        const address = token.address ? `${truncateHash}` : null;
        return (
          <Grid key={token.address} gridTemplateRows="1fr 1fr 1fr" gridGap="4px">
            {inactiveTokenList !== undefined ? (
              <Tag variant="success" outline scale="sm" startIcon={inactiveTokenList.logoURI && listLogo}>
                {via} {inactiveTokenList.name}
              </Tag>
            ) : (
              <Tag variant="failure" outline scale="sm" startIcon={<ErrorIcon color="failure" />}>
                {unknownSource}
              </Tag>
            )}
            <Flex alignItems="center">
              <Text mr="8px">{token.name}</Text>
              <Text>({token.symbol})</Text>
            </Flex>
            {chainId && (
              <Flex justifyContent="space-between" width="100%">
                <Text mr="4px">{address}</Text>
                <Link href={bscScanLink} external>
                  ({viewOnbscScan})
                </Link>
              </Flex>
            )}
          </Grid>
        );
      })}

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
          variant="danger"
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