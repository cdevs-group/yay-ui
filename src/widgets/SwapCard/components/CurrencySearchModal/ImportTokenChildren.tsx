import React, { ReactNode } from "react";
import { Text } from "../../../../components/Text";
import { Flex } from "../../../../components/Box";
import { Link } from "../../../../components/Link";
import { Grid } from "../../../../components/Box";

export interface InjectedImportTokenProps {
  token: any;
  address: any;
  listLogo: ReactNode;
  texts: {
    via: string;
    unknownSource: string;
    viewOnbscScan: string;
  };
  hrefLink: string;
  chainId: number;
  inactiveTokenList: any;
}

function ImportTokenChildren({
  token,
  address,
  listLogo,
  texts,
  hrefLink,
  chainId,
  inactiveTokenList,
}: InjectedImportTokenProps) {
  const { via, unknownSource, viewOnbscScan } = texts;

  return (
    <Grid key={token.address} gridTemplateRows="1fr 1fr 1fr" gridGap="4px">
      {inactiveTokenList !== undefined ? (
        <Flex alignItems="center">
          {inactiveTokenList.logoURI && listLogo}
          <Text color="green">
            {via} {inactiveTokenList.name}
          </Text>
        </Flex>
      ) : (
        <Text color="redBg">{unknownSource}</Text>
      )}
      <Flex alignItems="center">
        <Text mr="8px">{token.name}</Text>
        <Text>({token.symbol})</Text>
      </Flex>
      {chainId && (
        <Flex justifyContent="space-between" width="100%">
          <Text mr="4px">{address}</Text>
          <Link href={hrefLink} external>
            ({viewOnbscScan})
          </Link>
        </Flex>
      )}
    </Grid>
  );
}

export default ImportTokenChildren;
