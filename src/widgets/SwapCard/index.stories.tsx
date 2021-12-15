import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Button, Flex } from "../..";

import TradePrice from "./components/TradePrice";
import AddressInputPanel from "./components/AddressInputPanel";
import AdvancedSwapDetailsDropdown from "./components/AdvancedSwapDetailsDropdown";
import ProgressCircles from "./components/ProgressSteps";
import SwapModalFooter from "./components/SwapModalFooter";
import SwapModalHeader from "./components/SwapModalHeader";
import Acknowledgement from "./components/SwapWarningModal/Acknowledgement";
import BondlyWarning from "./components/SwapWarningModal/BondlyWarning";
import SafemoonWarning from "./components/SwapWarningModal/SafemoonWarning";
import SwapWarningModal from "./components/SwapWarningModal";
import UnsupportedCurrencyFooter from "./components/UnsupportedCurrencyFooter";
import GlobalSettings from "./components/SettingsModal";
import { AppHeader } from "./components/App";
import { YAY_TOKEN_GREEN } from "../../constants/images";
import TransactionsModal from "./components/App/Transactions/TransactionsModal";
import { Transaction, Transactions } from ".";
import {
  TransactionErrorContent,
  ConfirmationModalContent,
  TransactionSubmittedContent,
  ConfirmationPendingContent,
} from "../SwapCard/components/TransactionConfirmationModal";
import styled from "styled-components";
import { Modal } from "../Modal";

export default {
  title: "Widgets/Swap",
  argTypes: {},
};

export const ConfirmationPendingContentBlock = () => {
  return (
    <Modal onDismiss={() => null} title="Confirm swap">
      <ConfirmationPendingContent
        pendingText="Swapping 0.001 BNB"
        texts={{
          confirmationWaiting: "Waiting for confirmation",
          transactionConfirm: "confirm this transaction in your wallet",
        }}
      />
    </Modal>
  );
};

export const TransactionSubmittedContentBlock = () => {
  return (
    <Modal onDismiss={() => null} title="Confirm swap">
      <TransactionSubmittedContent
        onDismiss={() => null}
        registerToken={() => null}
        chainId={56}
        txHash="vkdjfnvldfbvldfb"
        currencyToAdd
        bscScanLink="View on BscScan"
        transSubmittedText="Transaction Submitted"
        bscScanLinkText="View on BscScan"
        metamaskAssetText="Add to Metamask"
        btnCloseText="Close"
        isMetaMask
        token
      />
    </Modal>
  );
};

export const ConfirmationModalContentBlock = () => {
  return (
    <StyledModal>
      <ConfirmationModalContent bottomContent={SwapModalFooterBlock} topContent={SwapModalHeaderBlock} />
    </StyledModal>
  );
};

export const TransactionErrorContentBlock = () => {
  return (
    <StyledModal>
      <TransactionErrorContent onDismiss={() => null} dismissText="dismiss Text" />
    </StyledModal>
  );
};

export const TradePriceBlock = () => {
  return (
    <div>
      <TradePrice showInverted setShowInverted={() => null} show label="label" formattedPrice="1231" />
    </div>
  );
};

const trade = {
  route: {
    path: [
      {
        token: {
          symbol: "12345",
        },
        i: 0,
        path: "0",
      },
      {
        token: {
          symbol: "12345",
        },
        i: 1,
        path: "1",
      },
      {
        token: {
          symbol: "12345",
        },
        i: 2,
        path: "2",
      },
    ],
  },
  outputAmount: {
    currency: "123456789",
  },
};

const tokens = [
  {
    address: "https://avatars.githubusercontent.com/u/79834037?s=200&v=4",
    symbol: "123456789",
    name: "Token Name 1",
  },
  {
    address: "https://avatars.githubusercontent.com/u/79834037?s=200&v=4",
    symbol: "987654321",
    name: "Token Name 2",
  },
];

const srcs = [
  "https://avatars.githubusercontent.com/u/79834037?s=200&v=4",
  "https://avatars.githubusercontent.com/u/79834037?s=200&v=4",
  "https://avatars.githubusercontent.com/u/79834037?s=200&v=4",
  "https://avatars.githubusercontent.com/u/79834037?s=200&v=4",
  "https://avatars.githubusercontent.com/u/79834037?s=200&v=4",
  "https://avatars.githubusercontent.com/u/79834037?s=200&v=4",
];

