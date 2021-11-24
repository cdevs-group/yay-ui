import React from "react";
import { InjectedModalProps } from "../../Modal";
import { InjectedImportTokenProps } from "./CurrencySearchModal/ImportToken";
interface Props extends InjectedModalProps {
    tokens: any[];
    onCancel: () => void;
    modalTitleText: string;
    getBscScanLink: any;
}
declare const ImportTokenWarningModal: React.FC<Props & InjectedImportTokenProps>;
export default ImportTokenWarningModal;
