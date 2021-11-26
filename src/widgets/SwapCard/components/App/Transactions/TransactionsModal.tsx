import React from "react";
import styled from "styled-components";
import { Modal, InjectedModalProps } from "../../../../Modal";
import { ModalBody } from "../../../../Modal/Modal";
import { Text } from "../../../../../components/Text";
import { Button } from "../../../../../components/Button";
import { AutoRow } from "../../../../../components/Layouts/Row";
import { TransactionProps } from "./types";

const StyledText = styled(Text)`
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0.5px;
  color: #a3a3a3;
`;

export interface TransactionsModalProps {
  texts: {
    modalTitle: string;
    modalBodyText: string;
    ModalButton: string;
    ModalAlternativeText: string;
  };
  account: any;
  pendingTransaction: TransactionProps[];
  confirmedTransaction: TransactionProps[];
  clearAllTransactionsCallback: () => void;
  ConnectWalletButton: React.ReactNode;
  renderPendingTransactions: React.ReactNode;
  renderConfirmedTransactions: React.ReactNode;
}

const TransactionsModal: React.FC<InjectedModalProps & TransactionsModalProps> = ({
  account,
  onDismiss,
  texts,
  pendingTransaction,
  confirmedTransaction,
  clearAllTransactionsCallback,
  ConnectWalletButton,
  renderPendingTransactions,
  renderConfirmedTransactions
}) => {
  const { modalTitle, modalBodyText, ModalButton, ModalAlternativeText } = texts;

  return (
    <Modal title={modalTitle} headerBackground="gradients.cardHeader" onDismiss={onDismiss} welcome padding={0}>
      {account ? (
        <ModalBody p="27px">
          {!!pendingTransaction.length || !!confirmedTransaction.length ? (
            <>
              <AutoRow mb="1rem" style={{ justifyContent: "space-between" }}>
                <StyledText>{modalBodyText}</StyledText>
                <Button scale="sm" variant="text" onClick={clearAllTransactionsCallback}>
                  {ModalButton}
                </Button>
              </AutoRow>
              {renderPendingTransactions}
              {renderConfirmedTransactions}
            </>
          ) : (
            <Text>{ModalAlternativeText}</Text>
          )}
        </ModalBody>
      ) : (
        { ConnectWalletButton }
      )}
    </Modal>
  );
};

export default TransactionsModal;
