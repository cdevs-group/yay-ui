import React from "react";
import { HistoryIcon } from "../../../../../components/Svg";
import { Button } from "../../../../../components/Button";

const Transactions = ({ onPresentTransactionsModal }: { onPresentTransactionsModal: any }) => {
  return (
    <Button variant="text" p={0} onClick={onPresentTransactionsModal} ml="12px">
      <HistoryIcon color="textSubtle" width="30px" />
    </Button>
  );
};

export default Transactions;
