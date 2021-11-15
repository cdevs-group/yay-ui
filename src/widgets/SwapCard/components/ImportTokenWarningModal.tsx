import React from "react";
import { Modal, InjectedModalProps } from "../../Modal";
import ImportToken from "../../../components/SearchModal/ImportToken";

export interface Token {
  address: string;
  symbol: string;
  decimals: number;
}

interface Props extends InjectedModalProps {
  tokens: Token[];
  onCancel: () => void;
  modalTitleText: string;
}

const ImportTokenWarningModal: React.FC<Props> = ({ tokens, onDismiss, onCancel, modalTitleText }) => {
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
      <ImportToken tokens={tokens} handleCurrencySelect={onDismiss} />
    </Modal>
  );
};

export default ImportTokenWarningModal;
