/// <reference types="react" />
declare const NftsTable: ({ nftsList, handleSelectValue, selectGame, }: {
    selectGame?: string | undefined;
    handleSelectValue: (value?: string | undefined) => void;
    nftsList: {
        img: string;
        value: string;
    }[];
}) => JSX.Element;
export default NftsTable;
