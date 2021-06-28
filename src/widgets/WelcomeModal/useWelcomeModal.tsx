import React from "react";
import { useModal } from "../Modal";
import WelcomeModal from "./WelcomeModal";

interface ReturnType {
  onPresentWelcomeModal: () => void;
}

const useWelcomeModal = (): ReturnType => {
  const [onPresentWelcomeModal] = useModal(
    <WelcomeModal
      title="Welcome"
      textCheckbox1="I understand that this product is still in beta. I am participating at my own risk."
      textCheckbox2="I understand that I am using this product at my own risk. Any losses incurred due to my actions are my own
  responsibillity."
      continueText="Continue"
      description="This product is in beta. Once you enter a position, you cannot cancel or adjust it."
    />
  );
  return { onPresentWelcomeModal };
};

export default useWelcomeModal;
