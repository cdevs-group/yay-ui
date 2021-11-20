import React from "react";
import { HistoryIcon } from "../../../../../components/Svg";
import { Button } from "../../../../../components/Button";
import { useModal } from "../../../../Modal";
import TransactionsModal, { TransactionsModalProps } from "./TransactionsModal";
import { TransactionDetailsProps } from "./types";

const Transactions = ({
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
  success,
}: TransactionsModalProps & { onDismiss: () => void } & TransactionDetailsProps) => {
  const [onPresentTransactionsModal] = useModal(
    <TransactionsModal
      account={account}
      onDismiss={onDismiss}
      texts={texts}
      pendingTransaction={pendingTransaction}
      confirmedTransaction={confirmedTransaction}
      clearAllTransactionsCallback={clearAllTransactionsCallback}
      ConnectWalletButton={ConnectWalletButton}
      chainId={chainId}
      bscScanLink={bscScanLink}
      summary={summary}
      pending={pending}
      success={success}
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
