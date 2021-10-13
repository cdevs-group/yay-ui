import React, { useState } from "react";
import styled from "styled-components";
import BridgeStep1 from "./BridgeStep1";
import BridgeStep2 from "./BridgeStep2";
import useBridgeModal from "./useBridgeModal";
import { Text } from "../../components/Text";
import { AvalancheIcon, BnbIcon } from "../../components/Svg";
import YAYIcon from "../../components/Svg/Icons/YAYIcon";
import { TransactionHistory } from "./index";
import { Metamask } from "../../constants/images";
import { NoticeBridgeType } from "./types";
import { Button } from "../../components/Button";

export default {
  title: "Widgets/Bridge",
  argTypes: {},
};

export const BridgeStep1Block: React.FC = () => {
  const [value, onUserInput] = useState<string | number>("");
  const [fromChange, setFromChange] = useState(false);
  const texts = {
    from: "From",
    to: "To",
    error: "",
    nameNetwork1: "Binance Smart Chain",
    nameNetwork2: "Avalanche",
    buttonProofOfState: "Proof of State",
    buttonTransactionsHistory: "Transactions history",
    currencyInput: "YAY",
    commit: "From",
  };
  const balanceText = {
    message1: "Available balance:",
    message2: "12,200,000 YAY",
  };
  const handleToggleNetwork = () => {
    setFromChange(!fromChange);
  };

  return (
    <div>
      <div style={{ marginBottom: "50px" }}>
        <BridgeStep1
          handleToggleNetwork={handleToggleNetwork}
          balanceText={balanceText}
          handleButtonToMax={() => {}}
          texts={texts}
          value={value}
          onUserInput={onUserInput}
          iconNetwork1={<BnbIcon />}
          iconNetwork2={<AvalancheIcon />}
          handleOpenProofOfAssets={() => {}}
          handleOpenTransactionsHistory={() => {}}
          actionButton={
            <Button variant="green" width="100%">
              Transfer
            </Button>
          }
        />
      </div>
      <div style={{ marginBottom: "50px" }}>
        <BridgeStep1
          handleToggleNetwork={handleToggleNetwork}
          balanceText={balanceText}
          inputError
          iconNetwork1={<BnbIcon />}
          iconNetwork2={<AvalancheIcon />}
          handleOpenProofOfAssets={() => {}}
          handleButtonToMax={() => {}}
          texts={texts}
          value={value}
          onUserInput={onUserInput}
          iconBalanceInput={<YAYIcon />}
          handleOpenTransactionsHistory={() => {}}
          actionButton={<Button>Transfer</Button>}
        />
      </div>
    </div>
  );
};

