import React, { useState } from "react"
import styled from "styled-components"
import { Text } from "../../Text"
import { Toggle } from "../../Toggle"
import { Flex } from "../../Box"
import { Modal, InjectedModalProps } from "../../../widgets/Modal" 
import {
  useAudioModeManager,
  useExpertModeManager,
  useUserExpertModeAcknowledgementShow,
  useUserSingleHopOnly,
} from "state/user/hooks"
import QuestionHelper from "../../QuestionHelper"
import TransactionSettings from "./TransactionSettings"
import ExpertModal from "./ExpertModal"
import GasSettings from "./GasSettings"

const ScrollableContainer = styled(Flex)`
  flex-direction: column;
  max-height: 400px;
  ${({ theme }) => theme.mediaQueries.sm} {
    max-height: none;
  }
`

export interface SettingsModalProps {
  texts: {
    modalTitle: string
    global: string
    darkMode: string
    swapAndLiquidity: string
    expertModeTitle: string
    expertModeQuestionHelper: string
    disableMultihops: string
    disableMultihopsQuestionHelper: string
    flippySounds: string
    flippySoundsQuestionHelper: string
  }
  colorBorder: string
  ThemeSwitcher: React.ReactNode
  handleExpertModeToggle: () => void
}

const SettingsModal: React.FC<InjectedModalProps & SettingsModalProps> = ({ 
  onDismiss,
  texts,
  colorBorder,
  ThemeSwitcher,
  handleExpertModeToggle
 }) => {
  const [showConfirmExpertModal, setShowConfirmExpertModal] = useState(false)
  const [showExpertModeAcknowledgement, setShowExpertModeAcknowledgement] = useUserExpertModeAcknowledgementShow()
  const [expertMode, toggleExpertMode] = useExpertModeManager()
  const [singleHopOnly, setSingleHopOnly] = useUserSingleHopOnly()
  const [audioPlay, toggleSetAudioMode] = useAudioModeManager()


  if (showConfirmExpertModal) {
    return (
      <ExpertModal
        setShowConfirmExpertModal={setShowConfirmExpertModal}
        onDismiss={onDismiss}
        setShowExpertModeAcknowledgement={setShowExpertModeAcknowledgement}
      />
    )
  }

  const {
    modalTitle,
    global,
    darkMode,
    swapAndLiquidity,
    expertModeTitle,
    expertModeQuestionHelper,
    disableMultihops,
    disableMultihopsQuestionHelper,
    flippySounds,
    flippySoundsQuestionHelper
   } = texts

  return (
    <Modal
      title={modalTitle}
      headerBackground="gradients.cardHeader"
      onDismiss={onDismiss}
      style={{ maxWidth: "420px" }}
    >
      <ScrollableContainer>
        <Flex pb="24px" flexDirection="column">
          <Text bold textTransform="uppercase" fontSize="12px" color="secondary" mb="24px">
            {global}
          </Text>
          <Flex justifyContent="space-between">
            <Text mb="24px">{darkMode}</Text>
            {ThemeSwitcher}
          </Flex>
          <GasSettings />
        </Flex>
        <Flex pt="24px" flexDirection="column" borderTop={`1px ${colorBorder} solid`}>
          <Text bold textTransform="uppercase" fontSize="12px" color="secondary" mb="24px">
            {swapAndLiquidity}
          </Text>
          <TransactionSettings />
        </Flex>
        <Flex justifyContent="space-between" alignItems="center" mb="24px">
          <Flex alignItems="center">
            <Text>{expertModeTitle}</Text>
            <QuestionHelper
              text={expertModeQuestionHelper}
              placement="top-start"
              ml="4px"
            />
          </Flex>
          <Toggle id="toggle-expert-mode-button" scale="md" checked={expertMode} onChange={handleExpertModeToggle} />
        </Flex>
        <Flex justifyContent="space-between" alignItems="center" mb="24px">
          <Flex alignItems="center">
            <Text>{disableMultihops}</Text>
            <QuestionHelper text={disableMultihopsQuestionHelper} placement="top-start" ml="4px" />
          </Flex>
          <Toggle
            id="toggle-disable-multihop-button"
            checked={singleHopOnly}
            scale="md"
            onChange={() => {
              setSingleHopOnly(!singleHopOnly)
            }}
          />
        </Flex>
        <Flex justifyContent="space-between" alignItems="center">
          <Flex alignItems="center">
            <Text>{flippySounds}</Text>
            <QuestionHelper
              text={flippySoundsQuestionHelper}
              placement="top-start"
              ml="4px"
            />
          </Flex>
          <Toggle checked={audioPlay} onChange={toggleSetAudioMode} scale="md" />
        </Flex>
      </ScrollableContainer>
    </Modal>
  )
}

export default SettingsModal
