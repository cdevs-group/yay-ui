import React, { useState } from "react";
import styled from "styled-components";
import BridgeStep1 from "./BridgeStep1";
import BridgeStep2 from "./BridgeStep2";
import { Timer } from "../../components/Timer";
import useBridgeModal from "./useBridgeModal";
import { Text } from "../../components/Text";
import { AvalancheIcon, BnbIcon } from "../../components/Svg";
import YAYIcon from "../../components/Svg/Icons/YAYIcon";
import { BridgeProof } from "./index";
import { Metamask } from "../../constants/images";
import { NoticeBridgeType } from "./types";

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
    button: "Transfer",
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
          handleButton={() => {}}
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
          propsButton={{ spin: true }}
        />
      </div>
      <div style={{ marginBottom: "50px" }}>
        <BridgeStep1
          handleButton={() => {}}
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
          progress2={0}
          timer1={435}
          timer2={34534}
          isLoadGas
          textsProgress2={textsProgress2}
          textsProgress1={textsProgress1}
          addTokenHandler={() => {}}
          stepsText={stepsText}
          gasPriceTextNetwork1={gasPriceTextNetwork1}
          gasPriceTextNetwork2={gasPriceTextNetwork2}
          isLoadGasNetwork2
          isLoadTimeNetwork1
          isLoadGasNetwork1
          isLoadTimeNetwork2
          noticeVisible
          noticeType={NoticeBridgeType.ERROR}
          noticeTitle="Something went wrong"
          noticeText={<>Your request was successfully completed. Check details here</>}
          noticeButton1Text="Try again"
          noticeButton2Text="Go to marketplace"
          noticeButton1Props={{ spin: true, onClick: () => console.log("Click") }}
        />
      </div>
      <div style={{ marginTop: "20px" }}>
        <BridgeStep2
          network1="bsc"
          network2="avax"
          onDismiss={() => {}}
          transferredValue={transferredValue}
          texts={texts}
          progress1={3}
          progress2={0}
          timer1={342324}
          timer2={23}
          textsProgress2={textsProgress2}
          textsProgress1={textsProgress1}
          addTokenHandler={() => {}}
          stepsText={stepsText}
          gasPriceTextNetwork1={gasPriceTextNetwork1}
          gasPriceTextNetwork2={gasPriceTextNetwork2}
          isLoadGasNetwork2={false}
          isLoadTimeNetwork1
          isLoadGasNetwork1
          isLoadTimeNetwork2={false}
        />
      </div>
      <div style={{ marginTop: "20px" }}>
        <BridgeStep2
          network1="bsc"
          network2="avax"
          onDismiss={() => {}}
          transferredValue={transferredValue}
          texts={texts}
          progress1={4}
          timer1={334}
          timer2={100}
          isError
          progress2={20}
          textsProgress2={textsProgress2}
          textsProgress1={textsProgress1}
          addTokenHandler={() => {}}
          stepsText={stepsText}
          gasPriceTextNetwork1={gasPriceTextNetwork1}
          gasPriceTextNetwork2={gasPriceTextNetwork2}
          isLoadGasNetwork2
          isLoadTimeNetwork1={false}
          isLoadGasNetwork1={false}
          isLoadTimeNetwork2
        />
      </div>
    </div>
  );
};

export const BrightProofBlock = () => {
  const { onPresentBridgeModal } = useBridgeModal();
  return (
    <Button as="button">
      <Button onClick={onPresentBridgeModal}>Proof of assets</Button>
    </Button>
  );
};
const Button = styled(Text)`
  background: none;
  border: none;
  cursor: pointer;
`;
export const TransactionHistoryBlock = () => {
  const ProofOfAssetsData = [
    {
      proofData: {
        token: "3,836.537598 YAY",
        address: "0xbdda50183d817c3289f895a4472eb475967dc980",
        network: "bscan.ru",
        link: "#",
        title: "Proof of Asset",
      },
      wrappedData: [
        {
          token: "3,836.537598 YAY",
          address: "0xbdda50183d817c3289f895a4472eb475967dc980",
          network: "bscan.ru",
          link: "#",
          title: "Wrapped Token",
        },
        {
          token: "3,836.537598 YAY",
          address: "0xbdda50183d817c3289f895a4472eb475967dc980",
          network: "bscan.ru",
          link: "#",
          title: "Supply token",
        },
      ],
    },
    {
      proofData: {
        token: "3,836.537598 YAY",
        address: "0xbdda50183d817c3289f895a4472eb475967dc980",
        network: "bscan.ru",
        link: "#",
        title: "Proof of Asset",
      },
      wrappedData: [
        {
          token: "3,836.537598 YAY",
          address: "0xbdda50183d817c3289f895a4472eb475967dc980",
          network: "bscan.ru",
          link: "#",
          title: "Wrapped Token",
        },
        {
          token: "3,836.537598 YAY",
          address: "0xbdda50183d817c3289f895a4472eb475967dc980",
          network: "bscan.ru",
          link: "#",
          title: "Supply token",
        },
      ],
    },
    {
      proofData: {
        token: "3,836.537598 YAY",
        address: "0xbdda50183d817c3289f895a4472eb475967dc980",
        network: "bscan.ru",
        link: "#",
        title: "Proof of Asset",
      },
      wrappedData: [
        {
          token: "3,836.537598 YAY",
          address: "0xbdda50183d817c3289f895a4472eb475967dc980",
          network: "bscan.ru",
          link: "#",
          title: "Wrapped Token",
        },
        {
          token: "3,836.537598 YAY",
          address: "0xbdda50183d817c3289f895a4472eb475967dc980",
          network: "bscan.ru",
          link: "#",
          title: "Supply token",
        },
      ],
    },
  ];
  const texts = {
    title: "Transactions History",
    description: "Here you can view the history of your transactions",
  };

  return (
    <BridgeProof
      addTokenHandler={() => {}}
      textCopy={"Copied"}
      onDismiss={() => {}}
      texts={texts}
      ProofOfAssetsData={ProofOfAssetsData}
      addTokenIcon={<img src={Metamask} />}
    />
  );
};
