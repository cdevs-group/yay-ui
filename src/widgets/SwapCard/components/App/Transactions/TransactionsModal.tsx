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

const StyledButtonBlock = styled.div`
  padding: 20px;
`

export interface TransactionsModalProps {
  texts: {
    modalTitle: string;
    modalBodyText: string;
    modalButton: string;
    modalAlternativeText: string;
  };
  account: any;
  pending: TransactionProps[];
  confirmed: TransactionProps[];
  clearAllTransactionsCallback: () => void;
  connectWalletButton: React.ReactNode | React.ReactElement | React.ReactElement[];
  renderTransactions: any;
}

const TransactionsModal: React.FC<InjectedModalProps & TransactionsModalProps> = ({
  account,
  onDismiss,
  texts,
  pending,
  confirmed,
  clearAllTransactionsCallback,
  connectWalletButton,
  renderTransactions,
}) => {
  const { modalTitle, modalBodyText, modalButton, modalAlternativeText } = texts;

  return (
    <Modal title={modalTitle} onDismiss={onDismiss} welcome padding={0}>
      {account ? (
        <ModalBody p="27px">
          {!!pending.length || !!confirmed.length ? (
            <>
              <AutoRow mb="1rem" style={{ justifyContent: "space-between" }}>
                <StyledText>{modalBodyText}</StyledText>
                <Button scale="sm" variant="text" onClick={clearAllTransactionsCallback}>
                  {modalButton}
                </Button>
              </AutoRow>
              {renderTransactions(pending)}
              {renderTransactions(confirmed)}
            </>
          ) : (
            <Text>{modalAlternativeText}</Text>
          )}
        </ModalBody>
      ) : (
        <StyledButtonBlock>{connectWalletButton}</StyledButtonBlock>
      )}
    </Modal>
  );
};

export default TransactionsModal;
