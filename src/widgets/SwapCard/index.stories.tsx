import React from "react";
import { Button } from "../..";

import TradePrice from "./components/TradePrice";
import SwapRoute from "./components/SwapRoute";
import CurrencySearch from "./components/CurrencySearchModal/CurrencySearch";

import AddressInputPanel from "./components/AddressInputPanel";
import { AdvancedSwapDetails } from "./components/AdvancedSwapDetails";
import AdvancedSwapDetailsDropdown from "./components/AdvancedSwapDetailsDropdown";
import ConfirmSwapModal from "./components/ConfirmSwapModal";
import ImportTokenWarningModal from "./components/ImportTokenWarningModal";
import ProgressCircles from "./components/ProgressSteps";
import SwapModalFooter from "./components/SwapModalFooter";
import SwapModalHeader from "./components/SwapModalHeader";

import Acknowledgement from "./components/SwapWarningModal/Acknowledgement";
import BondlyWarning from "./components/SwapWarningModal/BondlyWarning";
import SafemoonWarning from "./components/SwapWarningModal/SafemoonWarning";
import SwapWarningModal from "./components/SwapWarningModal";

import UnsupportedCurrencyFooter from "../../components/UnsupportedCurrencyFooter";
import GlobalSettings from "./components/SettingsModal";
import { AppHeader } from "./components/App";

export default {
  title: "Widgets/Swap",
  argTypes: {},
};

export const TradePriceBlock = () => {
  return (
    <div>
      <TradePrice price showInverted setShowInverted={() => null} show label="label" formattedPrice="1231" />
    </div>
  );
};

export const SwapRouteBlock = () => {
  const trade = {
    route: {
      path: [{ symbol: "eth" }, { symbol: "eth" }, { symbol: "eth" }, { symbol: "eth" }],
    },
  };

  return (
    <div>
      <SwapRoute trade={trade} />
    </div>
  );
};

/* export const CurrencySearchBlock = () => {
  return (
    <div>
      <CurrencySearch showImportView={() => null} filterTokens={1} />
    </div>
  );
}; */

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

export const AdvancedSwapDetailsBlock = () => {
  return (
    <AdvancedSwapDetails
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
      showRoute={true}
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
      showRoute={true}
    />
  );
};

export const ConfirmSwapModalBlock = () => {
  return (
    <ConfirmSwapModal
      trade={trade}
      attemptingTxn={false}
      // txHash="123456789"
      recipient="recipient"
      allowedSlippage={1}
      onAcceptChanges={() => null}
      onConfirm={() => null}
      // swapErrorMessage="Some Error Text"
      customOnDismiss={() => null}
      pendingText="Pending Text"
      modalTitle="Modal Title"
      dismissText="Dismiss Text"
      contentTexts={{
        confirmationWaiting: "Confirmation Waiting",
        transactionConfirm: "Transaction Confirm",
      }}
      chainId="12346789"
      registerToken={(address: string, symbol: string, decimals: number) => null}
      bscScanLink="https://storybook.js.org/"
      transSubmittedText="Transaction Submitted Text"
      bscScanLinkText="BscScan Link Text"
      metamaskAssetText="Metamask Asset Text"
      btnCloseText="Close"
      isMetaMask={true}
      token="token"
      currencyLogoFrom={<p>Some Pic 1</p>}
      currencyLogoTo={<p>Some Pic 2</p>}
      swapModalHeaderTexts={{
        truncatedTextFrom: "0.001 BND",
        truncatedTextTo: "1 BUSD",
        currencySymbolFrom: "Currency Symbol From",
        currencySymbolTo: "Currency Symbol To",
        priceUpdated: "Price Updated",
        accept: "Accept",
        estimatedText: "Estimated Text",
        recipientSentToText: "Recipient Sent To Text",
      }}
      swapModalFooterTexts={{
        price: "Price",
        executionPrice: "Execution Price",
        receivedOrSold: "Received Or Sold",
        transactionRevert: "Transaction Revert",
        slippageAdjustedAmounts: "Slippage Adjusted Amounts",
        priceImpact: "Price Impact",
        differencePrice: "Difference Price",
        liquidityProviderFee: "Liquidity Provider Fee",
        amountFee: "Amount Fee Text",
        amountLP: "Amount LP Text",
        amountTreasury: "Amount Treasury Text",
        amountTowards: "Amount Towards Text",
        currencySymbolTop: "Currency Symbol Top",
        currencySymbolBottom: "Currency Symbol Bottom",
      }}
      errorText={<div>Some Error Text</div>}
      buttonSwap={<Button>Button</Button>}
      truncatedTextColorFrom="green"
      truncatedTextColorTo="yellow"
      showAcceptChanges={true}
    />
  );
};

