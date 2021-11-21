import React, { ReactNode } from "react";
import { Text } from "../../../../components/Text";
import styled from "styled-components";
import { AutoColumn } from "../../../../components/Layout/Column";
import { AutoRow } from "../../../../components/Layout/Row";
import QuestionHelper from "../../../../components/QuestionHelper";

const BaseWrapper = styled.div<{ disable?: boolean }>`
  border: 1px solid ${({ theme, disable }) => (disable ? "transparent" : theme.colors.green)};
  border-radius: 10px;
  display: flex;
  padding: 6px;
  align-items: center;
  :hover {
    cursor: ${({ disable }) => !disable && "pointer"};
    background-color: ${({ theme, disable }) => !disable && theme.colors.background};
  }
  background-color: ${({ theme, disable }) => disable && theme.colors.green};
  opacity: ${({ disable }) => disable && "0.4"};
`;

export default function CommonBases({
  chainId,
  onSelect,
  selectedCurrency,
  texts,
  CurrencyLogo,
  currencyEquals,
  SUGGESTED_BASES,
}: {
  chainId?: any;
  selectedCurrency?: any | null;
  onSelect: (currency: any) => void;
  texts: any;
  currencyEquals?: any;
  SUGGESTED_BASES?: any;
  CurrencyLogo: ReactNode;
}) {
  return (
    <AutoColumn gap="md">
      <AutoRow>
        <Text fontSize="14px">{texts.common}</Text>
        <QuestionHelper text={texts.token} ml="4px" />
      </AutoRow>
      <AutoRow gap="auto">
        <BaseWrapper
          onClick={() => {
            if (!selectedCurrency || !currencyEquals(selectedCurrency, "ETHER")) {
              onSelect("ETHER");
            }
          }}
          disable={selectedCurrency === "ETHER"}
        >
          {CurrencyLogo}
          {/* <CurrencyLogo currency={'ETHER'} style={{ marginRight: 8 }} /> */}
          <Text>BNB</Text>
        </BaseWrapper>
        {(chainId ? SUGGESTED_BASES[chainId] : []).map((token: any) => {
          // const selected = selectedCurrency instanceof Token && selectedCurrency.address === token.address
          const selected = selectedCurrency.address === token.address;
          return (
            <BaseWrapper onClick={() => !selected && onSelect(token)} disable={selected} key={token.address}>
              {CurrencyLogo}
              <Text>{token.symbol}</Text>
            </BaseWrapper>
          );
        })}
      </AutoRow>
    </AutoColumn>
  );
}
