import React, { CSSProperties, ReactNode, useCallback } from "react";
import { Text } from "../../../../components/Text";
import { Box } from "../../../../components/Box";
import styled from "styled-components";
import { FixedSizeList } from "react-window";
import Column from "../../../../components/Layout/Column";
import { RowFixed, RowBetween } from "../../../../components/Layout/Row";
import { CercleIcon } from "../../../../components/Svg";

const StyledBalanceText = styled(Text)`
  white-space: nowrap;
  overflow: hidden;
  max-width: 5rem;
  text-overflow: ellipsis;
`;
const TextStyle = styled(Text)`
  max-width: 200px;
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

function Balance({ balance }: { balance: any }) {
  return <StyledBalanceText title={balance.toExact()}>{balance.toSignificant(4)}</StyledBalanceText>;
}

const MenuItem = styled(RowBetween)<{ disabled: boolean; selected: boolean }>`
  padding: 4px 20px;
  height: 56px;
  display: grid;
  grid-template-columns: auto minmax(auto, 1fr) minmax(0, 72px);
  grid-gap: 8px;
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
  customAdded,
  isOnSelectedList,
  key,
  CurrencyLogo,
}: {
  currency: any;
  onSelect: () => void;
  isSelected: boolean;
  otherSelected: boolean;
  style: CSSProperties;
  account: any;
  balance: any;
  customAdded: any;
  isOnSelectedList: any;
  key: any;
  CurrencyLogo: ReactNode;
}) {
  return (
    <MenuItem
      style={style}
      className={`token-item-${key}`}
      onClick={() => (isSelected ? null : onSelect())}
      disabled={isSelected}
      selected={otherSelected}
    >
      {CurrencyLogo}
      <Column>
        <Text bold>{currency.symbol}</Text>
        <TextStyle color="textSubtle" small>
          {!isOnSelectedList && customAdded && "Added by user •"} {currency.name}
        </TextStyle>
      </Column>
      <RowFixed style={{ justifySelf: "flex-end" }}>
        {balance ? <Balance balance={balance} /> : account ? <CercleIcon /> : null}
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
