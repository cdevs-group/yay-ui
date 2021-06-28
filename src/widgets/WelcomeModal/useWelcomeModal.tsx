import React from "react";
import { useModal } from "../Modal";
import WelcomeModal from "./WelcomeModal";

interface ReturnType {
  onPresentWelcomeModal: () => void;
}

const useWelcomeModal = (): ReturnType => {
  const [onPresentWelcomeModal] = useModal(<WelcomeModal />);
  return { onPresentWelcomeModal };
};

export default useWelcomeModal;
