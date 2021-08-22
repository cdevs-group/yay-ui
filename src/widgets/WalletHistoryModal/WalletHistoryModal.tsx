import React, { useState } from "react";
import styled from "styled-components";
import { Modal } from "../Modal";
import { Tabs } from "../../components/Tabs";
import WalletSide from "./components/WalletSide";
import TransactionSide from "./components/TransactionSide";
import { WalletHistoryModalProps } from "./types";

const Wrap = styled.div`
  height: 408px;
  padding: 30px 20px 29px 27px;
`;

const WalletHistoryModal: React.FC<WalletHistoryModalProps> = ({
  onDismiss = () => null,
  title,
  tabValue,
  setTabValue,
  tabsList,
  textsWallet,
  disconnectHandler,
  transactionTitle,
  transactionsList,
}) => {
  // const [tabValue, setTabValue] = useState(0);

  // const handleTabChange =  (e:any) =>{
  //   setTabValue(+e.target.value);
  // };

  return (
    <>
      <Modal welcome title={title} onDismiss={onDismiss}>
        <Wrap>
          <Tabs tabValue={tabValue} onClick={setTabValue} tabsList={tabsList} />
          {tabValue === 0 ? (
            <WalletSide disconnectHandler={disconnectHandler} textsWallet={textsWallet} />
          ) : (
            <TransactionSide transactionsList={transactionsList} transactionTitle={transactionTitle} />
          )}
        </Wrap>
      </Modal>
    </>
  );
};

export default WalletHistoryModal;
