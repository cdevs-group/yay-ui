import { ReactNode } from "react";
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
    imgNoResult?: ReactNode;
}
declare function CurrencySearch({ placeholder, notResultText, checksummedInput, filteredSortedTokens, filteredInactiveTokens, debouncedQuery, commonBases, searchTokenIsAdded, searchToken, onCurrencySelect, currencyList, showCommonBases, importRow, imgNoResult, }: CurrencySearchProps): JSX.Element;
export default CurrencySearch;
