import React from 'react'
import { HistoryIcon } from '../../Svg'
import { Button } from '../../Button'
import { useModal } from '../../../widgets/Modal'
import TransactionsModal, { TransactionsModalProps } from './TransactionsModal'

const Transactions = ({
  account,
  onDismiss,
  texts,
  pendingTransaction,
  confirmedTransaction,
  clearAllTransactionsCallback,
  ConnectWalletButton
}: TransactionsModalProps & { onDismiss: () => void }) => {
  const [onPresentTransactionsModal] = useModal(
    <TransactionsModal
      account={account}
      onDismiss={onDismiss}
      texts={texts}
      pendingTransaction={pendingTransaction}
      confirmedTransaction={confirmedTransaction}
      clearAllTransactionsCallback={clearAllTransactionsCallback}
      ConnectWalletButton={ConnectWalletButton}
    />
  )
  return (
    <>
      <Button variant="text" p={0} onClick={onPresentTransactionsModal} ml="16px">
        <HistoryIcon color="textSubtle" width="24px" />
      </Button>
    </>
  )
}

export default Transactions
