import React, { useState } from "react";
import { Flex } from "../../../../components/Box";
import { Text } from "../../../../components/Text";
import { Modal } from "../../../Modal";
import { Button } from "../../../../components/Button";
import { CheckboxInput } from "../../../../components/CheckboxInput";
import { IText } from "./types";

// interface ExpertModalProps extends InjectedModalProps {
//   setShowConfirmExpertModal: (boolean) => void
//   setShowExpertModeAcknowledgement: (boolean) => void
// }

const ExpertModal = ({
  setShowConfirmExpertModal,
  setShowExpertModeAcknowledgement,
  texts,
  toggleExpertModeFunc,
}: {
  setShowConfirmExpertModal: any;
  setShowExpertModeAcknowledgement: any;
  texts: IText;
  toggleExpertModeFunc: any;
}) => {
  const [isRememberChecked, setIsRememberChecked] = useState(false);

  return (
    <Modal
      title={texts.expertMode}
      onBack={() => setShowConfirmExpertModal(false)}
      onDismiss={() => setShowConfirmExpertModal(false)}
      style={{ maxWidth: "360px" }}
    >
      <Text color="warning" mb="24px">
        {" "}
        //Message
        <Text>{texts.expertModeDescription}</Text>
      </Text>
      <Text mb="24px">{texts.onlyUseThis}</Text>
      <Flex alignItems="center" mb="24px">
        <CheckboxInput
          name="confirmed"
          type="checkbox"
          checked={isRememberChecked}
          onChange={() => setIsRememberChecked(!isRememberChecked)}
          scale="sm"
        />
        <Text ml="10px" color="textSubtle" style={{ userSelect: "none" }}>
          Don’t show this again
        </Text>
      </Flex>
      <Button
        mb="8px"
        id="confirm-expert-mode"
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
      <Button
        variant="secondary"
        onClick={() => {
          setShowConfirmExpertModal(false);
        }}
      >
        Cancel
      </Button>
    </Modal>
  );
};

export default ExpertModal;
