import React, { useState } from "react";
import styled from "styled-components";
import { Modal } from "../Modal";
import { Tabs } from "../../components/Tabs";
import WalletSide from "./components/WalletSide";
import TransactionSide from "./components/TransactionSide";
import { WalletHistoryModalProps } from "./types";

const Wrap = styled.div`
  padding: 21px 13px;
  max-height: 100vh;
  min-height: 410px;
  min-width: 303px;
  box-sizing: border-box;
  width: 100%;
  background: ${({ theme }) => theme.colors.bgGray};
  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  z-index: ${({ theme }) => theme.zIndices.modal};
  ${({ theme }) => theme.mediaQueries.xs} {
    min-width: 360px;
    width: 100%;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    min-width: 404px;
    width: 100%;
    padding: 30px 20px 29px 27px;
  }
`;

const WalletHistoryModal: React.FC<WalletHistoryModalProps> = ({
  account,
  onDismiss = () => null,
  disconnectHandler,
  transactionsList,
  textsBridge,
  logout,
  handleClickTransactions,
}) => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (e: any) => {
    setTabValue(+e.target.value);
  };

  return (
    <>
      <Modal welcome title={textsBridge?.titleModal} onDismiss={onDismiss}>
        <Wrap>
          <Tabs tabValue={tabValue} onClick={handleTabChange} tabsList={textsBridge?.tabsList} />
          {tabValue === 0 ? (
            <WalletSide
              logout={logout}
              disconnectHandler={disconnectHandler}
              account={account}
              textsBridge={textsBridge}
            />
          ) : (
            <TransactionSide
              handleClickTransactions={handleClickTransactions}
              noRecentTransactions={textsBridge?.noRecentTransactions}
              transactionsList={transactionsList}
              transactionTitle={textsBridge?.transactionTitle}
            />
          )}
        </Wrap>
      </Modal>
    </>
  );
};

export default WalletHistoryModal;
