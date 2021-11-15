import React, { useEffect } from 'react'
import styled, { useTheme } from 'styled-components'
import { ModalContent as ModalBody , StyledModal as ModalContainer, ModalHeader } from '../../../Modal/Modal'
import { Message } from '../../../../components/Message'
import { Box } from '../../../../components/Box'
import { Heading } from '../../../../components/Heading'
import SafemoonWarning, { SafemoonWarningProps } from './SafemoonWarning'
import BondlyWarning from './BondlyWarning'
import Acknowledgement, { AcknowledgementTexsts } from './Acknowledgement'


const StyledModalContainer = styled(ModalContainer)`
  max-width: 440px;
`

const MessageContainer = styled(Message)`
  align-items: flex-start;
  justify-content: flex-start;
`

interface SwapWarningModalProps {
  swapCurrency: any
  onDismiss?: () => void
  SwapWarningTokensConfig: any
  bondlyWarningText: string
  noticeForTradingText: string
}

// Modal is fired by a useEffect and doesn't respond to closeOnOverlayClick prop being set to false
const usePreventModalOverlayClick = () => {
  useEffect(() => {
    const preventClickHandler = (e: any) => {
      e.stopPropagation()
      e.preventDefault()
      return false
    }

    document.querySelectorAll('[role="presentation"]').forEach((el) => {
      el.addEventListener('click', preventClickHandler, true)
    })

    return () => {
      document.querySelectorAll('[role="presentation"]').forEach((el) => {
        el.removeEventListener('click', preventClickHandler, true)
      })
    }
  }, [])
}

  const SwapWarningModal: React.FC<SwapWarningModalProps & SafemoonWarningProps & AcknowledgementTexsts> = ({ 
    swapCurrency,
    onDismiss,
    SwapWarningTokensConfig,
    texts,
    bondlyWarningText,
    buttonText,
    understandngText,
    noticeForTradingText
  }) => {
  usePreventModalOverlayClick()

  const theme = useTheme();

  const TOKEN_WARNINGS = {
    [SwapWarningTokensConfig.safemoon.address]: {
      symbol: SwapWarningTokensConfig.safemoon.symbol,
      component: <SafemoonWarning texts={texts} />,
    },
    [SwapWarningTokensConfig.bondly.address]: {
      symbol: SwapWarningTokensConfig.bondly.symbol,
      component: <BondlyWarning bondlyWarningText={bondlyWarningText} />,
    },
  }

  const SWAP_WARNING = TOKEN_WARNINGS[swapCurrency.address]

  return (
    <StyledModalContainer minWidth="280px">
      <ModalHeader background={theme.colors.gradients.cardHeader}>
        <Heading p="12px 24px">{noticeForTradingText}</Heading>
      </ModalHeader>
      <ModalBody p="24px">
        <MessageContainer variant="warning" mb="24px">
          <Box>{SWAP_WARNING.component}</Box>
        </MessageContainer>
        <Acknowledgement handleContinueClick={onDismiss} buttonText={buttonText} understandngText={understandngText} />
      </ModalBody>
    </StyledModalContainer>
  )
}

export default SwapWarningModal
