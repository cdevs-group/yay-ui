import React, { ReactNode } from "react";
import { Text } from "../../../../components/Text";
import styled from "styled-components";

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

export default function CommonBasesChildren({
  onSelect,
  currencyLogoToken,
  selected,
  token,
}: {
  onSelect: (currency: any) => void;
  currencyLogoToken: ReactNode;
  selected: any;
  token: any;
}) {
  return (
    <BaseWrapper onClick={() => !selected && onSelect(token)} disable={selected} key={token.address}>
      {currencyLogoToken}
      <Text>{token.symbol}</Text>
    </BaseWrapper>
  );
}