export const BridgeStep2Block = () => {
  const textsProgress1 = {
    waiting: "Waiting for ",
    error: "Fatal Error",
    confirmations: "confirmations",
    checkIt: "Check it",
    start: "Start",
    step1: "1/35",
    step2: "2/35",
    finish: "Final",
  };
  const textsProgress2 = {
    waiting: "Waiting for",
    start: "Start",
    final: "Final",
    networkWaiting: "BSC",
  };
  const transferredValue = {
    token: "12,001 YAY",
    fiat: "~ $10.00",
  };
  const gasPriceTextNetwork1 = {
    value: "0.00015 BNB",
    fiat: "~ $0.15",
  };
  const gasPriceTextNetwork2 = {
    value: "0.00015 BNB",
    fiat: "~ $0.15",
  };

  const texts = {
    title: "Transaction status",
    token: "Token",
    addToken: "Add Token",
    amount: "Amount transferred",
    network: "Network",
    timer: "Timer",
    coast: "Coast of GAS",
  };

  const stepsText = ["start", "1/25", "3/32", "finish"];

  return (
    <div>
      <div style={{ marginTop: "20px" }}>
        <BridgeStep2
          network1="avax"
          network2="bsc"
          onDismiss={() => {}}
          transferredValue={transferredValue}
          texts={texts}
          progress1={1}
          progress2={100}
          timer={435}
          isLoadGas
          textsProgress2={textsProgress2}
          textsProgress1={textsProgress1}
          addTokenHandler={() => {}}
          stepsText={stepsText}
          gasPriceTextNetwork1={gasPriceTextNetwork1}
          gasPriceTextNetwork2={gasPriceTextNetwork2}
          isLoadGasNetwork2
          isLoadTimeNetwork
          isLoadGasNetwork1
          noticeVisible
          noticeType={NoticeBridgeType.ERROR}
          noticeTitle="Something went wrong"
          noticeText={<>Your request was successfully completed. Check details here</>}
          noticeButton1={
            <Button variant="green" maxWidth="362px" width="100%" mb="14px">
              noticeButton1Text
            </Button>
          }
          noticeButton2={
            <Button variant="gray" maxWidth="362px" width="100%">
              noticeButton2Text
            </Button>
          }
        />
      </div>
      <div style={{ marginTop: "20px" }}>
        <BridgeStep2
          network1="bsc"
          network2="avax"
          onDismiss={() => {}}
          transferredValue={transferredValue}
          texts={texts}
          progress1={50}
          progress2={100}
          timer={0}
          textsProgress2={textsProgress2}
          textsProgress1={textsProgress1}
          addTokenHandler={() => {}}
          stepsText={stepsText}
          gasPriceTextNetwork1={gasPriceTextNetwork1}
          gasPriceTextNetwork2={gasPriceTextNetwork2}
          isLoadGasNetwork2={false}
          isLoadTimeNetwork
          isLoadGasNetwork1
        />
      </div>
      <div style={{ marginTop: "20px" }}>
        <BridgeStep2
          network1="bsc"
          network2="avax"
          onDismiss={() => {}}
          transferredValue={transferredValue}
          texts={texts}
          progress1={28}
          timer={3601}
          isErrorNetwork1
          isErrorNetwork2
          progress2={20}
          textsProgress2={textsProgress2}
          textsProgress1={textsProgress1}
          addTokenHandler={() => {}}
          stepsText={stepsText}
          gasPriceTextNetwork1={gasPriceTextNetwork1}
          gasPriceTextNetwork2={gasPriceTextNetwork2}
          isLoadGasNetwork2
          isLoadGasNetwork1
          isLoadTimeNetwork={false}
        />
      </div>
    </div>
  );
};

export const BrightProofBlock = () => {
  const { onPresentBridgeModal } = useBridgeModal();
  return (
    <Btn as="button">
      <Btn onClick={onPresentBridgeModal}>Proof of assets</Btn>
    </Btn>
  );
};

const Btn = styled(Text)`
  background: none;
  border: none;
  cursor: pointer;
`;

export const TransactionHistoryBlock = () => {
  const ProofOfAssetsData = [
    {
      id: "137fa17a-c6db-47f6-b642-7d37f6cbc83c",
      createdAt: "2021-10-12T10:38:40.212Z",
      updatedAt: "2021-10-12T10:38:40.212Z",
      network: "avax",
      hash: "0x9ed7a74fedb963d5c378a60ce812c58e9e658280d4bcf9a2d00a729dce3afa16",
      blockNumber: 11705938,
      blockNumberTimestamp: 1634035118,
      tokenAddress: "0x524dF384BFFB18C0C8f3f43d012011F8F9795579",
      anotherHash: "0xfc94cfd43934441fccfbaabcd72653046f97896bb51ef4e2cd6992da625572d1",
      toAddress: "0x049900f4204604c52BF76Ba61e72a43e04B0AA54",
      amount: "100000000000000",
    },
  ];

  const texts = {
    title: "Transactions History",
    description: "Here you can view the history of your transactions",
    seeMore: "See more",
  };

  const [isLoading, setisLoading] = useState(false);
  const addTokenHandler = (e) => {
    console.log(e.currentTarget.value);
  };
  return (
    <TransactionHistory
      addTokenHandler={addTokenHandler}
      textCopy={"Copied"}
      onDismiss={() => {}}
      texts={texts}
      transactionHistoryData={ProofOfAssetsData}
      addTokenIcon={<img src={Metamask} />}
      propsBtnSeeMore={{
        onClick: () => {
          setisLoading(true);
        },
        spinColor: isLoading,
      }}
      textTransaction="Transaction of"
    />
  );
};
