import React from "react";
import { useModal } from "../Modal";
import GiftFormModal from "./GiftFormModal";

interface ReturnType {
  onPresentWelcomeModal: () => void;
}

const useGiftFormModal = (): ReturnType => {
  const [onPresentWelcomeModal] = useModal(
    <GiftFormModal
      hrefLink="#"
      title="You're one of the first"
      image
      textCheckbox="I givE my consent to the processing of personal data."
      continueText="Send"
      description="Enter your Email and BSC address and get YAY one of the first"
      textError="Error"
      linkText="How to create your own BSC wallet?"
      placeholderInput1="Email"
      placeholderInput2="BSC wallet address"
    />
  );
  return { onPresentWelcomeModal };
};

export default useGiftFormModal;
