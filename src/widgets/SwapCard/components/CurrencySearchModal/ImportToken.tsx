import React, { useState } from "react";
import { Button } from "../../../../components/Button";
import { Text } from "../../../../components/Text";
import { ErrorIcon } from "../../../../components/Svg";
import { Flex } from "../../../../components/Box";
import { Message } from "../../../../components/Message";
import { CheckboxInput } from "../../../../components/CheckboxInput";
import { Link } from "../../../../components/Link";
import { Tag } from "../../../../components/Tag";
import { Grid } from "../../../../components/Box";
import { AutoColumn } from "../../../../components/Layout/Column";
import { ListLogo } from "../../../../components/Logo";

export interface InjectedImportTokenProps {
  tokens: any[];
  handleCurrencySelect?: (currency: any) => void;
  srcs: string[];
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
  chainId: any;
  inactiveTokenList: {
    logoURI: string
    name: string
  };
  truncateHash: string;
  bscScanLink: string;
}

function ImportToken({
  tokens,
  handleCurrencySelect,
  srcs,
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
      <Message variant="warning">
        <Text>
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
              <Tag
                variant="success"
                outline
                scale="sm"
                startIcon={inactiveTokenList.logoURI && <ListLogo srcs={srcs} logoURI={inactiveTokenList.logoURI} size="12px" />}
              >
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
