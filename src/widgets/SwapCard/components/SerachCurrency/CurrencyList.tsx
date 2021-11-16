import React, { CSSProperties, MutableRefObject, ReactNode, useCallback, useMemo } from "react";
import { Text } from "../../../../components/Text";
import { Box } from "../../../../components/Box";
import styled from "styled-components";
import { FixedSizeList } from "react-window";
// import { wrappedCurrency } from '../../utils/wrappedCurrency'
// import { LightGreyCard } from 'components/Card'
import QuestionHelper from "./QuestionHelper";
// import useActiveWeb3React from 'hooks/useActiveWeb3React'
// import { useCombinedActiveList } from '../../state/lists/hooks'
// import { useCurrencyBalance } from '../../state/wallet/hooks'
// import { useIsUserAddedToken, useAllInactiveTokens } from '../../hooks/Tokens'
import Column from "../../../../components/Layout/Column";
import { RowFixed, RowBetween } from "../../../../components/Layout/Row";
// import CurrencyLogo from "./CurrencyLogo";
// import CircleLoader from '../Loader/CircleLoader'
// import { isTokenOnList } from '../../utils'
import ImportRow from "./ImportRow";
import { CercleIcon } from "../../../../components/Svg";

// function currencyKey(currency: any): string {
//   return currency instanceof 'ETHER'  ? currency.address : currency === 'ETHER' ? 'ETHER' : ''
// }

const StyledBalanceText = styled(Text)`
  white-space: nowrap;
  overflow: hidden;
  max-width: 5rem;
  text-overflow: ellipsis;
`;
const TextStyle = styled(Text)`
  max-width: 200px;
`;
const FixedContentRow = styled.div`
  padding: 4px 20px;
  height: 56px;
  display: grid;
  grid-gap: 16px;
  align-items: center;
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

function CurrencyRow({
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
  account?: any;
  balance?: any;
  customAdded?: any;
  isOnSelectedList?: any;
  key?: any;
  CurrencyLogo?: ReactNode;
}) {
  // const { account } = useActiveWeb3React()
  // const key = currencyKey(currency)
  // const selectedTokenList = useCombinedActiveList()
  // const isOnSelectedList = isTokenOnList(selectedTokenList, currency)
  // const customAdded = useIsUserAddedToken(currency)
  // const balance = useCurrencyBalance(account ?? undefined, currency)

  // only show add or remove buttons if not on selected list
  return (
    <MenuItem
      style={style}
      className={`token-item-${key}`}
      onClick={() => (isSelected ? null : onSelect())}
      disabled={isSelected}
      selected={otherSelected}
    >
      {CurrencyLogo}
      {/*<CurrencyLogo currency={currency} size="24px" />*/}
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
  currencies,
  selectedCurrency,
  onCurrencySelect,
  otherCurrency,
  fixedListRef,
  showETH,
  showImportView,
  setImportToken,
  breakIndex,
  chainId,
  token,
  inactiveTokens,
  texts,
  any,
  currencyKey,
}: {
  height: number;
  currencies: any[];
  selectedCurrency?: any | null;
  onCurrencySelect: (currency: any) => void;
  otherCurrency?: any | null;
  // fixedListRef?: MutableRefObject<FixedSizeList | undefined>
  fixedListRef?: any;
  showETH: boolean;
  showImportView: () => void;
  setImportToken: (token: any) => void;
  breakIndex: number | undefined;
  token?: any;
  chainId?: any;
  inactiveTokens?: any;
  texts?: any;
  any?: any;
  currencyKey?: any;
}) {
  const itemData: (any | undefined)[] = useMemo(() => {
    let formatted: (any | undefined)[] = showETH ? [any.ETHER, ...currencies] : currencies;
    if (breakIndex !== undefined) {
      formatted = [...formatted.slice(0, breakIndex), undefined, ...formatted.slice(breakIndex, formatted.length)];
    }
    return formatted;
  }, [breakIndex, currencies, showETH]);

  // const { chainId } = useActiveWeb3React()

  const { t } = any();

  // const inactiveTokens: {
  //   [address: string]: any
  // } = useAllInactiveTokens()

  const Row = useCallback(
    ({ data, index, style }) => {
      const currency: any = data[index];
      const isSelected = Boolean(selectedCurrency && any(selectedCurrency, currency));
      const otherSelected = Boolean(otherCurrency && any(otherCurrency, currency));
      const handleSelect = () => onCurrencySelect(currency);

      // const token = wrappedCurrency(currency, chainId)

      const showImport = inactiveTokens && token && Object.keys(inactiveTokens).includes(token.address);

      if (index === breakIndex || !data) {
        return (
          <FixedContentRow style={style}>
            <LightGreyCard padding="8px 12px" borderRadius="8px">
              <RowBetween>
                <Text small>{texts.expanded}</Text>
                <QuestionHelper text={texts.tokens} ml="4px" />
              </RowBetween>
            </LightGreyCard>
          </FixedContentRow>
        );
      }

      if (showImport && token) {
        return (
          <ImportRow style={style} token={token} showImportView={showImportView} setImportToken={setImportToken} dim />
        );
      }
      return (
        <CurrencyRow
          style={style}
          currency={currency}
          isSelected={isSelected}
          onSelect={handleSelect}
          otherSelected={otherSelected}
        />
      );
    },
    [
      chainId,
      inactiveTokens,
      onCurrencySelect,
      otherCurrency,
      selectedCurrency,
      setImportToken,
      showImportView,
      breakIndex,
      t,
    ]
  );

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
      {Row}
    </FixedSizeList>
  );
}
