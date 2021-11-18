import React, { useState } from "react";
import styled from "styled-components";
import { Box, Flex } from "../../../../components/Box";
import { Toggle } from "../../../../components/Toggle";
import { Text } from "../../../../components/Text";
import QuestionHelper from "../../../../components/QuestionHelper";
import TransactionSettings from "./TransactionSettings";
import ExpertModal from "./ExpertModal";
import GasSettings from "./GasSettings";
import { Modal } from "../../../Modal";
import { SettingsModalProps } from "./types";

const ScrollableContainer = styled(Flex)`
  flex-direction: column;
  max-height: 400px;
  ${({ theme }) => theme.mediaQueries.sm} {
    max-height: none;
  }
`;

const SettingsModal = ({ onDismiss, texts }: SettingsModalProps) => {
  const [showConfirmExpertModal, setShowConfirmExpertModal] = useState(false);
  // const [showConfirmExpertModal, setShowConfirmExpertModal] = useModal(<ExpertModal/>)
  // const [showExpertModeAcknowledgement, setShowExpertModeAcknowledgement] = useUserExpertModeAcknowledgementShow()
  // const [expertMode, toggleExpertMode] = useExpertModeManager()
  // const [singleHopOnly, setSingleHopOnly] = useUserSingleHopOnly()
  // const [audioPlay, toggleSetAudioMode] = useAudioModeManager()
  // const { onChangeRecipient } = useSwapActionHandlers()
  const [showExpertModeAcknowledgement, setShowExpertModeAcknowledgement] = useState(false);
  const [expertMode, toggleExpertMode] = useState(false);
  const [singleHopOnly, setSingleHopOnly] = useState(false);
  const [audioPlay, toggleSetAudioMode] = useState(false);
  // const { onChangeRecipient } = useState()

  if (showConfirmExpertModal) {
    return (
      <ExpertModal
        texts={texts}
        setShowConfirmExpertModal={setShowConfirmExpertModal}
        // onDismiss={onDismiss}
        setShowExpertModeAcknowledgement={setShowExpertModeAcknowledgement}
      />
    );
  }

  const handleExpertModeToggle = () => {
    setShowConfirmExpertModal(!showConfirmExpertModal);
    // if (expertMode) {
    //   // onChangeRecipient(null)
    //   toggleExpertMode()
    // } else if (!showExpertModeAcknowledgement) {
    //   // onChangeRecipient(null)
    //   toggleExpertMode()
    // } else {
    //   setShowConfirmExpertModal(true)
    // }
  };

  return (
    <Modal title={texts.settings} onDismiss={onDismiss} style={{ maxWidth: "420px" }}>
      <Box>
        <Flex pb="24px" flexDirection="column">
          <Text bold textTransform="uppercase" fontSize="12px" color="secondary" mb="24px">
            {texts.global}
          </Text>

          <GasSettings texts={texts} />
        </Flex>
        <Flex pt="24px" flexDirection="column">
          <Text bold textTransform="uppercase" fontSize="12px" color="secondary" mb="24px">
            {texts.swapLiquid}
          </Text>
          <TransactionSettings texts={texts} />
        </Flex>
        <Flex justifyContent="space-between" alignItems="center" mb="24px">
          <Flex alignItems="center">
            <Text>Expert Mode</Text>
            <QuestionHelper text={texts.bypasses} placement="top-start" ml="4px" />
          </Flex>
          <Toggle id="toggle-expert-mode-button" scale="md" checked={expertMode} onChange={handleExpertModeToggle} />
        </Flex>
        <Flex justifyContent="space-between" alignItems="center" mb="24px">
          <Flex alignItems="center">
            <Text>{texts.disableMultihops}</Text>
            <QuestionHelper text={texts.restricsSwaps} placement="top-start" ml="4px" />
          </Flex>
          <Toggle
            id="toggle-disable-multihop-button"
            checked={singleHopOnly}
            scale="md"
            onChange={() => {
              setSingleHopOnly(!singleHopOnly);
            }}
          />
        </Flex>
        <Flex justifyContent="space-between" alignItems="center">
          <Flex alignItems="center">
            <Text>'Flippy sounds'</Text>
            <QuestionHelper text={texts.funSoudsToMake} placement="top-start" ml="4px" />
          </Flex>
          <Toggle
            checked={audioPlay}
            onChange={() => toggleSetAudioMode(!audioPlay)}
            scale="md"
          />
        </Flex>
      </Box>
    </Modal>
  );
};

export default SettingsModal;
