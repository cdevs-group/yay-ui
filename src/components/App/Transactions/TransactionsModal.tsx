import React from "react"
import { Modal, InjectedModalProps } from "../../../widgets/Modal"
import ModalBody from "../../../widgets/Modal/Modal"
import { Text } from "../../Text"
import { Button } from "../../Button"
import { Flex } from "../../Box"
import { AutoRow } from "../../Layout/Row"
import Transaction from "./Transaction"

export interface TransactionsModalProps {
  texts: {
    modalTitle: string
    modalBody: string
    ModalButton: string
    ModalAlternativeText: string
  }
  account: any
  pendingTransaction: TransactionProps[]
  confirmedTransaction: TransactionProps[]
  clearAllTransactionsCallback: () => void
  ConnectWalletButton: React.ReactNode
}

interface TransactionProps {
  hash: string
  approval?: { tokenAddress: string; spender: string }
  summary?: string
  claim?: { recipient: string }
  receipt?: {
    to: string
    from: string
    contractAddress: string
    transactionIndex: number
    blockHash: string
    transactionHash: string
    blockNumber: number
    status?: number
  }
  lastCheckedBlockNumber?: number
  addedTime: number
  confirmedTime?: number
  from: string
}

function renderTransactions(transactions: TransactionProps[]) {
  return (
    <Flex flexDirection="column">
      {transactions.map((tx) => {
        return <Transaction key={tx.hash + tx.addedTime} tx={tx} />
      })}
    </Flex>
  )
}

const TransactionsModal: React.FC<InjectedModalProps & TransactionsModalProps> = ({
  account,
  onDismiss,
  texts,
  pendingTransaction,
  confirmedTransaction,
  clearAllTransactionsCallback,
  ConnectWalletButton
 }) => {

  const { 
    modalTitle,
    modalBody,
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
                <Text>{modalBody}</Text>
                <Button variant="tertiary" scale="xs" onClick={clearAllTransactionsCallback}>
                  {ModalButton}
                </Button>
              </AutoRow>
              {renderTransactions(pendingTransaction)}
              {renderTransactions(confirmedTransaction)}
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
