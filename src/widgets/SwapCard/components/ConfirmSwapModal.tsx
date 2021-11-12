import React, { useCallback, useMemo } from 'react'
import { InjectedModalProps } from '../../Modal'
import TransactionConfirmationModal, {
  ConfirmationModalContent,
  TransactionErrorContent,
  TransactionSubmittedContentProps,
  ConfirmationPendingContentTextProps
} from '../../../components/TransactionConfirmationModal'
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
  texts: ConfirmationPendingContentTextProps
}

const ConfirmSwapModal: React.FC<InjectedModalProps & ConfirmSwapModalProps & TransactionSubmittedContentProps> = ({
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
  texts,
  chainId,
  registerToken,
  bscScanLink,
  transSubmittedText,
  bscScanLinkText,
  metamaskAssetText,
  btnCloseText,
  isMetaMask,
  token
}) => {

  const showAcceptChanges = useMemo(
    () => Boolean(trade && originalTrade && tradeMeaningfullyDiffers),
    [originalTrade, trade],
  )

  const modalHeader = useCallback(() => {
    return trade ? (
      <SwapModalHeader
        trade={trade}
        allowedSlippage={allowedSlippage}
        recipient={recipient}
        showAcceptChanges={showAcceptChanges}
        onAcceptChanges={onAcceptChanges}
      />
    ) : null
  }, [allowedSlippage, onAcceptChanges, recipient, showAcceptChanges, trade])

  const modalBottom = useCallback(() => {
    return trade ? (
      <SwapModalFooter
        onConfirm={onConfirm}
        trade={trade}
        disabledConfirm={showAcceptChanges}
        swapErrorMessage={swapErrorMessage}
        allowedSlippage={allowedSlippage}
      />
    ) : null
  }, [allowedSlippage, onConfirm, showAcceptChanges, swapErrorMessage, trade])

  const confirmationContent = useCallback(
    () =>
      swapErrorMessage ? (
        <TransactionErrorContent onDismiss={onDismiss} dismissText={dismissText} message={swapErrorMessage} />
      ) : (
        <ConfirmationModalContent topContent={modalHeader} bottomContent={modalBottom} />
      ),
    [onDismiss, modalBottom, modalHeader, swapErrorMessage],
  )

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
      texts={texts}
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
  )
}

export default ConfirmSwapModal
