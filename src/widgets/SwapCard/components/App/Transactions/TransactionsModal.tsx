import React from "react"
import { Modal, InjectedModalProps } from "../../../../Modal"
import { ModalBody } from "../../../../Modal/Modal"
import { Text } from "../../../../../components/Text"
import { Button } from "../../../../../components/Button"
import { Flex } from "../../../../../components/Box"
import { AutoRow } from "../../../../../components/Layout/Row"
import Transaction from "./Transaction"
import { TransactionProps, TransactionDetailsProps } from "./types"

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
    <Modal title={modalTitle} headerBackground="gradients.cardHeader" onDismiss={onDismiss}>
      {account ? (
        <ModalBody>
          {!!pendingTransaction.length || !!confirmedTransaction.length ? (
            <>
              <AutoRow mb="1rem" style={{ justifyContent: "space-between" }}>
                <Text>{modalBodyText}</Text>
                <Button variant="tertiary" scale="xs" onClick={clearAllTransactionsCallback}>
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
