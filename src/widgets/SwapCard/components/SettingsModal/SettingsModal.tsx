import React from "react";
import { Box, Flex } from "../../../../components/Box";
import { Toggle } from "../../../../components/Toggle";
import { Text } from "../../../../components/Text";
import ExpertModal from "./ExpertModal";
import { SettingsModalProps } from "./types";
import { IconButton } from "../../../../components/Button";
import { CloseIcon } from "../../../../components/Svg";
import Tabs from "../../../../components/Tabs/Tabs";
import InputSearch from "../../../../components/InputSearch/InputSearch";
import { baseColors } from "../../../../theme/colors";
import { Overlay, ModalHeader, ModalTitle, TextStyle, TabsWrap, InputWrap, StyledModal } from "./styles";

const SettingsModal = ({
  onDismiss,
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
            <TextStyle>{texts.defaultTransaction}</TextStyle>
            <TabsWrap>
              <Tabs
                width="100%"
                colorActive={baseColors.green}
                paddingTabs="7px"
                tabValue={activeTabGas}
                tabsList={gasTabs}
                onClick={toggleTabGas}
              />
            </TabsWrap>
          </Flex>
          <Flex pt="24px" flexDirection="column">
            <Flex flexDirection="column" mb="28px">
              <TextStyle>{texts.slippageTollerance}</TextStyle>
              <Flex>
                <Tabs
                  fontSize="13px"
                  width="100%"
                  colorActive={baseColors.green}
                  paddingTabs="7px"
                  tabValue={activeTabSlippage}
                  tabsList={slippageTabs}
                  onClick={toggleTabSlippage}
                />
                <InputWrap>
                  <InputSearch
                    padding="16px 41px 16px 12px"
                    name="slippage"
                    value={slippageInput}
                    onChange={handleSlippageInput}
                    width="90px"
                    height="33px"
                    placeholder=""
                    icon={
                      <Text color="rgba(255,255,255,.7)" fontSize="13px">
                        %
                      </Text>
                    }
                  />
                </InputWrap>
              </Flex>
            </Flex>
            <Flex justifyContent="space-between" alignItems="center" mb="28px">
              <Flex width="100%" alignItems="center" justifyContent="space-between">
                <TextStyle mb="0 !important">{texts.txDeadline}</TextStyle>
                <InputWrap>
                  <InputSearch
                    padding="16px 50px 16px 12px"
                    name="deadline"
                    value={deadlineInput}
                    onChange={handleDeadlineInput}
                    width="90px"
                    height="33px"
                    placeholder="0"
                    icon={
                      <Text color="rgba(255,255,255,.7)" fontSize="13px">
                        min
                      </Text>
                    }
                  />
                </InputWrap>
              </Flex>
            </Flex>
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
