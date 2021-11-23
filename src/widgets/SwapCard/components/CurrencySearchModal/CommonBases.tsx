import React, { ReactNode } from "react";
import { Text } from "../../../../components/Text";
import styled from "styled-components";
import { AutoColumn } from "../../../../components/Layouts/Column";
import { AutoRow } from "../../../../components/Layouts/Row";
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
  onSelect,
  selectedCurrency,
  texts,
  currencyLogoETHER,
  currencyEquals,
  ETHER,
  children,
}: {
  selectedCurrency?: any | null;
  onSelect: (currency: any) => void;
  texts: {
    common: string;
    token: string;
  };
  currencyEquals?: any;
  currencyLogoETHER: ReactNode;
  ETHER: any;
  children: ReactNode;
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
            if (!selectedCurrency || !currencyEquals(selectedCurrency, ETHER)) {
              onSelect(ETHER);
            }
          }}
          disable={selectedCurrency === ETHER}
        >
          {currencyLogoETHER}
          <Text>BNB</Text>
        </BaseWrapper>
        {children}
      </AutoRow>
    </AutoColumn>
  );
}