export const AddressInputPanelBlock = () => {
  return (
    <AddressInputPanel
      id="12345"
      value="Some Test Value"
      onChange={() => null}
      linkText="Link Text"
      recipientText="Recipient Text"
      inputPlaceholderText="Input Placeholder Text"
      ENS={{ address: "Address", loading: false, name: "Some Name" }}
      chainId={123456789}
      bscScanLink="https://storybook.js.org/"
    />
  );
};

export const AdvancedSwapDetailsDropdownBlock = () => {
  return (
    <AdvancedSwapDetailsDropdown
      trade={trade}
      lastTrade={trade}
      routeText="Text"
      routingFromToken="Routing From Token Text"
      tradeSummaryTexts={{
        receivedOrSold: "Received Or Sold Text",
        slippageAdjusted: "Slippage Adjusted Text",
        transactionHelper: "Transaction Helper Text",
        priceImpact: "Price Impact Text",
        priceDifference: "Price Difference Text",
        fee: "Fee Text",
        amountFee: "Amount Fee Text",
        amountLP: "Amount LP Text",
        amountTreasury: "Amount Treasury Text",
        amountTowards: "Amount Towards Text",
        realizedLPFeeText: "Realized LP Fee Text",
      }}
      errorText={<div>Some Error Text</div>}
      showRoute
      unwrappedToken={() => {}}
    />
  );
};

export const ProgressStepsBlock = () => {
  return <ProgressCircles steps={[true, true, false, true, false, true, true]} disabled={false} />;
};

export const SwapModalFooterBlock = () => {
  return (
    <SwapModalFooter
      buttonSwapProps={{ onClick: () => {}, disabled: true }}
      swapErrorMessage="{swapErrorMessage}"
      priceImpact="{<FormattedPriceImpact priceImpact={priceImpactWithoutFee} />}"
      executionPrice="0.0656"
      texts={{
        price: "Price",
        receivedOrSold: "Minimum received",
        slippageAdjustedAmounts: "-",
        outputAmount: "",
        priceImpact: "Price Impact",
        liquidityProviderFee: "Liquidity Provider Fee",
        currencySymbolBottom: "-",
        buttonSwap: "Swap Anyway",
      }}
    />
  );
};

export const SwapModalHeaderBlock = () => {
  return (
    <SwapModalHeader
      texts={{
        priceUpdated: "Price Updated",
        accept: "Accept",
      }}
      recipientSentToText={<>recipientSentToText truncatedRecipient postSentToText</>}
      outputEstimates={
        <>
          estimatedText
          <b>amount symbol</b>
          transactionRevertText
        </>
      }
      showAcceptChanges={true}
      recipient="{recipient}"
      onAcceptChanges={() => {}}
      currencyIconFrom={<img src={YAY_TOKEN_GREEN} />}
      currencyFromSymbol="BNB"
      currencyFromName="binance"
      priceFrom="0.03"
      currencyIconTo={<img src={YAY_TOKEN_GREEN} />}
      currencyToSymbol="YAY"
      currencyToName="YAY Games"
      priceTo="2323"
    />
  );
};

export const AcknowledgementBlock = () => {
  return <Acknowledgement buttonText="Button Text" understandngText="I understand" handleContinueClick={() => null} />;
};

export const BondlyWarningBlock = () => {
  return <BondlyWarning bondlyWarningText="Bondly Warning Text" />;
};

export const SafemoonWarningBlock = () => {
  return (
    <SafemoonWarning
      texts={{
        tradeSafeMoon: "Trade Safe Moon",
        clickSettingIcon: "Click Setting Icon",
        slippageToleranceSetting: "Slippage Tolerance Setting",
        feeTransaction: "Fee Transaction",
        feeFivePercentAllHolders: "Fee Five Percent All Holders",
        feeFivePercentAddLiquidity: "Fee Five Percent Add Liquidity",
      }}
    />
  );
};

export const SwapWarningModalBlock = () => {
  const SwapWarningTokensConfig = {
    safemoon: {
      address: "address",
      symbol: "symbol",
    },
    bondly: {
      address: "address",
      symbol: "symbol",
    },
  };

  return (
    <SwapWarningModal
      swapCurrency={{ address: "address" }}
      onDismiss={() => null}
      SwapWarningTokensConfig={SwapWarningTokensConfig}
      bondlyWarningText="Bondly Warning Text"
      noticeForTradingText="Notice For Trading Text"
      texts={{
        tradeSafeMoon: "Trade Safe Moon",
        clickSettingIcon: "Click Setting Icon",
        slippageToleranceSetting: "Slippage Tolerance Setting",
        feeTransaction: "Fee Transaction",
        feeFivePercentAllHolders: "Fee Five Percent All Holders",
        feeFivePercentAddLiquidity: "Fee Five Percent Add Liquidity",
      }}
      buttonText="Button Text"
      understandngText="I understand"
    />
  );
};

