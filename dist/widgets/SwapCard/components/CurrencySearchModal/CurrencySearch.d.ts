import { ReactNode } from "react";
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
declare function CurrencySearch({ placeholder, notResultText, searchQuery, filteredSortedTokens, filteredInactiveTokens, commonBases, searchTokenIsAdded, searchToken, handleInput, currencyList, showCommonBases, importRow, imgNoResult, handleEnter, }: CurrencySearchProps): JSX.Element;
export default CurrencySearch;
