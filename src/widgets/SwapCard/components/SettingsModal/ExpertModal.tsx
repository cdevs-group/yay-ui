import React, { Dispatch, SetStateAction } from "react";
import { Flex } from "../../../../components/Box";
import { Text } from "../../../../components/Text";
import { Button, IconButton } from "../../../../components/Button";
import { CheckboxInput } from "../../../../components/CheckboxInput";
import { IText } from "./types";
import { CloseIcon } from "../../../../components/Svg";
import { ModalHeader, ModalTitle, StyledModal, MessageStyle, TextMessage, TextLabel } from "./styles";

const ExpertModal = ({
  setShowConfirmExpertModal,
  setShowExpertModeAcknowledgement,
  texts,
  toggleExpertModeFunc,
  isRememberChecked,
  setIsRememberChecked,
}: {
  setShowConfirmExpertModal: any;
  setShowExpertModeAcknowledgement: any;
  texts: IText;
  toggleExpertModeFunc: any;
  isRememberChecked: boolean;
  setIsRememberChecked: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <StyledModal>
      <ModalHeader>
        <ModalTitle>
          <Flex>{texts.expert}</Flex>
        </ModalTitle>
        <IconButton variant="text" onClick={() => setShowConfirmExpertModal(false)} aria-label="Close the dialog">
          <CloseIcon />
        </IconButton>
      </ModalHeader>
      <MessageStyle>
        <TextMessage>{texts.expertModeDescription}</TextMessage>
      </MessageStyle>
      <Text mb="24px">{texts.onlyUseThis}</Text>
      <Flex alignItems="center" mb="24px">
        <CheckboxInput
          id="confirmed"
          onChange={() => setIsRememberChecked(!isRememberChecked)}
          checked={isRememberChecked}
          name="confirmed"
        />
        <TextLabel as="label" ml="22px" htmlFor="confirmed">
          {texts.dontAskAgain}
        </TextLabel>
      </Flex>
      <Button
        mb="8px"
        id="confirm-expert-mode"
        variant="green"
        width="100%"
        onClick={() => {
          // eslint-disable-next-line no-alert
          if (window.prompt(texts.pleaseTypeThe) === "confirm") {
            toggleExpertModeFunc();
            setShowConfirmExpertModal(false);
            if (isRememberChecked) {
              setShowExpertModeAcknowledgement(false);
            }
          }
        }}
      >
        {texts.turnOnExpert}
      </Button>
    </StyledModal>
  );
};

export default ExpertModal;
