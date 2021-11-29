import React from "react";
import { Box, Flex } from "../../../../components/Box";
import { Toggle } from "../../../../components/Toggle";
import ExpertModal from "./ExpertModal";
import { SettingsModalProps } from "./types";
import { IconButton } from "../../../../components/Button";
import { CloseIcon } from "../../../../components/Svg";
import { Overlay, ModalHeader, ModalTitle, TextStyle, TabsWrap, StyledModal } from "./styles";
import GasSettings from "./GasSettings";
import TransactionSettings from "./TransactionSettings";

const SettingsModal = ({
  onDismiss = () => null,
  texts,
  setShowExpertModeAcknowledgement,
  showExpertModeAcknowledgement,
  expertMode,
  toggleExpertMode,
  singleHopOnly,
  setSingleHopOnly,
  gasTabs,
  slippageTabs,
  showConfirmExpertModal,
  setShowConfirmExpertModal,
  isRememberChecked,
  setIsRememberChecked,
  activeTabGas,
  activeTabSlippage,
  toggleTabGas,
  toggleTabSlippage,
  slippageInput,
  deadlineInput,
  handleSlippageInput,
  handleDeadlineInput,
  setTtl,
  ttl,
}: SettingsModalProps) => {
  const toggleExpertModeFunc = () => {
    toggleExpertMode(!expertMode);
  };

  if (showConfirmExpertModal) {
    return (
      <div>
        <Overlay />
        <ExpertModal
          toggleExpertModeFunc={toggleExpertModeFunc}
          texts={texts}
          setShowConfirmExpertModal={setShowConfirmExpertModal}
          setShowExpertModeAcknowledgement={setShowExpertModeAcknowledgement}
          isRememberChecked={isRememberChecked}
          setIsRememberChecked={setIsRememberChecked}
        />
      </div>
    );
  }

  const handleExpertModeToggle = () => {
    if (expertMode) {
      toggleExpertModeFunc();
    } else if (!showExpertModeAcknowledgement) {
      toggleExpertModeFunc();
    } else {
      setShowConfirmExpertModal(true);
    }
  };

  return (
    <div>
      <Overlay />
      <StyledModal>
        <ModalHeader>
          <ModalTitle>
            <Flex>{texts.settings}</Flex>
          </ModalTitle>
          <IconButton variant="text" onClick={onDismiss} aria-label="Close the dialog">
            <CloseIcon />
          </IconButton>
        </ModalHeader>
        <Box>
          <Flex flexDirection="column">
            <TabsWrap>
              <GasSettings
                activeTabGas={activeTabGas}
                title={texts.defaultTransaction}
                setGasPrice={toggleTabGas}
                gasTabs={gasTabs}
              />
            </TabsWrap>
          </Flex>
          <Flex pt="24px" flexDirection="column">
            <TransactionSettings
              texts={texts}
              setTtl={setTtl}
              ttl={ttl}
              deadlineInput={deadlineInput}
              handleDeadlineInput={handleDeadlineInput}
              activeTabSlippage={activeTabSlippage}
              toggleTabSlippage={toggleTabSlippage}
              slippageInput={slippageInput}
              handleSlippageInput={handleSlippageInput}
            />
          </Flex>

          <Flex justifyContent="space-between" alignItems="center" mb="24px">
            <TextStyle mb="0 !important">{texts.expert}</TextStyle>
            <Toggle id="toggle-expert-mode-button" scale="md" checked={expertMode} onChange={handleExpertModeToggle} />
          </Flex>
          <Flex justifyContent="space-between" alignItems="center" mb="24px">
            <TextStyle mb="0 !important">{texts.disableMultihops}</TextStyle>
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
      </StyledModal>
    </div>
  );
};

export default SettingsModal;
