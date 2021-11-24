import React from "react";
import { Modal, InjectedModalProps } from "../../Modal";
import ImportToken, { InjectedImportTokenProps } from "./CurrencySearchModal/ImportToken";

interface Props extends InjectedModalProps {
  tokens: any[];
  onCancel: () => void;
  modalTitleText: string;
  getBscScanLink: any;
}

const ImportTokenWarningModal: React.FC<Props & InjectedImportTokenProps> = ({
  tokens,
  onDismiss,
  onCancel,
  modalTitleText,
  listLogo,
  texts,
  addToken,
  chainId,
  inactiveTokenList,
  truncateHash,
  getBscScanLink,
}) => {
  return (
    <Modal
      title={modalTitleText}
      onDismiss={() => {
        if (onDismiss) {
          onDismiss();
        }
        onCancel();
      }}
      style={{ maxWidth: "420px" }}
    >
      <ImportToken
        tokens={tokens}
        handleCurrencySelect={onDismiss}
        listLogo={listLogo}
        texts={texts}
        addToken={addToken}
        chainId={chainId}
        inactiveTokenList={inactiveTokenList}
        truncateHash={truncateHash}
        getBscScanLink={getBscScanLink}
      />
    </Modal>
  );
};

export default ImportTokenWarningModal;
