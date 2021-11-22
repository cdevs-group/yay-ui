import React from "react";
interface ImportProps {
    listURL: string;
    list: any;
    listLogo: React.ReactNode;
    handleAddList: () => void;
    addError: string | null;
    texts: {
        tokens: string;
        import: string;
        adding: string;
        iUnderstand: string;
        importRisk: string;
        byAdding: string;
    };
}
declare function ImportList({ listURL, list, listLogo, handleAddList, addError, texts }: ImportProps): JSX.Element;
export default ImportList;
