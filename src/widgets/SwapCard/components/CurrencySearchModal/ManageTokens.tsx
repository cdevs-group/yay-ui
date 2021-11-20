import React, { useRef, RefObject, useMemo } from "react";
import styled from "styled-components";
import { Button, IconButton } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import Column, { AutoColumn } from "../../../../components/Layout/Column";
import Row, { RowBetween, RowFixed } from "../../../../components/Layout/Row";
import { Link, LinkExternal } from "../../../../components/Link";
import { CloseIcon3 } from "../../../../components/Svg";
import { Text } from "../../../../components/Text";

const Wrapper = styled.div`
  width: 100%;
  height: calc(100% - 60px);
  position: relative;
  padding-bottom: 60px;
`;

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function ManageTokens({
  handleInput,
  searchQuery,
  handleRemoveAll,
  currencyLogo,
  importRow,
  linkHref,
  userAddedTokens,
  chainId,
  isAddressValid,
  removeToken,
  texts,
}: {
  handleInput: (e: any) => void;
  searchQuery: string;
  handleRemoveAll: () => void;
  currencyLogo: React.ReactNode;
  importRow: React.ReactNode;
  linkHref: string;
  userAddedTokens: any[];
  chainId: number;
  isAddressValid: boolean;
  removeToken: (chainId: number, address: string) => void;
  texts: {
    customToken: string;
    customTokens: string;
    clearAll: string;
    errorValidText: string;
  };
}) {
  // manage focus on modal show
  const inputRef = useRef<HTMLInputElement>();

  const tokenList = useMemo(() => {
    return (
      chainId &&
      userAddedTokens.map((token: any) => (
        <RowBetween key={token.address} width="100%" marginTop="20px">
          <RowFixed>
            {currencyLogo}
            <Link external href={linkHref} color="text" ml="10px">
              {token.symbol}
            </Link>
          </RowFixed>
          <RowFixed>
            <IconButton variant="text" onClick={() => removeToken(chainId, token.address)}>
              <CloseIcon3 />
            </IconButton>
            <LinkExternal href={linkHref} />
          </RowFixed>
        </RowBetween>
      ))
    );
  }, [userAddedTokens, chainId, removeToken]);

  return (
    <Wrapper>
      <Column style={{ width: "100%", flex: "1 1" }}>
        <AutoColumn gap="14px">
          <Row>
            <Input
              id="token-search-input"
              scale="lg"
              placeholder="0x0000"
              value={searchQuery}
              autoComplete="off"
              ref={inputRef as RefObject<HTMLInputElement>}
              onChange={handleInput}
              isWarning={!isAddressValid}
              background="rgba(0, 0, 0, 0.25)"
              padding="16px 23px"
              placeholderOpacity
              boxShadow="inset 0px 4px 4px rgba(0, 0, 0, 0.2)"
            />
          </Row>
          {!isAddressValid && (
            <Text color="redBg" fontSize="11px">
              {texts.errorValidText}
            </Text>
          )}
          {importRow}
        </AutoColumn>
        {tokenList}
        <Footer>
          <Text color="green">
            {userAddedTokens?.length} {userAddedTokens.length === 1 ? texts.customToken : texts.customTokens}
          </Text>
          {userAddedTokens.length > 0 && (
            <Button variant="text" onClick={handleRemoveAll} scale="sm">
              {texts.clearAll}
            </Button>
          )}
        </Footer>
      </Column>
    </Wrapper>
  );
}
