import React, { useCallback, useMemo } from "react";
import { InjectedModalProps } from "../../Modal";
import TransactionConfirmationModal, {
  ConfirmationModalContent,
  TransactionErrorContent,
  TransactionSubmittedContentProps,
  ConfirmationPendingContentTextProps
} from '../../../components/TransactionConfirmationModal'
import { SwapModalHeaderProps } from '../types';
import SwapModalFooter from './SwapModalFooter'
import SwapModalHeader from './SwapModalHeader'

interface ConfirmSwapModalProps {
  trade?: any
  originalTrade?: any
  attemptingTxn: boolean
  txHash?: string
  recipient: string | null
  allowedSlippage: number
  onAcceptChanges: () => void
  onConfirm: () => void
  swapErrorMessage?: string
  customOnDismiss?: () => void
  pendingText: string
  modalTitle: string
  tradeMeaningfullyDiffers: boolean
  dismissText: string
  contentTexts: ConfirmationPendingContentTextProps
  swapModalHeaderTexts: {
    truncatedTextFrom: string
    truncatedTextTo: string
    currencySymbolFrom: string
    currencySymbolTo: string
    priceUpdated: string
    accept: string
    estimatedText: React.ReactNode | string
    recipientSentToText: React.ReactNode | string
  }
  swapModalFooterTexts: {
    price: string
    executionPrice: string
    receivedOrSold: string
    transactionRevert: string
    slippageAdjustedAmounts: string
    priceImpact: string
    differencePrice: string
    liquidityProviderFee: string
    amountFee: string
    amountLP: string
    amountTreasury: string
    amountTowards: string
    currencySymbolTop: string
    currencySymbolBottom: string
  }
  errorText: React.ReactNode
  buttonSwap:React.ReactNode
}

const ConfirmSwapModal: React.FC<InjectedModalProps & ConfirmSwapModalProps & TransactionSubmittedContentProps & SwapModalHeaderProps> = ({
  trade,
  originalTrade,
  onAcceptChanges,
  allowedSlippage,
  onConfirm,
  onDismiss,
  customOnDismiss,
  recipient,
  swapErrorMessage,
  attemptingTxn,
  txHash,
  pendingText,
  modalTitle,
  tradeMeaningfullyDiffers,
  dismissText,
  contentTexts,
  chainId,
  registerToken,
  bscScanLink,
  transSubmittedText,
  bscScanLinkText,
  metamaskAssetText,
  btnCloseText,
  isMetaMask,
  token,
  currencyLogoFrom,
  currencyLogoTo,
  swapModalHeaderTexts,
  truncatedTextColorFrom,
  truncatedTextColorTo,
  errorText,
  buttonSwap,
  swapModalFooterTexts
}) => {
  const showAcceptChanges = useMemo(
    () => Boolean(trade && originalTrade && tradeMeaningfullyDiffers),
    [originalTrade, trade]
  );

  const modalHeader = useCallback(() => {
    return trade ? (
      <SwapModalHeader
        recipient={recipient}
        showAcceptChanges={showAcceptChanges}
        onAcceptChanges={onAcceptChanges}
        currencyLogoFrom={currencyLogoFrom}
        currencyLogoTo={currencyLogoTo}
        texts={swapModalHeaderTexts}
        truncatedTextColorFrom={truncatedTextColorFrom}
        truncatedTextColorTo={truncatedTextColorTo}
      />
    ) : null;
  }, [allowedSlippage, onAcceptChanges, recipient, showAcceptChanges, trade]);

  const modalBottom = useCallback(() => {
    return trade ? (
      <SwapModalFooter
        swapErrorMessage={swapErrorMessage}
        errorText={errorText}
        buttonSwap={buttonSwap}
        texts={swapModalFooterTexts}
      />
    ) : null;
  }, [allowedSlippage, onConfirm, showAcceptChanges, swapErrorMessage, trade]);

  const confirmationContent = useCallback(
    () =>
      swapErrorMessage ? (
        <TransactionErrorContent onDismiss={onDismiss} dismissText={dismissText} message={swapErrorMessage} />
      ) : (
        <ConfirmationModalContent topContent={modalHeader} bottomContent={modalBottom} />
      ),
    [onDismiss, modalBottom, modalHeader, swapErrorMessage]
  );

  return (
    <TransactionConfirmationModal
      title={modalTitle}
      onDismiss={onDismiss}
      customOnDismiss={customOnDismiss}
      attemptingTxn={attemptingTxn}
      hash={txHash}
      content={confirmationContent}
      pendingText={pendingText}
      currencyToAdd={trade?.outputAmount.currency}
      texts={contentTexts}
      chainId={chainId}
      registerToken={registerToken}
      bscScanLink={bscScanLink}
      transSubmittedText={transSubmittedText}
      bscScanLinkText={bscScanLinkText}
      metamaskAssetText={metamaskAssetText}
      btnCloseText={btnCloseText}
      isMetaMask={isMetaMask}
      token={token}
    />
  );
};

export default ConfirmSwapModal;