export const UnsupportedCurrencyFooterBlock = () => {
  return <UnsupportedCurrencyFooter texts="UnsupportedCurrencyFooter" onPresentModal={() => {}} />;
};

export const SettingsModalBlock = () => {
  return (
    <div>
      <GlobalSettings />
    </div>
  );
};

const transaction = [
  {
    hash: "123456789",
    approval: { tokenAddress: "tokenAddress", spender: "spender" },
    summary: "Some Summary Text",
    claim: { recipient: "recipient" },
    receipt: {
      to: "To",
      from: "From",
      contractAddress: "Contract Address",
      transactionIndex: 1,
      blockHash: "Block Hash",
      transactionHash: "Transaction Hash",
      blockNumber: 2,
      status: 3,
    },
    lastCheckedBlockNumber: 4,
    addedTime: 123456789001,
    confirmedTime: 987654321,
    from: "From",
  },
  {
    hash: "123456789",
    approval: { tokenAddress: "tokenAddress", spender: "spender" },
    summary: "Some Summary Text",
    claim: { recipient: "recipient" },
    receipt: {
      to: "To",
      from: "From",
      contractAddress: "Contract Address",
      transactionIndex: 1,
      blockHash: "Block Hash",
      transactionHash: "Transaction Hash",
      blockNumber: 2,
      status: 3,
    },
    lastCheckedBlockNumber: 4,
    addedTime: 123456789002,
    confirmedTime: 987654321,
    from: "From",
  },
  {
    hash: "123456789",
    approval: { tokenAddress: "tokenAddress", spender: "spender" },
    summary: "Some Summary Text",
    claim: { recipient: "recipient" },
    receipt: {
      to: "To",
      from: "From",
      contractAddress: "Contract Address",
      transactionIndex: 1,
      blockHash: "Block Hash",
      transactionHash: "Transaction Hash",
      blockNumber: 2,
      status: 3,
    },
    lastCheckedBlockNumber: 4,
    addedTime: 123456789003,
    confirmedTime: 987654321,
    from: "From",
  },
];

export const AppHeaderBlock = () => {
  return (
    <BrowserRouter>
      <AppHeader
        title="App Title"
        subtitle="App Subtitle"
        expertMode={true}
        helper="helper"
        backTo=""
        noConfig={false}
        transactions={<Transactions onPresentTransactionsModal={() => {}} />}
        globalSettings={<></>}
      />
    </BrowserRouter>
  );
};

export const TransactionsModalBlock = () => {
  const renderTransactions = (transactions: any[]) => {
    return (
      <Flex flexDirection="column">
        {transactions.map((tx) => {
          //pending={true} - спиннер
          return (
            <Transaction
              key={tx.hash + tx.addedTime}
              bscScanLink="https://storybook.js.org/"
              summary="summary"
              pending={false}
              success={true}
            />
          );
        })}
      </Flex>
    );
  };

  return (
    <TransactionsModal
      account={undefined} // для просмотра транзакций можно передать строку вместо текущего undefined, например "account"
      onDismiss={() => null}
      texts={{
        modalTitle: "Transactions",
        modalBodyText: "Transactions",
        modalButton: "Clear All",
        modalAlternativeText: "modalAlternativeText",
      }}
      pending={transaction}
      confirmed={transaction}
      clearAllTransactionsCallback={() => null}
      connectWalletButton={
        <Button variant="green" width="100%">
          Connect Wallet Button
        </Button>
      }
      renderTransactions={renderTransactions}
    />
  );
};

export const StyledModal = styled.div`
  padding: 18px 8px;
  max-width: 404px;
  max-height: 100vh;
  min-width: 303px;
  width: 100%;
  background: ${({ theme }) => theme.colors.bgGray};
  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  z-index: ${({ theme }) => theme.zIndices.modal};
  overflow-y: auto;

  ${({ theme }) => theme.mediaQueries.xs} {
    min-width: 360px;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    min-width: 404px;
    width: 100%;
    padding: 27px 24px;
  }
`;