export const ImportTokenWarningModalBlock = () => {
  const addToken = (token: any): any => null;

  const inactiveTokenList = {
    logoURI: "https://avatars.githubusercontent.com/u/79834037?s=200&v=4",
    name: "cdevs-group",
  };

  return (
    <ImportTokenWarningModal
      tokens={tokens}
      onDismiss={() => null}
      onCancel={() => null}
      modalTitleText="Modal Title Text"
      srcs={srcs}
      texts={{
        createToken: "Create Token",
        purchaseToken: "Purchase Token",
        via: "via",
        unknownSource: "Unknown Source",
        viewOnbscScan: "View On BscScan",
        understanding: "I understand",
        importText: "Import Text",
      }}
      addToken={addToken}
      chainId="123456789"
      inactiveTokenList={inactiveTokenList}
      truncateHash="123456789"
      bscScanLink="https://storybook.js.org/"
    />
  );
};

export const ProgressStepsBlock = () => {
  return <ProgressCircles steps={[true, true, false, true, false, true, true]} disabled={false} />;
};

export const SwapModalFooterBlock = () => {
  return (
    <SwapModalFooter
      texts={{
        price: "Price",
        executionPrice: "Execution Price",
        receivedOrSold: "Received Or Sold",
        transactionRevert: "Transaction Revert",
        slippageAdjustedAmounts: "Slippage Adjusted Amounts",
        priceImpact: "Price Impact",
        differencePrice: "Difference Price",
        liquidityProviderFee: "Liquidity Provider Fee",
        amountFee: "Amount Fee Text",
        amountLP: "Amount LP Text",
        amountTreasury: "Amount Treasury Text",
        amountTowards: "Amount Towards Text",
        currencySymbolTop: "Currency Symbol Top",
        currencySymbolBottom: "Currency Symbol Bottom",
      }}
      errorText={<div>Some Error Text</div>}
      buttonSwap={<Button>Button</Button>}
      swapErrorMessage="Some Error Message"
    />
  );
};

export const SwapModalHeaderBlock = () => {
  return (
    <SwapModalHeader
      texts={{
        truncatedTextFrom: "Truncated Text From",
        truncatedTextTo: "Truncated Text To",
        currencySymbolFrom: "Currency Symbol From",
        currencySymbolTo: "Currency Symbol To",
        priceUpdated: "Price Updated",
        accept: "Accept",
        estimatedText: "Estimated Text",
        recipientSentToText: "Recipient Sent To Text",
      }}
      currencyLogoFrom={<p>Some Pic 1</p>}
      currencyLogoTo={<p>Some Pic 2</p>}
      truncatedTextColorFrom="green"
      truncatedTextColorTo="yellow"
      showAcceptChanges={true}
      recipient="recipient"
      onAcceptChanges={() => null}
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
  return (
    <UnsupportedCurrencyFooter
      tokens={tokens}
      srcs={srcs}
      isEther={true}
      chainId="123456789"
      bscScanLink="https://storybook.js.org/"
      unsupportedTokens={{
        address: "https://storybook.js.org/",
      }}
    />
  );
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
    from: "From"
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
    from: "From"
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
    from: "From"
  },
]

export const AppHeaderBlock = () => {
  return (
    <AppHeader 
      title="App Title"
      subtitle="App Subtitle"
      expertMode={false}
      account="account"
      onDismiss={() => null}
      texts={{
        modalTitle: "Modal Title",
        modalBodyText: "Recent Transactions",
        ModalButton: "Clear All",
        ModalAlternativeText: "Modal Alternative Lorem Text"
      }}
      pendingTransaction={transaction}
      confirmedTransaction={transaction}
      clearAllTransactionsCallback={() => null}
      ConnectWalletButton={<Button>Button</Button>}
      chainId="123456789"
      bscScanLink="https://storybook.js.org/"
      summary="Some Summary Text"
      pending={false}
      success={true}
    />
  );
}
