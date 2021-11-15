import React from 'react'
import { Modal, InjectedModalProps } from '../../Modal'
import ImportToken, { InjectedImportTokenProps } from '../../../components/SearchModal/ImportToken'

interface Props extends InjectedModalProps {
  tokens: any[]
  onCancel: () => void
  modalTitleText: string
}

const ImportTokenWarningModal: React.FC<Props & InjectedImportTokenProps> = ({ 
  tokens,
  onDismiss,
  onCancel,
  modalTitleText,
  srcs,
  texts,
  addToken,
  chainId,
  inactiveTokenList,
  truncateHash,
  bscScanLink
 }) => {
  return (
    <Modal
      title={modalTitleText}
      onDismiss={() => {
        if (onDismiss) {
          onDismiss()
        }
        onCancel()
      }}
      style={{ maxWidth: '420px' }}
    >
      <ImportToken
        tokens={tokens}
        handleCurrencySelect={onDismiss}
        srcs={srcs}
        texts={texts}
        addToken={addToken}
        chainId={chainId}
        inactiveTokenList={inactiveTokenList}
        truncateHash={truncateHash}
        bscScanLink={bscScanLink}
      />
    </Modal>
  )
}

export default ImportTokenWarningModal
