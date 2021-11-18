import React, { KeyboardEvent, RefObject, useCallback, useMemo, useRef, useState, useEffect, ReactNode } from "react";
import Input from "../../../../components/Input/Input";
import Box from "../../../../components/Box/Box";
import { Text } from "../../../../components/Text";
import { FixedSizeList } from "react-window";
import Column, { AutoColumn } from "../../../../components/Layout/Column";
import Row from "../../../../components/Layout/Row";

interface CurrencySearchProps {
  onCurrencySelect: (currency: any) => void;
  currencyList: ReactNode;
  showCommonBases: boolean;
  importRow: ReactNode;
  placeholder: string;
  notResultText: string;
  searchTokenIsAdded: any;
  searchToken: any;
  checksummedInput: boolean;
  commonBases: ReactNode;
  debouncedQuery: any;
  filteredSortedTokens: any;
  filteredInactiveTokens: any;  
}

function CurrencySearch({
  placeholder,
  notResultText,
  checksummedInput,
  filteredSortedTokens,
  filteredInactiveTokens,
  debouncedQuery,
  commonBases,
  searchTokenIsAdded,
  searchToken,
  onCurrencySelect,
  currencyList,
  showCommonBases,
  importRow,  
}: CurrencySearchProps) {
  // refs for fixed size lists
  const fixedList = useRef<FixedSizeList>();
  const [searchQuery, setSearchQuery] = useState<string>("");
 
  const handleCurrencySelect = useCallback(
    (currency: any) => {
      onCurrencySelect(currency);
    },
    [onCurrencySelect]
  );

  // manage focus on modal show
  const inputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    if (inputRef && inputRef.current) inputRef.current.focus();
  }, [inputRef]);

  const handleInput = useCallback((event) => {
    const input = event.target.value;
    setSearchQuery(checksummedInput || input);
    fixedList.current?.scrollTo(0);
  }, []);

  const handleEnter = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        const s = debouncedQuery.toLowerCase().trim();
        if (s === "bnb") {
          handleCurrencySelect("ETHER");
        } else if (filteredSortedTokens.length > 0) {
          if (
            filteredSortedTokens[0].symbol?.toLowerCase() === debouncedQuery.trim().toLowerCase() ||
            filteredSortedTokens.length === 1
          ) {
            handleCurrencySelect(filteredSortedTokens[0]);
          }
        }
      }
    },
    [filteredSortedTokens, handleCurrencySelect, debouncedQuery]
  );

  return (
    <>
      <div>
        <AutoColumn gap="16px">
          <Row>
            <Input
              id="token-search-input"
              placeholder={placeholder}
              scale="lg"
              autoComplete="off"
              value={searchQuery}
              ref={inputRef as RefObject<HTMLInputElement>}
              onChange={handleInput}
              onKeyDown={handleEnter}
            />
          </Row>
          {showCommonBases && commonBases}
        </AutoColumn>
        {searchToken && !searchTokenIsAdded ? (
          <Column style={{ padding: "20px 0", height: "100%" }}>{importRow}</Column>
        ) : filteredSortedTokens?.length > 0 || filteredInactiveTokens?.length > 0 ? (
          <Box margin="24px -24px">{currencyList}</Box>
        ) : (
          <Column style={{ padding: "20px", height: "100%" }}>
            <Text color="textSubtle" textAlign="center" mb="20px">
              {notResultText}
            </Text>
          </Column>
        )}
      </div>
    </>
  );
}

export default CurrencySearch;
