import React from "react";
import { useModal } from "../Modal";
import GiftFormModal from "./GiftFormModal";

interface ReturnType {
  onPresentWelcomeModal: () => void;
}

const useGiftFormModal = (): ReturnType => {
  const [onPresentWelcomeModal] = useModal(
    <GiftFormModal
      title="You're one of the first"
      textCheckbox="I givE my consent to the processing of personal data."
      continueText="Send"
      description="Enter your Email and BSC address and get YAY one of the first"
      labelInput1="Email"
      labelInput2="BSC wallet address"
      linkText="How do I create a BSC wallet?"
      placeholderInput1="Email"
      placeholderInput2="BSC wallet address"
    />
  );
  return { onPresentWelcomeModal };
};

export default useGiftFormModal;