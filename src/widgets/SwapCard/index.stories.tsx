import React from "react";
import styled from "styled-components";
import { Button, Text } from "../..";

import TradePrice from "./components/TradePrice";
import SwapRoute from "./components/SwapRoute";
import CurrencySearch from "./components/CurrencySearchModal/CurrencySearch";

import AddressInputPanel from "./components/AddressInputPanel";
import { AdvancedSwapDetails } from "./components/AdvancedSwapDetails";
import AdvancedSwapDetailsDropdown from "./components/AdvancedSwapDetailsDropdown";
// import ConfirmSwapModal from "./components/ConfirmSwapModal";
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
// import Swap from "./SwapCard";
import { YAY_TOKEN_GREEN } from "../../constants/images";

export default {
  title: "Widgets/Swap",
  argTypes: {},
};

export const TradePriceBlock = () => {
  return (
    <div>
      <TradePrice showInverted setShowInverted={() => null} show label="label" formattedPrice="1231" />
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
      <SwapRoute trade={trade} unwrappedToken={() => {}} />
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
      unwrappedToken={() => {}}
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
      unwrappedToken={() => {}}
    />
  );
};

// export const ConfirmSwapModalBlock = () => {
//   const currencyFrom = {
//     shortName: "YAY",
//     fullName: "YAY Games",
//     logo: YAY_TOKEN_GREEN,
//   };
//   const currencyTo = {
//     shortName: "BNB",
//     fullName: "Binance Chain",
//     logo: YAY_TOKEN_GREEN,
//   };
//   return (
//     <ConfirmSwapModal
//       onDismiss={() => null}
//       trade={trade}
//       attemptingTxn={false}

//       recipient="recipient"
//       allowedSlippage={1}
//       onAcceptChanges={() => null}
//       onConfirm={() => null}
//       customOnDismiss={() => null}
//       pendingText="Pending Text"
//       modalTitle="Swap Modal"
//       dismissText="Dismiss Text"
//       executionPrice="0.6545 YAY / BNB"
//       minimusReceived="1 BNB"
//       priceImpact="5%"
//       contentTexts={{
//         confirmationWaiting: "Confirmation Waiting",
//         transactionConfirm: "Transaction Confirm",
//       }}
//       chainId="12346789"
//       registerToken={(address: string, symbol: string, decimals: number) => null}
//       bscScanLink="https://storybook.js.org/"
//       transSubmittedText="Transaction Submitted Text"
//       bscScanLinkText="BscScan Link Text"
//       metamaskAssetText="Metamask Asset Text"
//       btnCloseText="Close"
//       isMetaMask={true}
//       token="token"
//       currencyFrom={currencyFrom}
//       currencyTo={currencyTo}
//       priceTo="1.123"
//       priceFrom={0.578}
//       buttonSwapProps={{ spin: true, disabled: true }}
//       outputEstimates="Output is estimated. You wil receive at least 0`7890 YAY or the transactions will revert."
//       swapModalHeaderTexts={{
//         truncatedTextFrom: "0.001 BND",
//         truncatedTextTo: "1 BUSD",
//         currencySymbolFrom: "Currency Symbol From",
//         currencySymbolTo: "Currency Symbol To",
//         priceUpdated: "Price Updated",
//         accept: "Accept",
//         estimatedText: "Estimated Text",
//         recipientSentToText: "Recipient Sent To Text",
//       }}
//       swapModalFooterTexts={{
//         price: "Price",
//         executionPrice: "Execution Price",
//         receivedOrSold: "Received Or Sold",
//         transactionRevert: "Transaction Revert",
//         slippageAdjustedAmounts: "Slippage Adjusted Amounts",
//         priceImpact: "Price Impact",
//         differencePrice: "Difference Price",
//         liquidityProviderFee: "Liquidity Provider Fee",
//         amountFee: "Amount Fee Text",
//         amountLP: "Amount LP Text",
//         amountTreasury: "Amount Treasury Text",
//         amountTowards: "Amount Towards Text",
//         currencySymbolTop: "Currency Symbol Top",
//         currencySymbolBottom: "Currency Symbol Bottom",
//         buttonSwap: "Swap",
//       }}
//       errorText={<div>Some Error Text</div>}
//       buttonSwapHandler={() => console.log("swap")}
//       truncatedTextColorFrom="green"
//       truncatedTextColorTo="yellow"
//       showAcceptChanges={true}
//       buttonSwap={<Button variant="green">Swap</Button>}
//     />
//   );
// };

export const ProgressStepsBlock = () => {
  return <ProgressCircles steps={[true, true, false, true, false, true, true]} disabled={false} />;
};

