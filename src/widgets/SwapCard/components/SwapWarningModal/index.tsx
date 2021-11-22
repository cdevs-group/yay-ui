import React, { useEffect } from "react";
import styled, { useTheme } from "styled-components";
import { ModalContent as ModalBody, StyledModal as ModalContainer, ModalHeader } from "../../../Modal/Modal";
import { Box } from "../../../../components/Box";
import { Heading } from "../../../../components/Heading";
import SafemoonWarning, { SafemoonWarningProps } from "./SafemoonWarning";
import BondlyWarning from "./BondlyWarning";
import Acknowledgement, { AcknowledgementTexsts } from "./Acknowledgement";
import { transparentize } from "polished";

const StyledModalContainer = styled(ModalContainer)`
  max-width: 440px;
`;

interface SwapWarningModalProps {
  swapCurrency: any;
  onDismiss?: () => void;
  SwapWarningTokensConfig: any;
  bondlyWarningText: string;
  noticeForTradingText: string;
}

// Modal is fired by a useEffect and doesn't respond to closeOnOverlayClick prop being set to false
const usePreventModalOverlayClick = () => {
  useEffect(() => {
    const preventClickHandler = (e: any) => {
      e.stopPropagation();
      e.preventDefault();
      return false;
    };

    document.querySelectorAll('[role="presentation"]').forEach((el) => {
      el.addEventListener("click", preventClickHandler, true);
    });

    return () => {
      document.querySelectorAll('[role="presentation"]').forEach((el) => {
        el.removeEventListener("click", preventClickHandler, true);
      });
    };
  }, []);
};

const SwapWarningModal: React.FC<SwapWarningModalProps & SafemoonWarningProps & AcknowledgementTexsts> = ({
  swapCurrency,
  onDismiss,
  SwapWarningTokensConfig,
  texts,
  bondlyWarningText,
  buttonText,
  understandngText,
  noticeForTradingText,
}) => {
  usePreventModalOverlayClick();

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
  };

  const SWAP_WARNING = TOKEN_WARNINGS[swapCurrency.address];

  return (
    <StyledModalContainer>
      <ModalHeader background={theme.colors.cardBg}>
        <Heading pt="12px">{noticeForTradingText}</Heading>
      </ModalHeader>
      <ModalBody p="0 24px 24px 24px">
        <Message>
          <Box>{SWAP_WARNING.component}</Box>
        </Message>
        <Acknowledgement handleContinueClick={onDismiss} buttonText={buttonText} understandngText={understandngText} />
      </ModalBody>
    </StyledModalContainer>
  );
};

export default SwapWarningModal;

const Message = styled.div`
  padding: 20px;
  margin-bottom: 24px;
  background: ${({ theme }) => transparentize(0.9, theme.colors.redBg)};
  border-radius: 12px;
`;
