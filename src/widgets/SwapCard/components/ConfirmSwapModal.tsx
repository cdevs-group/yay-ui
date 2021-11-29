export {};
// import React, { useCallback, useMemo } from "react";
// import { InjectedModalProps } from "../../Modal";
// import TransactionConfirmationModal, {
//   ConfirmationModalContent,
//   TransactionErrorContent,
//   TransactionSubmittedContentProps,
//   ConfirmationPendingContentTextProps,
// } from "./TransactionConfirmationModal";
// import SwapModalFooter from "./SwapModalFooter";
// import SwapModalHeader from "./SwapModalHeader";
// import { ButtonProps } from "../../../components/Button/types";

// export interface ConfirmSwapModalProps {
//   trade?: any;
//   attemptingTxn: boolean;
//   txHash?: string;
//   recipient: string | null;
//   allowedSlippage: number;
//   onAcceptChanges: () => void;
//   onConfirm: () => void;
//   swapErrorMessage?: string;
//   customOnDismiss?: () => void;
//   pendingText: string;
//   modalTitle: string;
//   dismissText: string;
//   buttonSwapHandler: () => void | Promise<void>;
//   contentTexts: ConfirmationPendingContentTextProps;
//   buttonSwapProps: ButtonProps;
//   swapModalHeaderTexts: {
//     truncatedTextFrom: string;
//     truncatedTextTo: string;
//     currencySymbolFrom: string;
//     currencySymbolTo: string;
//     priceUpdated: string;
//     accept: string;
//     estimatedText: React.ReactNode | string;
//     recipientSentToText: React.ReactNode | string;
//   };
//   swapModalFooterTexts: {
//     price: string;
//     executionPrice: string;
//     receivedOrSold: string;
//     transactionRevert: string;
//     slippageAdjustedAmounts: string;
//     priceImpact: string;
//     differencePrice: string;
//     liquidityProviderFee: string;
//     amountFee: string;
//     amountLP: string;
//     amountTreasury: string;
//     amountTowards: string;
//     currencySymbolTop: string;
//     currencySymbolBottom: string;
//     buttonSwap: string;
//   };
//   errorText: React.ReactNode;
//   buttonSwap: React.ReactNode;
//   outputEstimates: React.ReactNode | string;
//   priceFrom: string | number;
//   currencyFrom: {
//     shortName: string;
//     fullName: string;
//     logo: string;
//   };
//   currencyTo: {
//     shortName: string;
//     fullName: string;
//     logo: string;
//   };
//   priceTo: string | number;
//   executionPrice: string;
//   minimusReceived: string;
//   truncatedTextColorFrom: string;
//   truncatedTextColorTo: string;
//   showAcceptChanges: boolean;
//   priceImpact: string;
// }

// const ConfirmSwapModal: React.FC<InjectedModalProps & ConfirmSwapModalProps & TransactionSubmittedContentProps> = ({
//   minimusReceived,
//   executionPrice,
//   priceImpact,
//   trade,
//   onAcceptChanges,
//   allowedSlippage,
//   onConfirm,
//   onDismiss,
//   customOnDismiss,
//   recipient,
//   swapErrorMessage,
//   attemptingTxn,
//   txHash,
//   pendingText,
//   modalTitle,
//   dismissText,
//   contentTexts,
//   chainId,
//   registerToken,
//   bscScanLink,
//   transSubmittedText,
//   bscScanLinkText,
//   metamaskAssetText,
//   btnCloseText,
//   isMetaMask,
//   token,
//   priceFrom,
//   currencyFrom,
//   priceTo,
//   currencyTo,
//   swapModalHeaderTexts,
//   errorText,
//   buttonSwap,
//   swapModalFooterTexts,
//   buttonSwapHandler,
//   outputEstimates,
//   showAcceptChanges,
//   buttonSwapProps,
// }) => {
//   const modalHeader = useCallback(() => {
//     return trade ? (
//       <SwapModalHeader
//         recipient={recipient}
//         showAcceptChanges={showAcceptChanges}
//         onAcceptChanges={onAcceptChanges}
//         currencyFrom={currencyFrom}
//         priceFrom={priceFrom}
//         currencyTo={currencyTo}
//         priceTo={priceTo}
//         texts={swapModalHeaderTexts}
//         outputEstimates={outputEstimates}
//       />
//     ) : null;
//   }, [allowedSlippage, onAcceptChanges, recipient, showAcceptChanges, trade]);

//   const modalBottom = useCallback(() => {
//     return trade ? (
//       <SwapModalFooter
//         buttonSwapHandler={buttonSwapHandler}
//         priceImpact={priceImpact}
//         minimusReceived={minimusReceived}
//         executionPrice={executionPrice}
//         swapErrorMessage={swapErrorMessage}
//         errorText={errorText}
//         buttonSwap={buttonSwap}
//         texts={swapModalFooterTexts}
//         buttonSwapProps={buttonSwapProps}
//       />
//     ) : null;
//   }, [allowedSlippage, onConfirm, showAcceptChanges, swapErrorMessage, trade]);

//   const confirmationContent = useCallback(
//     () =>
//       swapErrorMessage ? (
//         <TransactionErrorContent onDismiss={onDismiss} dismissText={dismissText} />
//       ) : (
//         <ConfirmationModalContent topContent={modalHeader} bottomContent={modalBottom} />
//       ),
//     [onDismiss, modalBottom, modalHeader, swapErrorMessage]
//   );

//   return (
//     <TransactionConfirmationModal
//       title={modalTitle}
//       onDismiss={onDismiss}
//       customOnDismiss={customOnDismiss}
//       attemptingTxn={attemptingTxn}
//       txHash={txHash}
//       content={confirmationContent}
//       pendingText={pendingText}
//       currencyToAdd={trade?.outputAmount.currency}
//       texts={contentTexts}
//       chainId={chainId}
//       registerToken={registerToken}
//       bscScanLink={bscScanLink}
//       transSubmittedText={transSubmittedText}
//       bscScanLinkText={bscScanLinkText}
//       metamaskAssetText={metamaskAssetText}
//       btnCloseText={btnCloseText}
//       isMetaMask={isMetaMask}
//       token={token}
//     />
//   );
// };

// export default ConfirmSwapModal;