export const SwapModalFooterBlock = () => {
  return (
    <SwapModalFooter
      buttonSwapProps={{ variant: "primary", onClick: () => {}, disabled: true }}
      swapErrorMessage="{swapErrorMessage}"
      priceImpact="{<FormattedPriceImpact priceImpact={priceImpactWithoutFee} />}"
      executionPrice="0.0656"
      texts={{
        price: "Price",
        receivedOrSold: "Minimum received",
        slippageAdjustedAmounts: "-",
        outputAmount: null,
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
      currencyFrom={
        <>
          <img src={YAY_TOKEN_GREEN} />
          <Text fontSize="24px" color="primary">
            'trade.inputAmount.toSignificant(6)'
          </Text>
        </>
      }
      currencyTo={
        <>
          <img src={YAY_TOKEN_GREEN} />
          <Text fontSize="24px" color="failure">
            trade.outputAmount.toSignificant(6)
          </Text>
        </>
      }
      currencyFromSymbol={<img src={YAY_TOKEN_GREEN} />}
      currencyToSymbol={<img src={YAY_TOKEN_GREEN} />}
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
    <AppHeader
      title="App Title"
      subtitle="App Subtitle"
      expertMode={false}
      helper="helper"
      backTo="back"
      noConfig={false}
      transactions={<></>}
      globalSettings={<></>}
    />
  );
};

// export const SwapBlock = () => {
//   const Container = styled.div`
//     display: flex;
//     justify-content: center;
//   `;
//   return (
//     <Container>
//       <Swap
//         currencyInputPanelFrom={{
//           value: "0.0",
//           onUserInput: (value: string) => null,
//           onMax: () => null,
//           showMaxButton: true,
//           label: "Some Label Text",
//           disableCurrencySelect: false,
//           hideInput: false,
//           id: "123456789",
//           account: "account",
//           onPresentCurrencyModal: () => null,
//           сurrencyLogo: <p>Some Currency Logo</p>,
//           doubleCurrencyLogo: <p>Some Double Currency Logo</p>,
//           texts: {
//             translatedLabel: "From",
//             balance: "Balance",
//             numericalInputTitle: "Numerical Input Title",
//             max: "Max",
//             currencySelect: "Currency",
//           },
//         }}
//         currencyInputPanelTo={{
//           value: "0.0",
//           onUserInput: (value: string) => null,
//           onMax: () => null,
//           showMaxButton: true,
//           label: "Some Label Text",
//           disableCurrencySelect: false,
//           hideInput: false,
//           id: "123456789",
//           account: "account",
//           onPresentCurrencyModal: () => null,
//           сurrencyLogo: <p>Some Currency Logo</p>,
//           doubleCurrencyLogo: <p>Some Double Currency Logo</p>,
//           texts: {
//             translatedLabel: "To",
//             balance: "Balance",
//             numericalInputTitle: "Numerical Input Title",
//             max: "Max",
//             currencySelect: "Currency",
//           },
//         }}
//         appHeader={{
//           title: "App Title",
//           subtitle: "App Subtitle",
//           expertMode: false,
//           account: "account",
//           onDismiss: () => null,
//           texts: {
//             modalTitle: "Recent Transactions",
//             modalBodyText: "Recent Transactions",
//             ModalButton: "Clear All",
//             ModalAlternativeText: "Modal Alternative Lorem Text",
//           },
//           pendingTransaction: transaction,
//           confirmedTransaction: transaction,
//           clearAllTransactionsCallback: () => null,
//           ConnectWalletButton: <Button>Button</Button>,
//           chainId: "123456789",
//           bscScanLink: "https://storybook.js.org/",
//           summary: "MMИСМИ",
//           pending: true,
//           success: true,
//         }}
//         ArrowDownIconComponent={{
//           color: "green",
//           onClick: () => null,
//         }}
//         AddressInputPanelComponent={{
//           id: "12345",
//           value: "Some Test Value",
//           onChange: () => null,
//           linkText: "Link Text",
//           recipientText: "Recipient Text",
//           inputPlaceholderText: "Input Placeholder Text",
//           ENS: { address: "Address", loading: false, name: "Some Name" },
//           chainId: 123456789,
//           bscScanLink: "https://storybook.js.org/",
//         }}
//         AdvancedSwapDetailsDropdownComponent={{
//           trade: trade,
//           lastTrade: trade,
//           routeText: "Text",
//           routingFromToken: "Routing From Token Text",
//           tradeSummaryTexts: {
//             receivedOrSold: "Received Or Sold Text",
//             slippageAdjusted: "Slippage Adjusted Text",
//             transactionHelper: "Transaction Helper Text",
//             priceImpact: "Price Impact Text",
//             priceDifference: "Price Difference Text",
//             fee: "Fee Text",
//             amountFee: "Amount Fee Text",
//             amountLP: "Amount LP Text",
//             amountTreasury: "Amount Treasury Text",
//             amountTowards: "Amount Towards Text",
//             realizedLPFeeText: "Realized LP Fee Text",
//           },
//           errorText: <div>Some Error Text</div>,
//           showRoute: true,
//         }}
//         ConnectWalletButton={
//           <Button width="100%" variant="green" marginTop="25px">
//             Connect Wallet
//           </Button>
//         }
//         swapIsUnsupported={false}
//         showFooter={false}
//         showWrap={false}
//         noRoute={true}
//         showApproveFlow={false}
//         trade={trade}
//         allowedSlippage={100}
//         UnsupportedCurrencyFooterComponent={{
//           tokens: tokens,
//           srcs: srcs,
//           isEther: true,
//           chainId: "123456789",
//           bscScanLink: "https://storybook.js.org/",
//           unsupportedTokens: {
//             address: "https://storybook.js.org/",
//           },
//         }}
//         texts={{
//           removeSendButton: "Remove Send Button",
//           priceLabel: "Price Label",
//           slippageToleranceLabel: "Slippage Tolerance",
//           unsupportedAssetButton: "Unsupported Asset Button",
//           wrapOrUnwrapButton: "Wrap Or Unwrap Button",
//           approvalButton: "Approval Button",
//           priceImpactSeverityButton: "Price Impact Severity Button",
//           liquidityText: "Liquidity Text",
//           priceImpactSeverityButtonError: "Price Impact Severity Button Error",
//           recipientButton: "Recipient Button",
//         }}
//         TradePriceComponent={{
//           price: true,
//           showInverted: true,
//           setShowInverted: () => null,
//           show: true,
//           label: "label",
//           formattedPrice: "1231",
//         }}
//         ProgressStepsComponent={{
//           steps: [true, true, true, false, true, false, false, true],
//           disabled: false,
//         }}
//         SwapCallbackErrorText="Swap Callback Error Text"
//         ConfirmSwapModalComponent={{
//           trade: trade,
//           attemptingTxn: false,
//           recipient: "recipient",
//           allowedSlippage: 1,
//           onAcceptChanges: () => null,
//           onConfirm: () => null,
//           customOnDismiss: () => null,
//           pendingText: "Pending Text",
//           modalTitle: "Modal Title",
//           dismissText: "Dismiss Text",
//           contentTexts: {
//             confirmationWaiting: "Confirmation Waiting",
//             transactionConfirm: "Transaction Confirm",
//           },
//           chainId: "12346789",
//           registerToken: (address: string, symbol: string, decimals: number) => null,
//           bscScanLink: "https://storybook.js.org/",
//           transSubmittedText: "Transaction Submitted Text",
//           bscScanLinkText: "BscScan Link Text",
//           metamaskAssetText: "Metamask Asset Text",
//           btnCloseText: "Close",
//           isMetaMask: true,
//           token: "token",
//           swapModalHeaderTexts: {
//             truncatedTextFrom: "0.001 BND",
//             truncatedTextTo: "1 BUSD",
//             currencySymbolFrom: "Currency Symbol From",
//             currencySymbolTo: "Currency Symbol To",
//             priceUpdated: "Price Updated",
//             accept: "Accept",
//             estimatedText: "Estimated Text",
//             recipientSentToText: "Recipient Sent To Text",
//           },
//           swapModalFooterTexts: {
//             price: "Price",
//             executionPrice: "Execution Price",
//             receivedOrSold: "Received Or Sold",
//             transactionRevert: "Transaction Revert",
//             slippageAdjustedAmounts: "Slippage Adjusted Amounts",
//             priceImpact: "Price Impact",
//             differencePrice: "Difference Price",
//             liquidityProviderFee: "Liquidity Provider Fee",
//             amountFee: "Amount Fee Text",
//             amountLP: "Amount LP Text",
//             amountTreasury: "Amount Treasury Text",
//             amountTowards: "Amount Towards Text",
//             currencySymbolTop: "Currency Symbol Top",
//             currencySymbolBottom: "Currency Symbol Bottom",
//             buttonSwap: "Swap Button",
//           },
//           errorText: <div>Some Error Text</div>,
//           buttonSwap: <Button>Button</Button>,
//           truncatedTextColorFrom: "green",
//           truncatedTextColorTo: "yellow",
//           showAcceptChanges: true,
//           priceImpact: "Price Impact",
//           buttonSwapProps: {
//             variant: "green",
//           },
//           executionPrice: "Execution Price",
//           minimusReceived: "Minimus Received",
//           buttonSwapHandler: () => null,
//           currencyFrom: {
//             shortName: "Short Name",
//             fullName: "Full Name",
//             logo: "https://avatars.githubusercontent.com/u/79834037?s=200&v=4",
//           },
//           currencyTo: {
//             shortName: "Short Name",
//             fullName: "Full Name",
//             logo: "https://avatars.githubusercontent.com/u/79834037?s=200&v=4",
//           },
//           priceFrom: "0.0",
//           priceTo: "0.0",
//           outputEstimates: "Output Estimates",
//         }}
//       />
//     </Container>
//   );
// };
