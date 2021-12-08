import React, { CSSProperties, ReactNode, useCallback } from "react";
import { Text } from "../../../../components/Text";
import { Box } from "../../../../components/Box";
import styled from "styled-components";
import { FixedSizeList } from "react-window";
import Column from "../../../../components/Layouts/Column";
import { RowFixed, RowBetween } from "../../../../components/Layouts/Row";
import { CercleIcon } from "../../../../components/Svg";

const TextStyle = styled(Text)`
  max-width: 200px;
  font-size: 11px;
  line-height: 14px;
  letter-spacing: 0.5px;
`;

const Card = styled(Box)<{
  width?: string;
  padding?: string;
  border?: string;
  borderRadius?: string;
}>`
  width: ${({ width }) => width ?? "100%"};
  border-radius: 16px;
  padding: 1.25rem;
  padding: ${({ padding }) => padding};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: ${({ theme }) => theme.colors.background};
`;
export const LightGreyCard = styled(Card)`
  border: 1px solid ${({ theme }) => theme.colors.cardBg};
  background-color: ${({ theme }) => theme.colors.background};
`;

const MenuItem = styled(RowBetween)<{ disabled: boolean; selected: boolean }>`
  padding: 4px 20px;
  height: 56px;
  display: grid;
  grid-template-columns: auto minmax(auto, 1fr) minmax(0, 72px);
  grid-gap: 16px;
  cursor: ${({ disabled }) => !disabled && "pointer"};
  pointer-events: ${({ disabled }) => disabled && "none"};

  :hover {
    background-color: ${({ theme, disabled }) => !disabled && theme.colors.background};
  }

  opacity: ${({ disabled, selected }) => (disabled || selected ? 0.5 : 1)};
`;

export function CurrencyRow({
  currency,
  onSelect,
  isSelected,
  otherSelected,
  style,
  account,
  balance,
  balanceComponent,
  customAdded,
  isOnSelectedList,
  keyID,
  CurrencyLogo,
}: {
  currency: any;
  onSelect: () => void;
  isSelected: boolean;
  otherSelected: boolean;
  style: CSSProperties;
  account: any;
  balanceComponent: ReactNode;
  balance: any;
  customAdded: any;
  isOnSelectedList: any;
  keyID: any;
  CurrencyLogo: ReactNode;
}) {
  return (
    <MenuItem
      style={style}
      className={`token-item-${keyID}`}
      onClick={() => (isSelected ? null : onSelect())}
      disabled={isSelected}
      selected={otherSelected}
    >
      {CurrencyLogo}
      <Column>
        <Text fontWeight={500} letterSpacing="0.5px">
          {currency.symbol}
        </Text>
        <TextStyle>
          {!isOnSelectedList && customAdded && "Added by user •"} {currency.name}
        </TextStyle>
      </Column>
      <RowFixed style={{ justifySelf: "flex-end" }}>
        {balance ? <Text>{balanceComponent}</Text> : account ? <CercleIcon spin fill="transparent" /> : null}
      </RowFixed>
    </MenuItem>
  );
}

export default function CurrencyList({
  height,
  fixedListRef,
  currencyKey,
  itemData,
  row,
}: {
  height: number;
  fixedListRef: any;
  currencyKey: any;
  itemData: any[];
  row: any;
}) {
  const itemKey = useCallback((index: number, data: any) => currencyKey(data[index]), []);

  return (
    <FixedSizeList
      height={height}
      ref={fixedListRef as any}
      width="100%"
      itemData={itemData}
      itemCount={itemData.length}
      itemSize={56}
      itemKey={itemKey}
    >
      {row}
    </FixedSizeList>
  );
}
