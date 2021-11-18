import React, { useState } from "react";
import { Box, Flex } from "../../../../components/Box";
import { Toggle } from "../../../../components/Toggle";
import { Text } from "../../../../components/Text";
import QuestionHelper from "../../../../components/QuestionHelper";
import TransactionSettings from "./TransactionSettings";
import ExpertModal from "./ExpertModal";
import GasSettings from "./GasSettings";
import { Modal } from "../../../Modal";
import { SettingsModalProps } from "./types";

const SettingsModal = ({
  onDismiss,
  texts,
  setShowExpertModeAcknowledgement,
  expertMode,
  toggleExpertMode,
  singleHopOnly,
  setSingleHopOnly,
  userSlippageTolerance,
  setUserSlippageTolerance,
  ttl,
  setTtl,
  slippageInput,
  setSlippageInput,
  deadlineInput,
  setDeadlineInput,
  gasPrice,
  setGasPrice,
}: SettingsModalProps) => {
  const [showConfirmExpertModal, setShowConfirmExpertModal] = useState(false);
  const toggleExpertModeFunc = () => {
    toggleExpertMode(!expertMode);
  };

  if (showConfirmExpertModal) {
    return (
      <ExpertModal
        toggleExpertModeFunc={toggleExpertModeFunc}
        texts={texts}
        setShowConfirmExpertModal={setShowConfirmExpertModal}
        setShowExpertModeAcknowledgement={setShowExpertModeAcknowledgement}
      />
    );
  }

  const handleExpertModeToggle = () => {
    if (expertMode) {
      toggleExpertModeFunc();
    } else if (!expertMode) {
      setShowConfirmExpertModal(true);
    }
  };

  return (
    <Modal title={texts.settings} onDismiss={onDismiss} style={{ maxWidth: "420px" }}>
      <Box>
        <Flex pb="24px" flexDirection="column">
          <Text bold textTransform="uppercase" fontSize="12px" color="secondary" mb="24px">
            {texts.global}
          </Text>

          <GasSettings gasPrice={gasPrice} setGasPrice={setGasPrice} texts={texts} />
        </Flex>
        <Flex pt="24px" flexDirection="column">
          <Text bold textTransform="uppercase" fontSize="12px" color="secondary" mb="24px">
            {texts.swapLiquid}
          </Text>
          <TransactionSettings
            userSlippageTolerance={userSlippageTolerance}
            setUserSlippageTolerance={setUserSlippageTolerance}
            ttl={ttl}
            setTtl={setTtl}
            slippageInput={slippageInput}
            setSlippageInput={setSlippageInput}
            deadlineInput={deadlineInput}
            setDeadlineInput={setDeadlineInput}
            texts={texts}
          />
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
      </Box>
    </Modal>
  );
};

export default SettingsModal;
