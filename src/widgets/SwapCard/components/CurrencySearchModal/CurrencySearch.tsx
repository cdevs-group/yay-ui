import React, { RefObject, ReactNode, useRef, useEffect } from "react";
import Box from "../../../../components/Box/Box";
import { Text } from "../../../../components/Text";
import Column, { AutoColumn } from "../../../../components/Layouts/Column";
import Row from "../../../../components/Layouts/Row";
import { InputSearch } from "../../../..";
import { OneGhost2 } from "../../../../constants/images";

interface CurrencySearchProps {
  handleInput: (event: any) => void;
  handleEnter: (event: any) => void;
  currencyList: ReactNode;
  showCommonBases: boolean;
  importRow: ReactNode;
  placeholder: string;
  notResultText: string;
  searchTokenIsAdded: any;
  searchToken: any;
  searchQuery: any;
  commonBases: ReactNode;
  filteredSortedTokens: any;
  filteredInactiveTokens: any;
  imgNoResult?: ReactNode;
}

function CurrencySearch({
  placeholder,
  notResultText,
  searchQuery,
  filteredSortedTokens,
  filteredInactiveTokens,
  commonBases,
  searchTokenIsAdded,
  searchToken,
  handleInput,
  currencyList,
  showCommonBases,
  importRow,
  imgNoResult,
  handleEnter,
}: CurrencySearchProps) {
  // manage focus on modal show
  const inputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  return (
    <>
      <div>
        <AutoColumn gap="16px">
          <Row>
            <InputSearch
              id="token-search-input"
              placeholder={placeholder}
              name="token-search-input"
              autoComplete="off"
              value={searchQuery}
              ref={inputRef as RefObject<HTMLInputElement>}
              onChange={handleInput}
              onKeyDown={handleEnter}
              width="100%"
            />
          </Row>
          {showCommonBases && commonBases}
        </AutoColumn>
        {searchToken && !searchTokenIsAdded ? (
          <Column style={{ padding: "20px 0", height: "100%" }}>{importRow}</Column>
        ) : filteredSortedTokens?.length > 0 || filteredInactiveTokens?.length > 0 ? (
          <Box margin="24px -24px">{currencyList}</Box>
        ) : (
          <Column style={{ padding: "60px 0 100px", height: "100%", alignItems: "center" }}>
            {imgNoResult || <img src={OneGhost2} alt="" />}
            <Text color="text" textAlign="center" style={{ opacity: 0.7 }}>
              {notResultText}
            </Text>
          </Column>
        )}
      </div>
    </>
  );
}

export default CurrencySearch;
