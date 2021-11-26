import React from "react";
import { HistoryIcon } from "../../../../../components/Svg";
import { Button } from "../../../../../components/Button";
import { useModal } from "../../../../Modal";
import TransactionsModal, { TransactionsModalProps } from "./TransactionsModal";

const Transactions = ({
  account,
  onDismiss,
  texts,
  pendingTransaction,
  confirmedTransaction,
  clearAllTransactionsCallback,
  ConnectWalletButton,
  renderPendingTransactions,
  renderConfirmedTransactions
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
      renderPendingTransactions={renderPendingTransactions}
      renderConfirmedTransactions={renderConfirmedTransactions}
    />
  );
  return (
    <>
      <Button variant="text" p={0} onClick={onPresentTransactionsModal} ml="16px">
        <HistoryIcon color="textSubtle" width="30px" />
      </Button>
    </>
  );
};

export default Transactions;
