import React from "react"
import styled from "styled-components"
import { Modal, InjectedModalProps } from "../../../../Modal"
import { ModalBody } from "../../../../Modal/Modal"
import { Text } from "../../../../../components/Text"
import { Button } from "../../../../../components/Button"
import { Flex } from "../../../../../components/Box"
import { AutoRow } from "../../../../../components/Layout/Row"
import Transaction from "./Transaction"
import { TransactionProps, TransactionDetailsProps } from "./types"

const StyledText = styled(Text)`
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0.5px;
  color: #A3A3A3;
`

export interface TransactionsModalProps {
  texts: {
    modalTitle: string
    modalBodyText: string
    ModalButton: string
    ModalAlternativeText: string
  }
  account: any
  pendingTransaction: TransactionProps[]
  confirmedTransaction: TransactionProps[]
  clearAllTransactionsCallback: () => void
  ConnectWalletButton: React.ReactNode
}

function renderTransactions(transactions: TransactionProps[], chainId: any, bscScanLink: string, summary: string, pending: boolean, success: boolean) {
  return (
    <Flex flexDirection="column">
      {transactions.map((tx: TransactionProps) => {
        return <Transaction 
          key={tx.hash + tx.addedTime}
          chainId={chainId}
          bscScanLink={bscScanLink}
          summary={summary}
          pending={pending}
          success={success}
        />
      })}
    </Flex>
  )
}

const TransactionsModal: React.FC<InjectedModalProps & TransactionsModalProps & TransactionDetailsProps> = ({
  account,
  onDismiss,
  texts,
  pendingTransaction,
  confirmedTransaction,
  clearAllTransactionsCallback,
  ConnectWalletButton,
  chainId,
  bscScanLink,
  summary,
  pending,
  success
 }) => {

  const { 
    modalTitle,
    modalBodyText,
    ModalButton,
    ModalAlternativeText
   } = texts

  return (
    <Modal 
      title={modalTitle}
      headerBackground="gradients.cardHeader"
      onDismiss={onDismiss}
      welcome
    >
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
              {renderTransactions(pendingTransaction, chainId, bscScanLink, summary, pending, success)}
              {renderTransactions(confirmedTransaction, chainId, bscScanLink, summary, pending, success)}
            </>
          ) : (
            <Text>{ModalAlternativeText}</Text>
          )}
        </ModalBody>
      ) : (
        {ConnectWalletButton}
      )}
    </Modal>
  )
}

export default TransactionsModal
